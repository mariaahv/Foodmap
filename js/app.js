$(document).ready(function(){
    $('.gmaps').gmaps();
    $("#img1").mouseover(function(){
        $("#img1 ").css("width", "50%");
    });
    $('#img1').mouseout(function()
         {
      $("#img1").css("width", "28%");
    });


  var $container=$('#restaurants');
  function showRestaurantes(){
  for(var i=0 ;i<data.length;i++){
    var $containerPlates=$('<div></div>');
    $containerPlates.addClass(' lista col-xs-6 col-md-5 container-images');
    $containerPlates.attr('data-name',data[i].name);
    $containerPlates.attr('data-toggle','modal');
    $containerPlates.attr('data-target','#myModal');
    $container.append($containerPlates);

   var $Name=$('<h1></h1>');
   $Name.text(data[i].name);
   $containerPlates.append($Name);
   var $img = $('<img/>');
   $img.addClass('images-data');
   $img.attr('src', data[i].image);
   $containerPlates.append($img);
  }
}
 // llamando ala funcion
  showRestaurantes();

  //filtrar
  $('#search').keyup(function(){
    var name =$(this).val();
    $('.lista').hide();
    $('.lista').each(function(){
      var busqueda =$(this).text();
      if(busqueda.indexOf(name)!== -1){
        $(this).show();
      }
    })
  })
});
