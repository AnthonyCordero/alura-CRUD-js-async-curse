// Abre http (metodo,url)

// CRUD     - Metodos http
// Create   - POST
// Read     - GET
// Uupdate  - PUT/PATCH
// Ddelete  - DELETE

// Fetch API

const listaClientes = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());


export const clientServices = {
    listaClientes,
}
