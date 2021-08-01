use lindera::tokenizer::Tokenizer;
use lindera_core::core::viterbi::Mode;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn tokenize(x: String) -> String {
    let mut tokenizer = Tokenizer::new(Mode::Normal, "");
    let result = tokenizer
        .tokenize(&x)
        .iter()
        .map(|x| x.text)
        .collect::<Vec<&str>>()
        .join(" ");
    return result.into();
}
