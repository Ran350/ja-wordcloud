import Head from "next/head";
import { useState, VFC } from "react";

import { TextArea } from "../components/TextArea";
import { WC } from "../components/WC";

const IndexPage: VFC = () => {
  const [token, setToken] = useState<string>("");

  return (
    <div>
      <Head>
        <title>Wordcloud</title>
      </Head>

      <WC token={token} />

      <TextArea token={token} setToken={setToken} />
    </div>
  );
};

export default IndexPage;
