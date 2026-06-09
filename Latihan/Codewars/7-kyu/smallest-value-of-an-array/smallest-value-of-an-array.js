function min(arr, toReturn) { 
    let newArr = [...arr].sort((a,b) => a-b)
    let index = arr.findIndex((e) => e === newArr[0])
                              
    return toReturn === "value" ? arr[index] : index
}