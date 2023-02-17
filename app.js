const submit = document.getElementById('submit');
const dydx = document.getElementById('dydx');
const x0 = document.getElementById('x0');
const y0 = document.getElementById('y0');
const dx = document.getElementById('dx');
const xn = document.getElementById('xn');
const answer = document.getElementById('answer');

// this processes the facking equation
function calculate(x,y){

    let lucidair = dydx.value;

    //lucidair = lucidair.replace(/[^0-9\xy(\)\+\-\*\/\.]/g, ""); // probably dont need this

    lucidair = lucidair.toLowerCase();

    let thex = x;
    let they = y;

    lucidair = lucidair.replaceAll('x','('+thex+')');
    lucidair = lucidair.replaceAll('y','('+they+')');

    console.log('evaluating '+lucidair);

    lucidair = math.evaluate(lucidair);

    return lucidair;
}


// clear the res
function clearres(){

    let theres = document.getElementById('results');

    theres.innerHTML = `
        <div class="fullwidth">
            <div class="smallcol">
                Iteration
            </div>
            <div class="smallcol">
                X
            </div>
            <div class="smallcol">
                Y
            </div>
            <div class="largecol">
                Dy/Dx
            </div>
            <div class="largecol">
                Next Y
            </div>
        </div>
    `;
}

// add a col with an iteration of the thing
function additeration(iter, x ,y , step){
        
    let theres = document.getElementById('results');

    // lets eval some of the things

    let ddx = calculate(x,y);

    let nexty = y+ddx*step;

    theres.innerHTML += `
        <div class="fullwidth">
            <div class="smallcol" title="`+iter+`">
                `+iter+`
            </div>
            <div class="smallcol" title="`+x+`">
                `+x.toFixed(3)+`
            </div>
            <div class="smallcol" title="`+y+`">
                `+y.toFixed(3)+`
            </div>
            <div class="largecol" title="`+ddx+`">
                `+ddx.toFixed(3)+`
            </div>
            <div class="largecol" title="`+nexty+`">
                `+nexty.toFixed(3)+`
            </div>
        </div>
    `;

    return nexty;
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

    // answer.innerHTML = '('+evalx+','+evaly+') with '+dydx.value+' = '+resp;

    // console.log(processeq());

    // start from x0 and then go to xn

    let ttrs = x0c; // the audi

    let i = 1;

    let lasty = y0c;

    clearres();

    while (ttrs <= xnc){
        lasty = additeration(i,ttrs,lasty,dxc);

        console.log(ttrs);
        ttrs += dxc;
        i += 1;
    }
});

// test things
