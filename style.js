$(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var selector = $("input:nth-child(1)").val();
        var property = $("input:nth-child(2)").val();
        var value = $("input:nth-child(3)").val();
        $(selector).css(property, value);

    });
});
