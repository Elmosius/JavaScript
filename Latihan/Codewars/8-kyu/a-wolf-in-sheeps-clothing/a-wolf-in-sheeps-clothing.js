function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf('wolf');
  return wolfIndex === queue.length - 1 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`;
}