var setaesquerda =window.document.getElementById ("setaEsquerda")
var setadireita = window.document.getElementById ("SetaDireita")
var Leonardo = window.document.getElementById("DepLeonardo")
var Samantha = window.document.getElementById("DepSamatha")
var Bruna = window.document.getElementById("DepBruna")

function Rolardireita() {
    Leonardo.style = "display:none"
    Bruna.style= "display:flex"
    setaesquerda.style= "display:flex"
    setadireita.style = "display:none"

}

function Rolaresquerda(){
    Leonardo.style = "display:flex"
    Bruna.style= "display:none"
    setaesquerda.style= "display:none"
    setadireita.style = "display:flex"

}

