// criar  eremover arquivo
const fs=require('fs');

fs.appendFile('logs.txt',"Loguei\n",(erro)=>{
    console.log(erro);
})

// apagar arquivo

if(fs.existsSync('logs.txt')){
    fs.rmSync('logs.txt')
}
console.log("Fim da execeução");