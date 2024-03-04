const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

    Email.send({
        SecureToken : "81c2b6d4-5614-4d92-a9d0-7a38b5f884a4",
        
        To:'contact@yellowcrossinireland.com',
        From:"contact@yellowcrossinireland.com",
        Subject: subject.value,
        Body: bodyMessage
       
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    
    form.reset();
    return false;
});