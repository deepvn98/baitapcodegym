function seachMaxam( arr ) {
    let maxam = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            maxam = arr[i]
            break;
        }
    }
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < 0 && arr[i] > maxam){
            maxam = arr[i]
        }
    }return maxam

}
let newarr = [1,2,4,-5,1,-4,-14,-7];
alert(seachMaxam(newarr))