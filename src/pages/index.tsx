import { FC, useState, useEffect, useRef } from "react";
import Head from "next/head";

import { WC } from "../components/WC";
import type { tokenize } from "../lib/tokenizer/pkg/tokenizer";

const Token: FC = () => {
  const [token, setToken] = useState<string>("");

  const tokenizeRef = useRef<typeof tokenize>();

  useEffect(() => {
    import("../lib/tokenizer/pkg/tokenizer").then(({ tokenize }) => {
      tokenizeRef.current = tokenize;
    });
  }, []);

  const handleOnChange = (x: React.ChangeEvent<HTMLTextAreaElement>) => {
    const tokenize = tokenizeRef.current;

    if (tokenize === undefined) {
      return;
    }

    const separated = tokenize(x.target.value);
    setToken(separated);
    console.log(separated);
  };

  return (
    <div>
      <Head>
        <title>Wordcloud</title>
      </Head>

      <WC token={token} />

      <textarea rows={10} cols={100} onChange={(e) => handleOnChange(e)} />
    </div>
  );
};

export default Token;
