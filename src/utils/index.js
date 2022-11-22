// const worldList = require('./wordList.json')
import worldList from './wordList.json'

const getRandom = (array, n) => {
  // Shuffle array
  const shuffled = array.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, n);

  return selected
}

function groupArr(data, n) {
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0)
      j++;
    group[j] = group[j] || [];
    group[j].push(data[i])
  }
  return group;
}

export const getArrayOf24Elements = getRandom(worldList, 24).map((item, index) => ({ name: item, index }))

export const getArrayOf6Elements = (arrayData) => {
  const arrayOf18El = getRandom(arrayData, 18)
  const group = groupArr(arrayOf18El, 3)
  const result = group.map(arr => {
    let primary = arr[Math.floor(Math.random() * 3)].index
    let list = arr.map(el => el.name)
    return { list, primary, insertedIndex: -1 }
  })
  return result
}

getArrayOf6Elements(worldList)

