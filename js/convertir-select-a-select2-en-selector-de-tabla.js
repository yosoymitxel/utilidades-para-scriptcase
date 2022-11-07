/*

Se usa en los apartados que listan las tablas de nuestra DB por ejemplo cuando creamos una nueva aplicación.

Esta permite usar un buscador para hallar más facilmente la tabla que deseamos.

*/

function selectToSelect2(id='sel_def_table'){
  $('head').append(`<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>`);
  $('#'+id).select2();
}

selectToSelect2()
