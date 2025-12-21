(() => {

    const button = document.getElementById('button');
    const overlay = document.getElementById('overlay');
    const panel = document.getElementById('panel');

    function openPanel() {
        overlay.classList.add('open');
        panel.classList.add('open');
        document.addEventListener('keydown', onKeyDown);
    }

    function closePanel() {
        overlay.classList.remove('open');
        panel.classList.remove('open');
        document.removeEventListener('keydown', onKeyDown);
    }

    function onKeyDown(e) {
        console.log('fire')
        if (e.key === 'Escape') {
            closePanel();
        }
    }

    button.addEventListener('click', openPanel);
    overlay.addEventListener('click', () => closePanel());

})();