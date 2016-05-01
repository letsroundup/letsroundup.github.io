// JavaScript Document
jQuery(window).load(function(){
    // will fade out the whole DIV that covers the website.
    jQuery(".preloader").fadeOut("slow");
});

jQuery(document).ready(function ($) {
    'use strict';
    var $document =  $(document);
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // collapsed menu close on click
    $document.on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    // Android animation
    $document.on('click', '#android', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
            $('#android').hide();
            $('.waitinglistForm').fadeIn(1000);
        }
    });

    // add white background to nav with scrolling
    if ($(window).scrollTop() > 50) {
        $(".sticky-navigation").addClass("NavBg");
    }
    else {
        $(".sticky-navigation").removeClass("NavBg");
    }
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            $(".sticky-navigation").addClass("NavBg");
        }
        else {
            $(".sticky-navigation").removeClass("NavBg");
        }
    });

    // input , text area placeholder on browsers
    // $('input, textarea').placeholder();

    var androidLinks = {
        twitter: 'https://1pd8.app.link/wLgpeU6nXs',
        facebook: 'https://1pd8.app.link/ew3FgU6nXs',
        googleplus: 'https://1pd8.app.link/DPS6fU6nXs',
        pinterest: 'https://1pd8.app.link/kXF7dU6nXs',
        email: 'https://1pd8.app.link/TW5PdU6nXs',
    }

    var shareSectionLinks = {
        twitter: 'https://1pd8.app.link/G7us6T6nXs',
        facebook: 'https://1pd8.app.link/Jwh99T6nXs',
        googleplus: 'https://1pd8.app.link/76tydU6nXs',
        pinterest: 'https://1pd8.app.link/T5uS7T6nXs',
        email: 'https://1pd8.app.link/G3R6fU6nXs',
    }

    function makeShares(links) {
        var types = [
            "twitter",
            "facebook",
            "googleplus",
            "pinterest",
            "email",
        ];

        // override texts texts & other stuff
        var config = {
            twitter: {
                hashtags: 'rdvoo',
            },
        };
        var defaultText = "I just subscribed to this new app! We should use it next time we plan something!";
        var socials = {
            url: "https://1pd8.app.link/cXtb501wVs  ",
            text: defaultText,
            showLabel: false,
            showCount: false && "inside",
            shares: types.map(function (t) {
                return $.extend({
                    share: t,
                    url: links[t],
                }, config[t]);
            }),
        }
        return socials;
    }

    $("#shareIconsCountInside").jsSocials(makeShares(shareSectionLinks));
    $("#shareIconsAndroid").jsSocials(makeShares(androidLinks));

    var scrollspyTimeout;
    var nav = $('#scrollspy-nav');
    nav.on('activate.bs.scrollspy', function(ev) {
        var href = nav.find('.active a').attr('href');
        if (scrollspyTimeout) {
            clearTimeout(scrollspyTimeout);
            scrollspyTimeout = null;
        }
        scrollspyTimeout = setTimeout(function() {
            var newHref = nav.find('.active a').attr('href');
            scrollspyTimeout = null;
            if (href === newHref) {
                window.ga('send', 'pageview', href);
            }
        }, 300);
    });
    // Menu clicks
    $document.on('click', '.navbar-nav', function (e) {
        window.ga('send', 'event', 'navigation', $(e.target).attr('href'));
    });

    // Tag download top button
    $document.on('click', '#download-top', function (e) {
        window.ga('send', 'event', 'click', 'download', 'top');
    });

    // Tag download bottom button
    $document.on('click', '#download-bottom', function (e) {
        window.ga('send', 'event', 'click', 'download', 'bottom');
    });

    // Tag Android User button
    $document.on('click', '#android', function (e) {
        window.ga('send', 'event', 'click', 'android-user');
    });

    // Send contact form
    // Send Android email
    // See in the form itself

    // Parsing sharing function
    function getSocialSharedLink(className) {
        var social;

        if (className.indexOf('facebook') > -1) {
            social = 'Facebook'
        } else if (className.indexOf('email') > -1) {
            social = 'Email';
        } else if (className.indexOf('pinterest') > -1) {
            social = 'Pinterest';
        } else if (className.indexOf('googleplus') > -1) {
            social = 'Google';
        } else if (className.indexOf('twitter') > -1) {
            social = 'Twitter';
        }

        return social;
    }

    // Android Tag shared clicks
    $document.on('click', '#shareIconsAndroid', function (e) {
        var social = $(e.target).parents('.jssocials-share') && $(e.target).parents('.jssocials-share')[0]
            && getSocialSharedLink($(e.target).parents('.jssocials-share')[0].className);
        if (social) {
            window.ga('send', 'social', social, 'share-android', androidLinks[social]);
        }
    });

    // Tag shared clicks
    $document.on('click', '#shareIconsCountInside', function (e) {
        var social = $(e.target).parents('.jssocials-share') && $(e.target).parents('.jssocials-share')[0]
            && getSocialSharedLink($(e.target).parents('.jssocials-share')[0].className);
        if (social) {
            window.ga('send', 'social', social, 'share', shareSectionLinks[social]);
        }
    });


}); // end Document.ready

