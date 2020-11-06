

/*lightbox*/


  $('.truasted-item').on('click', function() {
       var num_thumbnails = $('.truasted-item').children().length;
       var sr = $(this).children('img').attr('src');
       var clicked_thumbnail_index = $($('.truasted-item')).index(this);


       $('#modal-image').attr('src', sr);
      $('#myModal').modal('show');

  });


/*end lightbox*/

/* show-more */


x=false

$('.more').click(function(){
  if (x==false) {
    $('.table_hide').show(2000);
    x=true;
  }
  else{
    $('.table_hide').hide(2000);
    x=false;
  }
})

$('#btn-1000').click(function(){
  let btn1000 =  $(this).val();
  $(this).addClass('btn-price-bg');
  $('#btn-5000').removeClass('btn-price-bg');
  $('#btn-10000').removeClass('btn-price-bg');
  $(".balanceinp").val(btn1000);
})

$('#btn-5000').click(function(){
  let btn5000 =  $(this).val();
  $(this).addClass('btn-price-bg');
  $('#btn-1000').removeClass('btn-price-bg');
  $('#btn-10000').removeClass('btn-price-bg');
  $(".balanceinp").val(btn5000);
})
$('#btn-10000').click(function(){
  let btn10000 =  $(this).val();
  $(this).addClass('btn-price-bg');
  $('#btn-5000').removeClass('btn-price-bg');
  $('#btn-1000').removeClass('btn-price-bg');
  $(".balanceinp").val(btn10000);
})

/* faq box */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


/* google sign-in */

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

/* drag-drop */

$('#my-awesome-dropzone').click(function(){
  $('#add').hide(5000);
})

$('#feed').hide();

$('#viewfeed').click(function(){
  $('#feed').show(2000);
})

/* burger-menu */

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
