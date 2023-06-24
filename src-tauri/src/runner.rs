use crate::storage;
use std::process::Command;
use std::str;

#[tauri::command]
fn build() -> Result<String, String> {
    let config = match storage::get_config() {
        Some(config) => config,
        None => return Err("Unable to get config".to_string()),
    };

    let result = match Command::new(config.build_cmd)
        .current_dir(config.build_folder)
        .output()
    {
        Ok(output) => output,
        Err(err) => {
            return Err(format!(
                "Unable to run build command. Error {}",
                err.to_string()
            ))
        }
    };

    let output: String = match str::from_utf8(&result.stdout) {
        Ok(output) => output.to_string(),
        Err(err) => return Err(format!("Unable to parse output: Error {}", err.to_string())),
    };

    return Ok(output);
}
