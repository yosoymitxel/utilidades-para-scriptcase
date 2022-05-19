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

* Agregar PHPExcel o Bootstrap en ScriptCase — Liberías externas
* Obtener query ejecutado de Scriptcase mediante el código fuente
* Error “Invalid argument supplied for foreach()” en Scriptcase — PDF y posible solución
* Quitar | Deshabilitar botón de Actualizar, Nuevo y Borrar en Scriptcase
* Error formulario de ScriptCase sale pantalla en blanco
* Cambiar tema en aplicación ScriptCase
* Evitar que un formulario haga un Insert, Update o Delete de forma nativa en ScriptCase



