function getTituloNombreApp(enumerar=true,delimitador='\n',copiarPortapapeles=true){
        let re        = /=(grd|form|frm|control|ctr|ctrl|grid|menu|proc|app|Ctr|dashboard)_(\w)+/
        let obviar    = /(#)/
        var tituloApp = []
        var enlaceApp = []
        var listaApps = $('.topmenu .toproot ul li a')
    
        console.log(listaApps)
    
        if(listaApps){
            //Bucle de listado de aplicaciones
            $(listaApps).each(function( index ) {
                /*Debug: Obtener titulo*/
                //console.log( index + ": " + $( this ).text() );
                
                let titulo = $( this ).text();
                let href   = $( this ).attr('item-href');
                
                /*Debug: Obtener el enlace*/
                //console.log(href);
    
                //Se obvian los titulos superiores
                if(!href.match(obviar)){
                    tituloApp.push( titulo );
                
                    //Se buscan los nombres de apps en base a la nomenclatura (Ejemp: form_)
                    enlaceApp.push( (re.exec(href) ? (re.exec(href)[0]).substr(1) : 'NO SE HA ENCONTRADO ENLACE: '.href) );
                }
                
            });
            console.log(tituloApp);
            console.log(enlaceApp);
    
            //Copiar en portapapeles
            if(copiarPortapapeles){
                let dato = '';
    
                for (let i=0;i<tituloApp.length;i++){
                    let contador = enumerar ? (i + 1)+delimitador : ''
                    dato += `${contador}${tituloApp[i]}${delimitador}${enlaceApp[i]}\n`;
                }
        
                let $temp = $("<textarea>");
                $("body").append($temp);
                $temp.val(dato).select();
                document.execCommand("copy");
                $temp.remove();
            }
            
            return [tituloApp,enlaceApp];
        }

        
    }
    
    getTituloNombreApp()
