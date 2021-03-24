function displayMod3(limit){
    for( i=1 ; i <= limit; i++){
        total = i*3;
        document.write(total + " , ")
    }

}
let total= prompt("bạn muốn lấy bao nhiêu số chia hết cho 3");
displayMod3(total)
