// alert("olá mundo")
//
// var test = prompt("Digite qualquer coisa")


function textTexto() {
    document.getElementById("titulo").style.color = red
}


function testButton() {
    if (confirm("apagar tudo")) {
        document.getElementById("inputEmail4").value = ""
        document.getElementById("inputPassword4").value = ""
        document.getElementById("inputAddress").value = ""
        document.getElementById("inputAddress2").value = ""
        document.getElementById("inputCity").value = ""
        document.getElementById("inputState").value = ""
        document.getElementById("inputZip").value = ""
        document.getElementById("gridCheck").value = ""

    }
}

function colorlabel() {
    document.getElementById("labelEmail").style.color = "blue"

}

function colorlabel1() {
    document.getElementById("labelSenha").style.color = "blue"

}

function colorlabel2() {
    document.getElementById("labelEndereço").style.color = "blue"

}

function colorlabel3() {
    document.getElementById("labelComplemento").style.color = "blue"

}

function colorlabel4() {
    document.getElementById("labelCidade").style.color = "blue"

}

function colorlabel5() {
    document.getElementById("labelEstado").style.color = "blue"

}

function colorlabel6() {
    document.getElementById("labelCep").style.color = "blue"

}
function popular(id,valor) {
    document.getElementById(id).value = valor
}