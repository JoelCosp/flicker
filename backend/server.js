// Cargamos las variables de entorno
require('dotenv').config();
// Importamos express para crear el servidor
const express = require('express');
// Importamos las rutas de autentificacion
const authRoutes = require('./auth');
// Creamos instancia de la app de express
const app = express();
// Middleware para permitir el uso de JSON en las solicitudes
app.use(express.json());
// Usar las rutas de autenticación y asignarlas al prefijo "/auth"  
// Esto significa que todas las rutas definidas en auth.js estarán disponibles bajo "/auth"
app.use('/auth', authRoutes);
// Definir el puerto del servidor, tomando el valor de .env o usando 3000 por defecto 
const PORT = process.env.PORT || 3000;
// Iniciar el servidor y escuchar en el puerto especificado  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
