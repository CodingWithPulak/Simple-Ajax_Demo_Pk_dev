(function ($) {
    $(document).ready(function () {
        $('#ajax-demo-form').on('submit', function (e) {
            e.preventDefault()
            console.log("form submitted");
            const messagesDiv = $('#ajax-demo-messages');

            const emailInput = $('#newsletter-email');
            const formData = {
                action: 'submit_newsletter',
                newsletter_nonce_field: ajax_demo.nonce,
                newsletter_email: emailInput.val()
            }

            $.post(ajax_demo.ajax_url, formData, function (response) {
                if (response.success) {
                    messagesDiv.html('<div class="ajax-demo-message success">' + response.data + '</div>');
                    emailInput.val(''); // Clear email field on success
                } else {
                    messagesDiv.html('<div class="ajax-demo-message error">' + response.data + '</div>');
                }
            })
        })
    })
})(jQuery);