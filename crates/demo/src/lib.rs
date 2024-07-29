use wasm_bindgen::prelude::*;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

// lifted from the `console_log` example
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn say_hi() {
    log("Hello, World!");
}

#[wasm_bindgen]
pub fn greet() -> String {
    "hello, WASM with vite nice".to_string()
}

#[wasm_bindgen]
pub struct Game {
    pub name: u32,
    age: u32
}

#[wasm_bindgen]
impl Game {
    #[wasm_bindgen(constructor)]
    pub fn new(name: u32) -> Game {
        Game { name, age: 1 }
    }
    pub fn start(&self) -> u32 {
        self.name + self.age
    }

    // pub fn start2(self) -> u32 {
    //     self.name + self.age
    // }

    pub fn get_name(&self) -> u32 {
        self.name
    }

}

// #[wasm_bindgen(start)]
// pub fn main() {
//     run()
// }
// fn run() {
//     let g = Game { name: 10, age: 1 };
//     log("run instart");
//     g.start();
// }

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
