function validar(){
    var n1="", n2="", n3="", n4="", n5="", n6="", n7="", n8="";
    var p = 0
    var nome = document.getElementById("nome").innerText;
    var cpf = document.getElementById("cpf").innerText;
    var data = document.getElementById("data").innerText;
    var sexo = document.getElementById("sexo").innerText;
    var email = document.getElementById("email").innerText;
    var celular = document.getElementById("celular").innerText;
    var nivel = document.getElementById("nivel").innerText;
    var media = document.getElementById("media").innerText;
    
    if (nome == ""){
        n1 = "- Nome Completo";
        p = 1;
    }
    if (cpf == ""){
        n2 = "- CPF";
        p = 1;
    }
    if (data == ""){
        n3 = "- Nascimento";
        p = 1;
    }
    if (sexo == ""){
        n4 = "- Sexo";
        p = 1;
    }
    if (email == ""){
        n5 = "- Email";
        p = 1;
    }
    if (celular == ""){
        n6 = "- Celular";
        p = 1;
    }
    if (nivel == ""){
        n7 = "- Nível";
        p = 1;
    }
    if (media == ""){
        n8 = "- Média";
        p = 1;
    }

    if (p == 1){
        alert(n1 +"\n"+ n2 +"\n"+ n3 +"\n"+ n4 + "\n"+  n5 + "\n" + n6 + "\n" + n7 +"\n" + n8);
        document.getElementById("nome").style.border = "2px solid red";
        document.getElementById("cpf").style.border = "2px solid red";
        document.getElementById("data").style.border = "2px solid red";
        document.getElementById("sexo").style.border = "2px solid red";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("celular").style.border = "2px solid red";
        document.getElementById("nivel").style.border = "2px solid red";
        document.getElementById("media").style.border = "2px solid red";
        
        
    }
    if (p == 0){
        alert(nome +"\n"+ cpf +"\n"+ data +"\n"+ sexo + "\n"+  email + "\n" + celular + "\n" + nivel +
            "\n" + media);
    }
    
}
