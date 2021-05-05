var modal = document.getElementById('liability-modal');

var modalCloseBtn = document.getElementById('liability-modal-close');

// Open modal event listener
window.onload = function () {
    var isLiabilityAccepted = localStorage.getItem('liability_accepted') === "true" || false;

    if (!isLiabilityAccepted) {
        modal.classList.add('is-active');
    }
};

var accept_btn = document.getElementById('liability-notice-accept');

modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('is-active');
});

accept_btn.addEventListener('click', function () {
    localStorage.setItem('liability_accepted', true);
    modal.classList.remove('is-active');
});