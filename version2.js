window.onload = function start() {
    let input1 = document.getElementsByClassName('input_text');
    let right = document.getElementsByClassName('right_side');
    let rightSide = right[0].lastElementChild;
    const reg = /#.+?\s/g;
    const bold = /\*\*.+?\*\*/g;
    for (let i = 0; i < input1.length; i += 1) {
        input1[i].oninput = function st() {
            rightSide.innerHTML = input1[i].value;
            if (rightSide.innerHTML.match(reg)) {
                rightSide.innerHTML.match(reg).forEach(stringForRepalce => {
                rightSide.innerHTML = rightSide.innerHTML.replace(stringForRepalce, `<h1>${stringForRepalce.replace(/#/g, '')}</h1>`);
                }) 
            } 
            if (rightSide.innerHTML.match(bold)) {
                rightSide.innerHTML.match(bold).forEach(stringForRepalce => {
                rightSide.innerHTML = rightSide.innerHTML.replace(stringForRepalce, `<b>${stringForRepalce.replace(/\*/g, '')}</b>`);
                })
            }
            input1[i].onkeypress = function nl(e) {
                if( e.keyCode === 13) {
                    input1[i].setAttribute('disabled', true);
                    input1[i+1].removeAttribute('disabled');
                    input1[i+1].focus();
                    let div = document.createElement('div');
                    right[0].appendChild(div);
                    rightSide = right[0].lastElementChild;   
                }
            }
        }
    }
}