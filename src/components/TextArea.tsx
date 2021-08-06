import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, VFC } from "react";

import type { tokenize } from "../lib/tokenizer/pkg/tokenizer";

type Props = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

export const TextArea: VFC<Props> = ({ token, setToken }) => {
  const tokenizeRef = useRef<typeof tokenize>();

  useEffect(() => {
    import("../lib/tokenizer/pkg/tokenizer").then(({ tokenize }) => {
      tokenizeRef.current = tokenize;
    });
  }, []);

  const handleOnChange = (x: ChangeEvent<HTMLTextAreaElement>) => {
    const tokenize = tokenizeRef.current;

    if (tokenize === undefined) {
      return;
    }

    const separated = tokenize(x.target.value);
    setToken(separated);
  };

  return (
    <div>
      <textarea rows={10} cols={100} onChange={(e) => handleOnChange(e)} />
    </div>
  );
};
