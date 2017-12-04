$(document).on('ready', function() {
    $(".pending").on("click",function(e) {
        $.ajax({
            type: "GET",
            url: "/",
            data: { 
              filter: 'pending'
            },
            success: function(result) {
                alert('ok');
            },
            error: function(result) {
                alert('error');
            }
        });
    });

    $(".delivered").on("click",function(e) {
        $.ajax({
            type: "GET",
            url: "/",
            data: { 
              filter: 'delivered'
            },
            success: function(result) {
                alert('ok');
            },
            error: function(result) {
                alert('error');
            }
        });
    });

    $("#status").change(function() {
        $.ajax({
            type: "POST",
            url: "/order/" + $(this).className,
            contentType: "application/json",
            data: { 
              status: $('option:selected').text()
            },
            success: function(result) {
                alert('ok');
            },
            error: function(result) {
                alert('error');
            }
        });
    });

})

