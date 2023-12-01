class Gestion_publicacion extends GestionEntidad{

    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD(){

        // Resetear el formulario
        // this.resetearformpublicacion();
        this.recargarform();
        
        // Rellenar título formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_ADD_publicacion"]; 
    
        // Se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');
    
        // Se coloca el onblur del id_publicacion y se pone a vacío el valor
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = '';
    
        // Se coloca el onblur del título y se pone a vacío el valor
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = '';
    
        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = '';
    
        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = '';
    
        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = '';
    
        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = '';
    
        document.getElementById('imagen_publicacion').style.display = 'none';       
        document.getElementById('label_imagen_publicacion').style.display = 'none';
        document.getElementById('link_imagen_publicacion').style.display = 'none';
    
        document.getElementById('nuevo_imagen_publicacion').setAttribute('onchange','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        document.getElementById('nuevo_imagen_publicacion').style.display = 'block';
    
        // Crear botón de adición
        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);        
    
        // Para actualizar idioma después de incluir la imagen
        setLang();
    
        // Se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    

    static createForm_EDIT(datostupla) {
        // Resetear el formulario
        this.recargarform();
    
        // Rellenar título formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_publicacion";
    
        // Se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');
    
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute("readonly", "");
    
        // Modificar los eventos onblur de los campos según corresponda a la tabla publicacion
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('imagen_publicacion').setAttribute('readonly', true);
        document.getElementById('link_imagen_publicacion').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/' + datostupla.imagen_publicacion);
        document.getElementById('nuevo_imagen_publicacion').setAttribute('onchange', 'Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
    
        // Rellenar los campos con los valores recibidos
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;
        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;
        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;
        document.getElementById('area_publicacion').value = datostupla.area_publicacion;
        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;
        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('nuevo_imagen_publicacion').style.display = 'block';
    
        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);
    
        // Para actualizar idioma después de incluir la imagen
        setLang();
    
        // Se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    

    static createForm_DELETE(datostupla) {
        // Resetear el formulario
        this.recargarform();
    
        // Rellenar título formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_publicacion";
        // document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_publicacion"]; 
    
        // Se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';
    
        // Se coloca el onblur de cada campo y se pone a vacío el valor
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute('readonly', true);
    
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;
        document.getElementById('titulo_publicacion').setAttribute('readonly', true);
    
        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;
        document.getElementById('autor_publicacion').setAttribute('readonly', true);
    
        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;
        document.getElementById('fecha_publicacion').setAttribute('readonly', true);
    
        document.getElementById('area_publicacion').value = datostupla.area_publicacion;
        document.getElementById('area_publicacion').setAttribute('readonly', true);
    
        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;
        document.getElementById('texto_publicacion').setAttribute('readonly', true);
    
        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute('readonly', true);
        document.getElementById("link_imagen_publicacion").href += datostupla.imagen_publicacion;
        document.getElementById('label_nuevo_imagen_publicacion').style.display = 'none';
        document.getElementById('nuevo_imagen_publicacion').style.display = 'none';
    
        // Crear botón de eliminación
        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);
    
        // Para actualizar idioma 
        setLang();
    
        // Se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    
    static createForm_SHOWCURRENT(datostupla) {

        // Reutilizo la creación del delete porque implica pocas modificaciones
        this.createForm_DELETE(datostupla);
    
        // Rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_publicacion";
        // document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SHOWCURRENT_publicacion"]; 
    
        // Eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
    
        // Se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick", "DOM_class.cerrar_div_formulario()");
        document.getElementById('IU_form').append(imgshowcurrent);
    
        // Para actualizar el idioma
        setLang();
    }
    

    static createForm_SEARCH() {
        // Resetear el formulario
        this.recargarform();
    
        // Rellenar título formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_publicacion";
    
        // Se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');
    
        // Modificar los eventos onblur de los campos según corresponda a la tabla publicacion
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion_SEARCH()');
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');
        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');
        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');
        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion_SEARCH()');
        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');
    
        document.getElementById('imagen_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_imagen_publicacion_SEARCH()');
        document.getElementById('link_imagen_publicacion').style.display = 'none';
        document.getElementById('label_nuevo_imagen_publicacion').style.display = 'none';
        document.getElementById('nuevo_imagen_publicacion').style.display = 'none';
    
        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);
    
        // Para actualizar idioma
        setLang();
    
        // Se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    
    
    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){

        let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion();
    
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6
        );
    
        return resultado;
    }
    
    
    static comprobar_submit_SEARCH(){
    
        let valor = this.comprobar_id_publicacion_SEARCH();
        let valor1 = this.comprobar_titulo_publicacion_SEARCH();
        let valor2 = this.comprobar_autor_publicacion_SEARCH();
        let valor3 = this.comprobar_fecha_publicacion_SEARCH();
        let valor4 = this.comprobar_area_publicacion_SEARCH();
        let valor5 = this.comprobar_texto_publicacion_SEARCH();
        let valor6 = this.comprobar_imagen_publicacion_SEARCH();
    
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6
        );
    
        return resultado;
    }
    

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }
    
    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }
    
    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }
    
    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let publicacion = new Gestion_publicacion('publicacion',respuesta['resource'],Array('id_publicacion', 'titulo_publicacion', 'autor_publicacion'));
            publicacion.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos


    static comprobar_id_publicacion() {
        // validar id_publicacion dígitos min 1 max 6
        if (validacionesatomicas.size_minimo('id_publicacion', 1)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.validar_numero('id_publicacion')) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_formato');
            //salir ejecucion con false
            return false;
        }
    
        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }
    
    static comprobar_id_publicacion_SEARCH() {
        if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
    
        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }
    

    static comprobar_titulo_publicacion() {
        if (validacionesatomicas.size_minimo('titulo_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }
    
        if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
    
        if (validacionesatomicas.alfabetico1('titulo_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_formato');
            return false;
        }
        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }
    
    static comprobar_titulo_publicacion_SEARCH() {
        if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
    
        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }
    

    static comprobar_autor_publicacion() {
        if (validacionesatomicas.size_minimo('autor_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }
    
        if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
    
        if (validacionesatomicas.alfabetico1('autor_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_formato');
            return false;
        }
        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }
    
    static comprobar_autor_publicacion_SEARCH() {
        if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
    
        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }



    static comprobar_fecha_publicacion() {
        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    static comprobar_fecha_publicacion_SEARCH() {
        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    static comprobar_area_publicacion() {
        // validar area_publicacion dígitos min 1 max 6
        if (validacionesatomicas.size_minimo('area_publicacion', 1)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
        if (validacionesatomicas.validar_numero('area_publicacion')) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_formato');
            //salir ejecucion con false
            return false;
        }
    
        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }
    
    static comprobar_area_publicacion_SEARCH() {
        if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
        } else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }
    
        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }


    static comprobar_texto_publicacion(){

        if (validacionesatomicas.size_minimo('texto_publicacion',30)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_min');
             //salir ejecucion con false
             return false;
        }
    
        if (validacionesatomicas.size_maximo('texto_publicacion',8000)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_max');
             //salir ejecucion con false
             return false;
        }
    
        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    static comprobar_texto_publicacion_SEARCH(){
    
        if (validacionesatomicas.size_maximo('texto_publicacion',8000)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_max');
             //salir ejecucion con false
             return false;
        }
    
        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }
    
    
    static comprobar_imagen_publicacion(){
        
        if (validacionesatomicas.size_minimo('imagen_publicacion',7)){
        }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_min');
             //salir ejecucion con false
             return false;
        }
    
        if (validacionesatomicas.size_maximo('imagen_publicacion',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_max');
             //salir ejecucion con false
             return false;
        }
    
        if(validacionesatomicas.imagen_programa('imagen_publicacion')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_formato');
             return false;
        }
        
        DOM_class.mostrarexitovalor('imagen_publicacion');
        
        return true;
    }

    
    static comprobar_imagen_publicacion_SEARCH(){
    
        if (validacionesatomicas.size_maximo('imagen_publicacion',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_max');
             //salir ejecucion con false
             return false;
        }
    
        DOM_class.mostrarexitovalor('imagen_publicacion');
        return true;
    }
    
  
    static comprobar_nuevo_imagen_publicacion(){

        if (validacionesatomicas.size_minimo('imagen_publicacion',7)){
        }
         else{
            if (validacionesatomicas.sizeMinimoImg('nuevo_imagen_publicacion',7)){
            }
             else{
                 //modificacion parametros texto error
                 DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_tam_min');
                 //salir ejecucion con false
                 return false;
            }
            if (validacionesatomicas.sizeMaximoImg('nuevo_imagen_publicacion',60)){
            }
            else{
                 //modificacion parametros texto error
                 DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_tam_max');
                 //salir ejecucion con false
                 return false;
            }
            if(validacionesatomicas.validar_TamImagpublicacion('nuevo_imagen_publicacion')){
            }
            else{
                 DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_tamano');
                 return false;
            }
            if(validacionesatomicas.validar_imagenPublicacionFormato('nuevo_imagen_publicacion')){
            }
            else{
                 DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_formato');
                 return false;
            }
        }

        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;
    }
    
    
    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="id_publicacion"></label>
        <input type='text' id='id_publicacion' name='id_publicacion'></input>
        <div id="div_error_id_publicacion" class="errorcampo"><a id="error_id_publicacion"></a></div>
        <br>
        <script>document.querySelector('.id_publicacion').innerHTML = traduccion['id_publicacion'];</script>

        <label class="titulo_publicacion">Título de la Publicación</label>
        <input type='text' id='titulo_publicacion' name='titulo_publicacion'></input>
        <div id="div_error_titulo_publicacion" class="errorcampo"><a id="error_titulo_publicacion"></a></div>
        <br>

        <label class="autor_publicacion">Autor de la Publicación</label>
        <input type='text' id='autor_publicacion' name='autor_publicacion'></input>
        <div id="div_error_autor_publicacion" class="errorcampo"><a id="error_autor_publicacion"></a></div>
        <br>

        <label class="fecha_publicacion">Fecha de Publicación</label>
        <input type='date' id='fecha_publicacion' name='fecha_publicacion'></input>
        <div id="div_error_fecha_publicacion" class="errorcampo"><a id="error_fecha_publicacion"></a></div>
        <br>

        <label class="area_publicacion">Área de la Publicación</label>
        <input type='text' id='area_publicacion' name='area_publicacion'></input>
        <div id="div_error_area_publicacion" class="errorcampo"><a id="error_area_publicacion"></a></div>
        <br>

        <label class="texto_publicacion">Texto de la Publicación</label>
        <input type='text' id='texto_publicacion' name='texto_publicacion'></input>
        <div id="div_error_texto_publicacion" class="errorcampo"><a id="error_texto_publicacion"></a></div>
        <br>

        <label id="label_imagen_publicacion" class="imagen_publicacion">Imagen de la Publicación</label>
        <input type='text' id='imagen_publicacion' name='imagen_publicacion'></input>
        <a id="link_imagen_publicacion" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/"><img src="./iconos/FILE.png" /></a>
        
        <label id="label_nuevo_imagen_publicacion"  class="label_nuevo_imagen_publicacion">Nueva Imagen de la Publicación</label>
        <input type='file' id='nuevo_imagen_publicacion' name='nuevo_imagen_publicacion'></input>
        <div id="div_error_nuevo_imagen_publicacion" class="errorcampo"><a id="error_nuevo_imagen_publicacion"></a></div>
        <br>

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