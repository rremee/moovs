import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {

  return (
    <div className={'app-main'}>
        <Sidebar/>
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movies" element={<Movies/>} />
            </Routes>
        </main>
    </div>
  )
}

export default App
