
const trimString = (string) => {
  if (!string) return undefined;
  return string.substring(0, 141) + "..."
}

export {trimString}