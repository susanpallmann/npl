function setOutput(output) {
    $('#output').text(output);
}

$('#input').on('input', function() {
    setOutput($('#input').text());
});

$(document).ready(function () {
    console.log("This ran.");
});

// Magic comment
