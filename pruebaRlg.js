
var ds = ['L','M','X','J','V','S','D'] //dias de la semana para ingreso de datos
semana = 3
i = 0
for (let i=0;i<ds.length-1;i++){
    var mlluvia = Number(prompt("Ingrese dato publiometrico dia"+ds[i]));//solicitar datos por pantalla
        mlluvia.push(ds[semana],[semana],)
        semana++
        if (semana = 7)
}

console.log("promedio semanal ->",mlluvia/7)
console.log("promedio mensual",mlluvia/31)    