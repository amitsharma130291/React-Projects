import Home from "./routes/Home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component";
const App = () => { 
  return <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index  element={<Home />}/>
      <Route path="shop" element={<h1>Shop Component</h1>}/>
    </Route>
    <Route path="*" element={<h1>Oops</h1>} ></Route>
  </Routes>
}

export default App;
