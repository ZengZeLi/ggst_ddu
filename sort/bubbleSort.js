function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr [j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

let arr = [2, 3, 4, 1, 7, 99, 6, 22, 21, 16, 13]

let result = bubbleSort(arr)

console.log(result)
