$(document).on('ready', function() {
    $(".pending").on("click",function(e) {
        $.ajax({
            type: "GET",
            url: "/dashboard/index",
            data: { 
              filter: pending
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
            url: "/dashboard/index",
            data: { 
              filter: delivered
            },
            success: function(result) {
                alert('ok');
            },
            error: function(result) {
                alert('error');
            }
        });
    });

    $(".status").on("change",function(e) {
        $.ajax({
            type: "POST",
            url: "/order/" + order_id,
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
        $('status#{order_id}').text($('#newstatus2#{order_id}').text) 
    });
})