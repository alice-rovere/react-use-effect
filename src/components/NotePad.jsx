import { useState, useEffect } from "react";

export default function NotePad() {
  const [text, setText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem("testo"));
    return savedText ? savedText : "";
  });

  useEffect(() => {
    localStorage.setItem("testo", JSON.stringify(text));
    document.title = `${text.length} caratteri`;
    return () => {};
  }, [text]);
  return (
    <section>
      <div className="container text-center">
        <h2 className="text-muted h5">Blocco note persistente</h2>
        <ul className="w-80 m-auto small mb-3 list-unstyled">
          <li>Creare un componente NotePad con una textarea. </li>
          <li>
            Il testo digitato viene salvato in <code>localStorage</code> a ogni
            modifica.
          </li>
          <li>
            Al ricaricamento della pagina il testo viene recuperato da{" "}
            <code>localStorage</code>.
          </li>
          <li>Sotto la textarea viene mostrato il numero di caratteri.</li>
          <li>
            Il titolo della tab del browser mostra <var>X</var> caratteri.
          </li>
          <li>
            Bonus: un pulsante "Svuota" che cancella testo e chiave dal{" "}
            <code>localStorage</code>.
          </li>
        </ul>
        <div className="border border-secondary-subtle shadow-sm p-3 ">
          <label htmlFor="text" className="form-label mx-2 d-block">
            Inserisci il testo:
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
          ></textarea>
          <p className="text-muted">Hai scritto {text.length} caratteri.</p>
          <button
            onClick={() => {
              setText("");
              localStorage.removeItem("testo");
            }}
            className="btn btn-info text-white rounded-5"
          >
            Cancella testo
          </button>
        </div>
      </div>
    </section>
  );
}

//Non capisco perchè ci vogliono due click per svuotare local storage. un click mi toglie value, uno mi toglie la key......MAAAH!!!
