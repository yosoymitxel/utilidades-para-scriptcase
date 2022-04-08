function getTituloNombreApp(){
        let re = /=(grd|form|frm|control|ctr|ctrl|grid|menu|proc|app|Ctr|dashboard)_(\w)+/;
        let obviar = /(#)/;
        var tituloApp = [];
        var nombreApp = [];

        console.log($('.topmenu .toproot ul li a'))

        $('.topmenu .toproot ul li a').each(function( index ) {
            console.log( index + ": " + $( this ).text() );
            let titulo = $( this ).text();
            let href   = $( this ).attr('item-href');
            console.log(href);
            //console.info(re.exec(href));
            if(!href.match(obviar)){
                tituloApp.push( titulo );
                console.log(!(re.exec(href)))
                nombreApp.push( (re.exec(href) ? (re.exec(href)[0]).substr(1) : 'NO SE HA ENCONTRADO ENLACE: '.href) );
            }
            console.info('Se guardó\n');
        });
        console.log(tituloApp);
        console.log(nombreApp);

        //Copiar en portapapeles
        let dato = '';

        for (let i=0;i<tituloApp.length;i++){
            dato += `${i+1}\n${tituloApp[i]}\n${nombreApp[i]}\n`;
        }

        let $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(dato).select();
        document.execCommand("copy");
        $temp.remove();
        return true;
    }
    
    getTituloNombreApp()
