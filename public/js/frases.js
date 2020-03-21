$("#botao-frase").click(fraseAleatoria)
$("#botao-frase-id").click(buscaFrase)

function fraseAleatoria() {
    $("#spinner").show()
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(function() {
            $("#erro").show()
            setTimeout(function() {
                $("#erro").hide()
            }, 3000)
        })
        .always(function() {
            $("#spinner").hide()
        })
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase")
    var numeroAleatorio = Math.floor(Math.random() * data.length)

    frase.text(data[numeroAleatorio].texto)
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}

function buscaFrase() {
    var fraseID = $("#frase-id").val()
    var dados = {
        id: fraseID
    }
    $("#spinner").show()

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function() {
            $("#erro").show()
            setTimeout(function() {
                $("#erro").hide()
            }, 3000)
        })
        .always(function() {
            $("#spinner").hide()
        })
}

function trocaFrase(data) {
    var frase = $(".frase")
    frase.text(data.texto)
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo)
}