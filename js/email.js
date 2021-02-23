//javascript email

const email = document.getElementById("email");
      const form = document.getElementById("form");
      form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(email.value);
        alert('Se ha subscrito el email: ' + email.value);
        return false;
      });