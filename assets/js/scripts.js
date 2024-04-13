const consultarDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error("Error al consultar los datos:", error);
    throw error;
  }
};

const mostrarDatosEnHTML = async () => {
  try {
    // Esperar a que los datos se consulten
    const datos = await consultarDatos();

    // Obtener el elemento ul donde se mostrarán los datos
    const resultadosPost = document.getElementById("resultados");

    // Limpiar el contenido
    resultadosPost.innerHTML = "";

    // Iterar sobre los datos y crear elementos li para cada post
    datos.forEach((post) => {
      let li = document.createElement("li");
      li.innerHTML = `<strong>${post.title}</strong> <br> ${post.body}`;
      resultadosPost.appendChild(li);
    });
  } catch (error) {
    console.error("Error al mostrar los datos en HTML:", error);
  }
};

// Obtener el botón
const mostrarPostBtn = document.getElementById("boton");

// Agregar evento de clic al botón
mostrarPostBtn.addEventListener("click", mostrarDatosEnHTML);
