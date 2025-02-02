
document.getElementById('setupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;
    form.classList.add('submitted');
    setTimeout(function () {
        form.style.display = 'none';
        document.getElementById('webpagesSection').style.display = 'block';
    }, 500);
});

function fetchMetaDescription() {
    var url = document.getElementById('companyUrl').value;

    setTimeout(function () {
        document.getElementById('companyDescription').value = "Auto-fetched meta-description for " + url;
    }, 1000);
}


