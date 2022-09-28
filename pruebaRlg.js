
var ds = ['L','M','X','J','V','S','D'] //dias de la semana para ingreso de datos
semana = 3
diaM=1
diasem=1
datos=0
suma=0
sumasemana=0
i = 0
for (let i=0;i<=30-1;++i){
    var mlluvia = Number(prompt("Ingrese dato publiometrico dia"+${i}));//solicitar datos por pantalla
    datos+=mlluvia    
    mlluvia.push([semana,diaM,mlluvia],)
        ++semana
        ++diaM
        if (semana == 7)  {
            suma=true
            semana=0
            if((sumasemana/7)>0){
                console.log("promedio semanal ->$
                {diasem} es ${sumasemana/7}")
            }
sumasemana=0
diasem++
}else{
    if(inisuma){
        sumasemana+=mlluvia
    }
        }
}
console.log(mlluvia)
console.log(suma)
console.log("promedio mensual",suma/30)