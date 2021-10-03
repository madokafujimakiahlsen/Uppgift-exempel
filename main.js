
// ################ ayako - start ################

// class Movie {
//   constructor(title, genre, year, review) {
//       this.title = title;
//       this.genre = genre;
//       this.year = year;
//       this.review = review;  
//   }
// }

// let movie1 = new Movie("My shoes", "dorama" , 2005, 5 + "/" + 10);
// let movie2 = new Movie("Totoro", "Anime", 1988,  4 + "/" + 10);


const movieList = [
    {
        title: "My shoes",
        genre: 'dorama',
        year: 2005,
        review: 4 + "/" + 5
    },
    {
        title: "Totoro",
        genre: "Anime",
        year: 1988,
        review: 5 + "/" + 5
    }
]

var table = document.getElementById("myTable");

// insert a row to the table
var row1 = table.insertRow(1); // the second row (under headlines)
// insert cells to the row
row1.insertCell(0).innerHTML = movieList[0].title; //My shoes
row1.insertCell(1).innerHTML = movieList[0].genre; //dorama
row1.insertCell(2).innerHTML = movieList[0].year;  //2005
row1.insertCell(3).innerHTML = movieList[0].review; //5/10

// insert a row to the table
var row2 = table.insertRow(2); // the third row
// insert cells to the row
row2.insertCell(0).innerHTML = movieList[1].title;  //Totoro
row2.insertCell(1).innerHTML = movieList[1].genre;  //Anime
row2.insertCell(2).innerHTML = movieList[1].year;   //1988
row2.insertCell(3).innerHTML = movieList[1].review; //10/10



const button = document.getElementById("button");
button.addEventListener("click", SaveInSessionStorage);

let counter = 0;

function SaveInSessionStorage() {
    let num = counter + 1;
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const review = document.querySelector('input[name="recension"]:checked').value
    
    // set data in session strage
    window.sessionStorage.setItem(title, JSON.stringify({ title, genre, year, review }));
    
    // get data from session strage
    const obj = JSON.parse(window.sessionStorage.getItem(title));

    console.log(obj);

    let row = table.insertRow(1); 
    row.insertCell(0).innerHTML = obj.title; 
    row.insertCell(1).innerHTML = obj.genre; 
    row.insertCell(2).innerHTML = obj.year;   
    row.insertCell(3).innerHTML = obj.review + "/" + 5; 
}

// ################ ayako - end ################