var nameInput = $('#name-input');
var emailInput = $('#email-input');
var phoneInput = $('#phone-input');
var messageInput = $('#message-input');
var submitBtn = $('#submit-button');
var looksGoodBtn = $('#looks-good');
var goBackBtn = $('#go-back');

//MODAL
submitBtn.on('click', function(event) {
    event.preventDefault();
    
    //verify name and email fields are not empty
    if (nameInput.val() !== '' && emailInput.val() !== '') {
        //display user's input
        $('#confirmName').text(nameInput.val());
        $('#confirmEmail').text(emailInput.val());
        $('#confirmPhone').text(phoneInput.val());
        $('#confirmMessage').text(messageInput.val());
        $('#btnQuestion').text('Is this correct?');

    } else {
        //deny progress
        var returnMsg = $('<h4>').text('Name and Email are required to submit');
        $('.modal-body').append(returnMsg);
        looksGoodBtn.attr('disabled', true).addClass('noHover');
    }    
})

//misbehaves at this point! When go-back is selected, the submit button function quits working right??
goBackBtn.on('click', function() {
    $('.modal-body').empty();
    $('.form-control').val('');
})

looksGoodBtn.on('click', function() {
    $('modal-body').empty();

    //save to localstorage
    contactInfo = {
        name: nameInput.val(),
        email: emailInput.val(),
        phone: phoneInput.val(),
        message: messageInput.val(),
    };

    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    $('.form-control').val('');

    var thanksMsg = $('<h4>').text('Thank you for your submission!');
    $('form').append(thanksMsg);
})


    
        
        
        

        
    






