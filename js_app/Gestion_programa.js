class Gestion_programa extends GestionEntidad{

    //-----------------------------------------------------------------------------
    // formularios
    
    static async createForm_ADD(){

        // resetear el formulario
        //this.resetearformprograma();
        this.recargarform();
        // rellenar titulo formulario
        
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_ADD_programa"]; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

        // se coloca el onblur del id_programa y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
        document.getElementById('id_programa').value = '';

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');
        document.getElementById('nombre_programa').value = '';

        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');
        document.getElementById('acronimo_programa').value = '';

        document.getElementById('nombre_original_programa').setAttribute('onblur','Gestion_programa.comprobar_nombre_original_programa()');
        document.getElementById('nombre_original_programa').value = '';

        document.getElementById('autor_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_programa()');
        document.getElementById('autor_programa').value = '';

        document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa()');
        document.getElementById('autor_original_programa').value = '';

        document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa()');
        document.getElementById('ano_programa').value = '';

        document.getElementById('ano_original_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_original_programa()');
        document.getElementById('ano_original_programa').value = '';

        document.getElementById('requisitos_programa').setAttribute('onblur','Gestion_programa.comprobar_requisitos_programa()');
        document.getElementById('requisitos_programa').value = '';

        document.getElementById('poblacion_desde_programa').setAttribute('onblur','Gestion_programa.comprobar_poblacion_desde_programa()');
        document.getElementById('poblacion_desde_programa').value = '';

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur','Gestion_programa.comprobar_poblacion_hasta_programa()');
        document.getElementById('poblacion_hasta_programa').value = '';

        document.getElementById('unidad_poblacion').setAttribute('onblur','Gestion_programa.comprobar_unidad_poblacion()');
        document.getElementById('unidad_poblacion').value = '';
        
        document.getElementById('tipo_programa').setAttribute('onblur','Gestion_programa.comprobar_tipo_programa()');
        document.getElementById('tipo_programa').value = '';

        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur','Gestion_programa.comprobar_tiempo_aplicacion_programa()');
        document.getElementById('tiempo_aplicacion_programa').value = '';

        document.getElementById('descrip_interp_programa').setAttribute('onblur','Gestion_programa.comprobar_descrip_interp_programa()');
        document.getElementById('descrip_interp_programa').value = '';

        // document.getElementById('fichero_programa').setAttribute('onblur','Gestion_programa.comprobar_fichero_programa()');
        document.getElementById('fichero_programa').style.display = 'none';
        document.getElementById('label_fichero_programa').style.display = 'none';
        document.getElementById('link_fichero_programa').style.display = 'none';

        document.getElementById('nuevo_fichero_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nuevo_fichero_programa()');
        document.getElementById('nuevo_fichero_programa').style.display = 'block';


        document.getElementById('enlace_programa').setAttribute('onblur','Gestion_programa.comprobar_enlace_programa()');
        document.getElementById('enlace_programa').value = '';

        document.getElementById('formato_programa').setAttribute('onblur','Gestion_programa.comprobar_formato_programa()');
        document.getElementById('formato_programa').value = '';

        document.getElementById('modo_correccion_programa').setAttribute('onblur','Gestion_programa.comprobar_modo_correccion_programa()');
        document.getElementById('modo_correccion_programa').value = '';

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur','Gestion_programa.comprobar_modo_aplicacion_programa()');
        document.getElementById('modo_aplicacion_programa').value = '';

        // document.getElementById('imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_imagen_programa()');
        document.getElementById('imagen_programa').style.display = 'none';        document.getElementById('imagen_programa').style.display = 'none';
        document.getElementById('label_imagen_programa').style.display = 'none';
        document.getElementById('link_imagen_programa').style.display = 'none';

        document.getElementById('nuevo_imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_imagen_programa()');
        document.getElementById('nuevo_imagen_programa').style.display = 'block';


        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);        

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_EDIT(datostupla) {

        // resetear el formulario
        this.recargarform();
    
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";
    
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
        document.getElementById('id_programa').value = datostupla.id_programa;
        document.getElementById('id_programa').setAttribute("readonly","");
    
        // Modificar los eventos onblur de los campos según corresponda a la tabla programa
        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');
        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');
        document.getElementById('nombre_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_original_programa()');
        document.getElementById('autor_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_programa()');
        document.getElementById('autor_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_original_programa()');
        document.getElementById('ano_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_programa()');
        document.getElementById('ano_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_original_programa()');
        document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa()');
        document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa()');
        document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa()');
        document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion()');
        document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa()');
        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa()');
        document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa()');
        
        document.getElementById('fichero_programa').setAttribute('readonly', true);
        document.getElementById('link_fichero_programa').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/' + fichero_programa);
        document.getElementById('nuevo_fichero_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nuevo_fichero_programa()');
        
        document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa()');
        document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa()');
        document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa()');
        document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa()');
        
        document.getElementById('imagen_programa').setAttribute('readonly', true);
        document.getElementById('link_imagen_programa').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/'+imagen_programa);
        document.getElementById('nuevo_imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_imagen_programa()');        
    
        // Rellenar los campos con los valores recibidos
        document.getElementById('nombre_programa').value = datostupla.nombre_programa;
        document.getElementById('acronimo_programa').value = datostupla.acronimo_programa;
        document.getElementById('nombre_original_programa').value = datostupla.nombre_original_programa;
        document.getElementById('autor_programa').value = datostupla.autor_programa;
        document.getElementById('autor_original_programa').value = datostupla.autor_original_programa;
        document.getElementById('ano_programa').value = datostupla.ano_programa;
        document.getElementById('ano_original_programa').value = datostupla.ano_original_programa;
        document.getElementById('requisitos_programa').value = datostupla.requisitos_programa;
        document.getElementById('poblacion_desde_programa').value = datostupla.poblacion_desde_programa;
        document.getElementById('poblacion_hasta_programa').value = datostupla.poblacion_hasta_programa;
        document.getElementById('unidad_poblacion').value = datostupla.unidad_poblacion;
        document.getElementById('tipo_programa').value = datostupla.tipo_programa;
        document.getElementById('tiempo_aplicacion_programa').value = datostupla.tiempo_aplicacion_programa;
        document.getElementById('descrip_interp_programa').value = datostupla.descrip_interp_programa;
        document.getElementById('fichero_programa').value = datostupla.fichero_programa;
        document.getElementById('nuevo_fichero_programa').style.display = 'block'; 
        document.getElementById('enlace_programa').value = datostupla.enlace_programa;
        document.getElementById('formato_programa').value = datostupla.formato_programa;
        document.getElementById('modo_correccion_programa').value = datostupla.modo_correccion_programa;
        document.getElementById('modo_aplicacion_programa').value = datostupla.modo_aplicacion_programa;
        document.getElementById('imagen_programa').value = datostupla.imagen_programa;
        document.getElementById('nuevo_imagen_programa').style.display = 'block';
    
        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);
    
        // para actualizar idioma despues de incluir la imagen
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    
    

    // createForm_DELETE antiguo
    /*
    static createForm_DELETE(datostupla) {

        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_programa"]; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

        // se coloca el valor del id_programa y se deshabilita la edición (o podríamos hacerlo en el resetearformprograma())
        document.getElementById('id_programa').value = id_programa;
        document.getElementById('id_programa').setAttribute("readonly", true);

        // Se llenan los otros campos de la forma análogamente
        document.getElementById('nombre_programa').value = nombre_programa;
        document.getElementById('acronimo_programa').value = acronimo_programa;
        document.getElementById('nombre_original_programa').value = nombre_original_programa;
        document.getElementById('autor_programa').value = autor_programa;
        document.getElementById('autor_original_programa').value = autor_original_programa;
        document.getElementById('ano_programa').value = ano_programa;
        document.getElementById('ano_original_programa').value = ano_original_programa;
        document.getElementById('requisitos_programa').value = requisitos_programa;
        document.getElementById('poblacion_desde_programa').value = poblacion_desde_programa;
        document.getElementById('poblacion_hasta_programa').value = poblacion_hasta_programa;
        document.getElementById('unidad_poblacion').value = unidad_poblacion;
        document.getElementById('tipo_programa').value = tipo_programa;
        document.getElementById('tiempo_aplicacion_programa').value = tiempo_aplicacion_programa;
        document.getElementById('descrip_interp_programa').value = descrip_interp_programa;
        document.getElementById('fichero_programa').value = fichero_programa;
        document.getElementById('enlace_programa').value = enlace_programa;
        document.getElementById('formato_programa').value = formato_programa;
        document.getElementById('modo_correccion_programa').value = modo_correccion_programa;
        document.getElementById('modo_aplicacion_programa').value = modo_aplicacion_programa;
        document.getElementById('imagen_programa').value = imagen_programa;

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    */


    static createForm_DELETE(datostupla) {
        // resetear el formulario
        this.recargarform();
    
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";
        // document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_DELETE_programa"]; 

    
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programas.DELETE();';
    
        // se coloca el onblur de cada campo y se pone a vacío el valor
        document.getElementById('id_programa').value = datostupla.id_programa;
        document.getElementById('id_programa').setAttribute('readonly', true);
    
        document.getElementById('nombre_programa').value = datostupla.nombre_programa;
        document.getElementById('nombre_programa').setAttribute('readonly', true);
    
        document.getElementById('acronimo_programa').value = datostupla.acronimo_programa;
        document.getElementById('acronimo_programa').setAttribute('readonly', true);
    
        document.getElementById('nombre_original_programa').value = datostupla.nombre_original_programa;
        document.getElementById('nombre_original_programa').setAttribute('readonly', true);
    
        document.getElementById('autor_programa').value = datostupla.autor_programa;
        document.getElementById('autor_programa').setAttribute('readonly', true);
    
        document.getElementById('autor_original_programa').value = datostupla.autor_original_programa;
        document.getElementById('autor_original_programa').setAttribute('readonly', true);
    
        document.getElementById('ano_programa').value = datostupla.ano_programa;
        document.getElementById('ano_programa').setAttribute('readonly', true);
    
        document.getElementById('ano_original_programa').value = datostupla.ano_original_programa;
        document.getElementById('ano_original_programa').setAttribute('readonly', true);
    
        document.getElementById('requisitos_programa').value = datostupla.requisitos_programa;
        document.getElementById('requisitos_programa').setAttribute('readonly', true);
    
        document.getElementById('poblacion_desde_programa').value = datostupla.poblacion_desde_programa;
        document.getElementById('poblacion_desde_programa').setAttribute('readonly', true);
    
        document.getElementById('poblacion_hasta_programa').value = datostupla.poblacion_hasta_programa;
        document.getElementById('poblacion_hasta_programa').setAttribute('readonly', true);
    
        document.getElementById('unidad_poblacion').value = datostupla.unidad_poblacion;
        document.getElementById('unidad_poblacion').setAttribute('readonly', true);
    
        document.getElementById('tipo_programa').value = datostupla.tipo_programa;
        document.getElementById('tipo_programa').setAttribute('readonly', true);
    
        document.getElementById('tiempo_aplicacion_programa').value = datostupla.tiempo_aplicacion_programa;
        document.getElementById('tiempo_aplicacion_programa').setAttribute('readonly', true);
    
        document.getElementById('descrip_interp_programa').value = datostupla.descrip_interp_programa;
        document.getElementById('descrip_interp_programa').setAttribute('readonly', true);
    
        document.getElementById('fichero_programa').value = datostupla.fichero_programa;
        document.getElementById('fichero_programa').setAttribute('readonly', true);
        document.getElementById("link_fichero_programa").href += datostupla.fichero_programa;
        document.getElementById('label_nuevo_fichero_programa').style.display = 'none';
        document.getElementById('nuevo_fichero_programa').style.display = 'none';

    
        document.getElementById('enlace_programa').value = datostupla.enlace_programa;
        document.getElementById('enlace_programa').setAttribute('readonly', true);
    
        document.getElementById('formato_programa').value = datostupla.formato_programa;
        document.getElementById('formato_programa').setAttribute('readonly', true);
    
        document.getElementById('modo_correccion_programa').value = datostupla.modo_correccion_programa;
        document.getElementById('modo_correccion_programa').setAttribute('readonly', true);
    
        document.getElementById('modo_aplicacion_programa').value = datostupla.modo_aplicacion_programa;
        document.getElementById('modo_aplicacion_programa').setAttribute('readonly', true);
    
        document.getElementById('imagen_programa').value = datostupla.imagen_programa;
        document.getElementById('imagen_programa').setAttribute('readonly', true);
        document.getElementById("link_imagen_programa").href += datostupla.imagen_programa;
        document.getElementById('label_nuevo_imagen_programa').style.display = 'none';
        document.getElementById('nuevo_imagen_programa').style.display = 'none';

        // Crear botón de eliminación
        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);
    
        // para actualizar idioma 
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    


    static createForm_SHOWCURRENT(datostupla) {

        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datostupla);

        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_programa";
        // document.querySelector(".class_contenido_titulo_form").innerHTML = traduccion["titulo_form_SHOWCURRENT_programa"]; 

        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();

        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick", "DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();
    }


    static createForm_SEARCH(){

        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_programa";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

        // Modificar los eventos onblur de los campos según corresponda a la tabla programa
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa_SEARCH()');
        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa_SEARCH()');
        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa_SEARCH()');
        document.getElementById('autor_programa').setAttribute('onblur', 'Gestion_programa.comprobar_autor_programa_SEARCH()');
        document.getElementById('ano_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_programa_SEARCH()');
        document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa_SEARCH()');
        document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa_SEARCH()');
        document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa_SEARCH()');
        document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion_SEARCH()');
        document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa_SEARCH()');
        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa_SEARCH()');
        document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa_SEARCH()');
        
        document.getElementById('fichero_programa').setAttribute('onblur', 'Gestion_programa.comprobar_fichero_programa_SEARCH()');
        document.getElementById('label_nuevo_fichero_programa').style.display = 'none';
        document.getElementById('nuevo_fichero_programa').style.display = 'none';
        document.getElementById('link_fichero_programa').style.display = 'none';

        document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa_SEARCH()');
        document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa_SEARCH()');
        document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa_SEARCH()');
        document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa_SEARCH()');
        
        document.getElementById('imagen_programa').setAttribute('onblur', 'Gestion_programa.comprobar_imagen_programa_SEARCH()');
        document.getElementById('label_nuevo_imagen_programa').style.display = 'none'; 
        document.getElementById('nuevo_imagen_programa').style.display = 'none'; 
        document.getElementById('link_imagen_programa').style.display = 'none'; 


        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        

        // para actualizar idioma
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }


    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){

        let valor = this.comprobar_id_programa();
        let valor1 = this.comprobar_nombre_programa();
        let valor2 = this.comprobar_acronimo_programa();
        let valor3 = this.comprobar_nombre_original_programa();
        let valor4 = this.comprobar_autor_programa();
        let valor5 = this.comprobar_autor_original_programa();
        let valor6 = this.comprobar_ano_programa();
        let valor7 = this.comprobar_ano_original_programa();
        let valor8 = this.comprobar_requisitos_programa();
        let valor9 = this.comprobar_poblacion_desde_programa();
        let valor10 = this.comprobar_poblacion_hasta_programa();
        let valor11 = this.comprobar_unidad_poblacion();
        let valor12 = this.comprobar_tipo_programa();
        let valor13 = this.comprobar_tiempo_aplicacion_programa();
        let valor14 = this.comprobar_descrip_interp_programa();
        // let valor15 = this.comprobar_fichero_programa();
        let valor15 = this.comprobar_enlace_programa();
        let valor16 = this.comprobar_formato_programa();
        let valor17 = this.comprobar_modo_correccion_programa();
        let valor18 = this.comprobar_modo_aplicacion_programa();
        // let valor20 = this.comprobar_imagen_programa();
        let valor19 = this.comprobar_nuevo_imagen_programa();
        let valor20 = this.comprobar_nuevo_fichero_programa();
    
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11 &&
            valor12 &&
            valor13 &&
            valor14 &&
            valor15 &&
            valor16 &&
            valor17 &&
            valor18 &&
            valor19 &&
            valor20
        );
    
        return resultado;
    }

    static comprobar_submit_SEARCH(){

        let valor = this.comprobar_id_programa_SEARCH();
        let valor1 = this.comprobar_nombre_programa_SEARCH();
        let valor2 = this.comprobar_acronimo_programa_SEARCH();
        let valor3 = this.comprobar_nombre_original_programa_SEARCH();
        let valor4 = this.comprobar_autor_programa_SEARCH();
        let valor5 = this.comprobar_autor_original_programa_SEARCH();
        let valor6 = this.comprobar_ano_programa_SEARCH();
        let valor7 = this.comprobar_ano_original_programa_SEARCH();
        let valor8 = this.comprobar_requisitos_programa_SEARCH();
        let valor9 = this.comprobar_poblacion_desde_programa_SEARCH();
        let valor10 = this.comprobar_poblacion_hasta_programa_SEARCH();
        let valor11 = this.comprobar_unidad_poblacion_SEARCH();
        let valor12 = this.comprobar_tipo_programa_SEARCH();
        let valor13 = this.comprobar_tiempo_aplicacion_programa_SEARCH();
        let valor14 = this.comprobar_descrip_interp_programa_SEARCH();
        let valor15 = this.comprobar_fichero_programa_SEARCH();
        let valor16 = this.comprobar_enlace_programa_SEARCH();
        let valor17 = this.comprobar_formato_programa_SEARCH();
        let valor18 = this.comprobar_modo_correccion_programa_SEARCH();
        let valor19 = this.comprobar_modo_aplicacion_programa_SEARCH();
        let valor20 = this.comprobar_imagen_programa_SEARCH();
    
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11 &&
            valor12 &&
            valor13 &&
            valor14 &&
            valor15 &&
            valor16 &&
            valor17 &&
            valor18 &&
            valor19 &&
            valor20 
        );
    
        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'programa', 'ADD')
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
        await this.peticionBackGeneral('IU_form', 'programa', 'EDIT')
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
        await this.peticionBackGeneral('IU_form', 'programa', 'DELETE')
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
        await this.peticionBackGeneral('IU_form', 'programa', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let programa = new Gestion_programa('programa',respuesta['resource'],Array('id_programa','nombre_programa', 'acronimo_programa', 'nombre_original_programa'));
            programa.mostrartabla();
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

        if (validacionesatomicas.size_maximo('id_programa',6)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
    
        DOM_class.mostrarexitovalor('id_programa');
        return true;
    }

    static comprobar_nombre_programa(){

       if (validacionesatomicas.size_minimo('nombre_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_min');
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

    static comprobar_nombre_programa_SEARCH(){

         if (validacionesatomicas.size_maximo('nombre_programa',60)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_max');
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor('nombre_programa');
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

     static comprobar_acronimo_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('acronimo_programa',20)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_max');
             //salir ejecucion con false
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

     static comprobar_nombre_original_programa_SEARCH(){
 
        if (validacionesatomicas.size_maximo('nombre_original_programa',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_max');
             //salir ejecucion con false
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

     static comprobar_autor_programa_SEARCH(){
 
        if (validacionesatomicas.size_maximo('autor_programa',50)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_max');
             //salir ejecucion con false
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

    static comprobar_autor_original_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('autor_original_programa',50)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_max');
             //salir ejecucion con false
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
 
        if(validacionesatomicas.validar_año('ano_programa')){
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

    static comprobar_ano_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('ano_programa',4)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.validar_año('ano_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_actual');
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
 
        if(validacionesatomicas.validar_año('ano_original_programa')){
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

    static comprobar_ano_original_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('ano_original_programa',4)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_tam_max');
             //salir ejecucion con false
             return false;
        }
 
        if(validacionesatomicas.validar_año('ano_original_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_actual');
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

    static comprobar_requisitos_programa_SEARCH(){
 
        if (validacionesatomicas.size_maximo('requisitos_programa',300)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_max');
             //salir ejecucion con false
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

    static comprobar_poblacion_desde_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('poblacion_desde_programa',2)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_max');
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

    static comprobar_poblacion_hasta_programa_SEARCH(){
       
        if (validacionesatomicas.size_maximo('poblacion_hasta_programa',2)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_max');
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

    static comprobar_unidad_poblacion_SEARCH(){
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

    static comprobar_tipo_programa_SEARCH(){
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

    static comprobar_tiempo_aplicacion_programa_SEARCH(){
        
        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa',4)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_max');
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

    static comprobar_descrip_interp_programa_SEARCH(){
 
        if (validacionesatomicas.size_maximo('descrip_interp_programa',5000)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_max');
             //salir ejecucion con false
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

        /*if(validacionesatomicas.tamano_fichero('fichero_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tamano');
             return false;
        }*/
        
        DOM_class.mostrarexitovalor('fichero_programa');
        return true;
    }

    static comprobar_fichero_programa_SEARCH(){
 
        if (validacionesatomicas.size_maximo('fichero_programa',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('fichero_programa','KO_fichero_programa_tam_max');
             //salir ejecucion con false
             return false;
        }

        DOM_class.mostrarexitovalor('fichero_programa');
        return true;
    }

    static comprobar_nuevo_fichero_programa(){
        /*if(validacionesatomicas.tamano_fichero('nuevo_fichero_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('nuevo_fichero_programa','KO_nuevo_fichero_programa_tamano');
             return false;
        }
        
        DOM_class.mostrarexitovalor('nuevo_fichero_programa');*/
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

    static comprobar_enlace_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('enlace_programa',100)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_max');
             //salir ejecucion con false
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

    static comprobar_formato_programa_SEARCH(){
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

    static comprobar_modo_correccion_programa_SEARCH(){
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

    static comprobar_modo_aplicacion_programa_SEARCH(){
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

        /*if(validacionesatomicas.tamano_fichero2('imagen_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tamano');
             return false;
        }*/
        
        DOM_class.mostrarexitovalor('imagen_programa');
        return true;
    }

    static comprobar_imagen_programa_SEARCH(){
 
        if (validacionesatomicas.size_maximo('imagen_programa',60)){
        }
        else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_programa','KO_imagen_programa_tam_max');
             //salir ejecucion con false
             return false;
        }

        DOM_class.mostrarexitovalor('imagen_programa');
        return true;
    }

    static comprobar_nuevo_imagen_programa(){

        if(validacionesatomicas.tamano_fichero2('nuevo_imagen_programa')){
        }
        else{
             DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_programa','KO_nuevo_imagen_programa_tamano');
             return false;
        }

        DOM_class.mostrarexitovalor('nuevo_imagen_programa');
        return true;

    }



    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';
    
        document.getElementById("IU_form").innerHTML=`

        <label class="label_id_programa">Id del Programa</label>
        <input type='text' id='id_programa' name='id_programa'></input>
        <div id="div_error_id_programa" class="errorcampo"><a id="error_id_programa"></a></div>
        <br>
        
        <label class="label_nombre_programa">Nombre del Programa</label>
        <input type='text' id='nombre_programa' name='nombre_programa'></input>
        <div id="div_error_nombre_programa" class="errorcampo"><a id="error_nombre_programa"></a></div>
        <br>
        
        <label class="label_acronimo_programa">Acrónimo del Programa</label>
        <input type='text' id='acronimo_programa' name='acronimo_programa'></input>
        <div id="div_error_acronimo_programa" class="errorcampo"><a id="error_acronimo_programa"></a></div>
        <br>
        
        <label class="label_nombre_original_programa">Nombre Original del Programa</label>
        <input type='text' id='nombre_original_programa' name='nombre_original_programa'></input>
        <div id="div_error_nombre_original_programa" class="errorcampo"><a id="error_nombre_original_programa"></a></div>
        <br>
    
        <label class="label_autor_programa">Autor del Programa</label>
        <input type='text' id='autor_programa' name='autor_programa'></input>
        <div id="div_error_autor_programa" class="errorcampo"><a id="error_autor_programa"></a></div>
        <br>
    
        <label class="label_autor_original_programa">Autor Original del Programa</label>
        <input type='text' id='autor_original_programa' name='autor_original_programa'></input>
        <div id="div_error_autor_original_programa" class="errorcampo"><a id="error_autor_original_programa"></a></div>
        <br>
    
        <label class="label_ano_programa">Año del Programa</label>
        <input type='text' id='ano_programa' name='ano_programa'></input>
        <div id="div_error_ano_programa" class="errorcampo"><a id="error_ano_programa"></a></div>
        <br>
    
        <label class="label_ano_original_programa">Año Original del Programa</label>
        <input type='text' id='ano_original_programa' name='ano_original_programa'></input>
        <div id="div_error_ano_original_programa" class="errorcampo"><a id="error_ano_original_programa"></a></div>
        <br>
    
        <label class="label_requisitos_programa">Requisitos del Programa</label>
        <input type='text' id='requisitos_programa' name='requisitos_programa'></input>
        <div id="div_error_requisitos_programa" class="errorcampo"><a id="error_requisitos_programa"></a></div>
        <br>
    
        <label class="label_poblacion_desde_programa">Población Desde</label>
        <input type='text' id='poblacion_desde_programa' name='poblacion_desde_programa'></input>
        <div id="div_error_poblacion_desde_programa" class="errorcampo"><a id="error_poblacion_desde_programa"></a></div>
        <br>
    
        <label class="label_poblacion_hasta_programa">Población Hasta</label>
        <input type='text' id='poblacion_hasta_programa' name='poblacion_hasta_programa'></input>
        <div id="div_error_poblacion_hasta_programa" class="errorcampo"><a id="error_poblacion_hasta_programa"></a></div>
        <br>
    
        <label class="label_unidad_poblacion">Unidad de Población</label>
        <select id="unidad_poblacion" name="unidad_poblacion">
            <option value="MESES">Meses</option>
            <option value="AÑOS">Años</option>
        </select>
        <div id="div_error_unidad_poblacion" class="errorcampo"><a id="error_unidad_poblacion"></a></div>
        <br>

        <label class="label_tipo_programa">Tipo de Programa</label>
        <select id="tipo_programa" name="tipo_programa">
            <option value="EVALUACIÓN">Evaluación</option>
            <option value="INTERVENCIÓN">Intervención</option>
            <option value="EVALUACIÓN E INTERVENCIÓN">Evaluación e Intervención</option>
        </select>
        <div id="div_error_tipo_programa" class="errorcampo"><a id="error_tipo_programa"></a></div>
        <br>
    
        <label class="label_tiempo_aplicacion_programa">Tiempo de Aplicación (minutos)</label>
        <input type='text' id='tiempo_aplicacion_programa' name='tiempo_aplicacion_programa'></input>
        <div id="div_error_tiempo_aplicacion_programa" class="errorcampo"><a id="error_tiempo_aplicacion_programa"></a></div>
        <br>
    
        <label class="label_descrip_interp_programa">Descripción e Interpretación del Programa</label>
        <input type='text' id='descrip_interp_programa' name='descrip_interp_programa'></input>
        <div id="div_error_descrip_interp_programa" class="errorcampo"><a id="error_descrip_interp_programa"></a></div>
        <br>
    
        <label id="label_fichero_programa" class="label_fichero_programa">Foto Persona</label>
        <input type='text' id='fichero_programa' name='fichero_programa'></input>
        <a id="link_fichero_programa" href="http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_fichero_programa" class="label_nuevo_fichero_programa">Nuevo Fichero Programa</label>
        <input type="file" id="nuevo_fichero_programa" name="nuevo_fichero_programa">
        <div id="div_error_nuevo_fichero_programa" class="errorcampo"><a id="error_nuevo_fichero_programa"></a></div>
        <br>
    
        <label class="label_enlace_programa">Enlace del Programa</label>
        <input type='text' id='enlace_programa' name='enlace_programa'></input>
        <div id="div_error_enlace_programa" class="errorcampo"><a id="error_enlace_programa"></a></div>
        <br>
    
        <label class="label_formato_programa">Formato del Programa</label>
        <select id="formato_programa" name="formato_programa">
            <option value="PAPEL">Papel</option>
            <option value="ELECTRÓNICO">Electrónico</option>
            <option value="PAPEL Y ELECTRÓNICO">Papel y Electrónico</option>
        </select>
        <div id="div_error_formato_programa" class="errorcampo"><a id="error_formato_programa"></a></div>
        <br>

        <label class="label_modo_correccion_programa">Modo de Corrección del Programa</label>
        <select id="modo_correccion_programa" name="modo_correccion_programa">
            <option value="PAPEL">Papel</option>
            <option value="ELECTRÓNICO">Electrónico</option>
            <option value="PAPEL Y ELECTRÓNICO">Papel y Electrónico</option>
        </select>
        <div id="div_error_modo_correccion_programa" class="errorcampo"><a id="error_modo_correccion_programa"></a></div>
        <br>

        <label class="label_modo_aplicacion_programa">Modo de Aplicación del Programa</label>
        <select id="modo_aplicacion_programa" name="modo_aplicacion_programa">
          <option value="INDIVIDUAL">Individual</option>
          <option value="COLECTIVO">Colectivo</option>
          <option value="INDIVIDUAL Y COLECTIVO">Individual y Colectivo</option>
        </select>
        <div id="div_error_modo_aplicacion_programa" class="errorcampo"><a id="error_modo_aplicacion_programa"></a></div>
        <br>

        <label id="label_imagen_programa" class="label_imagen_programa">Foto Persona</label>
        <input type='text' id='imagen_programa' name='imagen_programa'></input>
        <a id="link_imagen_programa" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_programa" class="label_nuevo_imagen_programa">Nueva Imagen Programa</label>
        <input type="file" id="nuevo_imagen_programa" name="nuevo_imagen_programa">
        <div id="div_error_nuevo_imagen_programa" class="errorcampo"><a id="error_nuevo_imagen_programa"></a></div>
        <br>

        `;

        //<input type="submit" id='id_submit' value="" />

        /**
         *   <label class="imagen_programa">Nombre de la Imagen del Programa</label>
            <input type='text' id='imagen_programa' name='imagen_programa'></input>
            <div id="div_error_imagen_programa" class="errorcampo"><a id="error_imagen_programa"></a></div>
        */

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