import { ThemeToggle } from "./toggle-theme";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-end">
      <ThemeToggle />
    </header>
  );
}
