for (const [key, val] of Object.entries(statistics)) {
  if (key.charAt(0) === 'r' || val % 2 > 0) {
    console.log(val);
  }
}
