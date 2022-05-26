import "./App.css";
import Menu from "./componentes/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Hero from "./componentes/hero/hero";
import {Grid,Grid2,Grid3} from "./componentes/grid/grid";
import Footer from "./componentes/footer/footer";



function App() {
  return (
<>
<section id="home" className="background">
<Menu/>
<Hero/>
</section>
<section id="sobre">
<Grid/>
<Grid2/>
<Grid3/>
</section>
<section>
<Footer/>
</section>

</>
  );
}

export default App;
