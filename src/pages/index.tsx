import { FC, useState } from "react";
import { WC } from "../components/WC";

const Token: FC = () => {
  const [token, setToken] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleOnChange = (x: React.ChangeEvent<HTMLInputElement>) => {
    import("../lib/tokenizer/pkg/tokenizer").then(({ tokenize }) => {
      // @ts-ignore
      const separated = tokenize(x.target.value);
      // @ts-ignore
      setToken(separated);
      setText(x.target.value);
    });
  };

  return (
    <div>
      <input size={100} type="text" onChange={(e) => handleOnChange(e)} />
      <h1>origin: {text}</h1>
      <h1>token: {token}</h1>
      <WC token={token} />
    </div>
  );
};

export default Token;
