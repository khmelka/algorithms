// return true if array has 3 ints in increasing order

function triplethreat(array) {
    var len = array.length;
    for(var i=0; i<len-2; i++){
        if(array[i+1]==array[i]+1){
           if(array[i+2]== array[i]+2){
              return true
           }
        }
    }
    return false;
}

module.exports = triplethreat