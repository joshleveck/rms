use crate::{storage, state};
use std::process::{Command, Child};
use std::str;
use std::io::{Read, Write};

pub struct Runner {
    pub process: Option<Child>,
}

impl Runner {
    pub fn new() -> Self {
        return Self { process: None };
    }

    pub fn launch(&mut self, exe: &str) {
        self.process = Some(
            Command::new(exe)
                .spawn()
                .ok()
                .expect("Unable to launch cmd"),
        );
    }

    pub fn kill(&mut self) {
        match self.process {
            Some(ref mut process) => {
                process.kill().ok();
            }
            None => {}
        }
    }

    pub fn get_stdout(&mut self) -> String {
        match self.process {
            Some(ref mut process) => {
                let mut output = "".to_string();
                process.stdout.as_mut().unwrap().read_to_string(&mut output).ok();
                return output;
            }
            None => return "".to_string(),
        }
    }

    pub fn get_stderr(&mut self) -> String {
        match self.process {
            Some(ref mut process) => {
                let mut output = "".to_string();
                process.stderr.as_mut().unwrap().read_to_string(&mut output).ok();
                return output;
            }
            None => return "".to_string(),
        }
    }

    pub fn write_stdin(&mut self, input: &str) {
        match self.process {
            Some(ref mut process) => {
                process.stdin.as_mut().unwrap().write_all(input.as_bytes()).ok();
            }
            None => {}
        }
    }

    fn is_alive(&mut self) -> bool {
        match self.process {
            Some(ref mut process) => match process.try_wait() {
                Ok(Some(_)) => false,
                Ok(None) => true,
                Err(_) => false,
            },
            None => false,
        }
    }
}

#[tauri::command]
pub fn build() -> Result<String, String> {
    println!("build");
    return Ok("build".to_string());
}

#[tauri::command]
pub fn run(state: tauri::State<'_, state::State>) -> Result<bool, String> {
    let config = match storage::get_config() {
        Some(config) => config,
        None => return Err("Unable to get config".to_string()),
    };

    let exe = config.exe_path.to_str().unwrap();

    state.runner.lock().unwrap().launch(exe);

    return Ok(true);
}

#[tauri::command]
pub fn pause() {
    println!("pause");
}

#[tauri::command]
pub fn cancel(state: tauri::State<'_, state::State>) -> Result<bool, String> {
    state.runner.lock().unwrap().kill();

    return Ok(true);
}
