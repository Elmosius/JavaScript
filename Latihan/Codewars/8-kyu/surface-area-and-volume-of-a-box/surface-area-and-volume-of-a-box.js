const getSize = (width, height, depth) => {
  return [2*((width*height)+(depth*width)+(depth*height)),(width*height*depth)]
}
​