import { Container } from "react-bootstrap";
import "./App.css";
// import Form from "./containers/Form";
import VatForm from "./containers/VatForm";

function App() {
  return (
    <Container className="App">
      {/* <Form /> */}
      <VatForm />
    </Container>
  );
}

export default App;
