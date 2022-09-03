function selectionSort(arr) {
  let len = arr.length
  let minIndex = 0
  for (let i = 0; i < len -1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}

let arr = [2, 3, 4, 1, 7, 99, 6, 22, 21, 16, 13]

let result = selectionSort(arr)

console.log(result)
