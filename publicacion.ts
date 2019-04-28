export class Publicacion {
    private fecha: String;
    private contenido: String;
    private privacidad: boolean;
    constructor(fecha: String , contenido: String, privacidad: boolean) {
        
        this.setFecha(fecha);
        this.setContenido(contenido);
        this.setPrivacidad

    }
    
    private setFecha(fecha: String) {
        this.fecha = fecha;
    }
    public getFecha(): String{
        
        return this.fecha;

    }
    private setContenido(contenido: String) {
        this.contenido = contenido;
    }
    public getContenido(): String{
        
        return this.contenido;

    }
    private setPrivacidad(privacidad: boolean) {
        this.privacidad = privacidad;
    }
    public getPrivacidad(): boolean{
        
        return this.privacidad;

    }

}