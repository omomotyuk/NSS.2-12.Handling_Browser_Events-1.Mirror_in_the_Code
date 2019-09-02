/*
//
*/

/*
Create an input field in your DOM. Give it an id of message.
Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
Give each article a different border color.
Write an event listener that listens for the keyup event on the input field.
The event handler function should update the textContent property of both sections.
*/

//
function updateArticle( event ) {
    console.log("event: ", event);
    document.getElementById('article-1').innerHTML = event.target.value;
    document.getElementById('article-2').textContent = event.target.value;   
}

//
document.getElementById("message").addEventListener("keyup", updateArticle );
