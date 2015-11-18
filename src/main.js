if (process.env.NODE_ENV === 'production') {
  require('./analytics');
}
require('./main.css');
var $ = require('jquery');

function onResize() {
  var scrollbar = window.innerWidth - $(window).width();
  var width = $('body').width() + scrollbar;
  var headerImage = $('#header');
  var isSmall = headerImage.attr('src').indexOf('small') > -1;

  if (width >= 768 && isSmall) {
    headerImage.attr('src', './images/header@1x.jpg');
  } else if (width < 768 && !isSmall) {
    headerImage.attr('src', './images/header-small.png');
  }
}

function validateForm() {
  var phoneNumber = $('#phoneNumber').val().replace(/[^0-9a-z\+]/g, '');
  var numReg = new RegExp(/^(\+?[0-9]{0,15})$/);
  var isValid = numReg.test(phoneNumber);
  if (isValid) {
    $('#form-response').addClass('hidden');
    $('#phoneNumber').removeClass('error');
    if (phoneNumber[0] === '+' ? (phoneNumber.length >= 12) : (phoneNumber.length >= 10)) {
      $('.button').addClass('enabled');
    } else {
      isValid = false;
      $('.button').removeClass('enabled');
    }
  } else {
    setError('Phone number is not valid.');
    $('.button').removeClass('enabled');
  }

  return isValid;
}


function setError(error) {
  var response = $('#form-response');
  response.children('p').text(error);
  response.removeClass('success');
  response.removeClass('hidden');
  $('#phoneNumber').addClass('error');
}

function setSuccess(success) {
  var response = $('#form-response');
  response.children('p').text(success);
  response.addClass('success');
  response.removeClass('hidden');
  $('#phoneNumber').removeClass('error');
}

$(document).ready(function() {
  onResize();
  $(window).resize(function() {
    onResize();
  });

  $('#form').submit(function(event) {
    event.preventDefault();
    var isValid = validateForm();
    if (!isValid) {
      return;
    }

    var url = 'https://api.letsroundup.com/waitingList';
    var phoneNumber = $('#phoneNumber').val();
    $('.button').removeClass('enabled');

    var request = $.ajax({
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      url: url,
      data: JSON.stringify({ phoneNumber: phoneNumber }),
      success: function(data) {
        if (data && data.msg === 'Already added.') {
          setError('You\'re already on the waiting list.');
          $('.button').addClass('enabled');
        } else {
          setSuccess('Thanks! We\'ll text you when it\'s your turn.');
        }
      },
      error: function(data, status, error) {
        console.error(data);
        var text;
        try {
          text = JSON.parse(data.responseText);
          text = text && text.error;
        } catch (ex) {
          console.error(ex);
          text = 'Oops, an error occured, please try again later!';
        }
        setError(text);
        $('.button').addClass('enabled');
      }
    });

    request.done (function(data) {
      var response = JSON.parse(data);
    });
  });

  $('#phoneNumber').keyup(function() {
    validateForm();
  });
});
