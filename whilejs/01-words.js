function words (input){
index = 0 ;
let word = input[index];
index++;

while(word !== "Stop"){
    console.log(word);
    word = input[index];
    index++;
}

}
words
(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"])