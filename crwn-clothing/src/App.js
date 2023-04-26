import Home from "./routes/Home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component";
import SignIn from "./routes/Sign-in/sign-in.component";
const App = () => { 
  return <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index  element={<Home />}/>
      <Route path="shop" element={<h1>Shop Component</h1>}/>
      <Route path="sign-in" element={<SignIn/>} />
    </Route>
    <Route path="*" element={<h1>Oops</h1>} ></Route>
  </Routes>
}

export default App;
