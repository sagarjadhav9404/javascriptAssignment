var library = [ 
    {
        title: 'Wings of Fire',
        author: 'A.P.J.Abdul Kalam',
        readingStatus: true
    },
    {
        title: 'Discovery of India',
        author: 'Jawarharlal Neharu',
        readingStatus: true
    },
    {
        title: 'Sarvajaneek Satyadhaarma Pustak',
        author: 'Mahatma Phule',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
