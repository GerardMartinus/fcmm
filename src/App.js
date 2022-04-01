import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="center">
        <div class="form">
          <h1>Fala com a minha mão</h1>
          <form>
            <fieldset>
              <ul>
                <li><input type="text" placeholder="E-mail" /></li>
                <li><input type="text" placeholder="Senha" /></li>
                <li><input type="submit" class="btn"/></li>
              </ul>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
