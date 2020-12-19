function setOutput(string) {
    $('#output').text(string);
}

function removeAccents(string) {
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setOutput(string);
}

$(document).ready(function () {
    $('#input').on('input', function() {
        removeAccents($('#input').val());
    });
});

// Magic comment
