/*Clononing-Números Factoriales (DcRubik\Jesús)*/

var n1,n2;
    n1=parseInt(prompt("Introduce un número"));
    n2=1;
if(n1<0){
    while(n1<0){
        n1=parseInt(prompt("El valor del número introducido debe ser mayor que 0"));
    }
}
while (n1>1){
    n2=n1*n2;
    n1=n1-1;
}
 
document.write("El factorial es: "+n2);
