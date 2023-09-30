# Introducción
Aplicación web de un Ecommerce ficticio con autenticación de usuario.

# Rutas
- [Inicio](https://telectronics.netlify.app/): Se cargan los productos obtenidos desde la base de datos de Firebase.
- [Login](https://telectronics.netlify.app/login): Se puede iniciar sesión tanto con Google como con email y contraseña previamente registrados
- [Register](https://telectronics.netlify.app/register): Se puede registrar un usuario con su nombre, correo electrónico y contraseña
- [Profile](https://telectronics.netlify.app/profile): Si el usuario está logeado, se puede acceder a su perfil donde se especifica su nombre y dirección de correo. Además, desde allí se pueden acceder al historial de compras de ese usuario y, cerrar la sesión si es lo que se desea
- [Orders](https://telectronics.netlify.app/orders): Si el usuario se encuentra logeado, puede acceder a su historial de órdenes, de las cuáles se detallan los productos comprados, el id de la orden y el total a pagar

# Funcionalidades
- Importar un listado de productos desde una base de datos en Firebase
- Filtrar productos por categoría
- Ingreso y registro de usuarios tanto por correo electrónico como por Google
- Generación de órdenes, checkeando que haya el stock solicitado
- Consulta al historial de órdenes
![prueba](https://github.com/juanandreacchio/ProyectoFinalReact-Andreacchio/assets/123515437/36e60b7a-80ef-4d1e-a6e8-30d82d4f8012)


# Ejecutar localmente
```sh
git clone https://github.com/juanandreacchio/ProyectoFinalReact-Andreacchio
cd ProyectoFinalReact-Andreacchio
npm install
npm start
```

# Variables de entorno
Ver [.env.example](https://github.com/juanandreacchio/ProyectoFinalReact-Andreacchio/blob/main/.env.example) para un ejemplo

# Desarrollado utilizando
- [Vite](https://vitejs.dev/)
- [Cleave Js](https://nosir.github.io/cleave.js/)
- [Formik](https://formik.org/)
- [Toastify JS](https://apvarun.github.io/toastify-js/)
- [Sweet Alert 2](https://sweetalert2.github.io/)
- [React Spinners](https://www.davidhu.io/react-spinners/)
- [Netlify](https://www.netlify.com/)



# Testear la app
  [Deploy](https://telectronics.netlify.app/)
