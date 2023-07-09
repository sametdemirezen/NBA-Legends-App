import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style/style.css"
function App() {
  return (
    <div className="App bg-warning">
      <Header/>
      <CardContainer/>
    </div>
  )
}

export default App
