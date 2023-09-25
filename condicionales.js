alert("Bienvenido a la pagina de Javascript")
var mon = prompt("  Ingrese su nombre y apellido")
var res1 = prompt("¿Como se lama al primer dia de la Primavera?\n A: Primer Dia de la Primavera \n B: Equinoccion de Primavera \n C: Equinoccion de Invierno" );
if(res1 =="B"){
    res1= 25;
}else{
    res1 = 0;
}
var res2 = prompt("¿Que pasa con el Polo Norte cuando llega la Primavera?\n A: 6m de luz diurna ininterrumpida \n B: 6m de oscuridad ininterrumpida\n C: 6m de alteracia de luz y oscuridad" );
if(res2 =="A"){
    res2= 25;
}else{
    res2 = 0;
}
var res3 = prompt("¿En que mes empieza la primavera en el Hemisferio Norte?\n A: Septimbre \n B: Junio\n C: Mazo" );
if(res3 =="C"){
    res3= 25;
}else{
    res3 = 0;
}
var res4 = prompt("¿Que es la fiesta de la Primavera en China?\n A: La navidad \n B: El año nuevo chino\n C: Fiestas Patrias de China" );
if(res4 =="C"){
    res4= 25;
}else{
    res4 = 0;
}

var total = res1 + res2 + res3 + res4

document.write("<h1>Condicionales</h1>")
document.write("Respuestas <br>")
document.write(mon + "tus resultados son <br>");
document.write(total + "% de respuestas correctas")