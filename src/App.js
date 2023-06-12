import imagemDominio from "./imagem-tpc.png";
import "./App.css";

function App() {
  return (
    <div className="App">
        <h1 className="title">tudoparacarro.com.br</h1>
        <p>Este domínio único está disponível para venda!</p>
        <p className="convincing-text">Entre em contato agora mesmo,</p>
        <p className="contact-email">
          envie um e-mail para:{" "}
          <a href="mailto:contato@tudoparacarro.com.br">
          contato@tudoparacarro.com.br
        </a>
        </p>
        <img className="imagem" src={imagemDominio} />
    </div>
  );
}

export default App;