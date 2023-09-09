const productos = [
    {
        id: '1',
        category: 'Videojuegos',
        price: 69.99,
        title: "Marvel's Spider-Man 2 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301148/CursoReact/Juegos/PS5%20%28JIC%29/spiderMan2_ywecbj.png',
        description: 'Descripción del producto',
        stock: 65
    },
    {
        id: '2',
        category: 'Videojuegos',
        price: 69.99,
        title: "Madden NFL 24 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299418/CursoReact/Juegos/PS5%20%28JIC%29/madden24_h2whd2.png',
        description: 'Descripción del producto',
        stock: 32
    },
    {
        id: '3',
        category: 'Videojuegos',
        price: 99.99,
        title: "NBA 2K24 Black Mamba - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/nba2k24_zgqtsr.png',
        description: 'Descripción del producto',
        stock: 0
    },    
    {
        id: '4',
        category: 'Videojuegos',
        price: 69.99,
        title: "Mortal Kombat 1 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300048/CursoReact/Juegos/PS5%20%28JIC%29/mk1_ejrrj5.png',
        description: 'Descripción del producto',
        stock: 81
    },  
    {
        id: '5',
        category: 'Videojuegos',
        price: 18.99,
        title: "Marvel's Spider-Man: Miles Morales - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/spidermanMilesMorales_srxctm.png',
        description: 'Descripción del producto',
        stock: 81
    },
    {
        id: '6',
        category: 'Videojuegos',
        price: 18.99,
        title: "Grand Theft Auto V - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301147/CursoReact/Juegos/PS5%20%28JIC%29/gtaV_gcqa0c.png',
        description: 'Descripción del producto',
        stock: 42
    },
    {
        id: '7',
        category: 'Videojuegos',
        price: 37.99,
        title: "MLB The Show 23 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301147/CursoReact/Juegos/PS5%20%28JIC%29/mlbTheShow23_aqu5gr.png',
        description: 'Descripción del producto',
        stock: 63
    },
    {
        id: '8',
        category: 'Videojuegos',
        price: 69.99,
        title: "Ea Sports FC 24 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/eaFC24_z9o3pv.png',
        description: 'Descripción del producto',
        stock: 11
    },
    {
        id: '9',
        category: 'Videojuegos',
        price: 44.99,
        title: "Gran Turismo 7 Launch - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301146/CursoReact/Juegos/PS5%20%28JIC%29/granTurismo7_abvpmd.png',
        description: 'Descripción del producto',
        stock: 54
    },
    {
        id: '10',
        category: 'Videojuegos',
        price: 44.99,
        title: "The Last Of Us Part I - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300048/CursoReact/Juegos/PS5%20%28JIC%29/tlouP1_cxgnqx.png',
        description: 'Descripción del producto',
        stock: 10
    },
    {
        id: '11',
        category: 'Videojuegos',
        price: 64.99,
        title: "Star Wars Jedi: Survivor - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300048/CursoReact/Juegos/PS5%20%28JIC%29/jediSurvivor_fc65ej.png',
        description: 'Descripción del producto',
        stock: 155
    },    
    {
        id: '12',
        category: 'Videojuegos',
        price: 64.99,
        title: "Final Fantasy XVI - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/finalFantasyXVICover_tlgecr.png',
        description: "La decimosexta entrega individual de la legendaria serie Final Fantasy marca un giro oscuro para la franquicia de RPG, con una trama compleja sobre la venganza, la lucha de poderes y una tragedia inevitable. Final Fantasy XVI reimagina a las invocaciones icónicas de la serie como Eikons. Estas criaturas mortíferas yacen dentro de los Dominantes, hombres y mujeres que heredan su inmenso poder cuando nacen, quieran o no.",
        stock: 32
    },  
    {
        id: '13',
        category: 'Videojuegos',
        price: 59.99,
        title: "Hogwarts Legacy - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300049/CursoReact/Juegos/PS5%20%28JIC%29/hogwartsLegacy_kb34xy.png',
        description: 'Descripción del producto',
        stock: 32
    },
    {
        id: '14',
        category: 'Videojuegos',
        price: 18.99,
        title: "Ghost of Tsushima Director's Cut - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301146/CursoReact/Juegos/PS5%20%28JIC%29/got5_d0qpae.png',
        description: 'Descripción del producto',
        stock: 99
    },
    {
        id: '15',
        category: 'Videojuegos',
        price: 64.99,
        title: "Diablo IV - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/diabloIV_bij7rl.png',
        description: 'Descripción del producto',
        stock: 87
    },
    {
        id: '16',
        category: 'Videojuegos',
        price: 54.99,
        title: "Street Fighter 6 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300048/CursoReact/Juegos/PS5%20%28JIC%29/streetFighter6_qv645p.png',
        description: 'Descripción del producto',
        stock: 69
    },
    {
        id: '17',
        category: 'Videojuegos',
        price: 18.99,
        title: "UNCHARTED: Legacy of Thieves Collection - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301147/CursoReact/Juegos/PS5%20%28JIC%29/uncharted5_nfujuk.png',
        description: 'Descripción del producto',
        stock: 72
    },
    {
        id: '18',
        category: 'Videojuegos',
        price: 49.99,
        title: "Resident Evil 4 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300048/CursoReact/Juegos/PS5%20%28JIC%29/residentEvil4_qd44tw.png',
        description: 'Descripción del producto',
        stock: 23
    },
    {
        id: '19',
        category: 'Videojuegos',
        price: 34.99,
        title: "Gotham Knights - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301147/CursoReact/Juegos/PS5%20%28JIC%29/gothamKnights_sj9wmr.png',
        description: 'Descripción del producto',
        stock: 67
    },    
    {
        id: '20',
        category: 'Videojuegos',
        price: 59.99,
        title: "Dead Islan 2 Pulp - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301148/CursoReact/Juegos/PS5%20%28JIC%29/deadIsland2_mmx3em.png',
        description: 'Descripción del producto',
        stock: 122
    },  
    {
        id: '21',
        category: 'Videojuegos',
        price: 49.99,
        title: "The Witcher 3: Wild Hunt - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301149/CursoReact/Juegos/PS5%20%28JIC%29/theWitcher3_v1nbtj.png',
        description: 'Descripción del producto',
        stock: 50
    },
    {
        id: '22',
        category: 'Videojuegos',
        price: 69.99,
        title: "God of War Ragnarok - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301146/CursoReact/Juegos/PS5%20%28JIC%29/gowRagnarok_scskm0.png',
        description: 'Descripción del producto',
        stock: 35
    },
    {
        id: '23',
        category: 'Videojuegos',
        price: 39.99,
        title: "The Last of Us Part II - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692300048/CursoReact/Juegos/PS5%20%28JIC%29/tlouP2_kggqq8.png',
        description: 'Descripción del producto',
        stock: 85
    },
    {
        id: '24',
        category: 'Videojuegos',
        price: 41.99,
        title: "F1 23 - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692299417/CursoReact/Juegos/PS5%20%28JIC%29/eaF123_gwsnws.png',
        description: 'Descripción del producto',
        stock: 26
    },
    {
        id: '25',
        category: 'Videojuegos',
        price: 69.99,
        title: "Call of Duty: Modern Warfare II - Playstation 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692301147/CursoReact/Juegos/PS5%20%28JIC%29/callOfDutyMW2_hegjf5.png',
        description: 'Descripción del producto',
        stock: 90
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
        id: '29',
        category: 'Audio',
        price: 70.99,
        title: "HyperX Cloud Flight",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404584/CursoReact/Audio/Auriculares/cloudFlight_qkmltl.png',
        description: 'Descripción del producto',
        stock: 28
    },  
    {
        id: '30',
        category: 'Audio',
        price: 49.99,
        title: "Corsair Hs65",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404584/CursoReact/Audio/Auriculares/corsairHs65_rpygtz.png',
        description: 'Descripción del producto',
        stock: 39
    },
    {
        id: '31',
        category: 'Audio',
        price: 89.90,
        title: "HyperX Cloud Alpha Red",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404584/CursoReact/Audio/Auriculares/cloudAlphaRed_xaggdl.png',
        description: 'Descripción del producto',
        stock: 15
    },
    {
        id: '32',
        category: 'Audio',
        price: 96.99,
        title: "Razer BlackShark V2",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404584/CursoReact/Audio/Auriculares/blackSharkV2_b9qwiw.png',
        description: 'Descripción del producto',
        stock: 25
    },
    {
        id: '33',
        category: 'Audio',
        price: 32.99,
        title: "Redragon H350 Pandra RGB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692404584/CursoReact/Audio/Auriculares/pandoraRedragon_ugulyh.png',
        description: 'Descripción del producto',
        stock: 56
    },
    {
        id: '34',
        category: 'Audio',
        price: 39.90,
        title: "Logitech G432 Wired",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309793/CursoReact/Audio/Auriculares/logitechG432_yvhr6d.png',
        description: 'Descripción del producto',
        stock: 47
    },
    {
        id: '35',
        category: 'Audio',
        price: 29.99,
        title: "ZealSound Microphone USB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309784/CursoReact/Audio/Micr%C3%B3fonos/zealSound_fnvho3.png',
        description: 'Descripción del producto',
        stock: 32
    },
    {
        id: '36',
        category: 'Audio',
        price: 79.99,
        title: "Razer Seiren V2 USB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/razerSeirenMicrofono_ikwd7u.png',
        description: 'Descripción del producto',
        stock: 12
    },    
    {
        id: '37',
        category: 'Audio',
        price: 39.99,
        title: "HyperX SoloCast USB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/solocasoMicrofono_fjytjt.png',
        description: 'Descripción del producto',
        stock: 8
    },  
    {
        id: '38',
        category: 'Audio',
        price: 89.99,
        title: "Blue Yeti Blackout USB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/yetiBlackoutMicrofono_dzoduc.png',
        description: 'Descripción del producto',
        stock: 14
    },
    {
        id: '39',
        category: 'Audio',
        price: 119.99,
        title: "HyperX QuadCast USB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/quadcastMicrofono_qevrzb.png',
        description: 'Descripción del producto',
        stock: 36
    },
    {
        id: '40',
        category: 'Audio',
        price: 139.99,
        title: "Blue Yeti X",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/yetiXProfessional_miswt4.png',
        description: 'Descripción del producto',
        stock: 28
    },
    {
        id: '41',
        category: 'Audio',
        price: 54.99,
        title: "BlueSnowball iCE USB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/blueSnowballMicrofono_n8yqpu.png',
        description: 'Descripción del producto',
        stock: 29
    },
    {
        id: '42',
        category: 'Audio',
        price: 17.48,
        title: "Atrix Desktop USB Microphone",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692309740/CursoReact/Audio/Micr%C3%B3fonos/atrixDesktopMicrofono_ixtcpu.png',
        description: 'Descripción del producto',
        stock: 22
    },
    {
        id: '43',
        category: 'Audio',
        price: 22.99,
        title: "Crosely CR3039A",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/crosleyCR3039A_tpkxys.png',
        description: 'Descripción del producto',
        stock: 26
    },
    {
        id: '44',
        category: 'Audio',
        price: 59.95,
        title: "JBL Clip 4 Portable Speaker",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/jblClip4_ifnip2.png',
        description: 'Descripción del producto',
        stock: 25
    },    
    {
        id: '45',
        category: 'Audio',
        price: 25.99,
        title: "Retro Music Speaker B5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/retroB5_hl6ces.png',
        description: 'Descripción del producto',
        stock: 17
    },  
    {
        id: '46',
        category: 'Audio',
        price: 249.99,
        title: "Razer Leviathan V2",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/leviathanV2_xrminy.png',
        description: 'Descripción del producto',
        stock: 26
    },
    {
        id: '47',
        category: 'Audio',
        price: 109.99,
        title: "JBL Flip 6",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/jblFlip6_toi4zp.png',
        description: 'Descripción del producto',
        stock: 39
    },
    {
        id: '48',
        category: 'Audio',
        price: 179.99,
        title: "JBL Charge 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/jblCharge5_fqlid7.png',
        description: 'Descripción del producto',
        stock: 33
    },
    {
        id: '49',
        category: 'Audio',
        price: 199.99,
        title: "JBL Pulse 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405510/CursoReact/Audio/Parlantes/jblPulse5_gnr5w9.png',
        description: 'Descripción del producto',
        stock: 22
    },
    {
        id: '50',
        category: 'Audio',
        price: 27.48,
        title: "iLive Platinum Under Cabinet Speaker",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692405509/CursoReact/Audio/Parlantes/iLivePlatinum_gzv8ge.png',
        description: 'Descripción del producto',
        stock: 36
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
        id: '52',
        category: 'Computacion',
        price: 419.99,
        title: "Intel Core i7-12700K CPU 12 (8P+4E) Cores up to 5.0 GHz 125W",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448696/CursoReact/Computaci%C3%B3n/CPU/i712700K_wqnoiz.png',
        description: 'Descripción del producto',
        stock: 66
    },
    {
        id: '53',
        category: 'Computacion',
        price: 613.99,
        title: "Intel Core i9-12900 (12th Gen) 16-Core 2.40 GHz LGA 1700",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448696/CursoReact/Computaci%C3%B3n/CPU/i912900_scng52.png',
        description: 'Descripción del producto',
        stock: 88
    },    
    {
        id: '54',
        category: 'Computacion',
        price: 299.99,
        title: "AMD Ryzen 5 5600X Processor 6-core 12 Threads up to 4.6 GHz",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448696/CursoReact/Computaci%C3%B3n/CPU/ryzen55600X_l1s7mj.png',
        description: 'Descripción del producto',
        stock: 45
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
        id: '57',
        category: 'Computacion',
        price: 379.99,
        title: "MSI NVIDIA GeForce RTX 3060 Ventus 3X 12G OC 12GB GDDR6",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448706/CursoReact/Computaci%C3%B3n/GPU/nvidiaRTX3060_rqfxja.png',
        description: 'Descripción del producto',
        stock: 28
    },
    {
        id: '58',
        category: 'Computacion',
        price: 869.99,
        title: "MSI GeForce RTX 4070 Ti GAMING X TRIO GPU 12GB GDDR6X PCI Express",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448706/CursoReact/Computaci%C3%B3n/GPU/msiGeForceRTX4070_jvybrx.png',
        description: 'Descripción del producto',
        stock: 22
    },
    {
        id: '59',
        category: 'Computacion',
        price: 1669.99,
        title: "PNY GeForce RTX 4090 24GB XLR8 Gaming VERTO EPIC-X RGB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448706/CursoReact/Computaci%C3%B3n/GPU/pnyGeForceRTX4090_u7kqm7.png',
        description: 'Descripción del producto',
        stock: 72
    },
    {
        id: '60',
        category: 'Computacion',
        price: 1549.99,
        title: "ASUS Strix GeForce RTX 4080 16GB GDDR6X OC Edition",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692448706/CursoReact/Computaci%C3%B3n/GPU/asusStrixGeForceRTX4080_lj1gly.png',
        description: 'Descripción del producto',
        stock: 33
    },
    {
        id: '61',
        category: 'Computacion',
        price: 699.99,
        title: "MSI MEG X670E ACE AMD Motherboard",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449433/CursoReact/Computaci%C3%B3n/Mother/msiMegX670E_urjnob.png',
        description: 'Descripción del producto',
        stock: 31
    },    
    {
        id: '62',
        category: 'Computacion',
        price: 229.99,
        title: "MSI MPG X570S EDGE MAX WIFI DDR4 ATX Gaming Motherboard",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449432/CursoReact/Computaci%C3%B3n/Mother/msiMpgX570S_bpu0er.png',
        description: 'Descripción del producto',
        stock: 25
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
        id: '64',
        category: 'Computacion',
        price: 259.99,
        title: "ASUS TUF GAMING Z690-PLUS WIFI D4 Bundle DDR4 Intel LGA 1700 ATX Gaming",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449432/CursoReact/Computaci%C3%B3n/Mother/asusZ690_kqcfnp.png',
        description: 'Descripción del producto',
        stock: 26
    },
    {
        id: '65',
        category: 'Computacion',
        price: 189.99,
        title: "MSI B550 Tomahawk RGB GAMING Motherboard",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449433/CursoReact/Computaci%C3%B3n/Mother/msiB550_jnxotb.png',
        description: 'Descripción del producto',
        stock: 32
    },
    {
        id: '66',
        category: 'Computacion',
        price: 214.99,
        title: "CORSAIR iCUE 5000X RGB Black Computer Case",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449054/CursoReact/Computaci%C3%B3n/Cases/iCue5000x_mporgg.png',
        description: 'Descripción del producto',
        stock: 33
    },
    {
        id: '67',
        category: 'Computacion',
        price: 94.99,
        title: "Cooler Master NR400 mATX Tower Computer Case",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449054/CursoReact/Computaci%C3%B3n/Cases/coolerMaterNR400mATX_z0klai.png',
        description: 'Descripción del producto',
        stock: 56
    },
    {
        id: '68',
        category: 'Computacion',
        price: 89.99,
        title: "Cooler Master N400 Mid Tower Computer Case with Front Mesh Ventilation",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449055/CursoReact/Computaci%C3%B3n/Cases/coolerMasterN400_oumrq2.png',
        description: 'Descripción del producto',
        stock: 99
    },
    {
        id: '69',
        category: 'Computacion',
        price: 299.99,
        title: "Cooler Master HAF 700 E-ATX Computer Case",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449055/CursoReact/Computaci%C3%B3n/Cases/coolerMasterHAF700_trcuii.png',
        description: 'Descripción del producto',
        stock: 11
    },    
    {
        id: '70',
        category: 'Computacion',
        price: 199.99,
        title: "HYTE Y60 Mid-Tower ATX PC Case with Panoramic Tempered Glass",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449054/CursoReact/Computaci%C3%B3n/Cases/hyteY60Mid_gbzcaz.png',
        description: 'Descripción del producto',
        stock: 30
    },  
    {
        id: '71',
        category: 'Computacion',
        price: 129.99,
        title: "NZXT C750 Gold 750W Power Supply NPC750MUS",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449778/CursoReact/Computaci%C3%B3n/Power/nzxtC750_nyblju.png',
        description: 'Descripción del producto',
        stock: 29
    },
    {
        id: '72',
        category: 'Computacion',
        price: 99.99,
        title: "Cooler Master MasterLiquid ML240L V2 Liquid Cooling System with RGB",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449778/CursoReact/Computaci%C3%B3n/Power/coolerMasterML240L_govlfz.png',
        description: 'Descripción del producto',
        stock: 28
    },
    {
        id: '73',
        category: 'Computacion',
        price: 97.99,
        title: "EVGA SuperNOVA 650 GT 650W Gold Compact Power Supply",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449778/CursoReact/Computaci%C3%B3n/Power/evgaSuperNOVA650_yfc1hq.png',
        description: 'Descripción del producto',
        stock: 21
    },
    {
        id: '74',
        category: 'Computacion',
        price: 359.99,
        title: "MSI MEG Ai1300P 1300W Power Supply PCIe5 MEG Ai1300PPCIE5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449778/CursoReact/Computaci%C3%B3n/Power/msiMEGAi1300P_tvtt27.png',
        description: 'Descripción del producto',
        stock: 22
    },
    {
        id: '75',
        category: 'Computacion',
        price: 279.99,
        title: "Cooler Master V1100 SFX Platinum Power Supply",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692449778/CursoReact/Computaci%C3%B3n/Power/coolerMasterV1100_jjvahy.png',
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
    {
        id: '79',
        category: 'Celulares',
        price: 899.99,
        title: "iPhone 14 Plus 128GB (PRODUCT)RED",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14Plus128Rojo_pbxjaz.png',
        description: 'Descripción del producto',
        stock: 50
    },    
    {
        id: '80',
        category: 'Celulares',
        price: 899.99,
        title: "iPhone 14 256GB Blue",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14128Azul_iknatq.png',
        description: 'Descripción del producto',
        stock: 52
    },  
    {
        id: '81',
        category: 'Celulares',
        price: 899.99,
        title: "iPhone 14 256GB Purple",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14128Purple_qa1mi8.png',
        description: 'Descripción del producto',
        stock: 53
    },
    {
        id: '82',
        category: 'Celulares',
        price: 999.99,
        title: "iPhone 14 Plus 256GB Blue",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14Plus256Azul_pno9d2.png',
        description: 'Descripción del producto',
        stock: 55
    },
    {
        id: '83',
        category: 'Celulares',
        price: 1119.99,
        title: "iPhone 14 Pro Max 256GB Deep Purple",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone14ProMax256DeepPurple_cav5fm.png',
        description: 'Descripción del producto',
        stock: 44
    },
    {
        id: '84',
        category: 'Celulares',
        price: 699.99,
        title: "iPhone 13 128GB Green",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466544/CursoReact/Celulares/iPhone/iPhone13128Green_v7nbph.png',
        description: 'Descripción del producto',
        stock: 67
    },
    {
        id: '85',
        category: 'Celulares',
        price: 434.99,
        title: "iPhone 12 126GB Purple",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466543/CursoReact/Celulares/iPhone/iPhone12256Purple_hqzjj5.png',
        description: 'Descripción del producto',
        stock: 78
    },
    {
        id: '86',
        category: 'Celulares',
        price: 418.99,
        title: "iPhone 11 Pro 64GB Space Gray",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466543/CursoReact/Celulares/iPhone/iPhone11ProSpaceGrey64_ot7t4g.png',
        description: 'Descripción del producto',
        stock: 65
    },
    {
        id: '87',
        category: 'Celulares',
        price: 699.99,
        title: "iPhone 13 mini 256GB (PRODUCT)RED",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466543/CursoReact/Celulares/iPhone/iPhone13Mini256Red_f4lh9d.png',
        description: 'Descripción del producto',
        stock: 50
    },    
    {
        id: '88',
        category: 'Celulares',
        price: 576.99,
        title: "iPhone 12 256GB Pink",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466543/CursoReact/Celulares/iPhone/iPhone12256Pink_xa2aol.png',
        description: 'Descripción del producto',
        stock: 33
    },  
    {
        id: '89',
        category: 'Celulares',
        price: 699.99,
        title: "iPhone 13 mini 256GB Blue",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466543/CursoReact/Celulares/iPhone/iPhone13Mini256Blue_a8lkaj.png',
        description: 'Descripción del producto',
        stock: 12
    },
    {
        id: '90',
        category: 'Celulares',
        price: 599.99,
        title: "iPhone 13 mini 128GB Midnight",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466543/CursoReact/Celulares/iPhone/iPhone13Mini256MidnightBlue_urszou.png',
        description: 'Descripción del producto',
        stock: 25
    },
    {
        id: '91',
        category: 'Celulares',
        price: 404.99,
        title: "SAMSUNG Galaxy S22 5G",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/galaxyS225G_gse35a.png',
        description: 'Descripción del producto',
        stock: 56
    },
    {
        id: '92',
        category: 'Celulares',
        price: 905.99,
        title: "SAMSUNG Galaxy S23 Ultra",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/galaxyS23Ultra_xz9tfn.png',
        description: 'Descripción del producto',
        stock: 77
    },
    {
        id: '93',
        category: 'Celulares',
        price: 505.99,
        title: "SAMSUNG Galaxy Z Flip 4",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/galaxyZFlip45G_z4tvit.png',
        description: 'Descripción del producto',
        stock: 89
    },
    {
        id: '94',
        category: 'Celulares',
        price: 1899.99,
        title: "SAMSUNG Galaxy Z Fold 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/zFold5512_kvhl0q.png',
        description: 'Descripción del producto',
        stock: 67
    },
    {
        id: '95',
        category: 'Celulares',
        price: 1119.99,
        title: "SAMSUNG Galaxy Z Flip 5",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/galaxyZFlip5512_eai8os.png',
        description: 'Descripción del producto',
        stock: 89
    },    
    {
        id: '96',
        category: 'Celulares',
        price: 106.99,
        title: "SAMSUNG Galaxy A04e",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/galaxyA04e64_pzxung.png',
        description: 'Descripción del producto',
        stock: 45
    },  
    {
        id: '97',
        category: 'Celulares',
        price: 199.99,
        title: "SAMSUNG Galaxy A14",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/a144g_vi9ty7.png',
        description: 'Descripción del producto',
        stock: 33
    },
    {
        id: '98',
        category: 'Celulares',
        price: 194.99,
        title: "Motrola Moto G42",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/motoG42_lb1xez.png',
        description: 'Descripción del producto',
        stock: 56
    },
    {
        id: '99',
        category: 'Celulares',
        price: 145.99,
        title: "Motrola Moto G52",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/motoG52_zum9ia.png',
        description: 'Descripción del producto',
        stock: 11
    },
    {
        id: '100',
        category: 'Celulares',
        price: 699.99,
        title: "Motorola Edge 40 Pro 5G",
        img: 'https://res.cloudinary.com/dmiy7cyjx/image/upload/v1692466997/CursoReact/Celulares/No%20iPhone/edge40Pro5g_kbe0ar.png',
        description: 'Descripción del producto',
        stock: 13
    }
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