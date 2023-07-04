use crate::runner;
use std::sync::Mutex;

pub struct State {
    pub runner: Mutex<runner::Runner>
}