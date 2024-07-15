let state = 0;
function textToggle(id) {
  switch (state) {
    case 0:
      document.getElementById(id).innerHTML =
        '<i class="bi bi-arrow-up-square-fill"></i> show less';
      break;
    case 1:
      document.getElementById(id).innerHTML =
        '<i class="bi bi-arrow-down-square-fill"></i> show more';
      break;
  }
  state++;
  if (state > 1) {
    state = 0;
  } else if (state < 0) {
    state = 0;
  }
}

let element = 0;
function elementToggle(id,ele){
  let elements = document.getElementById(id).getElementsByTagName(ele);
  switch (element) {
    case 0:
      elements[1].hidden = false;
      elements[0].hidden = true;
      break;
    case 1:
      elements[0].hidden = false;
      elements[1].hidden = true;
      break;
  }
  element++
  if (element > 1) {
    element = 0;
  } else if (element < 0) {
    element = 0;
  }
}

//header animation controller
const selectHeader = document.querySelector('#header');
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop;

  const headerFixed = () => {
    if ((headerOffset - window.scrollY) <= 0) {
      selectHeader.classList.add('sticked');
    } else {
      selectHeader.classList.remove('sticked');
    }
  }
  window.addEventListener('load', headerFixed);
  document.addEventListener('scroll', headerFixed);
}

//floating btn
btn = document.getElementsByClassName('floating-btn')[0];
btn.addEventListener('click', (e) => {
  window.open(e.target.getElementsByTagName('a')[0].href, 'blank');
})