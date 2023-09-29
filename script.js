const formulario = document.getElementById("registroForm");

formulario .addEventListener("submit", async function(event) {
  event.preventDefault();
  
const url= "https://jsonplaceholder.typicode.com/users"

const nombre= document.getElementById("nombre").value;
const apellido= document.getElementById("apellido").value;
const fechaNacimiento= document.getElementById("fechaNacimiento").value;

const user = {
  nombre: nombre,
  apellido: apellido,
  fechaNacimiento: fechaNacimiento
};

try {
  const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  });

  if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Respuesta del servidor:", data);
  formulario.reset();

} catch (error) {
  console.error("Error en la solicitud:", error);
}
});