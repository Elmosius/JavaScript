function typeOfSum(a, b) {
  if (typeof a == 'string' || typeof b == 'string') {
    return 'string';
  } else {
    return 'number';
  }
}