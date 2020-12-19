function setOutput(output) {
    $('#output').text(output);
}

$('#input').on('input', function() {
    setOutput($('#input').text());
});

$(document).ready(function () {
    console.log("This ran.");
    
    $('#input').on('input', function() {
        console.log("This ran.");
        setOutput($('#input').text());
    });
});

// Magic comment
