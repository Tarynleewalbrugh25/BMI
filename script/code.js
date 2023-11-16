let btnEnter = document.querySelector('[data-enter]');
function bmi(fitness) {
    let weight  = +document.querySelector(`[data-weight]`).value
    let height = +document.querySelector(`[data-height]`).value
    let results = parseFloat(weight) /parseFloat(height) % parseFloat(height) ;
    let output = document.querySelector(`[data-output]`)
}
if(results)
    document.getElementById(data-output).innerHTML = results;
    if(results < 18.5){
        document.getElementById("data-output").innerHTML = results
    }
    else if(results < 25){
        document.getElementById("bmi-reading").innerHTML = "healthy";
    }
    else if(results < 30){
        document.getElementById("bmi-reading").innerHTML = "overweight"
    }
    else{
        document.getElementById("bmi-reading").innerHTML = "obesity"
    }
btnSubmit.addEventListener('click',fitness)



