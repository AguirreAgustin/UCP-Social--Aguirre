import { Album } from './album';

export class Usuario {
    private nombre: String;
    private apellido: String;
    private imagen: String;
    private intereses: String;
    private correo: String;
    private verificado: boolean;
    private verificador: String;
    private albumes: Array<Album>;                                                   
    /*constructor(nombre: String,apellido: String,intereses: String, correo: String, verificado: boolean,verificador: String) {
        this.setNombre;
        this.setApellido;
        this.setImagen;
        this.setCorreo;
        this.setVerificado;
        this.setVerificador;
    }*/
    constructor(){
        this.setAlbumes(new Array<Album>());
    }
     
    private setNombre (nombre : String) {
        this.nombre = nombre;
    }
    private setApellido (apellido : String) {
        this.apellido = apellido;
    }
    private setImagen (imagen : String) {
        this.imagen = imagen;
    }
    private setIntereses (intereses : String) {
        this.intereses = intereses;
    }
    private setCorreo (correo : String) {
        this.correo = correo;
    }
    private setVerificado (verificado : boolean) {
        this.verificado = verificado;
    }
    private setVerificador (verificador : String) {
        this.verificador = verificador;
    }
     
    public getNombre() : String {
        return this.nombre;
    }
    public getApellido() : String {
        return this.apellido;
    }
    public getImagen() : String {
        return this.imagen;
    }
    public getIntereses() : String {
        return this.intereses;
    }
    public getCorreo() : String {
        return this.correo;
    }
    public getVerificado() : boolean {
        return this.verificado;
    }
    public getVerificador() : String {
        return this.verificador;
    }

    public generarEnlaceVerificador(){

        return "demo";

    }
    
    private setAlbumes (album : Array<Album>) {
        this.albumes = album;
    }
     
    public getAlbum() : Array<Album> {
        return this.albumes;
    }

    public agregarAlbum(nombre: String){

        var i;
        var tamanioArray = this.albumes.length;
        var tamanioArrayAux = 0;

        for (i = 0; i < this.albumes.length; i++){
            if (this.albumes[i].getNombre() != nombre ){
                tamanioArrayAux += 1;
            }
        }
        if (tamanioArray == tamanioArrayAux){

            let album = new Album(nombre);

            this.albumes.push(album);
            
        }

        

    }

    public quitarAlbum(nombre: String){
        for (var i = 0; i < this.albumes.length; i++){
            if(this.albumes[i].getNombre()== nombre){
                this.albumes.splice(i,1);
            }

        }


        /*this.albumes.forEach(function(value){
            var i = value;
            var l = this.getAlbum().length;
            if(( l -1 ) == i){
                this.albumes.pop;
            }
            
        });*/
    }
    public obtenerAlbumPorNombre(nombre: String){
        
        for (var i = 0; i < this.albumes.length; i++){
            if (this.albumes[i].getNombre() == nombre ){
                return this.albumes[i];
            }
        }

    }

    public agregar10Albums(){

        var i;
        var nombre;

        

        for (i = 1; i < 11; i++){
        
            nombre = "Album " + i.toString();

            let album = new Album(nombre);

            this.albumes.push(album);

        }

        

    }
    public agregarImagenEnAlbum(nombre: String , album: String){


            this.obtenerAlbumPorNombre(album).agregarImagen(nombre);
    
    }

}