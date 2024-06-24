async function fetchData() {
  let url = "https://api.fbi.gov/wanted/v1/list";
  try {
    const response = await fetch(url);
    const data = await response.json();
    mostrarData(data.items);
  } catch (error) {
    console.log(error);
  }
}

const mostrarData = (data) => {
  let body = "";
  data.forEach(function(item) {
    body += `<tr><td>${item.title}</td><td>${item.description}</td></tr>`;
  });
  document.getElementById("data").innerHTML = body;
};

function toggleTheme() {
  const body = document.body;
  // Se cambió el tema de acuerdo a las clases existentes
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
}

function aceptarCookies() {
  document.getElementById("cookie-banner").style.display = "none";

  document.cookie =
    "cookies_aceptadas=true; expires=" +
    new Date(
      new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    ).toUTCString() +
    "; path=/";
}

function verificarCookiesAceptadas() {
  if (document.cookie.indexOf("cookies_aceptadas=true") === -1) {
    document.getElementById("cookie-banner").style.display = "block";
  }
}

window.onload = () => {
  verificarCookiesAceptadas();
  fetchData(); // Llamado a la función fetchData para cargar los datos automáticamente
};