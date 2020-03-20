function fun(arr1, arr2) {
    arr1.push(...arr2)
    
    const newarray = arr1.filter((v,i,a) => a.indexOf(v) === i)
    
    return newarray
}