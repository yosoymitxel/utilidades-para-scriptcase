select distinct 
	sga.group_id as "ID", 
	sg.description as "Grupo", 
	sga.priv_access as "Acceso", 
	sga.priv_insert as "Insertar", 
	sga.priv_delete as "Eliminar", 
	sga.priv_update as "Actualizar", 
	sga.priv_export as "Exportar", 
	sga.priv_print  as "Imprimir"
from 
	sec_groups_apps sga 
	join sec_apps sa on sa.app_name = sga.app_name 
	join sec_groups sg on sg.group_id = sga.group_id and (
		priv_access = 'Y' or 
		priv_insert = 'Y' or 
		priv_delete = 'Y' or 
		priv_update = 'Y' or 
		priv_export = 'Y' or 
		priv_print = 'Y'
	)
where sga.app_name in (
	'form_comercial_asociaciones_empleados_agenda'
);
