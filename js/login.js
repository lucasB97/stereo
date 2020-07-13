  function logar(){
       var email = document.getElementById("email");
       var senha = document.getElementById("senha");

       if(email.value == "lucasbessa708@gmail.com" && senha.value == "123"){
          window.location.href = "pagina_usuario.html";
       }
       else{
        alert("usuário ou senha invalidos");
       }
    }