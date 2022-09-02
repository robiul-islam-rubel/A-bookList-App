const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btn=document.querySelector('.btn');
const price=document.querySelector('#price');
const bookList=document.querySelector('#book-list');
btn.addEventListener('click', function( e){
    e.preventDefault();
    //console.log("Hello");

    if(title.value==''&&author.value==''&&year.value==''&&price.value=='')
    {
        alert("Any field can't be empty!");
    }
    else
    {
        const newRow = document.createElement('tr');
        //creating new title
        const newTitle =document.createElement('th');
        newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle);

       // creating new author
        const newAuthor =document.createElement('th');
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);

        // creating new year
        const newYear =document.createElement('th');
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);

        //creating new price
        const newPrice =document.createElement('th');
        newPrice.innerHTML=price.value;
        newRow.appendChild(newPrice);

        bookList.appendChild(newRow);

    }

});