
function verifyRequired(element){
    if(element.value == ''){
        element.setAttribute('style', 'border-color: red')
    } else{
        element.removeAttribute('style')
    }
}

function verifyInterests(){
    const interests = document.querySelectorAll('#interests')
    console.log(interests)

    for(let i=0; i<interests.length; i++){
        if(interests[i].checked == true){
            return true
        }
    }
}

function verifyNoEmpty(element){
    if(element.value == ''){
        element.setAttribute('style', 'border-color:red')
        return false
    }
    return true
}

function showErrors(errors){
    const messageError = 'Se enconraron los siguientes errores en el formulario: \n'
    messageError = messageError + errors[0]
    alert(messageError)
}

function register(){

    let errors = []

    if ( !verifyInterests()){
        errors.push('Debe seleccionar por lo menos un interes')
    }

    const email = document.getElementById('emailcompleto')
    if(!verifyNoEmpty(email)){
        errors.push('Debe escribir un correo electrónico')
    }

    const nombre = document.getElementById('nombrecompleto')
    if(!verifyNoEmpty(nombre)){
        errors.push('Debe escribir un nombre')
    }

    const fnaicmiento = document.getElementById('fnacimiento')
    if(!verifyNoEmpty(fnacimiento)){
        errors.push('Debe escribir una fecha de nacimiento')
    }

    const sexo = document.getElementById('value')
    if(!verifyNoEmpty(sexo)){
        errors.push('Debe seleccionar un sexo')
    }

    if(errors.length > 0){
        showErrors(errors)
        return
    }

    const interests = document.querySelectorAll('#interests')

    let selectedInterests =[]

    for(let i=0; i<interests.length; i++){
        if(interests[i].checked){
            selectedInterests.push(interests[i].value)
        }
    }

    const request = {
        email: email.value,
        nombre: nombre.value,
        fnacimiento: fnacimiento.value,
        sexo: value.value,
        interests: selectedInterests
    }

    console.log(request)
}

