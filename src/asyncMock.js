const productos = [
    {
        id: '1',
        category: 'Videojuegos',
        price: 69.99,
        title: "Marvel's Spider-Man 2 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301148/CursoReact/Juegos/PS5%20%28JIC%29/spiderMan2_ywecbj.png',
        description:
        'Los Spider-Men Peter Parker y Miles Morales se enfrentan a la prueba de fuerza definitiva dentro y fuera de sus trajes mientras luchan por salvar a la ciudad, a sus seres queridos y a ellos mismos, del monstruoso Venom y la peligrosa nueva amenaza simbionte.\n' +
        'Explora la enorme Nueva York de Marvel con mayor velocidad de balanceo y las nuevas alas de telaraña, mientras cambias rápidamente entre Peter y Miles para disfrutar de las diferentes historias, habilidades épicas y equipo de alta tecnología.\n' +
        'Usa las habilidades del simbionte con Peter y los explosivos poderes bioeléctricos de Miles para luchar contra los nuevos e icónicos supervillanos de Marvel, incluida una adaptación original del poderoso simbionte Venom, el despiadado Kraven, el Cazador, el colérico Lizard y muchos otros de la enorme vitrina de enemigos de Marvel.\n',
        stock: 65
    },
    {
        id: '2',
        category: 'Videojuegos',
        price: 69.99,
        title: "Madden NFL 24 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299418/CursoReact/Juegos/PS5%20%28JIC%29/madden24_h2whd2.png',
        description: 
        "Presentamos la tecnología SAPIEN en Madden NFL 24 para PS5™\n" +
        "La tecnología SAPIEN ofrece un avance en el realismo de los jugadores de la NFL, con más definición corporal y variedad de físicos que resultan en movimientos realistas.\n" +
        "FieldSENSE™ (solo PS5™)\n" +
        "La nueva versión de FieldSENSE™ proporciona una base de jugabilidad mejorada en PS5™, que agrega más control y realismo a todas tus formas de jugar.\n" +
        "Jugabilidad\n" +
        "Mejoras de la IA (solo PS5™)\n" +
        "Una IA más inteligente hace que los jugadores reaccionen con fluidez y realismo a las jugadas que eliges.\n" +
        "Pases basados en la habilidad 2.0 (solo PS5™)\n" +
        "Salta para atrapar el balón a una mano con la IA de recepciones mejorada y nuevas animaciones.\n" +
        "Golpearlo todo 2.0 (solo PS5™)\n" +
        "Las calificaciones y la percepción de la situación de tu equipo ahora son más importantes, por lo que podrás confiar en que presionarán y atacarán con más eficacia.\n" +
        "Modos de juego\n" +
        "Superstar: The League (solo PS5™)\n" +
        "Personaliza a tu superestrella para completar objetivos como el NFL Combine y determinar tu orden en el draft, y construye tu legado con nuevos minijuegos y la calificación de jugadores en vivo entre diferentes posiciones.\n" +
        "Superstar Showdown (solo PS5™)\n" +
        "Lúcete en esta atmósfera totalmente nueva.\n" +
        "Actualizaciones de Franchise en PS5™\n" +
        "Juega nuevos minijuegos y ejercicios de entrenamiento para progresar tu equipo. Usa una función de reubicación del equipo optimizada con ciudades y uniformes nuevos para crear tu propia historia de Franchise.\n" +
        "Cross-play (solo PS5™)\n" +
        "Conéctate con personas en otras plataformas en Online Head to Head y más.*\n",
        stock: 32
    },
    {
        id: '3',
        category: 'Videojuegos',
        price: 99.99,
        title: "NBA 2K24 Black Mamba - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/nba2k24_zgqtsr.png',
        description: 
        "Arma tu equipo y vive el pasado, el presente y el futuro de la cultura del baloncesto en NBA 2K24. Disfruta de una experiencia auténtica con opciones personalizadas ilimitadas de MyPLAYER, en MyCAREER. Colecciona una gran variedad de leyendas y arma tu alineación ideal en MyTEAM. Revive tus épocas favoritas como GM o Comisionado en MyNBA. Siente una jugabilidad de próximo nivel y disfruta de visuales ultrarrealistas mientras juegas con tus equipos favoritos de la NBA y la WNBA en JUEGA AHORA.\n" +
        "MOMENTOS MAMBA™\n" +
        "Recrea algunas de las actuaciones más sobresalientes y cautivadoras de Kobe en su ascenso al estrellato mundial. Revive los primeros triunfos de su carrera como un fenómeno joven y avanza a través de su viaje trascendental desde anotador de élite hasta ser uno de los mejores jugadores de todos los tiempos.\n" +
        "EL JUEGO ESTÁ CAMBIANDO\n" +
        "Presentamos ProPLAY: una nueva tecnología revolucionaria que lleva directamente material de la NBA a tu juego de NBA 2K24. ProPLAY permite animaciones y movimientos a través de la acción en la cancha de la NBA para un salto generacional en cuanto a autenticidad.\n" +
        "MyCAREER SE INTENSIFICA\n" +
        "Toma control de tu legado en MyCAREER y pasa de talento generacional a jugador del Salón de la Fama, consiguiendo campeonatos y alcanzando la grandeza. Explora un paisaje tropical y muestra tu estilo personalizado en una nueva City, llena de misiones opcionales y competencias intensas en canchas al aire libre.\n" +
        "GESTIONA TU MyTEAM\n" +
        "El clásico modo de colección de tarjetas regresa con miles de horas de diversión personalizada. Acude al pasado y al presente con superestrellas actuales y leyendas clásicas para formar un equipo que pueda dominar en los modos de un solo jugador y multijugador. MyTEAM mantiene su estilo competitivo característico, pero ahora cuenta con muchas mejoras innovadoras, como el nuevo modo con límite de salario.\n" +
        "EL CROSSPLAY ESTÁ AQUÍ\n" +
        "Llama a tus amigos y disfruten de la mejor experiencia de baloncesto en NBA 2K24 gracias al crossplay entre las consolas de nueva generación.** Compite a la par o contra jugadores de todo el mundo en dinámicos partidos cooperativos y emocionantes torneos en línea, o en juegos improvisados casuales.",
        stock: 0
    },    
    {
        id: '26',
        category: 'Audio',
        price: 149.99,
        title: "Logitech G733 Lightspeed Wireless",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404585/CursoReact/Audio/Auriculares/lightspeedG733_rzm7pr.png',
        description: 'Descripción del producto',
        stock: 32
    },
    {
        id: '27',
        category: 'Audio',
        price: 65.99,
        title: "HyperX Cloud Stinger Core Wireless",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404585/CursoReact/Audio/Auriculares/cloudStingerCoreWireless_sfymqt.png',
        description: 'Descripción del producto',
        stock: 31
    },
    {
        id: '28',
        category: 'Audio',
        price: 49.95,
        title: "Geeknet Star Wars Boba Fett Wired",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404584/CursoReact/Audio/Auriculares/geekNetStarWars_r0otzq.png',
        description: 'Descripción del producto',
        stock: 25
    },    
    {
        id: '51',
        category: 'Computacion',
        price: 319.99,
        title: "Intel Core i5 (13th Gen) i5-13600K Tetradeca-core 3.50 GHz",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448696/CursoReact/Computaci%C3%B3n/CPU/i513600K_ge0mxr.png',
        description: 'Descripción del producto',
        stock: 77
    }, 
    {
        id: '55',
        category: 'Computacion',
        price: 449.99,
        title: "AMD Ryzen 7 7800X3D 8-Core 16-Thread up to 5.0GHz AM5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448696/CursoReact/Computaci%C3%B3n/CPU/ryzen77800X_w5yfb8.png',
        description: 'Descripción del producto',
        stock: 33
    },
    {
        id: '56',
        category: 'Computacion',
        price: 579.99,
        title: "ASUS Dual GeForce RTX 3070 V2 OC Edition Graphic Card",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448707/CursoReact/Computaci%C3%B3n/GPU/asusDualGeForceRTX3070V2_yqddns.png',
        description: 'Descripción del producto',
        stock: 12
    },  
    {
        id: '63',
        category: 'Computacion',
        price: 189.99,
        title: "MSI B660 TOMAHAWK WIFI DDR4 LGA 1700 ATX Gaming Motherboard",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449432/CursoReact/Computaci%C3%B3n/Mother/msiB660_eje4h8.png',
        description: 'Descripción del producto',
        stock: 25
    },
    {
        id: '76',
        category: 'Celulares',
        price: 799.99,
        title: "iPhone 14 128GB Midnight",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14128_cz1ggw.png',
        description: 'Descripción del producto',
        stock: 28
    },
    {
        id: '77',
        category: 'Celulares',
        price: 999.99,
        title: "iPhone 14 Pro 128GB Space Black",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14Pro128_ffotmq.png',
        description: 'Descripción del producto',
        stock: 25
    },
    {
        id: '78',
        category: 'Celulares',
        price: 429.99,
        title: "iPhone SE (2022) 64GB (PRODUCT)RED",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhoneSE64Rojo_xp2vid.png',
        description: 'Descripción del producto',
        stock: 36
    },
]

export const getProducts = (() =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    })
})

export const getProductsById =((productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500);
    })
})

export const getProductByCategory = ((categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 500);
    })
})

