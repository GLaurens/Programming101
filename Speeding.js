/**
 * Created by gordonlaurens on 10/16/14.
 */
function isSpeeding(speed,Birthday, limit){
if(!limit){
    limit = 60;
}
    if (Birthday){limit += 5;}
    if (speed <= limit) {return 0;}
    else if (speed >= limit && speed <= limit+20) {return 1;}
    else if (speed > limit+21) {return 2;}

}
console.log( isSpeeding(65,false) )