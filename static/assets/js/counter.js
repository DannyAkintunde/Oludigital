let count=0;
function incriment(e){
  count = parseInt(e.target.parentElement.children[1].value);
  let v = parseInt(e.target.parentElement.children[2].value);
  console.log(v)
  if (v > count) {
    count++;
    e.target.parentElement.children[1].value = count;
    e.target.parentElement.children[4]
      .classList.remove("disabled");
  }
  if (count >= v) {
    e.target.classList.add("disabled");
  }
}
function decriment(e) {
  console.log('decrement')
  count = parseInt(e.target.parentElement.children[1].value);
  console.log(count)
  let min = parseInt(e.target.parentElement.children[3].value);
  console.log(min)
  if (count > min)
  {
    count--;
    e.target.parentElement.children[1].value = count
    e.target.parentElement.children[0].classList.remove("disabled");
  }
  if (count <= min){
    e.target.classList.add('disabled')
  }
}

for (i = 0; i != document.getElementsByClassName("incriment").length; i++) {
  let element = document.getElementsByClassName("incriment")[i];
  element.addEventListener("click", incriment);
  let v = parseInt(element.parentElement.children[1].value);
  let max = parseInt(element.parentElement.children[2].value);
  if(v>=max){
    element.classList.add("disabled");
  }
  console.log("init 1");
}
for (i = 0; i != document.getElementsByClassName("decriment").length; i++) {
  let element = document.getElementsByClassName("decriment")[i];
  element.addEventListener("click", decriment);
  let v = parseInt(element.parentElement.children[1].value);
  let min =parseInt(element.parentElement.children[3].value);
  if (v <= min){
    element.classList.add("disabled");
  }
  console.log("init 2");
}
for (i = 0; i != document.getElementsByClassName('quantity').length; i++){
  let group = document.getElementsByClassName("quantity")[i];
  let tags = group.getElementsByTagName('input')
  group.addEventListener('keypress',priceupdate);
  group.addEventListener("click", priceupdate);
  for (j = 0; j != tags.length ; j++){
    if (tags[j].getAttribute('type') != 'hidden'){
      tags[j].addEventListener('change',check)
    }
  }
}
priceupdate();

function check(e){
  let v = parseInt(e.target.value)
  count = v
  let max = parseInt(e.target.parentElement.children[2].value)
  let min = parseInt(e.target.parentElement.children[3].value)
  console.log(v,' ',max,' ',min)
  let incriment_btn = e.target.parentElement.children[0]
  let decriment_btn = e.target.parentElement.children[4]
  if (!v){
    e.target.value = min;
  }
  if (v <= min){
    decriment_btn.classList.remove('disabled');
    e.target.value = min;
    console.log('undisabled');
  } else {
    decriment_btn.classList.add("disabled");
    console.log("disabled");
  if (v > min){
    decriment_btn.classList.remove("disabled");
  }
  }
  if (v >= max){
    incriment_btn.classList.add('disabled');
    e.target.value = max;
  } else {
    incriment_btn.classList.remove("disabled");
  }
}

function priceupdate(){
  for (i = 0; i != document.getElementsByClassName('quantity').length; i++){
    let group = document.getElementsByClassName("quantity")[i];
    let tags = group.getElementsByTagName('input')
    for (j = 0; j != tags.length ; j++){
      if (tags[j].getAttribute('type') != 'hidden'){
        console.log(tags[j].value);
        let quantity = parseFloat(tags[j].value);
        const cost = parseFloat(
          tags[j].parentElement.parentElement.getElementsByClassName(
            "cart-price"
          )[0].getElementsByTagName('input')[0].value);
          tags[j].parentElement.parentElement
            .getElementsByClassName("cart-price")[0]
            .getElementsByTagName("span")[0].innerHTML = cost * quantity;
      }
    } 
  }
}
