export const ellipse = (string, length = 10) =>
  !string
    ? ""
    : string.length < length * 2 + 3
      ? string
      : `${string.slice(0, length)}...${string.slice(-length)}`;
export const equals_ignore_case = (a, b) =>
  (!a && !b) || a?.toLowerCase() === b?.toLowerCase();
