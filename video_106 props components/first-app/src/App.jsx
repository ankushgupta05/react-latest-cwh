import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="title ankush1" description="description gupta1" />
        <Card title="title ankush2" description="description gupta2" />
        <Card title="title ankush3" description="description gupta3" />
        <Card title="title ankush4" description="description gupta4" />
      </div>
    </>
  );
}

export default App;
