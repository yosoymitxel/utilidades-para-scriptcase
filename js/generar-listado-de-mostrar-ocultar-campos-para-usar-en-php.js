function generarLista(arr){
    let text = '$campos = [\n'
    
    for(let a of arr){
        a = (a).trim()
        text += `    '${a}',\n`
    }

    text += '];\n'

    
    text += `
        $camposIndefinidos = [];
        $camposDefinidos   = [];
        
        \/\/ Se agrupan la lista de los campos a los cuales se le definió 
        foreach($camposConEstados as $campo){
        	$camposDefinidos[] = $campo[0];
        }
        
        foreach($campos as $campo){
        	if(!in_array($campo,$camposDefinidos)){
        		$camposIndefinidos[] = [$campo,false,false];
        	}
        	
        }
        
        $camposConEstados = array_merge($camposConEstados,$camposIndefinidos);
        
        foreach($camposConEstados as $campo){	
            switch($campo[0]){
    		\/\/ $campo[1] Muestra el campo
    		\/\/ $campo[2] Activa el campo\n`
    
        for(let a of arr){
            a = (a).trim()
             text +=`
                case '${a}':
        			if($campo[1]){
        				sc_field_display({${a}}, on);
                    }else{
        				sc_field_display({${a}}, off);
        			}
    			
        			if($campo[2]){
        				sc_field_readonly({${a}}, off);
        			}else{
        				sc_field_readonly({${a}}, on);
        			}
        			break;\n`
        }


    text += `		
        	}
        	
        }
        `
    console.log(text)
    
}

generarLista([
    'CedulaRUC',
    'DV',
    'IdEntidadTipo',
    'IdClienteTipo ',
    'IdEntidadTipoContribuyente',
    'RazonSocial',
    'Nombre',
    'Apellido',
    'NombreFantasia',
    'Nacionalidad',
    'FechaNacimiento',
    'Sexo',
    'IdEstadoCivil',
    'IdClienteASO ',
    'CodigoSocio ',
    'GCodGestionAso '
])

// El resultado se copia en una función en php 
