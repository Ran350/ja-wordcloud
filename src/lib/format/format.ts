export const formatToken = (token: string): [string, number][] =>
  Object.entries(
    token
      .split(" ")
      .reduce<Record<string, number>>(
        (count, word) => ({ ...count, [word]: (count[word] ?? 0) + 1 }),
        {}
      )
  );
