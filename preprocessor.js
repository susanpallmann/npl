function setOutput(output) {
    $('#output').text(output);
}

$('#input').on('keyup change paste', 'input, select, textarea', function(){
    console.log("This ran.");
    setOutput($('#input').text());
});
// Magic comment
