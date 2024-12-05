function showSection(sectionId) {

    document.querySelectorAll('.page').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
}