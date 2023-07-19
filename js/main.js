$(document).ready(function(){
    
    $(document).ready(function() {
        $("#formulario").submit(function(event) {
            // Impede o envio padrão do formulário
            event.preventDefault();
            
            // Realize a validação aqui
            var nome = $("#nome").val();
            var email = $("#email").val();
            var telefone = $("#telefone").val();
            var mensagem = $("#mensagem").val();
            
            if (nome === '' || email === '' || telefone === '' || mensagem === '') {
                alert("Por favor, preencha todos os campos.");
                return;
            }
        })    
})

$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true  
        },
    }
})
})
