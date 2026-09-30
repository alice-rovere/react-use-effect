import NotePad from "../sections/NotePad";
import ThemeToggle from "../sections/ThemeToggle";
import WindowSize from "../sections/WindowSize";
export default function MainContent() {
  return (
    <div className="container my-4">
      <NotePad />
      <ThemeToggle />
      <WindowSize />
    </div>
  );
}
