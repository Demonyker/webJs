window.onload = function start() {
  const changerForm = document.getElementsByClassName('changer');
  const forma = document.getElementsByClassName('form');
  const reg = /#.+?\s/g;
  const bold = /\*\*.+?\*\*/g;
  const textarea = changerForm[0];
  const form = forma[0];
  textarea.oninput = function st() {
    form.lastElementChild.innerHTML = textarea.value;
    if (form.lastElementChild.innerHTML.match(reg)) {
      const htag = form.lastElementChild.innerHTML.match(reg);
      const h1 = document.createElement('h1');
      h1.innerHTML = htag;
      form.lastElementChild.innerHTML = form.lastElementChild.innerHTML.replace(htag, ' ');
      form.lastElementChild.appendChild(h1);
      const div = document.createElement('span');
      form.appendChild(div);
      textarea.value = null;
    } else if (form.lastElementChild.innerHTML.match(bold)) {
      form.lastElementChild.innerHTML = form.lastElementChild.innerHTML.replace(form.lastElementChild.innerHTML.match(bold)[0], '');
      const bolid = document.createElement('b');
      let correctBolid = textarea.value.match(bold)[0].split('');
      correctBolid = correctBolid.splice(2, 2);
      correctBolid = correctBolid.join('');
      bolid.innerHTML = textarea.value.match(correctBolid);
      form.lastElementChild.appendChild(bolid);
      const span = document.createElement('span');
      form.appendChild(span);
      textarea.value = null;
    }
  };// 1 практическое задание

  const input1 = document.getElementsByClassName('input1');
  const list1 = document.getElementsByClassName('listforemails');
  const list = list1[0];
  const input = input1[0];
  const dogSymbol = /.+@.+/g;
  const dotSymbol = /.+\..+\s/g;
  let t = 0;
  input.oninput = function inp() {
    if (input.value.match(dogSymbol) && input.value.match(dotSymbol)) {
      let li = document.createElement('li');
      li.className = `${t}`;
      li.innerHTML = `${input.value} <input type="button" value="X" id = "${t}" class= "btn">`;
      t += 1;
      list.appendChild(li);
      input.value = null;
      const button1 = document.getElementsByClassName('btn');
      const button = button1[0];
      for (let l = 0; l < button1.length; l += 1) {
        button1[l].onclick = function remove() {
          let listli = document.getElementsByTagName('li')
          for (let i = 0; i < listli.length; i += 1) {
            console.log(button1);
            if (listli.length === 1) {
              listli[i].remove();
            } else if (listli[i].getAttribute('class') === button1[l].getAttribute('id')) {
              listli[i].remove();
            }
          }
        };
      }
    }
  };
  input.onkeypress = function kp(e) {
    if (e.keyCode === 32 && !input.value.match(dogSymbol) && !input.value.match(dotSymbol)) {
      alert('Wrong email, enter again');
      input.value = null;
    }
  };
};
