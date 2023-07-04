// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;

mod config_handler;
mod runner;
mod storage;
mod state;



fn main() {
    tauri::Builder::default()
        .manage(state::State {
            runner: Mutex::new(runner::Runner::new()),
        })
        .invoke_handler(tauri::generate_handler![
            runner::build,
            runner::run,
            runner::pause,
            runner::cancel
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
