document.addEventListener('DOMContentLoaded', () => {
    // MSEMOJI
    msemoji.parse(document.body, {
        folder: '3D'
    });

    // SAKURA
    new Sakura('html');
});