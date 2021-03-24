function totalMod3(limit){
    let count = 0;
    let total = 0;
    for ( let i = 0; i <= limit; i++ ){
        count = i * 3;
        total += count
    }return total
}
let number = prompt("bạn muốn lấy tổng của bao nhiêu số chia hết cho 3")
 alert(totalMod3(number))