/* wow animation put it after Document.ready  */
wow = new WOW(
{
    mobile: false
});
wow.init();


function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

// Contact Form
jQuery(document).on('submit', '#contactForm', function (e) {
    e.preventDefault();
    var name = jQuery("#name").val();
    var email = jQuery("#email").val();
    var message = jQuery("#message").val();

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        window.ga('send', 'event', 'click', 'send-feedback');
        jQuery.ajax({
            type: "POST",
            contentType: 'application/json; charset=utf-8',
            url: "https://api.letsroundup.com/feedback",
            data: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').hide();
            }
        });
    } else {
        jQuery('.error').fadeIn(1000);
        jQuery('.success').hide();
    }
    return false;
});

// Waitinglist Form
jQuery(document).on('submit', '#waitlisted', function (e) {
    var minPosition = 150;
    e.preventDefault();
    var email = $("#subscriber-email").val();

    function onSuccess(message) {
        jQuery('.subscription-success').html('<i class="icon_close_alt2"></i><br/>' + message).fadeIn(1000);
        jQuery('#androidShare').fadeIn(1000);
        jQuery('.subscription-error').hide();
    }

    function onError(message) {
        jQuery('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + message).fadeIn(1000);
        jQuery('#androidShare').hide();
        jQuery('.subscription-success').hide();
    }

    if (isValidEmail(email)) {
        window.ga('send', 'event', 'click', 'waitlist');
        jQuery.ajax({
            type: "POST",
            contentType: 'application/json; charset=utf-8',
            url: "https://voo-android.app.waitlisted.co/api/v1/reservation",
            data: JSON.stringify({
                email: email,
            }),
            success: function (res) {
                var position = res && res.reservation && res.reservation.position;
                var message = 'Thanks! We\'ll email you when the Android app is available.';
                if (position && position > minPosition) {
                    message = 'Thanks! You\'re at position <b class="textBlue">' + position + '</b>. We\'ll email you when the Android app is available.';
                }
                onSuccess(message);
            },
            error: function (res) {
                if (res && res.responseText.indexOf('has already been taken') > -1) {
                    jQuery.ajax({
                        type: "GET",
                        contentType: 'application/json; charset=utf-8',
                        url: "https://voo-android.app.waitlisted.co/api/v1/reservation?email=" + email,
                        success: function (res) {
                            var position = res && res.reservation && res.reservation.position;
                            var message = 'Already added. We\'ll email you when the Android app is available.';
                            if (position && position > minPosition) {
                                message = 'Already added. You\'re at position <b class="textBlue">' + position + '</b>.'
                            }

                            onSuccess(message);
                        },
                        error: function (res) {
                            onError('Something went wrong. Try again later.');
                        }
                    });
                } else {
                    onError('Something went wrong. Try again later.');
                }
            }
        });
    } else {
        onError('The email is not valid.');
    }
    return false;
});


