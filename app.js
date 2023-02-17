const submit = document.getElementById('submit');
const dydx = document.getElementById('dydx');
const x0 = document.getElementById('x0');
const y0 = document.getElementById('y0');
const dx = document.getElementById('dx');
const xn = document.getElementById('xn');
const answer = document.getElementById('answer');

// this processes the facking equation and
function calculate(x,y){

    let lucidair = dydx.value;

    //lucidair = lucidair.replace(/[^0-9\xy(\)\+\-\*\/\.]/g, ""); // probably dont need this

    lucidair = lucidair.toLowerCase();

    let thex = x;
    let they = y;

    lucidair = lucidair.replaceAll('x',thex);
    lucidair = lucidair.replaceAll('y',they);

    console.log('evaluating '+lucidair);

    lucidair = math.evaluate(lucidair);

    return lucidair;
}

submit.addEventListener('click', () => {
    const dydxc = "x - y";
    let x0c = parseFloat(x0.value);
    let y0c = parseFloat(y0.value);
    const dxc = parseFloat(dx.value);
    const xnc = parseFloat(xn.value);

    let ync = y0c;

    for (let i = x0c; i < xnc; i += dxc) {
        ync += (i - ync) * dxc;
    }

    //answer.innerHTML = "Answer: y(" + xnc + ") ≈ " + ync;

    let evalx = x0.value;
    let evaly = y0.value;

    let resp = calculate(evalx,evaly);

    answer.innerHTML = '('+evalx+','+evaly+') with '+dydx.value+' = '+resp;

    console.log(processeq());
});
