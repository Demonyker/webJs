window.onload = function start() {
    const input1 = document.getElementsByClassName('input1');
    const list1 = document.getElementsByClassName('listformemails');
    const numberOfEmails1 = document.getElementsByClassName('number_of_emails');
    const numberOfEmails = numberOfEmails1[0];
    const list = list1[0];
    let listli = document.getElementsByClassName('email')
    console.log(list1)
    const input = input1[0];
    const dogSymbol = /.+@.+/g;
    const dotSymbol = /.+\..+\s/g;
    console.log(list)
    let t = 0;
    input.oninput = function addemails() {
        if (input.value.match(dogSymbol) && input.value.match(dotSymbol)) {
            let li = document.createElement('li');
            li.setAttribute('data-id', t);
            li.className = 'email'
            li.innerHTML = `${input.value} <input type="button" value="X" data-id="${t}" class="btn">`;
            list.appendChild(li);
            const button1 = document.getElementsByClassName('btn');
            for (let l = 0; l < button1.length ; l += 1) {
                if (button1[l].getAttribute('data-id') == t) {
                    button1[l].onclick = function remove() {
                        for (let i = 0; i < listli.length; i += 1) {
                            console.log(button1);
                            if (listli.length === 1) {
                                listli[i].remove();
                                numberOfEmails.style.display = 'none';
                            } else if (listli[i].getAttribute('data-id') === button1[l].getAttribute('data-id')) {
                                listli[i].remove();
                                numberOfEmails.innerHTML = `${listli.length} items left`
                            }
                        }
                    };
                }
            }
            numberOfEmails.style.display = 'block'
            numberOfEmails.innerHTML = `${listli.length} items left`
            t += 1;
            input.value = null;
        }
    }
    input.onkeypress = function kp(e) {
        if (e.keyCode === 32 && !input.value.match(dogSymbol) && !input.value.match(dotSymbol)) {
        alert('Wrong email, enter again');
        input.value = null;
        } else if (e.keyCode === 13) {
            return false;
        }  
    };
}