function findFirstDuplicate(arr) {
  let seen = {};
  let duplicates = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      duplicates.push(arr[i]);
    } else {
      seen[arr[i]] = true;
    }
  }
  return duplicates.length>0 ? duplicates[0] : -1;
}
let arr = [1, 2, 3, 3, 4, 5, 5];
findFirstDuplicate(arr);
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// for(element in array):
//   return array[element] == array[element]
