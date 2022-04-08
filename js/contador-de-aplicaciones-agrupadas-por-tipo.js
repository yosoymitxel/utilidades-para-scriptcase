var arrGrid = []
var arrCont = []
var arrFrm  = []
var arrPDf  = []

$('tr[id_td_desc^=spn_desc_app] td a[href^=javascript]').each(function(e,o){
    let v = $(o).text()
    //console.log(v)
    //console.log(v.startsWith('frm_'))
    if( !( v.endsWith('_') && v.endsWith('_bkp') && v.startsWith('app_') ) ){
        if(v.startsWith('frm_') || v.startsWith('form_')){
            arrFrm.push(v)
        }else if(v.startsWith('grd_') || v.startsWith('grid')){
            arrGrid.push(v)
        }else if(v.startsWith('ctr_') || v.startsWith('control')){
            arrCont.push(v)
        }else if(v.startsWith('pdf_')){
            arrPDf.push(v)
        }

        
    }
})

console.log(`Grid cantidad: ${arrGrid.length} `)
console.log(`Forms cantidad: ${arrFrm.length} `)
console.log(`Control cantidad: ${arrCont.length} `)
console.log(`PDF cantidad: ${arrPDf.length} `)

console.log(`Cantidad total: ${arrPDf.length + arrFrm.length + arrGrid.length +  arrCont.length} `)
