var month_name = function(dt){
    monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return monthlist[dt.getMonth()];
    };
    console.log(month_name(new Date("21/12/2012")));
    console.log(month_name(new Date("28/12/2018")));

