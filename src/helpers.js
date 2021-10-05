export function fontFamilyHelper(fontFamily, fontWeight) {
  let wordlist = fontFamily.split(" ").join("+");
  if (fontWeight) {
    wordlist += `:wght@${fontWeight}`;
  }
  return wordlist;
}
