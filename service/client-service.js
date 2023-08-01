const http = new XMLHttpRequest();


// Abre http (metodo,url)

// CRUD     - Metodos http
// Create   - POST
// Read     - GET
// Uupdate  - PUT/PATCH
// Ddelete  - DELETE


http.open('GET', 'http://localhost:3000/perfil');

http.send();
http.onload = () => {
    const data = http.response;
    console.log(data);
    console.log(data);
}
