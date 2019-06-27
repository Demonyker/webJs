window.onload = function start() {
    let input1 = document.getElementsByClassName('input_text');
    let right = document.getElementsByClassName('right_side');
    let list1 = document.getElementsByClassName('list');
    let list = list1[0];
    let rightSide = right[0].lastElementChild;
    const reg = /#.+?\s/g;
    const bold = /\*\*.+?\*\*/g;
    for (let i = 0; i < input1.length; i += 1) {
        input1[i].oninput = function st() {
            rightSide.innerHTML = input1[i].value;
            if (rightSide.innerHTML.match(reg)) {
            let lengthOfColl = rightSide.innerHTML.match(reg).length; 
            for ( let k = 0; k < lengthOfColl; k += 1) {
                rightSide.innerHTML = rightSide.innerHTML.replace(rightSide.innerHTML.match(reg)[k], `<h1>${rightSide.innerHTML.match(reg)[k].split('').splice(1, rightSide.innerHTML.match(reg)[k].split.length).join('')}</h1>`);
            }
        }
        input1[i].onkeypress = function nl(e) {
            if( e.keyCode === 13) {
                let div = document.createElement('div');
                right[0].appendChild(div);
                rightSide = right[0].lastElementChild;
            }
        }
    } 
}
}