var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + '| Modelo: ' + this.modelo + ' | color: ' + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(bici){
    Bicicleta.allBicis.push(bici);
}

Bicicleta.removeById = function(biciId){
    for(var i=0; i<Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == biciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

Bicicleta.findById = function(biciId){
    var bici = Bicicleta.allBicis.find(x => x.id == biciId);
    if (bici)
        return bici; 
    else
        throw new Error(`No existe una bicicleta con el id ${biciId}`);
}

Bicicleta.add = function(bici){
    Bicicleta.allBicis.push(bici);
}

// var b1 = new Bicicleta(1, 'Rojo', 'Urbana', [-34.6012424, -58.3861497]);
// var b2 = new Bicicleta(2, 'Azul', 'Urbana', [-34.596932, -58.3808287]);


// Bicicleta.add(b1);
// Bicicleta.add(b2);
// Bicicleta.allBicis.sort();

module.exports = Bicicleta;