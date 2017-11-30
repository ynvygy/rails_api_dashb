$("pending").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/pages/test/",
        data: { 
            id: $(this).val(), // < note use of 'this' here
        },
        success: function(result) {
            alert('ok');
        },
        error: function(result) {
            alert('error');
        }
    });
});