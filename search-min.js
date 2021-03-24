function searchMin( arr ){
    let min = arr[0];
    for ( i = 1; i <arr.length; i++ ){
        if ( arr[i] < min){
            min = arr[i];
        }
    }return min;
}
let newarr = [1,3,4,53,7,8,0];
alert(searchMin(newarr) + " là số nhỏ nhất trong mảng của bạn!")