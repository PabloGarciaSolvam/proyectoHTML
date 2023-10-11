function changeNavWidth() {
    if (document.getElementById('nav').classList.contains('open')) {
        document.getElementById('nav').classList.remove('open');
        document.getElementById('nav').classList.add('close');
    } else {
        document.getElementById('nav').classList.remove('close');
        document.getElementById('nav').classList.add('open');
    }
}