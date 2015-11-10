$( document ).ready(function() {
  onResize();

  $( window ).resize(function() {
    onResize();
  });

  function onResize() {
    var scrollbar = window.innerWidth-$(window).width();
    var width = $('body').width() + scrollbar;
    var headerImage = $('#header');
    var isSmall = headerImage.attr('src').indexOf('small') > -1;

    if (width >= 768 && isSmall) {
      headerImage.attr('src', './images/header.png');
    } else if (width < 768 && !isSmall) {
      headerImage.attr('src', './images/header-small.png');
    }
  }

  $("#form").submit(function(event) {
    event.preventDefault();
    var isValid = !validateForm();
    if (!isValid) {
      return;
    }

    var phoneNumber = $("#phoneNumber").val();
    var url = "https://roundup-beta.herokuapp.com/waitingList";
    var data = JSON.stringify({phoneNumber});

    var request = $.ajax({
      method: "POST",
      contentType: "application/json; charset=utf-8",
      url: "https://roundup-beta.herokuapp.com/waitingList",
      data: JSON.stringify({ phoneNumber }),
      success: function(data) {
        if (data && data.msg === 'Already added.') {
          setError('You\'re already on the waiting list.')
        } else {
          setSuccess('Thanks! We\'ll text you when it\'s your turn.')
        }
      },
      error: function(data) {
        var text = JSON.parse(data.responseText);
        setError(text && text.error)
      }
    });

    request.done (function (data) {
      var response = JSON.parse(data);
    });
  });

  $("#phoneNumber").keyup(function() {
    validateForm();
  });

  function validateForm() {
    var phoneNumber = $('#phoneNumber').val();
    var numReg = new RegExp(/^((\+[0-9]{0,15})|([0-9]{0,10}))$/);
    var isValid = numReg.test(phoneNumber);

    if (isValid) {
      $('#response').addClass('hidden');
      $('#phoneNumber').removeClass("error");
      if (phoneNumber[0] === '+' ? (phoneNumber.length >= 12) : (phoneNumber.length === 10)) {
        $('.button').addClass("enabled");
      } else {
        isValid = false;
        $('.button').removeClass("enabled");
      }
    } else {
      setError('Phone number is not valid.');
      $('.button').removeClass("enabled");
    }

    return isValid;
  }


  function setError(error) {
    var response = $('#response');
    response.children('span').text(error);
    response.removeClass("hidden success");
    $('#phoneNumber').addClass("error");
  }

  function setSuccess(success) {
    var response = $('#response');
    response.children('span').text(success);
    response.addClass("success");
    response.removeClass("hidden");
    $('#phoneNumber').removeClass("error");
  }
});
