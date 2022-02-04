function valid_email(str)
{
    var mailformat = /^\W+([\.-]?\W+)*@\W+([\.-]?\W+)*(\. \W{4,5})+$/;
    if(mailformat.test(str))
    {
        console.log("Valid email address!");
    }
    else
    {
        console.log("you have entered an invalid email address!");
    }
}
valid_email('sagarjadhav7083@gmail.com');