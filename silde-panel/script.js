(() => {

    const button = document.getElementById('button');
    const closeButton = document.getElementById('close');
    const overlay = document.getElementById('overlay');
    const panel = document.getElementById('panel');

    function openPanel() {
        overlay.classList.add('open');
        panel.classList.add('open');
        document.addEventListener('keydown', onKeyDown);
        document.body.classList.add('no-scroll');
    }

    function closePanel() {
        overlay.classList.remove('open');
        panel.classList.remove('open');
        document.removeEventListener('keydown', onKeyDown);
        document.body.classList.remove('no-scroll');
    }

    function onKeyDown(e) {
        console.log('fire')
        if (e.key === 'Escape') {
            closePanel();
        }
    }

    button.addEventListener('click', openPanel);
    overlay.addEventListener('click', () => closePanel());
    closeButton.addEventListener('click', () => closePanel());

})();