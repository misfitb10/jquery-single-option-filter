function filter() {
    var $filterButton = $('[data-filter]');
    var $filterResetButton = $('[data-filter="all"]');
    var $filterContentItems = $('[data-filter-content]');

    // Filter button
    $filterButton.on('click', function() {
        var filterName = $(this).data('filter');
        var $filterContent = $("[data-filter-content='" + filterName + "']");

        $filterContent.siblings().addClass('inactive');
        $filterContent.removeClass('inactive');
    });

    // Reset button
    $filterResetButton.on('click', function() {
        $filterContentItems.removeClass('inactive');
    });

    // Remember state
    if (window.location.hash) {
        $('[href="' + window.location.hash + '"]').click();
    }
}

$(function() {
    filter();
});


