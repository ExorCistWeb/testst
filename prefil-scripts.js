$(".input-clear-button").click(function(e) {
    e.preventDefault();
    $(this).closest(".form-group").find("input").val("");
    $(this).closest(".form-group").find(".input").removeClass("valid");
    $(this).closest(".form-group").find(".input").removeClass("invalid");
});

$(".form-group input").keyup(function() {
    let chabgedInput = $(this);
    let chabgedInputValue = chabgedInput.val();
    if (chabgedInputValue.length >= 1) {
        chabgedInput.closest(".input").addClass("valid");
    } else {
        chabgedInput.closest(".input").removeClass("valid");
        chabgedInput.closest(".input").addClass("invalid");
    }
    if (chabgedInputValue.length < 1) {
        chabgedInput.closest(".input").removeClass("valid");
        chabgedInput.closest(".input").removeClass("invalid");
    }
    validate();
});

$(".js-phone-input").keypress(function(event) {
    event = event || window.event;
    if (
        event.charCode &&
        event.charCode != 0 &&
        event.charCode != 46 &&
        (event.charCode < 48 || event.charCode > 57)
    )
        return false;
});

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

function validate() {
    var email = $(".js-email-input").val();
    if (validateEmail(email)) {
        $(".js-email-input").closest(".form-group").find(".input").addClass("valid");
    } else {
        $(".js-email-input").closest(".form-group").find(".input").removeClass("valid");
        $(".js-email-input").closest(".form-group").find(".input").addClass("invalid");
    }
    return false;
}

$(".js-pickup").click(function(e) {
    e.preventDefault();
    $("#page_box").hide();
    $(".two_modal_icon_Two").hide();
    $(".order-data-wrp").show();
});

$("#agreement__1").click(function(e) {
    if ($(this).prop("checked")) {
        $(".js-submit-button").removeClass("disable");
    } else {
        $(".js-submit-button").addClass("disable");
    }
});

// $(window).scroll(function () {
//     if ($(window).width() <= 992) {
//         var scrollAmount = $(this).scrollTop();
//         console.log(scrollAmount);
//         if (scrollAmount > 470) {
//             $(".cart-form .buttons").addClass("btn-wrp-scrolled");
//             $("#toOfferButton").addClass("btn-scrolled");
//         } else {
//             $(".cart-form .buttons").removeClass("btn-wrp-scrolled");
//             $("#toOfferButton").removeClass("btn-scrolled");
//         }
//     }

// });