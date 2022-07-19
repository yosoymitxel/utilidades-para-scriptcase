//Sirve para poner títulos de forma automatizada en el apartado de "crear campo"
//En el ejemplo se generaron 19 registros
//Se le pasó un array con 19 títulos y estos rellenaron con el contenido de este


function nuevoCampoRellenarNombre(nombres){
$('input.nmInput[name^="Campo"]').each(function(e,o){
        $(o).val(nombres[e])
    })
}

let nombres = [ "IdEntidad",
       "IdEntidadTipo",
       "CedulaRUC",
       "DV",
       "RazonSocial",
       "Nombre",
       "Apellido",
       "NombreFantasia",
       "CreadoPor",
       "FechaCreacion",
       "ModificadoUltimoPor",
       "FechaUltimaModificacion",
       "Estado",
       "IdEntidadGrupoSanguineo",
       "Sexo",
       "IdEstadoCivil",
       "Nacionalidad",
       "FechaVencimientoDocumento",
       "FechaNacimiento"]


nuevoCampoRellenarNombre(nombres)
