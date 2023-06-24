use platform_dirs::AppDirs;
use serde::{Deserialize, Serialize};
use std::{
    fs::{self, File},
    io::Write,
    path::PathBuf,
};

#[derive(Serialize, Deserialize, Clone)]
 pub struct Config {
    pub build_folder: PathBuf,
    pub build_cmd: String,
    pub exe_path: PathBuf,
}

impl Config {
    pub fn new(build_folder: PathBuf, build_cmd: String, exe_path: PathBuf) -> Self {
        return Self {
            build_folder,
            build_cmd,
            exe_path,
        };
    }
}

#[derive(Serialize, Deserialize)]
struct Storage {
    curr_config: usize,
    pub configs: Vec<Config>,
}

impl Default for Storage {
    fn default() -> Self {
        return Storage {
            curr_config: 0,
            configs: vec![],
        };
    }
}

pub fn get_config() -> Option<Config> {
    let storage = load();

    if storage.curr_config >= storage.configs.len() {
        return None;
    }

    return Some(storage.configs[storage.curr_config].clone());
}

pub fn get_config_number() -> usize {
    let storage = load();

    return storage.curr_config;
}

pub fn get_all_configs() -> Vec<Config> {
    let storage = load();

    return storage.configs;
}

pub fn set_config(config_index: usize) {
    let mut storage = load();

    storage.curr_config = config_index;

    store(&storage);
}

pub fn add_new_config(config: Config) {
    let mut storage = load();

    storage.configs.push(config);

    store(&storage);
}

pub fn remove_config(config_index: usize) {
    let mut storage = load();

    storage.configs.remove(config_index);

    if storage.curr_config >= config_index {
        storage.curr_config -= 1;
    }

    store(&storage);
}

fn load() -> Storage {
    return confy::load("rms", None).expect("Unable to read config file");
}

fn store(storage: &Storage) {
    confy::store("rms", None, storage).expect("Unable to store config file");
}