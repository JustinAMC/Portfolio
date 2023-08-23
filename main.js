/* This was code I used for my first attempt to set up
my email service, but elasticemail wasn't quite working.
I ended up using formsubmit, which works just through
the html. The code remains here.*/


// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "justinmatosc@gmail.com",
//         Password :"---",
//         To : 'justinmatosc@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "Visitor Inquiry",
//         Body : "Name: " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + " <br> Phone Number: " + document.getElementById("phone").value
//         + "<br> Message: " + document.getElementById("message").value
//     }).then(
//       message => alert(message)
//     );
// }