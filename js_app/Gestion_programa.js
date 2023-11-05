class Gestion_personas extends GestionEntidad{

    // se puede hacer uno general en GestionEntidad que recorra todos los atributos haciendo estas cosas
    static resetearformpersona() {

        GestionEntidad.resetearForm();
    
    }

    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD(){

        // resetear el formulario
        //this.resetearformpersona();
        this.recargarform();
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_ADD_programa"]; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').setAttribute('onblur', 'Gestion_personas.comprobar_dni()');
        document.getElementById('dni').value = '';

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_personas.comprobar_nombre_persona()');
        document.getElementById('nombre_persona').value = '';

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_personas.comprobar_apellidos_persona()');
        document.getElementById('apellidos_persona').value = '';

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_personas.comprobar_fechaNacimiento_persona()');
        document.getElementById('fechaNacimiento_persona').value = '';

        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_personas.comprobar_direccion_persona()');
        document.getElementById('direccion_persona').value = '';

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_personas.comprobar_telefono_persona()');
        document.getElementById('telefono_persona').value = '';

        document.getElementById('email_persona').setAttribute('onblur','Gestion_personas.comprobar_email_persona()');
        document.getElementById('email_persona').value = '';

        document.getElementById('nuevo_foto_persona').setAttribute('onblur','Gestion_personas.comprobar_nueva_foto_persona()');
        document.getElementById("foto_persona").setAttribute("readonly",true);
        document.getElementById("foto_persona").style.display = 'none';
        document.querySelector(".foto_persona").style.display = 'none';
        document.getElementById("link_foto_persona").style.display = 'none';

        await this.peticionBackGeneral('', 'area', 'SEARCH')
        .then((respuesta) => {
            console.log(respuesta);
            let listaareas = respuesta['resource'];
            listaareas.forEach(element => {
                let opcion = document.createElement('option');
                opcion.value = element['id_area'];
                opcion.innerHTML = element['nombre_area'];
                document.getElementById('area').append(opcion);
            }); 
        });


        document.getElementById('id_submit').value = 'ADD';

        // para actualizar idioma despues de incluir la imagen
        //setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static createForm_EDIT(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){
        // resetear el formulario
        //this.resetearformpersona();
        this.recargarform();
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_EDIT_persona"]; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').setAttribute('onblur', 'Gestion_personas.comprobar_dni()');
        document.getElementById('dni').value = dni;
        document.getElementById('dni').setAttribute("readonly","");

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_personas.comprobar_nombre_persona()');
        document.getElementById('nombre_persona').value = nombre_persona;

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_personas.comprobar_apellidos_persona()');
        document.getElementById('apellidos_persona').value = apellidos_persona;

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_personas.comprobar_fechaNacimiento_persona()');
        document.getElementById('fechaNacimiento_persona').value = fechaNacimiento_persona;

        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_personas.comprobar_direccion_persona()');
        document.getElementById('direccion_persona').value = direccion_persona;

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_personas.comprobar_telefono_persona()');
        document.getElementById('telefono_persona').value = telefono_persona;

        document.getElementById('email_persona').setAttribute('onblur','Gestion_personas.comprobar_email_persona()');
        document.getElementById('email_persona').value = email_persona;

        document.getElementById('foto_persona').value = foto_persona;
        document.getElementById('link_foto_persona').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+foto_persona);
        document.getElementById('foto_persona').setAttribute("readonly",true);

        document.getElementById('nuevo_foto_persona').setAttribute('onblur','Gestion_personas.comprobar_nueva_foto_persona()');

        document.getElementById('id_submit').value = 'EDIT';

        // para actualizar idioma despues de incluir la imagen
        //setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_DELETE(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){
        // resetear el formulario
        //this.resetearformpersona();
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_persona"]; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.DELETE();';

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').value = dni;

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').value = nombre_persona;

        document.getElementById('apellidos_persona').value = apellidos_persona;

        document.getElementById('fechaNacimiento_persona').value = fechaNacimiento_persona;

        document.getElementById('direccion_persona').value = direccion_persona;

        document.getElementById('telefono_persona').value = telefono_persona;

        document.getElementById('email_persona').value = email_persona;

        document.getElementById('foto_persona').value = foto_persona;
        document.querySelector(".nuevo_foto_persona").style.display = 'none';
        document.getElementById("nuevo_foto_persona").style.display = 'none';
        document.getElementById("link_foto_persona").href += foto_persona;

        document.getElementById('id_submit').value = 'DELETE';

        GestionEntidad.ponercamposreadonly();

        // para actualizar idioma despues de incluir la imagen
        //setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_SHOWCURRENT(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona){
        this.createForm_DELETE(dni, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona);
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SHOWCURRENT_persona"]; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.SEARCH();';

        document.getElementById('id_submit').style.display = 'none';

    }

    static createForm_SEARCH(){

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SEARCH_persona"]; 
        this.recargarform();
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit_SEARCH();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').setAttribute('onblur', 'Gestion_personas.comprobar_dni_SEARCH()');

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_personas.comprobar_nombre_persona_SEARCH()');

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_personas.comprobar_apellidos_persona_SEARCH()');

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_personas.comprobar_fechaNacimiento_persona_SEARCH()');
        
        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_personas.comprobar_direccion_persona_SEARCH()');

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_personas.comprobar_telefono_persona_SEARCH()');

        document.getElementById('email_persona').setAttribute('onblur','Gestion_personas.comprobar_email_persona_SEARCH()');
        
        document.getElementById('foto_persona').setAttribute('onblur','Gestion_personas.comprobar_foto_persona_SEARCH()');

        document.querySelector(".nuevo_foto_persona").style.display = 'none';
        document.getElementById("nuevo_foto_persona").style.display = 'none';
        document.getElementById('link_foto_persona').style.display = 'none';

        document.getElementById('id_submit').value = 'SEARCH';

        // para actualizar idioma despues de incluir la imagen
        //setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){

        let valor = this.comprobar_dni();
        let valor1 = this.comprobar_nombre_persona();
        let valor2 = this.comprobar_apellidos_persona();
        let valor3 = this.comprobar_fechaNacimiento_persona();
        let valor4 = this.comprobar_telefono_persona();
        let valor5 = this.comprobar_email_persona();
        let valor6 = this.comprobar_direccion_persona();
        let valor7 = this.comprobar_nuevo_foto_persona();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
        
    }

    static comprobar_submit_SEARCH(){

        let valor = this.comprobar_dni_SEARCH();
        let valor1 = this.comprobar_nombre_persona_SEARCH();
        let valor2 = this.comprobar_apellidos_persona_SEARCH();
        let valor3 = this.comprobar_fechaNacimiento_persona_SEARCH();
        let valor4 = this.comprobar_telefono_persona_SEARCH();
        let valor5 = this.comprobar_email_persona_SEARCH();
        let valor6 = this.comprobar_direccion_persona_SEARCH();
        let valor7 = this.comprobar_nuevo_foto_persona_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'persona', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                //this.resetearformpersona();
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'persona', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.resetearformpersona();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'persona', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.resetearformpersona();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'persona', 'SEARCH')
        .then((respuesta) => {
            //this.resetearformpersona();
            this.recargarform();
            let persona = new Gestion_personas('personas',respuesta['resource'],Array('dni','nombre_persona')); persona.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos


    static comprobar_id_programa(){
        // validar id_programa dígitos min 1 max 6
        if (validacionesatomicas.size_minimo('id_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_min');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.size_maximo('id_programa',6)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
        if (validacionesatomicas.validar_numero('id_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('id_programa');
        return true;

    }

    static comprobar_id_programa_SEARCH(){

        return true;

    }

    static comprobar_nombre_programa(){

       if (validacionesatomicas.size_minimo('nombre_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_persona','KO_nombre_programa_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_programa',60)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_max');
            //salir ejecucion con false
            return false;
        }

        if(validacionesatomicas.alfabetico1('nombre_programa')){
        }else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_formato');
            return false;
        }
        DOM_class.mostrarexitovalor('nombre_programa');
        return true;

    }

    static comprobar_nombre_persona_SEARCH(){

        if (validacionesatomicas.size_maximo('nombre_persona',50)){   
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajes('nombre_persona','KO_nombre_persona_tam_max');
            //llamar funcion muestra errores
            DOM_class.mostrarerrorvalor('nombre_persona');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_persona');
        return true;

    }

    static comprobar_acronimo_programa(){

        if (validacionesatomicas.size_minimo('acronimo_programa',3)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('acronimo_programa',20)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
         if(validacionesatomicas.alfabetico2('acronimo_programa')){
        }
        else
        {
             DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_formato');
             return false;
        }

        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;
     }

     static comprobar_nombre_original_programa(){

        if (validacionesatomicas.size_minimo('nombre_original_programa',6)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('nombre_original_programa',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.alfabetico1('nombre_original_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_formato');
             return false;
        }
        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
     }

     static comprobar_autor_programa(){

        if (validacionesatomicas.size_minimo('autor_programa',6)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('autor_programa',50)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
         if(validacionesatomicas.alfabetico1('autor_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_formato');
             return false;
        }
        DOM_class.mostrarexitovalor('autor_programa');
        return true;
 
     }

     static comprobar_autor_original_programa(){

        if (validacionesatomicas.size_minimo('autor_original_programa',6)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('autor_original_programa',50)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.alfabetico1('autor_original_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_formato');
             return false;
        }
        
        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;
    }

    static comprobar_ano_programa(){

        if (validacionesatomicas.size_minimo('ano_programa',4)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('ano_programa',4)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.validar_fecha('ano_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_actual');
             return false;
        }

        if (validacionesatomicas.validar_numero('ano_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_formato');
            //salir ejecucion con false
            return false;
        }
        
        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    }

    static comprobar_ano_original_programa(){

        if (validacionesatomicas.size_minimo('ano_original_programa',4)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('ano_original_programa',4)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.validar_fecha('ano_original_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_actual');
             return false;
        }

        if (validacionesatomicas.validar_numero('ano_original_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_formato');
            //salir ejecucion con false
            return false;
        }
        
        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;
    }

    static comprobar_requisitos_programa(){

        if (validacionesatomicas.size_minimo('requisitos_programa',6)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('requisitos_programa',300)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.alfabetico4('requisitos_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_formato');
             return false;
        }
        
        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;
    }

    static comprobar_poblacion_desde_programa(){
        // validar poblacion_desde_programa dígitos min 1 max 6
        if (validacionesatomicas.size_minimo('poblacion_desde_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_min');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.size_maximo('poblacion_desde_programa',2)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
        if (validacionesatomicas.validar_numero('poblacion_desde_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;

    }
    

    static comprobar_poblacion_hasta_programa(){
        // validar poblacion_hasta_programa dígitos min 1 max 6
        if (validacionesatomicas.size_minimo('poblacion_hasta_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_min');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.size_maximo('poblacion_hasta_programa',2)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
        if (validacionesatomicas.validar_numero('poblacion_hasta_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;
    }

    static comprobar_unidad_poblacion(){

        if (validacionesatomicas.validar_formato('unidad_poblacion')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion','KO_unidad_poblacion_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;
    }

    static comprobar_tipo_programa(){

        if (validacionesatomicas.validar_formato2('tipo_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('tipo_programa','KO_tipo_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('tipo_programa');
        return true;
    }

    static comprobar_tiempo_aplicacion_programa(){
        // validar tiempo_aplicacion_programa dígitos min 1 max 6
        if (validacionesatomicas.size_minimo('tiempo_aplicacion_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_min');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa',4)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
        if (validacionesatomicas.validar_numero('tiempo_aplicacion_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;
    }

    static comprobar_descrip_interp_programa(){

        if (validacionesatomicas.size_minimo('descrip_interp_programa',100)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('descrip_interp_programa',5000)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.alfabetico3('descrip_interp_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_formato');
             return false;
        }
        
        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;
    }

    static comprobar_fichero_programa(){

        if (validacionesatomicas.size_minimo('fichero_programa',7)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('fichero_programa',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.fichero_programa('fichero_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_formato');
             return false;
        }

        if(validacionesatomicas.tamano_fichero('fichero_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tamano');
             return false;
        }
        
        DOM_class.mostrarexitovalor('fichero_programa');
        return true;
    }

    static comprobar_enlace_programa(){

        if (validacionesatomicas.size_minimo('enlace_programa',10)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('enlace_programa',100)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.enlace_programa('enlace_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_formato');
             return false;
        }

        DOM_class.mostrarexitovalor('enlace_programa');
        return true;
    }

    static comprobar_formato_programa(){

        if (validacionesatomicas.validar_formato4('formato_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('formato_programa','KO_formato_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('formato_programa');
        return true;
    }

    static comprobar_modo_correccion_programa(){

        if (validacionesatomicas.validar_formato4('modo_correccion_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa','KO_modo_correccion_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;
    }

    static comprobar_modo_aplicacion_programa(){

        if (validacionesatomicas.validar_formato3('modo_aplicacion_programa')){
        }else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa','KO_modo_aplicacion_programa_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;
    }

    static comprobar_imagen_programa(){

        if (validacionesatomicas.size_minimo('imagen_programa',7)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_min');
             //salir ejecucion con false
             return false;
        }
 
        if (validacionesatomicas.size_maximo('imagen_programa',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.imagen_programa('imagen_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_formato');
             return false;
        }

        if(validacionesatomicas.tamano_fichero2('imagen_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tamano');
             return false;
        }
        
        DOM_class.mostrarexitovalor('imagen_programa');
        return true;
    }








    


    static comprobar_apellidos_persona(){

        if (validacionesatomicas.size_minimo('apellidos_persona',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('apellidos_persona','KO_apellidos_persona_tam_min');;
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('apellidos_persona',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('apellidos_persona','KO_apellidos_persona_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('apellidos_persona');
        return true;
    }

    static comprobar_apellidos_persona_SEARCH(){

        if (validacionesatomicas.size_maximo('apellidos_persona',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('apellidos_persona','KO_apellidos_persona_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('apellidos_persona');
        return true;
    }

    static comprobar_fechaNacimiento_persona(){

        return true;

    }

    static comprobar_fechaNacimiento_persona_SEARCH(){

        return true;

    }

    

    static comprobar_direccion_persona(){

        if (validacionesatomicas.size_minimo('direccion_persona',20)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('direccion_persona','KO_direccion_persona_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('direccion_persona',70)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('direccion_persona','KO_direccion_persona_tam_max');

            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('direccion_persona');
        return true;

    }

    static comprobar_direccion_persona_SEARCH(){

        if (validacionesatomicas.size_maximo('direccion_persona',70)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('direccion_persona','KO_direccion_persona_tam_max');

            //salir ejecucion con false
            return false;
        }
        
        DOM_class.mostrarexitovalor('direccion_persona');
        return true;

    }

    static comprobar_telefono_persona(){
        return true;
    }

    static comprobar_telefono_persona_SEARCH(){
        return true;
    }

    static comprobar_email_persona(){
        return true;
    }

    static comprobar_email_persona_SEARCH(){
        return true;
    }

    static comprobar_nuevo_foto_persona(){
        return true;
    }

    static comprobar_nuevo_foto_persona_SEARCH(){
        return true;
    }


    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="dni"></label>

        <input type='text' id='dni' name='dni'></input>
        <div id="div_error_dni" class="errorcampo"><a id="error_dni"></a></div>
        <br>
        <script>document.querySelector('.dni').innerHTML=traduccion['dni'];</script>
        
        <label class="nombre_persona">Nombre de pila</label>
        <input type='text' id='nombre_persona' name='nombre_persona'></input>
        <div id="div_error_nombre_persona" class="errorcampo"><a id="error_nombre_persona"></a></div>
        <br>
        
        <label class="apellidos_persona">apellidos</label>
        <input type='text' id='apellidos_persona' name='apellidos_persona'></input>
        <div id="div_error_apellidos_persona" class="errorcampo"><a id="error_apellidos_persona"></a></div>
        <br>
        
        <label class="fechaNacimiento_persona">Fecha de Nacimiento</label>
        <input type='date' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
        <div id="div_error_fechaNacimiento_persona" class="errorcampo"><a id="error_fechaNacimiento_persona"></a></div>
        
        <br>
        <label class="direccion_persona">Dirección Postal</label>
        <input type='text' id='direccion_persona' name='direccion_persona'></input>
        <div id="div_error_direccion_persona" class="errorcampo"><a id="error_direccion_persona"></a></div>
        <br>

        <label class="telefono_persona">Teléfono Persona</label>
        <input type='text' id='telefono_persona' name='telefono_persona'></input>
        <div id="div_error_telefono_persona" class="errorcampo"><a id="error_telefono_persona"></a></div>
        
        <br>
        <label class="email_persona">Correo Electronico</label>
        <input type='text' id='email_persona' name='email_persona'></input>
        <div id="div_error_email_persona" class="errorcampo"><a id="error_email_persona"></a></div>
        
        <br>
        <label id="label_foto_persona" class="foto_persona">Foto Persona</label>
        <input type='text' id='foto_persona' name='foto_persona'></input>
        <a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src=./iconos/imagenfichero.jpg /></a>
        <label class="nuevo_foto_persona">Nueva Foto Persona</label>
        <input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
        <div id="div_error_foto_persona" class="errorcampo"><a id="error_foto_persona"></a></div>
        <br>

        <select id='area' name='area'>
        </select>

        <input type="submit" id='id_submit' value="" />
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

       
    }
}