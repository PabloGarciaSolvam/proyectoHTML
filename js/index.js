const $ = (selector) => document.querySelector(selector);

function changeNavWidth() {
    if ($('aside').classList.contains('active')) {
        $('aside').classList.remove('active');
        $('.toggleSidebar').classList.remove('active');
    }
    else {
        $('aside').classList.add('active');
        $('.toggleSidebar').classList.add('active');
    }
}

function hrefTo(link) {
    window.location.replace(link);
}