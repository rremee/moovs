import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {

  return (
    <div className={'app-main'}>
        <Sidebar/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </main>
    </div>
  )
}

export default App
