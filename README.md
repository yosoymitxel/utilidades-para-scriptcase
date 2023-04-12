# Utilidades para ScriptCase
Aquí encontraras HTMLs que poseen funciones o cosas similares para facilitarte ordenamiento de código y cosas asociadas a scriptcase

# Utilidades ScriptCase
Los archivos en JS se ejecutan dentro de la consola.

Los html tienen funciones específicas.

# Aplicaciones

## Conseguir títulos nombre apps del menú
Sirve al abrir un "app_menu" este te sirve para de una sola vez traer una lista con todos los nombres de las aplicaciones y los enlaces de estas "Reporte persona - grid_persona".
Al finalizar retorna 2 arrays y copia en el portapapeles estos.

## Contador de aplicaciones agrupadas por tipo
En el inicio del *entorno de desarrollo* al darle a *"todas las aplicaciones"* dentro de un proyecto este te retorna un lista contador del tipo de aplicaciones que hay en este.

### Ejemplo
Proyecto: FactuSD 

* Grid cantidad: 424 
* Forms cantidad: 256 
* Control cantidad: 43 
* PDF cantidad: 16 
* Cantidad total: 739 

## Quitar inicial numérica lib interna
Esto es más que nada para cuando quieres copiar código de una librería interna y sale así:

```
1| if($rs){
2|     echo 'prueba';    
3| }
```

Y te retorna:

```
if($rs){
    echo 'prueba';    
}
```

## Listar campos
Dentro del entorno de desarrollo al abrir un proyecto y luego una aplicación con este se listará el nombre de cada uno de los campos que usa la app

* archivo
* nombre
* tabla
* delimitador

## Procesar nombre archivo
Este sirve para cuando tenemos una imagen temporal y queremos acceder a esta.

Scriptcase de forma interna gestiona con expresiones como "\_\_SC_SPACE\_\_" que tiene un equivalente en texto normal en este caso por ejemplo " "

# Extra: Tutoriales de solución de errores de ScriptCase

En mi medium suelo subir soluciones a errores de ScriptCase con los que me voy encontrando

https://medium.com/@yosoymitxel

## Lista

https://medium.com/@yosoymitxel/list/tutoriales-en-espanol-de-scriptcase-139a51d40311

## Errores:

* Agregar PHPExcel o Bootstrap en ScriptCase — Liberías externas [Leer post](https://medium.com/@yosoymitxel/agregar-phpexcel-o-bootstrap-en-scriptcase-liberías-externas-tutorial-en-español-28d5c2951c52)
* Obtener query ejecutado de Scriptcase mediante el código fuente [Leer post](https://medium.com/@yosoymitxel/obtener-query-ejecutado-de-scriptcase-mediante-el-código-fuente-af00920619f4)
* Error “Invalid argument supplied for foreach()” en Scriptcase — PDF y posible solución [Leer post](https://medium.com/@yosoymitxel/error-invalid-argument-supplied-for-foreach-en-scriptcase-pdf-y-posible-solución-ea8e68a8fb68)
* Quitar | Deshabilitar botón de Actualizar, Nuevo y Borrar en Scriptcase [Leer post](https://medium.com/@yosoymitxel/quitar-deshabilitar-botón-de-actualizar-nuevo-y-borrar-en-scriptcase-tutorial-en-español-1fd6ec053ec8)
* Error formulario de ScriptCase sale pantalla en blanco [Leer post](https://medium.com/@yosoymitxel/error-formulario-de-scriptcase-sale-pantalla-en-blanco-4567b408cf70)
* Cambiar tema en aplicación ScriptCase [Leer post](https://medium.com/@yosoymitxel/cambiar-tema-en-aplicación-scriptcase-7e4a1fce92f)
* Evitar que un formulario haga un Insert, Update o Delete de forma nativa en ScriptCase [Leer post](https://medium.com/@yosoymitxel/evitar-que-un-formulario-haga-un-insert-update-o-delete-de-forma-nativa-en-scriptcase-tutorial-159ef2c2de04)
* Error en “Clasificación” en aplicaciones del tipo Formulario con Grid View y Grid editable no ordena en Scriptcase [Leer post](https://yosoymitxel.medium.com/error-en-clasificaci%C3%B3n-en-aplicaciones-del-tipo-formulario-con-grid-view-y-grid-editable-no-df108268a1ea)
* Quitar | Deshabilitar botón de Actualizar en un Formulario del tipo Grid editable en Scriptcase [Leer post](https://medium.com/@yosoymitxel/quitar-deshabilitar-bot%C3%B3n-de-actualizar-en-un-formulario-del-tipo-grid-editable-en-scriptcase-3e5551f96b1c)
* Cómo totalizar campos del tipo date y time en un GRID de Scriptcase con Agrupación dinámica [Leer post](https://medium.com/@yosoymitxel/c%C3%B3mo-totalizar-campos-del-tipo-date-y-time-en-un-grid-de-scriptcase-con-agrupaci%C3%B3n-din%C3%A1mica-188938391353)







