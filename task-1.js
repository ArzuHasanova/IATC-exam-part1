function deleteOcc(array) {
    var newArray=[];
    for(var i =0; i< array.length; i++) {
        if (!newArray.includes(array[i])) 
            newArray.push(array[i])
        }
    
        return newArray.length;
    }