// Función asincrónica para consultar los datos de los posts y mostrarlos en HTML
const mostrarDatosEnHTML = async () => {
  try {
    // URL de la API
    const url = "https://jsonplaceholder.typicode.com/posts";
    
    // Realizar la solicitud GET a la URL
    const response = await fetch(url);
    
    // Verificar si la solicitud fue exitosa
    if (response.status !== 200) {
      console.error("La solicitud no pudo ser completada.");
      return null;
    }
    
    // Convertir la respuesta a formato JSON
    const datos = await response.json();
    
    // Obtener el elemento ul donde se mostrarán los datos
    const resultadosPost = document.getElementById("resultados");

    // Limpiar el contenido anterior
    resultadosPost.innerHTML = "";

    // Iterar sobre los datos y crear elementos li para cada post
    datos.forEach((post) => {
      let li = document.createElement("li");
      // Agregar título en negrita y cuerpo del post
      li.innerHTML = `<strong>${post.title}</strong> <br> ${post.body}`;
      // Agregar el elemento li al elemento ul
      resultadosPost.appendChild(li);
    });
  } catch (error) {
    // Manejar errores en caso de que la solicitud falle
    console.error("Error al consultarlos datos:", error);
  }
};

// Obtener el botón
const mostrarPostBtn = document.getElementById("boton");

// Agregar un evento de clic al botón que llame a la función para mostrar los datos en HTML
mostrarPostBtn.addEventListener("click", mostrarDatosEnHTML);
