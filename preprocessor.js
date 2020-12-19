function setOutput(string) {
    $('#output').text(string);
}

function changeContractions(string) {
    string = string.split(' ');
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < contractions.length; j++) {
            let test = string[i];
            test = test.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``);
            console.log(test);
            console.log(string[i]);
            if (contractions[j][0] === test) {
                let state = 0;
                let beginning = [];
                let trailing = [];
                for (var k = 0; k < string[i].length; k++) {
                    if (string[i].charAt(k) === (/[^\w\s]/gi, '')) {
                        if (state === 0) {
                            state = 1;
                            beginning.push(string[i].charAt(k));
                            console.log(beginning);
                        } else if (string[i].charAt(k) === (/'\B|[^a-z'? ]/g, ``)) {
                        } else {
                            state = 3;
                            trailing.push(string[i].charAt(k));
                            console.log(trailing);
                        }
                    }
                }
                string[i] = beginning.join('') + contractions[j][1] + trailing.join('');
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
