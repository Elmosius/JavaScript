function shortenToDate(longDate) {
  const i = longDate.indexOf(',');
  return longDate.slice(0, i);
}