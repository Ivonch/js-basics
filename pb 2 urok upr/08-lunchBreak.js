function lunchBreak (input){
let nameSeries = input[0];
let timeEpisode = Number(input[1]);
let timeBreak = Number(input[2]);

let lunchTime = timeBreak / 8;
let relaxTime = timeBreak / 4;
let leftTime = timeBreak - lunchTime -relaxTime;

let diffTime = Math.abs(leftTime - timeEpisode);
if (leftTime >= timeEpisode){
    console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(diffTime)} minutes free time.`)

} else {
    console.log (`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(diffTime)} more minutes.`)
}

}

lunchBreak(["Game of Thrones",

"60",

"96"])