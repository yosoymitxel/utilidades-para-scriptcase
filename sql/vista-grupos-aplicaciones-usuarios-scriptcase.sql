-- public.v_seguridad_permisos_grupo_apps source

CREATE OR REPLACE VIEW public.v_seguridad_permisos_grupo_apps
AS SELECT DISTINCT sga.group_id AS id,
    sg.description AS grupo,
    sga.app_name,
    sug.login AS user_name,
    su.name AS nombre,
        CASE
            WHEN sga.priv_access::text = 'Y'::text THEN 'Si'::text
            ELSE 'No'::text
        END AS acceso,
        CASE
            WHEN sga.priv_insert::text = 'Y'::text THEN 'Si'::text
            ELSE 'No'::text
        END AS insertar,
        CASE
            WHEN sga.priv_delete::text = 'Y'::text THEN 'Si'::text
            ELSE 'No'::text
        END AS eliminar,
        CASE
            WHEN sga.priv_update::text = 'Y'::text THEN 'Si'::text
            ELSE 'No'::text
        END AS actualizar,
        CASE
            WHEN sga.priv_export::text = 'Y'::text THEN 'Si'::text
            ELSE 'No'::text
        END AS exportar,
        CASE
            WHEN sga.priv_print::text = 'Y'::text THEN 'Si'::text
            ELSE 'No'::text
        END AS imprimir
   FROM sec_groups_apps sga
     JOIN sec_apps sa ON sa.app_name::text = sga.app_name::text
     JOIN sec_groups sg ON sg.group_id = sga.group_id AND (sga.priv_access::text = 'Y'::text OR sga.priv_insert::text = 'Y'::text OR sga.priv_delete::text = 'Y'::text OR sga.priv_update::text = 'Y'::text OR sga.priv_export::text = 'Y'::text OR sga.priv_print::text = 'Y'::text)
     JOIN sec_users_groups sug ON sg.group_id = sug.group_id
     JOIN sec_users su ON sug.login::text = su.login::text AND su.active::text = 'Y'::text;
