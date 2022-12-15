import { Proyecto,Info,Portada,Slider } from './Portfolio'

export const INFORMACION: Info[] =[
    {
        id:1,
        titulo: 'FullWeb Developer',
        texto:'     Hola! nte de ingenieria en sistemas, programador de C++, Python, HTML, CSS, JS y con titulo de auxiliar bilingue de Ingles, no tengo experiencia laboral en el ambito del desarrollo pero aprendo rapido y estoy dispuesto a conocer las tecnologias necesarias para trabajar'
   },
]
export const PORTADA: Portada[] =[
    {
        id:1,
        photo:'./assets/imagenes/yo.png',
        fondo:'./assets/imagenes/fotoFondo.jpg',
        nombre:'Valentin Andres Sigaudo'
   },
]
export const SLIDER: Slider[] =[
    { 
        id:1,
        photo: './assets/imagenes/andlu.PNG'
    },
    {
        id:2,
        photo:'./assets/imagenes/generala.PNG'
    },
    {
        id:3,
        photo:'./assets/imagenes/paginaPrueba.PNG'
    },
    {
        id:4,
        photo:'./assets/imagenes/primerPortfolio.PNG'
    }
]
export const PROYECTOS: Proyecto[]= [
    {
        id:1,
        photo:'./assets/imagenes/andlu.PNG',
        title:'ANDLUml',
        text:'ANDLUml es un programa de cargado de animales para llevar registros de vacunaciones, nacimientos y otras cosas de animales ganaderos, donde se pueden cargar animales, ver la lista, actualizarla, buscar animales por caravana, entre otras cosas esta hecho en Python con un sistema de base de datos MySQlite',
        link:'default',
        },
        {
       id:2,
        photo:'./assets/imagenes/generala.PNG',
        title:'Generala',
        text:'La generala es un juego de dados que consiste en tirar los dados y formar juegos con los numeros con la opcion de volver a tirar algunos dados para que se forme un juego este es un proyecto de la facultad y esta hecho completamente en C++',
        link:'default'
        },
        {
        id:3,
        photo:'./assets/imagenes/paginaPrueba.PNG',
        title:'Pagina de Prueba',
        text:'Esta es una simple pagina de prueba donde estaba experimentando distintas cosas con HTML y CSS, simplemente tiene uso de videos, imagenes, distintas formas de colocar texto y hubicaciones de caja, es solo para el ejemplo del portfolio',
        link:'default'
        },
        {
        id:4,
        photo:'./assets/imagenes/primerPortfolio.PNG',
        title:'Primer Portfolio',
        text:'Este es la anterior maqueta de portfolio que habia hecho, con puro HTML y CSS, sin ninguna otra herramiénta',
        link: 'default'
        }
]
   