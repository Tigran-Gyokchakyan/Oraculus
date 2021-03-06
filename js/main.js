

/*lightbox*/

$('.truasted-item').on('click', function() {
    var num_thumbnails = $('.truasted-item').children().length;
    var sr = $(this).children('img').attr('src');
    var clicked_thumbnail_index = $($('.truasted-item')).index(this);
    $('#modal-image').attr('src', sr);
    $('#myModal').modal('show');
    $('#myModal').addClass('show');
    $('.modal-backdrop').show();
    $('.show').css('display','block');
});
$('.close').click(function(){
  $('#myModal').removeClass('show');
  $('.modal-backdrop').hide();
  $('#myModal').hide();
  $('body').removeClass('modal-open');
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

/*My account upload*/
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});


/* gallery uploader */

$('#fine-uploader-s3').fineUploaderS3({
  template: 'qq-template-s3',
  request: {
      endpoint: "https://upload.fineuploader.com",
      accessKey: "AKIAJB6BSMFWTAXC5M2Q"
  },
  signature: {
      endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
  },
  uploadSuccess: {
      endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php?success",
      params: {
          isBrowserPreviewCapable: qq.supportedFeatures.imagePreviews
      }
  },
  iframeSupport: {
      localBlankPagePath: "/server/success.html"
  },
  cors: {
      expected: true
  },
  chunking: {
      enabled: true
  },
  resume: {
      enabled: true
  },
  deleteFile: {
      enabled: true,
      method: "POST",
      endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
  },
  validation: {
      itemLimit: 5,
      sizeLimit: 15000000
  },
  thumbnails: {
      placeholders: {
          notAvailablePath: "/server/not_available-generic.png",
          waitingPath: "/server/waiting-generic.png"
      }
  },
  callbacks: {
      onComplete: function (id, name, response) {
          var previewLink = qq(this.getItemByFileId(id)).getByClass('preview-link')[0];

          if (response.success) {
              previewLink.setAttribute("href", response.tempLink)
          }
      }
  }
});