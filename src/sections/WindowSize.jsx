import { useEffect, useState } from "react";

export default function WindowSize() {
  const [windowDimens, setWindowDimens] = useState({
    larghezza: window.innerWidth,
    altezza: window.innerHeight,
  });
  useEffect(() => {
    function handleDimensioni() {
      setWindowDimens({
        larghezza: window.innerWidth,
        altezza: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleDimensioni);
    return () => window.removeEventListener("resize", handleDimensioni);
  }, []);
  return (
    <section>
      <div className="container text-center">
        <h2 className="text-muted h5">Window size tracker</h2>
        <ul className="w-80 m-auto small mb-3 list-unstyled">
          <li>
            Creare un componente WindowSize che mostra in tempo reale larghezza
            e altezza della finestra.
          </li>
          <li>
            Stato inizializzato con <code>window.innerWidth</code> e{" "}
            <code>window.innerHeight</code>.
          </li>
          <li>
            <code>useEffect</code> che registra un listener sull'evento resize.
          </li>
          <li>
            Mostrare anche un badge con il breakpoint corrente: mobile{" "}
            <code>(&lt;768px)</code>, tablet <code>(&lt;992px)</code>, desktop.
          </li>
          <li>
            Cleanup con removeEventListener: la funzione handler deve quindi
            essere dichiarata con un nome, non anonima.
          </li>
        </ul>
      </div>
      <div className="border border-secondary-subtle shadow-sm p-3 text-center">
        <h4>{windowDimens.altezza} px</h4>
        <h4>{windowDimens.larghezza} px</h4>
      </div>
    </section>
  );
}
