(() => {

    const button = document.getElementById('button');

    function openPanel() {
        alert("Opened panel")
    }

    button.addEventListener('click', openPanel);

})();