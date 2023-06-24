use crate::storage;

#[tauri::command]
fn set_config(config_index: usize) {
    storage::set_config(config_index);
}

#[tauri::command]
fn add_new_config(build_folder: String, build_cmd: String, exe_path: String) {
    let config = storage::Config::new(
        std::path::PathBuf::from(build_folder),
        build_cmd,
        std::path::PathBuf::from(exe_path),
    );

    storage::add_new_config(config);
}

#[tauri::command]
fn get_config_number() -> usize {
    return storage::get_config_number();
}

#[tauri::command]
fn get_all_configs() -> Vec<storage::Config> {
    return storage::get_all_configs();
}