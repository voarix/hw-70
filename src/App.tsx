import "./App.css";
import ToolBar from "./components/ToolBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home.tsx";
import NewContact from "./Containers/NewContact.tsx";
import EditContact from "./Containers/EditContact.tsx";

const App = () => {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Home/>}/>
          <Route path="/contacts/new-contact" element={<NewContact/>}/>
          <Route path="/edit/:idContact" element={<EditContact/>}/>
          <Route path="*" element={<h1>No found page</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
