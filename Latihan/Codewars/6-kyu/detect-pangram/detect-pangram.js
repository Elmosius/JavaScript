function isPangram(string){
  const letters = new Set(
    string.toLowerCase().replace(/[^a-z]/g, '')
  );
​
  return letters.size === 26;
  
}