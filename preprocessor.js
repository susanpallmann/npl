function setOutput(output) {
    $('#output').text(output);
}

$(document).ready(function() {
    $('#input').change(function() {
        setOutput($('#input').text());
    });
});

// Magic comment
