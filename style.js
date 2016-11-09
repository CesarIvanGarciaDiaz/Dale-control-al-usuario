$(function(){
  $('form').submit(function(event){
    //al enviar submit del formulario(form)
    event.preventDefault();
    //Si se llama a este método, la acción predeterminada del evento no se activará.
    var selector = $("#style_editor").find("input:nth-child(1)").val();
    var property = $("#style_editor").find("input:nth-child(2)").val();
    var value = $("#style_editor").find("input:nth-child(3)").val();
    // agrega las variables  del formulario utilizando nth-child para tomar los hijos del form
    // FIND
    //https://api.jquery.com/find/
    //example $( "p" ).find( spans ).css( "color", "red" );
    // https://api.jquery.com/all-selector/
    //ALL
    // var elementCount = $( "*" ).css( "border", "3px solid red" ).length;
    // $( "body" ).prepend( "<h3>" + elementCount + " elements found</h3>" );
    $("*").find(selector).css(property,value);

  });
});
