class validacionesatomicas{

    constructor(){

    }

    /*static validar_dni(id,valor=null){
        let dni = document.getElementById(id);
        let condicion = true;
        if (condicion) {
            return true;
        }
        else{
            return false;
        }
    }*/

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }

    // funcion para validar formato de alfabéticos con acentos, ñ y espacios 
    static alfabetico1(id){
        var patron = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    
    // funcion para validar formato de alfabéticos sin acentos ni espacios
    static alfabetico2(id){
        var patron = /^[A-Za-z]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }


    // funcion para validar formato de alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro
    static alfabetico3(id){
        var patron = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s\.\,]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para validar formato de alfabéticos con acentos, ñ, espacios y signos de puntuación
    static alfabetico4(id){
        var patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.,!?¿¡-]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para validar de que solo se introduzcan numeros
    static validar_numero(id){
        var patron = /^[0-9]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }
    
    // funcion para validar formato de fichero_programa solo con alfabéticos sin acentos ni ñ ni espacios min 7 max 60. Solo pdf, doc o docx
    static fichero_programa(id){
        var patron = /^[a-zA-Z]+\.(pdf|doc|docx)$/i;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para comprobar que el tamaño de fichero menor de 2000000 bytes
    static tamano_fichero(id) {
        const elemento = document.getElementById(id);
    
        if (elemento && elemento.files && elemento.files[0]) {
            return elemento.files[0].size > 200000;
        }
    
        return false;
    }
    

    /*
    static tamano_fichero(id){
        if (document.getElementById(id).files[0].size > 2000000){
            return false;
        }
        else{
            return true;
        }
    }
    */

    // funcion para comprobar que el tamaño de fichero menor de 20000 bytes
    static tamano_fichero2(id) {
        const elemento = document.getElementById(id);
    
        if (elemento && elemento.files && elemento.files[0]) {
            return elemento.files[0].size > 20000;
        }
    
        return false;
    }
        
    /*
    static tamano_fichero2(id){
        if (document.getElementById(id).files[0].size > 20000){
            return false;
        }
        else{
            return true;
        }
    }
    */

    // funcion para validar enlace_programa solo alfabéticos y : y / y . sin acentos ni ñ ni espacios 
    static enlace_programa(id){
        var patron = /^[A-Za-z\:\/\.]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para validar imagen_programa solo alfabéticos sin acentos ni ñ ni espacios solo jpg o jpeg
    static imagen_programa(id){
        var patron = /^[A-Za-z]+\.(jpg|jpeg)$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para validar que el año no sea superior a 2023
    static validar_año(id){
        if (document.getElementById(id).value > 2023){
            return false;
        }
        else{
            return true;
        }
    }

    //funcion para validar que el unico formato permitido es solo valores 'MESES' o 'AÑOS'
    static validar_formato(id){
        var patron = /^[MESES|AÑOS]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    //funcion para validar que el unico formato permitido es solo valores 'EVALUACIÓN' , 'INTERVENCIÓN' , 'EVALUACIÓN E INTERVENCIÓN'
    static validar_formato2(id){
        var patron = /^[EVALUACIÓN|INTERVENCIÓN|EVALUACIÓN E INTERVENCIÓN]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para validar que el unico formato permitido sea solo valores 'INDIVIDUAL','COLECTIVO','INDIVIDUAL Y COLECTIVO'
    static validar_formato3(id){
        var patron = /^[INDIVIDUAL|COLECTIVO|INDIVIDUAL Y COLECTIVO]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }

    // funcion para validar que el unico formato permitido sea solo valores solo valores ('PAPEL', 'ELECTRÓNICO','PAPEL Y ELECTRÓNICO')
    static validar_formato4(id){
        var patron = /^[PAPEL|ELECTRÓNICO|PAPEL Y ELECTRÓNICO]+$/;
        if (patron.test(document.getElementById(id).value)){
            return true;
        }
        else{
            return false;
        }
    }
    
}
