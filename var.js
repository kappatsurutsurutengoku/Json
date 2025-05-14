let d; // d som holder på vitsene

// Leser JSON-filen
fetch('git/Json/Jokes.json') // Sørger for at filen ligger på riktig sted
  .then(response => response.json()) // Gjør om til JS-objekt
  .then(data => {
    d = data; // Lagre i variabel
  });

// Funksjon for å vise vits nr. 1
function visVits1() {
  const joke = d.jokes.find(j => j.id === "1");
  console.log(joke.joke); // vise i HTML
}

// Funksjon for å vise alle vitser
function visAlleVitser() {
  const container = document.getElementById("joke-output");
  container.innerHTML = ""; // Tømme tidligere innhold

  d.jokes.forEach(joke => {
    const p = document.createElement("p");
    p.textContent = joke.joke;
    container.appendChild(p);
  });
}

// Funksjon for å vise tilfeldig vits
function visTilfeldigVits() {
  const randomIndex = Math.floor(Math.random() * d.jokes.length);
  const joke = d.jokes[randomIndex];
  document.getElementById("joke-output").textContent = joke.joke;
}
