function setOutput(output) {
    $('#output').text(output);
}

$(document).ready(function () {
    $('#input').on('input', function() {
        console.log("This ran.");
        setOutput($('#input').val());
    });
});

// Magic comment
