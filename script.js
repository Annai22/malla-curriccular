const ramos = [
  { nombre: "Matemática I", semestre: 1 },
  { nombre: "Programación I", semestre: 1 },
  { nombre: "Álgebra", semestre: 2, prereq: "Matemática I" },
  { nombre: "Programación II", semestre: 2, prereq: "Programación I" },
];

const malla = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerText = ramo.nombre;
  div.onclick = () => {
    let mensaje = `📘 ${ramo.nombre}\n📆 Semestre: ${ramo.semestre}`;
    if (ramo.prereq) {
      mensaje += `\n✅ Prerrequisito: ${ramo.prereq}`;
    }
    alert(mensaje);
  };
  malla.appendChild(div);
});
