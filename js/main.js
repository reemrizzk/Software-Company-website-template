$(function () {
    var openedr = false;

    var animating = false;

    $(document).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header").css({ "box-shadow": "0px 3px 4px -2px #AAAAAA", background: "rgba(255,255,255,1)", "border-bottom": "0.0625em solid #B0B0B0" });
            $("#header li a").css({ color: "#000000" });
            $("#light-logo").hide();
            $("#dark-logo").show();
            $("#mobile-image").attr("src", "images/menu-dark.png");
        } else {
            $("#header").css({ "box-shadow": "none", background: "transparent", "border-bottom": "none" });
            $("#header li a").css({ color: "#FFFFFF" });
            $("#dark-logo").hide();
            $("#light-logo").show();
            $("#mobile-image").attr("src", "images/menu.png");
        }
    });
});

function subscribe() {
    var dataString = "subscribe=" + $("#sub-email").val();
    $.ajax({
        type: "POST",
        url: "https://example.com",
        data: dataString,
        success: function (response) {
            if (response == "Success") {
                $("#newsletter").html("<p>You have successfully subscribed to our newsletter.</p>");
            } else {
                $("#newsletter-error").html(response);
            }
        },
    });
    return false;
}