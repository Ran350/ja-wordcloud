import { VFC, useEffect, useRef } from "react";

import { formatToken } from "../lib/format/format";

type Props = {
  token: string;
};

export const WC: VFC<Props> = ({ token }) => {
  const width = 900;
  const height = 600;

  const words = formatToken(token);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const max = Math.max(...words.map((v) => v[1]));
    const min = Math.min(...words.map((v) => v[1]));

    const maxSize = 100;
    const minSize = 20;

    import("wordcloud").then(({ default: WordCloud }) =>
      WordCloud(canvasRef.current!, {
        list: words,
        backgroundColor: "#eeeeee",
        gridSize: Math.round((16 * width) / 1024),
        minSize: 0,
        // @ts-ignore shrinkToFitが型定義にない
        rotationSteps: 2,
        rotateRatio: 0.5,
        // @ts-ignore shrinkToFitが型定義にない
        shrinkToFit: true,
        color: (word, weight) => (weight === 12 ? "#f02222" : "#c09292"),
        weightFactor: (size) => ((maxSize - minSize) / (max - min)) * size + minSize,
      })
    );

    console.log(words);
  }, [words]);

  return (
    <div>
      <canvas width="900" height="600" ref={canvasRef} />
    </div>
  );
};
