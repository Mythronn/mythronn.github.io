document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM is fully loaded.");
});



function medievalAlert(message) {
    const modal = document.getElementById('medievalAlert');
    const modalBody = modal.querySelector('.modal-body p');
    modalBody.textContent = message;
    modal.style.display = 'flex';
}
document.getElementById('alertCloseButton').addEventListener('click', function() {
    document.getElementById('medievalAlert').style.display = 'none';
});
