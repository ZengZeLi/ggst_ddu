function insertSort(arr) {
  let len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--;
    }
    arr[preIndex + 1] = current
  }
  return arr
}

let arr = [2, 3, 4, 1, 7, 99, 6, 22, 21, 16, 13]

let result = insertSort(arr)

console.log(result)
