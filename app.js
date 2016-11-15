var items = document.getElementsByTagName('li');
var slide = document.getElementById('slide');
var itemNumber = document.getElementById('item-number');
var back = document.getElementById('back');

for (var i = 0; i < items.length; i++) {
  (function(i) {
    items[i].addEventListener('click', function(e) {
      itemNumber.textContent = i + 1;
      document.body.classList.add('show-slide');

      window.history.pushState({item: i + 1}, null, 'item' + (i + 1));

      window.onpopstate = function(e) {
        document.body.classList.remove('show-slide');
        window.onpopstate = '';
      }
    });
  })(i);
}

back.addEventListener('click', function(e) {
  window.history.back();
})
