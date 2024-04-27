
function sayMyName (name = '') {
if (name == "") {
    throw "Nome é obrigatorio"
} 

if (name == "joao") {

    throw "nome correto"
}

else (
    console.log ('Nome invalido, por favor ensira o nome correto')
)

}

try { sayMyName ()
} catch (e) {
    console.log(e)
}
