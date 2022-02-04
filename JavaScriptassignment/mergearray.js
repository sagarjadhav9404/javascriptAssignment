function merge_array(array1, array2)
{
    var result_array = [];
    var arr = array1.concat(array2);
    var length = arr.length;
    var assoc = {};
    while(length--)
    {
        var item = arr[length];
        if(!assoc[item])
        {
            result_array.unshift(item);
            assoc[item] = true;

        }
    }
            return result_array;
}
var array1 = [4,5,6];
var array2 = [12,8,13];
console.log(merge_array(array1, array2));