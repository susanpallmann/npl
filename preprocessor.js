$(document).ready(function () {
    console.log("This ran.");
    
    function setOutput(output) {
        $('#output').text(output);
    }
    
    $('#input').on('input', function() {
        console.log("This ran.");
        setOutput($('#input').val());
    });
});

// Magic comment
