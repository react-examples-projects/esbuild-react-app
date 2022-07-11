import Heart from "../assets/heart.png";
import { DiGithubBadge } from "react-icons/di";

export default function Footer() {
  return (
    <footer className="mb-4 d-flex flex-column align-items-center">
      <small className="d-flex align-items-center">
        Hecho con
        <img
          src={Heart}
          alt="Hecho con amor"
          className="d-block mx-1"
          width={15}
          height={15}
        />
        por
        <a
          href="https://github.com/znareak"
          rel="noopener noreferrer"
          className="text-reset ms-1"
          target="_blank"
        >
          @Libardo
        </a>
      </small>

      <small className="d-block mt-2">
        <a
          href="https://github.com/react-examples-projects/esbuild-react-app"
          rel="noopener noreferrer"
          className="text-reset ms-1 d-flex align-items-center"
          target="_blank"
        >
          <DiGithubBadge className="me-1" style={{fontSize:"1rem"}}/> Repositorio
        </a>
      </small>
    </footer>
  );
}
