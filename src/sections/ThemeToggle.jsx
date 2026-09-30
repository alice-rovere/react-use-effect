import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem("mode"));
    return savedMode ? savedMode : "light";
  });
  const [text, setText] = useState("Switch to Dark Mode");
  function handleMode() {
    setMode(mode === "light" ? "dark" : "light");
    localStorage.setItem("mode", JSON.stringify(mode));
    if (mode === "light") {
      setText("Switch to Light Mode");
    } else {
      setText("Switch to Dark Mode");
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", mode);
    return () =>
      document.documentElement.setAttribute("data-bs-theme", "light");
  }, [mode]);
  return (
    <section>
      <div className="container text-center ">
        <h2 className="text-muted h5">Theme switcher (light/dark)</h2>
        <ul className="w-70 m-auto small mb-3 list-unstyled">
          <li>
            Creare un componente ThemeToggle con un pulsante che alterna tema
            chiaro e scuro.
          </li>
          <li>
            Lo stato theme viene salvato in <code>localStorage</code> e
            recuperato al caricamento.
          </li>
          <li>
            Un <code>useEffect</code> applica una classe al document per light e
            dark mode
          </li>
          <li>Il testo del pulsante cambia in base al tema attivo.</li>
          <li>
            Bonus: gestire la visibilità del componente con conditional
            rendering e aggiungere una cleanup function di{" "}
            <code>useEffect()</code> che ripristina il tema light quando il
            componente viene smontato. Verificare il comportamento.
          </li>
        </ul>
        <div className="border border-secondary-subtle shadow-sm p-3 ">
          <button
            value={mode}
            onClick={handleMode}
            className="btn btn-info text-white rounded-5"
          >
            {text}
          </button>
        </div>
      </div>
    </section>
  );
}
// è tutto al contrarioooooooooooooooooooooo!!!!!!!!!!
