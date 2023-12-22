function isSubsequence(s: string, t: string): boolean {
  let tIndex = 0;

  for (const char of s) {
    while (tIndex < t.length && t.charAt(tIndex) !== char) {
      tIndex++;
    }

    if (tIndex === t.length) {
      return false;
    }
    tIndex++;
  }

  return true;
}

export default isSubsequence;
