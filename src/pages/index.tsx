import React, { useState } from "react";

const Token: React.FC = () => {
  const [token, setToken] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleOnChange = async (x: React.ChangeEvent<HTMLInputElement>) => {
    const { tokenize } = await import("../lib/tokenizer/pkg/tokenizer");
    const data = await tokenize(x.target.value);
    setToken(data);
    setText(x.target.value);
  };

  return (
    <div>
      <input size={100} type="text" onChange={(e) => handleOnChange(e)} />
      <h1>origin: {text}</h1>
      <h1>token: {token}</h1>
    </div>
  );
};

export default Token;
