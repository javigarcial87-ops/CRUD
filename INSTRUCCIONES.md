a) Obtener todos los usuarios (GET)
GET http://localhost:3001/usuariosHaz clic en “Send Request” que aparece arriba.Deberías ver la lista de usuarios en JSON.b) Obtener un usuario por nombre (GET)
GET http://localhost:3001/usuarios/RyuMismo proceso: clic en Send Request.Deberías ver los datos de Ryu.c) Crear un usuario (POST)
POST http://localhost:3001/usuarios
Content-Type: application/json

{
  "nombre": "Ken",
  "edad": 31,
  "lugarProcedencia": "Estados Unidos"
}Envía la petición.Respuesta: verás el usuario creado con su id.d) Actualizar un usuario (PUT)
PUT http://localhost:3001/usuarios/Ryu
Content-Type: application/json

{
  "edad": 33,
  "lugarProcedencia": "Japón, Osaka"
}Envía la petición.Respuesta: el usuario actualizado.Para comprobarlo, haz un GET /usuarios/Ryu después.e) Eliminar un usuario (DELETE)
DELETE http://localhost:3001/usuarios/BlankaEnvía la petición.Respuesta: mensaje confirmando la eliminación.Compruébalo con GET /usuarios → Blanka ya no aparece.