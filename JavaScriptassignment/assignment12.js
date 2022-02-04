var library = [ 
    {
        title: 'Wings of Fire',
        author: 'A.P.J.Abdul Kalam',
        libraryID: 2345
    },
    {
        title: 'Discovery of India',
        author: 'Jawarharlal Neharu',
        libraryID: 3425
    },
    {
        title: 'Sarvajaneek Satyadhaarma Pustak',
        author: 'Mahatma Phule',
        libraryID: 2376
    }];
 
 var sort_by = function(field_name, reverse, initial){
 
    var key = initial ?
        function(x)
              {
                return initial(x[field_name]);
              } :
        function(x) 
              {
                return x[field_name];
              };
 
    reverse = !reverse ? 1 : -1;
 
    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
      } ;
 };
 
 
 var newobj = library.sort(sort_by('libraryID', true, parseInt));
 
 console.log(newobj);
 


