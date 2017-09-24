function InitFilter() {
    // Buttons
    var $filterButton = $('[data-filter]');
    var $filterResetButton = $('[data-filter="all"]');

    // Enable filter button
    $filterButton.on('click', enableFilter);

    // Reset filter button
    $filterResetButton.on('click', resetFilter);

    // Remember state
    if (window.location.hash) {
        $('[href="' + window.location.hash + '"]').click();
    }
}

function resetFilter() {
    var $filterContentItems = $('[data-filter-content]');
    $filterContentItems.removeClass('inactive');
}

function enableFilter() {
    var filterName = $(this).data('filter');
    var $filterContent = $("[data-filter-content='" + filterName + "']");

    $filterContent.siblings().addClass('inactive');
    $filterContent.removeClass('inactive');
}

$(function() {
    InitFilter();
});
