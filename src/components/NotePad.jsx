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
    </section>
  );
}

// Bonus: un pulsante "Svuota" che cancella testo e chiave dal localStorage.
