import { VFC, useEffect, useRef } from "react";

import { formatToken } from "../lib/format/format";

type Props = {
  token: string;
};

export const WC: VFC<Props> = ({ token }) => {
  const canvasWidth = 900;
  const canvasHeight = 600;

  const words = formatToken(token);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const maxCount = Math.max(...words.map((v) => v[1]));
    const minCount = Math.min(...words.map((v) => v[1]));

    const maxSize = 100;
    const minSize = 20;

    const getColor = (word: string, weight: string | number): string => {
      // カラーパレット  #f4f7f7 > #8cd790 > #77af9c > #285943
      if (weight >= maxCount / 5) {
        return "#285943";
      }

      if (weight > minCount) {
        return "#77af9c";
      }

      return "#8cd790";
    };

    import("wordcloud").then(({ default: WordCloud }) => {
      WordCloud(canvasRef.current!, {
        list: words,
        minSize: 0,
        // @ts-ignore rotationSteps が型定義にない
        rotationSteps: 2,
        rotateRatio: 0.5,
        shrinkToFit: true,
        gridSize: Math.round((16 * canvasWidth) / 1024),
        backgroundColor: "#f4f7f7",
        color: getColor,
        weightFactor: (size) => ((maxSize - minSize) / (maxCount - minCount)) * size + minSize,
      });

      return () => {
        // @ts-ignore stop() が型定義にない
        WordCloud.stop();
      };
    });
  }, [words]);

  return (
    <div>
      <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} />
    </div>
  );
};
