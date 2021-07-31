import { NextPage } from "next";
import { useState } from "react";

import { sums } from "../lib/tokenizer/pkg/tokenizer_bg.wasm";


const IndexPage: NextPage = () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <input
        onChange={(e) => {
          const v = Number(e.target.value);
          !isNaN(v) && setValue(sums(v));
        }}
      />
      <div>{value}</div>
    </div>
  );
};

export default IndexPage;
