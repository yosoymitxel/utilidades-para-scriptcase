select distinct sga.group_id, sg.description, sga.priv_access, sga.priv_insert, sga.priv_delete, sga.priv_update, sga.priv_export, sga.priv_print  from sec_groups_apps sga 
join sec_apps sa on sa.app_name = sga.app_name 
join sec_groups sg on sg.group_id = sga.group_id  
where sga.app_name in (
	'form_comercial_asociaciones_empleados_agenda'
);
