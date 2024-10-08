import React, { useState } from "react";
import "./App.css"; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const [result, setResult] = useState("");
    const [resultImage, setResultImage] = useState("");

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
        let resultText = "";
        let resultImageUrl = "";
        switch (maxAnswer) {
            case "a":
                resultText = "Imprenditore dell'anno";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case "b":
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case "c":
                resultText = "Fidanzato perfetto";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
                break;
            case "d":
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case "e":
                resultText = "Familiare";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
                break;
            case "f":
                resultText = "Party man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
                break;
        }

        // Actualiza el estado con el resultado y la imagen
        setResult(resultText);
        setResultImage(resultImageUrl);

        // Muestra el resultado en el pop-up
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
                    <label><input type="radio" name="q1" value="a" /> Eventi professionali.</label>
                    <label><input type="radio" name="q1" value="b" /> Praticare sport o attività all'aperto.</label>
                    <label><input type="radio" name="q1" value="c" /> Preparativi per eventi speciali.</label>
                    <label><input type="radio" name="q1" value="d" /> Uscire con gli amici.</label>
                    <label><input type="radio" name="q1" value="e" /> Trascorrere del tempo con la famiglia.</label>
                    <label><input type="radio" name="q1" value="f" /> Partecipare a feste.</label>
                </div>

                {/* Pregunta 2 */}
                <div className="question">
                    <p>2. Come descriveresti il tuo approccio alla moda?</p>
                    <label><input type="radio" name="q2" value="a" /> Elegante e professionale.</label>
                    <label><input type="radio" name="q2" value="b" /> Informale e confortevole.</label>
                    <label><input type="radio" name="q2" value="c" /> Raffinato e sofisticato.</label>
                    <label><input type="radio" name="q2" value="d" /> Attraente e versatile.</label>
                    <label><input type="radio" name="q2" value="e" /> Informale e comodo.</label>
                    <label><input type="radio" name="q2" value="f" /> Alla moda.</label>
                </div>

                {/* Pregunta 3 */}
                <div className="question">
                    <p>3. A che tipo di eventi preferisci partecipare?</p>
                    <label><input type="radio" name="q3" value="a" /> Eventi aziendali.</label>
                    <label><input type="radio" name="q3" value="b" /> Competizioni sportive.</label>
                    <label><input type="radio" name="q3" value="c" /> Matrimoni, compleanni e celebrazioni personali.</label>
                    <label><input type="radio" name="q3" value="d" /> Riunioni sociali e cene con gli amici.</label>
                    <label><input type="radio" name="q3" value="e" /> Attività familiari e cene a casa.</label>
                    <label><input type="radio" name="q3" value="f" /> Concerti, club e eventi notturni.</label>
                </div>

                {/* Pregunta 4 */}
                <div className="question">
                    <p>4. Cosa è più importante per te quando scegli un abbigliamento?</p>
                    <label><input type="radio" name="q4" value="a" /> Proiettare eleganza e professionalità.</label>
                    <label><input type="radio" name="q4" value="b" /> Comfort e prestazioni.</label>
                    <label><input type="radio" name="q4" value="c" /> Stile e impatto in occasioni speciali.</label>
                    <label><input type="radio" name="q4" value="d" /> Adattabilità a diverse situazioni sociali.</label>
                    <label><input type="radio" name="q4" value="e" /> Comfort per la vita quotidiana.</label>
                    <label><input type="radio" name="q4" value="f" /> Distinguersi in eventi notturni.</label>
                </div>

                {/* Pregunta 5 */}
                <div className="question">
                    <p>5. Con quale stile ti senti più sicuro?</p>
                    <label><input type="radio" name="q5" value="a" /> Un look professionale che proietta fiducia.</label>
                    <label><input type="radio" name="q5" value="b" /> Abbigliamento che consente libertà di movimento e funzionalità.</label>
                    <label><input type="radio" name="q5" value="c" /> Uno stile raffinato per distinguersi in eventi speciali.</label>
                    <label><input type="radio" name="q5" value="d" /> Un abbigliamento che brilla in riunioni sociali.</label>
                    <label><input type="radio" name="q5" value="e" /> Uno stile informale e comodo per trascorrere tempo con la famiglia.</label>
                    <label><input type="radio" name="q5" value="f" /> Un look alla moda per brillare in eventi notturni.</label>
                </div>

                <button type="button" onClick={calculateResult}>Invia</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: "none" }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Il tuo stile è: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: "center" }}>
                            <img src={resultImage} alt={result} style={{ width: "200px", height: "auto", margin: "10px" }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Chiudi</button>
                </div>
            </div>
        </div>
    );
}

export default App;
