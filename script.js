function ValidateForm(){
var fname = document.getElementById('fname').value.trim();
var email = document.getElementById('email').value.trim();
var message = document.getElementById('message').value.trim();

    if(fname === ''){
    alert('Preencha o campo Nome!');
    return false;
    }

    if(email === ''){
    alert('Preencha o campo E-mail!');
    return false;
    }

    if(message === ''){
    alert('Preencha o campo Mensagem!');
    return false;
    }




    
}