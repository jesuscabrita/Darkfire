# Darkfire :alien::fire:

# tecnologías utilizadas 

* [Node](https://nodejs.org/es/): Version ^16.13.2  
* [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project): Version ^2.9.9 
* [typescript](https://www.typescriptlang.org/): Version ^4.6.4 
* [npm](https://www.npmjs.com/): Version ^8.8.0


# Imagen Previa

![demo](https://user-images.githubusercontent.com/96850176/169742802-5183aa88-02d0-4952-a9d1-5a439df4a1f2.jpeg)

# Motivación del proyecto

El reto es desarrollar un proyecto interesante y dinamico, por ello decidí crear un juego al estilio Super Mario Bros, convimiento de salto , adelante atras y otras funcionalidades que puedan recrear una version distinta.

# Estructura del proyecto

```
├── Readme.md                   
├── src// Fuente
│  ├── actors // actores principales del proyecto
│  └─────── Actors.ts //
│  └─────── FPSViewer.ts //
│  └─────── Map.ts //
│  └─────── Ninja.ts //
│  └─────── Platform //
│  ├── assets // contenido multimedia del proyecto
│  ├── types //  tipos
│  └─────── Point //
│  ├── utils // funciones utiles
│  └─────── AngleToRoad.ts // funcion de calculo de angulo
│  └─────── checkLimits.ts // limites de canvas
│  └─────── KeyboardMap.ts // keysCode
└───────index.d.ts // 
└─────── script.ts // Control de configuración
├── public //
├── index.html // 
├── node_modules // 
├── package.json //
├── package-lock.json //
├── .gitignore //

```
# play here :video_game:

[Click here](https://nodejs.org/es/](https://jesuscabrita.github.io/Darkfire/)

# Tabla de contenidos :clipboard:

* [Estructura del proyecto](#Estructura-del-proyecto)
* [instalación](#instalacion) 
* [codigo ejemplo](#codigo-ejemplo) 
* [Manual de usuario](#Manual-de-usuario)
* [Dependencies](#Dependencies)
* [License](#License)


# instalación :computer:

paso 1 // instalar 
`$ npm install` 

paso 2  // inicar paquetes 
`$ npm init `

paso 3 // levantar servidor 
`$ npm run dev` 

# codigo ejemplo 

![codigo](https://user-images.githubusercontent.com/96850176/169834918-59c2db6d-151a-48a3-a638-71b1a8b4bbda.jpeg)

 calculando el salto y movimiento del jugador 
 
 # Manual de usuario
 
 | accion | tecla |
| ------------- | ------------- |
|isquierda  | :arrow_left:  |
|derecha  | :arrow_right:  |
| salto  | :arrow_up: |

# Dependencies

* [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project): Version ^2.9.9 
* [typescript](https://www.typescriptlang.org/): Version ^4.6.4 

# Agradecimientos

En agradecimiento a [CODE Core School](https://github.com/core-school) por la darme la oportunidad de comenzar este camino del desarrollo web, en total gratitud a mi teacher [Luis Miguel Feijoo](https://github.com/luismiguelfeijoo) por su paciencia y su espectacular metodologia y a mis compañeros del bootcamp por mantener el enfoque dia a dia.


# License
 
  [More](./LICENSE)
