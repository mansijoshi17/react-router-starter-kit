import "./App.css";
import AddBook from "./components/AddBook";
import { Details } from "./components/BookDetails";
import { Books } from "./components/Books";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Books />
      <Details />
      <AddBook />
    </>
  );
}

export default App;
