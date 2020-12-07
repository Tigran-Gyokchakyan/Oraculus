/* videocall */

$('#chat_story').hide();

let open = document.querySelector('#open-story');

open.addEventListener('click', () => {
  let chatStory = document.querySelector('#chat_story'),
    openArrow = document.querySelector('#open-story'),
    rubIcon = document.querySelector('.rub_icon'),
    rubBalance = document.querySelector('.rub_balance'),
    body = document.querySelector('body'),
    chat = document.querySelector('.chat');
  
  body.style.overflow = 'hidden';
  chat.style.overflow = 'auto';
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
    rubBalance = document.querySelector('.rub_balance'),
    body = document.querySelector('body'),
    chat = document.querySelector('.chat');
  
  body.style.overflow = '';
  chat.style.overflow = '';
  chatStory.style.display = 'none';
  openArrow.style.display = 'block';
  rubIcon.classList.remove('rub_icon_bg');
  rubBalance.classList.remove('rub_balance_color');
});

/* chat */

$('#emoji').hide();
x = false;

 $('#emoji_btn').click(function(){
    if( x == false){
      $('#emoji').show();
      x=true;
    }else{
      $('#emoji').hide();
      x=false;
    }
 });