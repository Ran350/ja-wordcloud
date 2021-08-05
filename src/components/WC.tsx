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
    const maxCount = Math.max(...words.map((v) => v[1]));
    const minCount = Math.min(...words.map((v) => v[1]));

    const maxSize = 100;
    const minSize = 20;

    const getColor = (word: string, weight: string | number): string => {
      if (weight > (2 * maxCount) / 3) {
        return "#1f4e5f";
      }

      if (weight > maxCount / 3) {
        return "#1f4e5f";
      }

      return "#79a8a9";
    };

    import("wordcloud").then(({ default: WordCloud }) => {
      WordCloud(canvasRef.current!, {
        list: words,
        minSize: 0,
        // @ts-ignore shrinkToFitが型定義にない
        rotationSteps: 2,
        rotateRatio: 0.5,
        // @ts-ignore shrinkToFitが型定義にない
        shrinkToFit: true,
        gridSize: Math.round((16 * width) / 1024),
        backgroundColor: "#f4f7f7",
        color: getColor,
        weightFactor: (size) => ((maxSize - minSize) / (maxCount - minCount)) * size + minSize,
      });

      return () => {
        // @ts-ignore stop()が型定義にない
        WordCloud.stop();
      };
    });
  }, [words]);

  return (
    <div>
      <canvas width={width} height={height} ref={canvasRef} />
    </div>
  );
};
