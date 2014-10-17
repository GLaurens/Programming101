/**
 * Created by gordonlaurens on 10/16/14.
 */
function findLongestWord(str){
    var longest = "";
    var words = str.trim().split(" ");
    for (var i=0;i<words.length;i++){
        var word = words[i];
        if (word.length > longest.length){
            longest = word;
        }
    }

    return longest;
}
console.log(findLongestWord("lenght way mississippi"));