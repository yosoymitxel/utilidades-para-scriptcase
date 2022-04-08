<?php
function procesar_nombre_archivo($t){
		$arrayEncript    = [
			'/var/www/html',
			'__SC_SPACE__',
			'__SC_MINUS__',
			'__SC_PARENTHESIS_OPEN__',
			'__SC_PARENTHESIS_CLOSE__',

		];
		$arrayDesEncript = [
			'',
			' ',
			'-',
			'(',
			')'

		];

		for($i=0,$imax = count($arrayEncript); $i<$imax; $i++){
			$t = str_replace($arrayEncript[$i],$arrayDesEncript[$i],$t);

		}

		return $t;
	}
