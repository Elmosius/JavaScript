function validateCode(code) {
  
  return /^[123]+.*/g.test(String(code))
}