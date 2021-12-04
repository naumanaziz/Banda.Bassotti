const { v4: uuidv4 } = require('uuid');
var tratte = [
    {
        id: '1',
        aereo: '1', 
        compagniaId: '2',
        partenze: [
            {
                giorno: 1,
                ora: new Date().getTime(),
                prezzo: 50.10
            },
            {
                giorno: 4,
                ora: new Date().getTime(),
                prezzo: 50.10
            }
        ],
        durata: 50, //minuti
        distanza: 10        
    },
    {
        id: '2',
        aereo: '1', 
        compagniaId: '2',
        partenze: [
            {
                giorno: 1,
                ora: new Date().getTime(),
                prezzo: 50.10
            },
            {
                giorno: 4,
                ora: new Date().getTime(),
                prezzo: 50.10
            }
        ],
        durata: 50, //minuti
        distanza: 10        
    },
    {
        id: '2',
        aereo: '1', 
        compagniaId: '2',
        partenze: [
            {
                giorno: 1,
                ora: new Date().getTime(),
                prezzo: 50.10
            },
            {
                giorno: 4,
                ora: new Date().getTime(),
                prezzo: 50.10
            }
        ],
        durata: 50, //minuti
        distanza: 10        
    }
]
 
function findById(id){
    return tratte.find(x => x.id == id);
}
function getAll(){
    return tratte;
}
function add(tratta){
    tratta.id = uuidv4();
    tratte.push(tratta);
}
function update(tratta){
    var index = tratte.findIndex(x => x.id == tratta.id);
    if(index < 0){
        return false;
    }

    tratte.splice(index, 1,tratta);
    return true;
}
function remove(id){
    var index = tratte.findIndex(x => x.id == id);
    if(index < 0){
        return false;
    }

    tratte.splice(index, 1);
    return true;
}
export default {
    findById, getAll, add, update,remove
}