//navlinks nav a
$(document).ready(function() {
    const navLinks = $('.nav-link');
    navLinks.each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();

            const target = $(this).data('target');
            showTab(target);
        });
    });

    function showTab(tabId) {
        $('.tab-pane').css('display', 'none');

        const selectedTabPane = $('#' + tabId);
        if (selectedTabPane.length) {
            selectedTabPane.css('display', 'block');
        }

        $('.nav-link').each(function() {
            if ($(this).data('target') === tabId) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

   
    // nav toggle Daily&Monthly
    const toggleButtons = $('.toggle-btn');

    toggleButtons.each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            toggleButtons.removeClass('active');

            $(this).addClass('active');
        });
    });
     // default
    showTab('allorders');
});
