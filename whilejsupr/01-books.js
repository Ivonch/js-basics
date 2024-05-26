function books (input){
    let index = 0 ;
    let theBook = input[index];
    index++;
    let books = input[index];
    index++ ; 
    bookcount = 0 ;

    while(books !== theBook && books !== "No More Books"){
        bookcount++ ;
        books = input[index];
        index++;
       
       
    }  if(books === "No More Books" ){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${bookcount} books.`)
    }else {
        console.log(`You checked ${bookcount} books and found it.`)
    }


} 

books (["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])