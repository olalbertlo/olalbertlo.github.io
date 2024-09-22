function ChangeIndex(section) {
    const sections = document.querySelectorAll('.Content-Section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
}