export interface Proyecto { //esta es la estructura de proyectos
    id? : number;
    photo: string;
    title: string;
    text: string;
    link: string;
}
export interface Info{ //este es la estructura de sobreMi
    id?: number;
    titulo: string;
    texto: string;
}
export interface Portada { //esta es la estructura de la portada
    id? : number;
    photo: string;
    fondo: string;
    nombre: string;
}
export interface Slider { //esta es la estructura del slider
    id? : number;
    photo: string;
}