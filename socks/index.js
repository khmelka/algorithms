// socks problem from hackerrank
// return count of patching pairs
// n is the number of socks
// arr is array of colors

//bubble search
function sockMerchant(n,arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const lessVal = arr[j+1]
                 arr[j+1] = arr[j]
                 arr[j] = lessVal
            } 
        }
    }
    console.log(arr)
     let count = 0;
 
     for (let i = 0; i < n - 1; i++) {
         if ( arr[i] === arr[i + 1]) {
             count++;
             i += 1;
         }
     }
 
     return count;
 }



// using sort method
// function sockMerchant(n,arr){
//     let sorted = arr.sort( (a,b) => a - b);
//     let count = 0;
 
//      for (let i = 0; i < n - 1; i++) {
//          if ( sorted[i] === sorted[i + 1]) {
//              count++;
//              i += 1;
//          }
//      }
 
//      return count;
//  }