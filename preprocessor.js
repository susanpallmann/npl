function setOutput(string) {
    $('#output').text(string);
}

function changeContractions(string) {
    string = string.split(' ');
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < contractions.length; j++) {
            let test = string[i];
            string[i].toLowerCase();
            test = test.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``);
            console.log(test);
            console.log(string[i]);
            if (contractions[j][0] === test) {
                let state = 0;
                let beginning = [];
                let trailing = [];
                for (var k = 0; k < string[i].length; k++) {
                    console.log(string[i].charAt(k));
                    console.log(/[^\w\s]/gi.test(string[i].charAt(k)));
                    if (/[^\w\s]/gi.test(string[i].charAt(k))) {
                        if (k === 0) {
                            state = 1;
                            beginning.push(string[i].charAt(k));
                            console.log(beginning);
                        } else if (/^[a-zA-Z]+$/.test(string[i].charAt(k - 1)) && /^[a-zA-Z]+$/.test(string[i].charAt(k + 1))) {
                            state = 2;
                        } else if (state === 1) {
                            beginning.push(string[i].charAt(k));
                        } else {
                            state = 3;
                            trailing.push(string[i].charAt(k));
                            console.log(trailing);
                        }
                    } else {
                        state = 2;
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
