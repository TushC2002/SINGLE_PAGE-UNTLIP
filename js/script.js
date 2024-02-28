$(document).ready(function() {
    // Date
    function updateDate() {
        var currentDate = new Date();
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = currentDate.toLocaleDateString('en-US', options);
        $('#current-date').text(formattedDate);
    }
    updateDate();

    // Profile dropdown
    $('#profile-toggle').on('click', function(event) {
        event.stopPropagation();
        $('#profile-dropdown').toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#profile-dropdown').length) {
            $('#profile-dropdown').hide();
        }
    });


    // sidebar-mobile menu
    $('.menu-toggle').on('click', function(event) {
        event.stopPropagation();
        $('.dropdown-menu').toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.sidebar-mobile').length) {
            $('.dropdown-menu').hide();
        }
    });

    // sidebar Menu
    $('.menu a').on('click', function(event) {
        event.preventDefault();
        
        var target = $(this).data('target');
        showTab(target);
    });

    function showTab(tabId) {
        $('.main--content').hide();
        $('#' + tabId).show();

        $('.menu a').each(function() {
            if ($(this).data('target') === tabId) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    // Set default
    showTab('dashboard-content');
});
