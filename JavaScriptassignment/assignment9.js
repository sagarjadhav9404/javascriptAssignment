var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
    else{
        return false;
    }
}

console.log(is_weekend('Dec 13, 2020'));
console.log(is_weekend('Dec 12, 2020'));
console.log(is_weekend('Dec 30, 2020'));
