function foo(...s: string[]): void {
  for (let i = 0, l = s.length; i < l; ++i) {
    trace(s[i]);
  }
}

foo("a", "b", "c");