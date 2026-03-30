function Nav() {
  let navigationSelect = document.getElementById('select');
  let selectedValue = navigationSelect.value;

  switch(selectedValue) {
    case 'home':
      window.location.href = 'index.html';
      break;
  }
}