# Sodati Documentation

Sodati es una interfaz que te permite acceder a información detallada sobre los discos de Soda Stereo y Gustavo Cerati. La API utiliza la plataforma Deezer como punto de partida para obtener datos y los almacena en una base de datos MySQL. A continuación, se detallan los endpoints disponibles:

## Base URL
El punto de acceso principal para la API es: `https://sodati-api.portfolio-ls.online`

## Obtener todos los discos de Soda Stereo
**Endpoint:**
GET /soda/
**Descripción:**
Este endpoint te proporciona una lista de todos los discos de Soda Stereo.

**Ejemplo de Uso:**
curl https://sodati-api.portfolio-ls.online/soda/
Obtener un disco específico de Soda Stereo por ID
Endpoint:
GET /soda/{id}/album
Parámetros:
• `id`: Identificador único del disco.
Descripción:
Este endpoint te permite obtener detalles sobre un disco específico de Soda Stereo según su ID.
Ejemplo de Uso:
curl https://sodati-api.portfolio-ls.online/soda/1/album
Obtener todas las canciones de un disco de Soda Stereo por ID
Endpoint:
GET /soda/{id}/tracks
Parámetros:
• `id`: Identificador único del disco.
Descripción:
Este endpoint te proporciona una lista de todas las canciones de un disco de Soda Stereo según su ID.
Ejemplo de Uso:
curl https://sodati-api.portfolio-ls.online/soda/1/tracks
Obtener todos los discos de Gustavo Cerati
Endpoint:
GET /cerati/
Descripción:
Este endpoint te proporciona una lista de todos los discos de Gustavo Cerati.
Ejemplo de Uso:
curl https://sodati-api.portfolio-ls.online/cerati/
Obtener un disco específico de Gustavo Cerati por ID
Endpoint:
GET /cerati/{id}/album
Parámetros:
• `id`: Identificador único del disco.
Descripción:
Este endpoint te permite obtener detalles sobre un disco específico de Gustavo Cerati según su ID.
Ejemplo de Uso:
curl https://sodati-api.portfolio-ls.online/cerati/1/album
Obtener todas las canciones de un disco de Gustavo Cerati por ID
Endpoint:
GET /cerati/{id}/tracks
Parámetros:
• `id`: Identificador único del disco.
Descripción:
Este endpoint te proporciona una lista de todas las canciones de un disco de Gustavo Cerati según su ID.
Ejemplo de Uso:
curl https://sodati-api.portfolio-ls.online/cerati/1/tracks
Notas importantes
• Todos los endpoints devuelven datos en formato JSON.
• Los IDs de los discos y canciones pueden ser obtenidos a través de los endpoints que devuelven la lista completa.