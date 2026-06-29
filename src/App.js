import "./App.css";
import Header from "./header";
import Button from "./button";
import GetCards from "./GetCards";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="cardsSide">
          <GetCards />
        </div>
        <div className="rightSide">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
