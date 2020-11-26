/* videocall */

$('#chat_story').hide();

let open = document.querySelector('#open-story');

open.addEventListener('click', () => {
  let chatStory = document.querySelector('#chat_story'),
    openArrow = document.querySelector('#open-story'),
    rubIcon = document.querySelector('.rub_icon'),
    rubBalance = document.querySelector('.rub_balance');
  chatStory.style.display = 'block';
  openArrow.style.display = 'none';
  rubIcon.classList.add('rub_icon_bg');
  rubBalance.classList.add('rub_balance_color');
});


let close = document.querySelector('#close-story');

close.addEventListener('click', () => {
  let chatStory = document.querySelector('#chat_story'),
    openArrow = document.querySelector('#open-story'),
    rubIcon = document.querySelector('.rub_icon'),
    rubBalance = document.querySelector('.rub_balance');
  chatStory.style.display = 'none';
  openArrow.style.display = 'block';
  rubIcon.classList.remove('rub_icon_bg');
  rubBalance.classList.remove('rub_balance_color');
});