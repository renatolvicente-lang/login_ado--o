document.getElementById("form_adc").addEventListener("submit", function(e){
    e.preventDefault();//predefine um comportamento padrão de formulario.


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let tempo = document.getElementById("temp").value;
    let mtv_adocao = document.getElementById("mtv_adocao").value;

    //pegar campo pelo seletor
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
     
    if(nome.length < 3) return alert("Nome invalido!!");//Verifica o tamanho do nome
    
    if(cpf.length < 11 ) return alert("CPF obrigatório");
    
    if(telefone.length < 8) return alert("Telefone obrigatório");

    if(idade.length < 2 && idade < 18) return alert("Idade invalida");

    if(cidade.length == 0) return alert("Cidade obrigatoria");

    if(!email.includes('@')) return alert("Email deve conter @");// verifica se possui o arroba

    if(moradia == "" || moradia === "0") return alert("O tipo de moradia deve estar selecionado");// verifica se moradia está selecionada

    if(tempo === 1) return alert("Tem que ser um valor valido");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!!<br>" + "Nome: " + nome;// exibe o resultado dentro da div com id de resultado


});