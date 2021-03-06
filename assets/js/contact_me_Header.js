// Contact Form Scripts

$(function() {

    $("#signupFormHeader input,#signupFormHeader textarea").jqBootstrapValidationHeader({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var company = $("input#company").val();
            var email;
            if ($("input#email").val() != ''){
                email = $("input#email").val();    
            } else {

                email = 'null@prolinksystems.com';

            }
            var phone;
            if ($("input#phone").val() != ''){
                phone = $("input#phone").val();    
            } else {

                phone = '000000000';

            }
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            
            $.ajax({
                url: "././mail/contact_me_header.php",
                type: "POST",
                data: {
                    name: name,
                    company: company,
                    phone: phone,
                    email: email
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    // Google Analytics Trigger
                    $('#success > .alert-success')
                        ga('send', 'event', 'success', 'success');

                    //clear all fields
                    $('#signupFormHeader').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#signupFormHeader').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
