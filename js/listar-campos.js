function us_ListarCampos(){
    var vartext = ''
    $('.jstree-children a[id^=fields_tit_itens_]').each(function(index,obj){
        vartext += obj.text+'\n'
       
    })
    console.log(vartext)
}

us_ListarCampos()