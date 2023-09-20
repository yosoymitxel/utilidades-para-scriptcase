<?php
// Obtener conexión
	sc_select(rs,"SELECT 1","conn_sybase");
	$host 		= $rs->connection->host; //"dblib:host=10.0.0.27:5000;dbname=dba"
	$user 		= $rs->connection->user; //"root"
	$password 	= $rs->connection->password; //"admin"
	
