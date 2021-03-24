function isMod3(number){
    if( number % 3 == 0 ){
        return true
    }else {
        return false
    }
}
let number = prompt(" mời bạn nhập số");
if(isMod3(number)){
    alert(" số bạn nhập chia hết cho 3");

}else {
    alert("số bạn nhập không chia hết cho 3");
}
