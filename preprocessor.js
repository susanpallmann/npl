function setOutput(string) {
    $('#output').text(string);
}

function changeContractions(string) {
    string = string.split(' ');
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < contractions.length; j++) {
            string[i] = string[i].toLowerCase().replace(/'\B|[^a-z'? ]/g, ``);
            if (contractions[j][0] === string[i]) {
                string[i] = contractions[j][1];
            }
        }
    }
    string = string.join(' ');
    setOutput(string);
}

function removeAccents(string) {
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    changeContractions(string);
}

$(document).ready(function () {
    $('#input').on('input', function() {
        removeAccents($('#input').val());
    });
});

// Magic comment
