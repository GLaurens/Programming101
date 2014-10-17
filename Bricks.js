/**
 * Created by gordonlaurens on 10/16/14.
 */
function mason(small,large,totalLength){
    var smallLen = small*1
    var largeLen = large*5

    var sum = smallLen + largeLen;
    if (sum >= totalLength){
        return true;
    } else {
        return false;
    }
}
console.log (mason(5,1,15))