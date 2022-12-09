//function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;
  
    while (left <= right) {
      if (string[left] !== string[right]) return false;
      left++;
      right--;
    }
  
  return true;
  }
//}

/* 
  Add your pseudocode here
*/
// function ispalindrome(){
//return  true
//}

/*
  Add written explanation of your solution here
*/
// we added two pointer to give the dirrection to where the name wiil be read from
//we us the while to identify if the  condition is met



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
