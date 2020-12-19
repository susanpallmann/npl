function setOutput(output) {
    $('#output').text(output);
}

$(document).ready(function() {
    $('#input').on('keyup change paste', 'input, select, textarea', function(){
        console.log("This ran.");
        setOutput($('#input').text());
    });
});

// Magic comment
