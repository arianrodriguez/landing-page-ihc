const button = document.getElementById('button-video');
const modal = document.getElementById('video');
const close_window = document.getElementById('close-window');


button.addEventListener('click', () => {
    modal.showModal();
});

close_window.addEventListener('click', ()=> {
    modal.close();
});