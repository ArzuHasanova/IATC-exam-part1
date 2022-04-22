function twoSum(arr, S) {
    const sum = [];
     for(let i = 0; i< arr.length; i++) {
       for(let j = i+1;  j < arr.length; j++) {
         if(S == arr[i] + arr[j]) sum.push([arr[i],arr[j]])
       }
     }
    return sum
   }
   