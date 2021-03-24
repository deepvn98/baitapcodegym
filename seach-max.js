function seachMax( arr ){
    let max = arr[0];
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] > max ){
            max = arr[i];
        }
    }return max;
}
let newarr = [21,43,6,74,85,3,36,7];
alert(seachMax(newarr) + " là số lớn nhất trong mảng của bạn!")