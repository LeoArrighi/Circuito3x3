//Header
document.write('<header>')
document.write('<img src="Logo 3x3.jpg" alt="" class="img-header">')
document.write('<nav>')
document.write('<ul class="nav__ul">')
document.write('<li class="nav_li">Inicio</li>')
document.write('<li class="torneo" class="nav_li">Torneo')
document.write('<ul class="torneo-ul">')
document.write('<li class="torneo-li" id="verano">Verano</li>')
document.write('<li class="torneo-li"> Apertura</li>')
document.write('<li class="torneo-li"> Invierno</li>')
document.write('<li class="torneo-li">Clausura</li>')
document.write('</ul>')
document.write('</li>')
document.write('<li class="nav_li">Fotos</li>')
document.write('<li class="nav_li">Contacto</li>')
document.write('</ul>')
document.write('</nav>')
document.write('</header>')

//muestra datos del form

function mostrardatos(){
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value; 
    var mensaje = document.getElementById("mensaje").value;

    console.log("Nombre: " + nombre);
    console.log("Email: " + mail);
    console.log("Mensaje: " + mensaje);
}