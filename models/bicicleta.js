var bicicleta = function (id, color, modelo, ubicacion) {
    this.id= id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;

}

bicicleta.prototype.toString = function (){
    return 'id: '+ this.id + ' | color: '+ this.color;
}

bicicleta.allbicis = [];
bicicleta.add = function(abici){
    bicicleta.allbicis.push(abici);
}

bicicleta.findById = function(abiciID){
    var abici = bicicleta.allbicis.find(x => x.id == abiciID);
    if (abici)
        return abici;
    else    
        throw new Error(`No existe una bicicleta con el id ${abiciID}`);

}


bicicleta.removeById = function(abiciID){
    for(var i = 0; i < bicicleta.allbicis.length; i++){
        if (bicicleta.allbicis[i].id == abiciID){
            bicicleta.allbicis.splice(i,1);
            break;
        }
    }
}




var a = new bicicleta(1, 'rojo', 'urbana', [-25.512054, -57.363918]);
var b = new bicicleta(2, 'blanca', 'urbana', [-25.511628, -57.364787]);

bicicleta.add(a);
bicicleta.add(b);


module.exports = bicicleta;