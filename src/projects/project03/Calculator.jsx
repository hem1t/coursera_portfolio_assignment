import { useState } from "react";
import "./Calculator.css";

const calc_valid_key_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const calc_valid_symbols = ["x", "*", "/", "-", "+"];

const calc_extra_valids = ["(", ")"];

function validate_input(k, input, setInput) {
  {
    let valid_num = calc_valid_key_list.includes(k);
    let valid_symbol = calc_valid_symbols.includes(k);
    let prev_symbol = calc_valid_symbols.includes(
      input.substring(input.length - 1, input.length),
    );

    if (valid_num) {
      setInput(input + k);
    } else if (prev_symbol && valid_symbol) {
      // symbol change happens here.
      setInput(input.substring(0, input.length - 1) + k);
    } else if (valid_symbol && input !== "") {
      setInput(input + k);
    } else if (k === "Backspace") {
      // is backspace
      setInput(input.substring(0, input.length - 1));
    } else if (calc_extra_valids.includes(k)) {
      setInput(input + k);
    }
  }
}

function calculate(string) {
  try {
    return eval(string);
  } catch {
    return "error";
  }
}

const Calculator = () => {
  let [result, setResult] = useState("");
  let [input, setInput] = useState("");

  return (
    <div className="full-body">
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-result-display">{result}</div>
          <input
            onKeyDown={(e) => {
              e.key === "Enter"
                ? setResult(calculate(input))
                : e.key === "Delete"
                  ? setResult("") || setInput("")
                  : validate_input(e.key, input, setInput);
            }}
            value={input}
          />
        </div>
        <div className="calc-button-pad">
          <div
            className="calc-button calc-clear-button"
            onClick={() => {
              setInput("");
              setResult("");
            }}
          >
            CA
          </div>
          <div
            className="calc-button calc-clear-button"
            onClick={() =>
              input === ""
                ? setResult("")
                : validate_input("Backspace", input, setInput)
            }
          >
            C
          </div>
          <div
            className="calc-button calc-clear-button"
            onClick={() => validate_input("(", input, setInput)}
          >
            (
          </div>
          <div
            className="calc-button calc-clear-button"
            onClick={() => validate_input(")", input, setInput)}
          >
            )
          </div>
          <div
            className="calc-button calc-symbol-button calc-plus-button"
            onClick={() => validate_input("+", input, setInput)}
          >
            +
          </div>
          <div
            className="calc-button calc-symbol-button calc-minus-button"
            onClick={() => validate_input("-", input, setInput)}
          >
            –
          </div>
          <div
            className="calc-button calc-symbol-button"
            onClick={() => validate_input("x", input, setInput)}
          >
            x
          </div>
          <div
            className="calc-button calc-symbol-button"
            onClick={() => validate_input("/", input, setInput)}
          >
            ÷
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("1", input, setInput)}
          >
            1
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("2", input, setInput)}
          >
            2
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("3", input, setInput)}
          >
            3
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("4", input, setInput)}
          >
            4
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("5", input, setInput)}
          >
            5
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("6", input, setInput)}
          >
            6
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("7", input, setInput)}
          >
            7
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("8", input, setInput)}
          >
            8
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("9", input, setInput)}
          >
            9
          </div>
          <div
            className="calc-button calc-number-button"
            onClick={() => validate_input("0", input, setInput)}
          >
            0
          </div>
          <div
            className="calc-button calc-equal-button"
            onClick={() => {
              setResult(calculate(input));
            }}
          >
            R
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
