import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Contato from "./components/pages/Contato"
import Sobre from "./components/pages/Sobre"
import Cardapio from "./components/pages/Cardapio"
import NavBar from "./components/layout/NavBar"
import Carrinho from "./components/pages/Carrinho"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route path="/sobre" element= {<Sobre/>} />
        <Route path="/cardapio" element= {<Cardapio/>} />
        <Route path="/contato" element= {<Contato/>} />
        <Route path="/carrinho" element= {<Carrinho/>} />
        
       
      </Routes>


    </Router>
  )
}

export default App;
