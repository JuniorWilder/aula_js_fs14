divC.style.display = 'none'

const hideinputs = () => {
    let selected = selectTemp.value
    console.log(selected);

    if(selected === 'c') {
        divC.style.display = 'none'
        divF.style.display = 'block'
    } else if(selected === 'f') {
        divF.style.display = 'none'
        divC.style.display = 'block'
    }
}

const toC = () => {
    event.preventDefault()
    console.log('para celsius');

}
const toF = () => {
    event.preventDefault()
    
    let tempCelsius = celsius.value
    let tempF = (tempCelsius * 9/5) + 32
    console.log(resultado)
    resultado.innerHTML = tempF
}





//const toFahre = (n1) => n1 * 9/5 + 32
//console.log(toFahre(26));

//const tocelsius = (n1) => 