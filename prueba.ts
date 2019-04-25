import { Usuario } from './usuario';

let usuario = new Usuario();
usuario.agregarAlbum("Album 1");
console.log(usuario.getAlbum().length);