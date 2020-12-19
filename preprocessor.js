$(document).ready(function () {
});

function setOutput(output) {
    $('#output').text(output);
}

$('#input').on('input', function() {
    console.log("This ran.");
    setOutput($('#input').val());
});

// Magic comment
