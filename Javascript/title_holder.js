function showContent(contentId) {
    var contents = document.querySelectorAll('.sub_content > div');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    var content = document.getElementById(contentId);
    if (content) {
        content.style.display = 'block';
    }
}
