const submit = document.getElementById('submit');
const dydx = document.getElementById('dydx');
const x0 = document.getElementById('x0');
const y0 = document.getElementById('y0');
const dx = document.getElementById('dx');
const xn = document.getElementById('xn');
const answer = document.getElementById('answer');

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

    answer.innerHTML = "Answer: y(" + xnc + ") ≈ " + ync;
});