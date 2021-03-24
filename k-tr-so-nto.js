function isPrime(number){
    if( number<2 ){
        return false;
    }
    for( let i = 2; i <= Math.sqrt(number); i++ ){
        if( number % i == 0 ){
            return false;
        }
    }return true;
}
let number = prompt(" mời bạn nhập số")
if ( isPrime(number)){
    alert("số bạn nhập là số nguyên tố");

}else {
    alert("số bạn nhập không phải là số nguyên tố")
}