// Abre http (metodo,url)

// CRUD     - Metodos http
// Create   - POST
// Read     - GET
// Uupdate  - PUT/PATCH
// Ddelete  - DELETE

// Fetch API

const listaClientes = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    })
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,

};
