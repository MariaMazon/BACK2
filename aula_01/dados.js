let nomes =['Admilson,', 'Benevite', 'Clementina'];

let frutas=['Abacaxi','Banana', 'Carambola']
// exportação explicista do array
// module.exports=nomes;

// module.exports=frutas;

function Soma(a,b){
    return a+b;
}

module.exports={
    nomes,
    frutas,
    Soma
}