# Utilidades para ScriptCase
Aquí encontraras HTMLs que poseen funciones o cosas similares para facilitarte ordenamiento de código y cosas asociadas a scriptcase

# Utilidades ScriptCase
Los archivos en JS se ejecutan dentro de la consola.

Los html tienen funciones específicas.

# Aplicaciones

## ConseguirTitulosNombreAppDeMenuSC
Sirve al abrir un "app_menu" este te sirve para de una sola vez traer una lista con todos los nombres de las aplicaciones y los enlaces de estas "Reporte persona - grid_persona".

## Contador de aplicaciones agrupadas por tipo
En el inicio del entorno de desarrollo al darle a "todas las aplicaciones" dentro de un proyecto este te retorna un lista contador del tipo de aplicaciones que hay en este.

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







