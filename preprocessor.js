function removeAccents(string) {
    string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setOutput($(string));
}

function setOutput(string) {
    $('#output').text(string);
}

$(document).ready(function () {
    $('#input').on('input', function() {
        removeAccents($('#input').val());
    });
});

// Magic comment
