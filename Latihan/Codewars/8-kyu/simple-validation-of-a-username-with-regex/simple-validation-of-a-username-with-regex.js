function validateUsr(username) {
  
  return /^[_a-z0-9]{4,16}$/g.test(username)
}