import React from "react";
import "./App.css"; // Asegúrate de tener un archivo App.css para los estilos

function App() {
  const calculateResult = () => {
    const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
    const form = document.forms["quizForm"];

    // Recorre las preguntas y acumula las respuestas
    for (let i = 1; i <= 5; i++) {
      const selected = form["q" + i].value;
      if (selected) {
        answers[selected]++;
      }
    }

    // Encuentra la respuesta mayoritaria
    let maxAnswer = "a";
    for (const key in answers) {
      if (answers[key] > answers[maxAnswer]) {
        maxAnswer = key;
      }
    }

    // Define los resultados según la respuesta mayoritaria
    let result;
    switch (maxAnswer) {
      case "a":
        result = "Imprenditore del l'anno";
        break;
      case "b":
        result = "Sport";
        break;
      case "c":
        result = "Fidanzato perfetto";
        break;
      case "d":
        result = "Nice man";
        break;
      case "e":
        result = "Familiare";
        break;
      case "f":
        result = "Party man";
        break;
    }

    // Muestra el resultado en el pop-up
    document.getElementById("resultText").textContent =
      "Tu estilo es: " + result;
    document.getElementById("resultModal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("resultModal").style.display = "none";
  };

  return (
    <div className="quiz-container">
      <h1>Che stile stai cercando?</h1>
      <form id="quizForm">
        {/* Pregunta 1 */}
        <div className="question">
          <p>1. Qual è la tua attività preferita nel tempo libero?</p>
          <label>
            <input type="radio" name="q1" value="a" /> Eventi professionali.
          </label>
          <label>
            <input type="radio" name="q1" value="b" /> Praticare sport o
            attività all'aperto.
          </label>
          <label>
            <input type="radio" name="q1" value="c" /> Preparativi per eventi
            speciali.
          </label>
          <label>
            <input type="radio" name="q1" value="d" /> Uscire con gli amici.
          </label>
          <label>
            <input type="radio" name="q1" value="e" /> Trascorrere del tempo con
            la famiglia.
          </label>
          <label>
            <input type="radio" name="q1" value="f" /> Partecipare a feste.
          </label>
        </div>

        {/* Pregunta 2 */}
        <div className="question">
          <p>2. Come descriveresti il tuo approccio alla moda?</p>
          <label>
            <input type="radio" name="q2" value="a" /> Elegante e professionale.
          </label>
          <label>
            <input type="radio" name="q2" value="b" /> Informale e confortevole.
          </label>
          <label>
            <input type="radio" name="q2" value="c" /> Raffinato e sofisticato.
          </label>
          <label>
            <input type="radio" name="q2" value="d" /> Attraente e versatile.
          </label>
          <label>
            <input type="radio" name="q2" value="e" /> Informale e comodo.
          </label>
          <label>
            <input type="radio" name="q2" value="f" /> Alla moda. (Party man)
          </label>
        </div>

        {/* Pregunta 3 */}
        <div className="question">
          <p>3. A che tipo di eventi preferisci partecipare?</p>
          <label>
            <input type="radio" name="q3" value="a" /> Eventi aziendali.
          </label>
          <label>
            <input type="radio" name="q3" value="b" /> Competizioni sportive.
          </label>
          <label>
            <input type="radio" name="q3" value="c" /> Matrimoni, compleanni e
            celebrazioni personali.
          </label>
          <label>
            <input type="radio" name="q3" value="d" /> Incontri sociali, cene e
            uscite con amici.
          </label>
          <label>
            <input type="radio" name="q3" value="e" /> Attività familiari,
            riunioni e cene a casa.
          </label>
          <label>
            <input type="radio" name="q3" value="f" /> Concerti, club e eventi
            notturni.
          </label>
        </div>

        {/* Pregunta 4 */}
        <div className="question">
          <p>
            4. Qual è la cosa più importante per te nella scelta di un
            abbigliamento?
          </p>
          <label>
            <input type="radio" name="q4" value="a" /> Immagine professionale ed
            eleganza.
          </label>
          <label>
            <input type="radio" name="q4" value="b" /> Comfort e prestazioni
            nelle attività.
          </label>
          <label>
            <input type="radio" name="q4" value="c" /> Stile e impatto in
            occasioni speciali.
          </label>
          <label>
            <input type="radio" name="q4" value="d" /> Capacità di adattarsi a
            diverse situazioni sociali.
          </label>
          <label>
            <input type="radio" name="q4" value="e" /> Approccio confortevole e
            informale per la vita quotidiana.
          </label>
          <label>
            <input type="radio" name="q4" value="f" /> Capacità di distinguersi.
          </label>
        </div>

        {/* Pregunta 5 */}
        <div className="question">
          <p>5. Come ti senti più sicuro di te?</p>
          <label>
            <input type="radio" name="q5" value="a" /> Con un look curato e
            professionale che trasmette fiducia.
          </label>
          <label>
            <input type="radio" name="q5" value="b" /> Con abiti che permettono
            libertà di movimento e funzionalità.
          </label>
          <label>
            <input type="radio" name="q5" value="c" /> Con uno stile raffinato
            che si distingue in eventi speciali.
          </label>
          <label>
            <input type="radio" name="q5" value="d" /> Con un outfit che ti fa
            risaltare in incontri sociali.
          </label>
          <label>
            <input type="radio" name="q5" value="e" /> Con uno stile informale e
            confortevole per passare del tempo con la famiglia.
          </label>
          <label>
            <input type="radio" name="q5" value="f" /> Con un look alla moda che
            ti farà brillare in eventi notturni.
          </label>
        </div>

        <button type="button" onClick={calculateResult}>
          Inviare
        </button>
      </form>

      {/* Modal para mostrar el resultado */}
      <div id="resultModal" className="modal" style={{ display: "none" }}>
        <div className="modal-content">
          <p className="result-text" id="resultText"></p>
          <button className="close-button" onClick={closeModal}>
            Vicino
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
