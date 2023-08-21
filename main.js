function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "justinmatosc@gmail.com",
        Password :"---",
        To : 'justinmatosc@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Submission",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + " <br> Phone Number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully. Talk to you soon!")
    );
}