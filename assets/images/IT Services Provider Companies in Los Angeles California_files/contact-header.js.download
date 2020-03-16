(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form-header').find('input,textarea').jqBootstrapValidationHeader({
			preventSubmit: true,
			submitError: function($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function($form, event) {
				event.preventDefault();

				var submit          = $('#contact-form-header submit');
				var ajaxResponse    = $('#contact-response-header');

				var name            = $('#contact-form-header [name="name"]').val();
				var companyname        = $('#contact-form-header [name="companyname"]').val();
				var phone         = $('#contact-form-header [name="phone"]').val();
				var email           = $('#contact-form-header [name="email"]').val();

				$.ajax({
					type: 'POST',
					url: 'assets/php/contact-header.php',
					dataType: 'json',
					data: {
						name: name,
						companyname: companyname,
						email: email,
						phone: phone,
					},
					cache: false,
					beforeSend: function(result) {
						submit.empty();
						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							ajaxResponse.html(result.message);
							$form.fadeOut(500);
						} else {
							ajaxResponse.html(result.message);
						}
					}
				});
			}
		});

	});

})(jQuery);