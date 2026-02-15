import NavBar from "./NavBar";
import reactLogo from "/src/assets/react.svg";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo-container">
          <img src={reactLogo} alt="React logo" width={20} />
          <h1>React Facts</h1>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
