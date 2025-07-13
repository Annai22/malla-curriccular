const ramos = [
  {
    nombre: "Fundamentos de Matemáticas",
    semestre: 1,
    abre: [
      "Cálculo Diferencial",
      "Álgebra",
      "Matemáticas Discretas",
      "Contabilidad y Finanzas"
    ]
  },
  {
    nombre: "Fundamentos de Programación",
    semestre: 1,
    abre: [
      "Programación",
      "Hardware Digital",
      "Matemáticas Discretas"
    ]
  },
  {
    nombre: "Cálculo Diferencial",
    semestre: 2,
    abre: [
      "Cálculo Integral y Series",
      "Física Mecánica",
      "Análisis y Diseño de Algoritmos"
    ]
  },
  {
    nombre: "Programación",
    semestre: 2,
    abre: [
      "Programación Avanzada",
      "Redes de Computadores",
      "Sistemas Operativos"
    ]
  },
  {
    nombre: "Programación Avanzada",
    semestre: 3,
    abre: [
      "Estructuras de Datos",
      "Modelos de Base de Datos",
      "Fundamentos de Ingeniería de Software"
    ]
  },
  {
    nombre: "Sistemas Operativos",
    semestre: 6,
    abre: [
      "Pruebas de Sistemas",
      "Ciberseguridad"
    ]
  }
  // Puedes seguir agregando más ramos aquí...
];

const contenedor = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerText = `${ramo.nombre} (S${ramo.semestre})`;
  div.onclick = () => {
    let mensaje = `📘 ${ramo.nombre}\n📆 Semestre: ${ramo.semestre}`;
    if (ramo.abre && ramo.abre.length) {
      mensaje += `\n\n🔓 Abre:\n- ` + ramo.abre.join("\n- ");
    }
    alert(mensaje);
  };
  contenedor.appendChild(div);
});
