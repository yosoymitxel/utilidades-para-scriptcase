//Cambia el camelCase de los campos a "Camel Case" o sea separa las mayúsculas
//Se utiliza en la sección de "Editar Campos"

function campoaEtiquetaCamelCase(){
  $('input[id^="id_fld_label_"').each(function(e,o){
    let value = ( $(o).val() ).replace(/([A-Z])/g, " $1")
    .replace(/^./, function(str){ return str.toUpperCase(); })

    $(o).val( ((value).trim().replace(/[\s\t]+/g,' ')).trim() )
      
    $(o).val($(o).val().replace(/^Id\s/g,''))
    //Puedes añadir cambios para por ejemplo quitar texto de la nomenclatura
    //$(o).val($(o).val().replace(/^Id\s/g,''))
    //$(o).val($(o).val().replace(/^I D\s/g,''))
    
    $(o).change()
  })
  
}

campoaEtiquetaCamelCase()
