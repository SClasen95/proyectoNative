const rp=require("axios");

function convertir(monedaBase){
    var url="https://v6.exchangerate-api.com/v6/7b3ab2ed414971431890f085/latest/"+monedaBase;
    return rp.get(url);
}
module.exports=convertir;