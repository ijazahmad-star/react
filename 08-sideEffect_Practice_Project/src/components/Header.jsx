
import logImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logImg} alt="Logo Image" />
      <h1> React Quiz App</h1>
    </header>
  );
}
