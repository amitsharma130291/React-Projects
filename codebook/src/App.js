import './App.css';
import { AllRoutes } from './routes/AllRoutes'
import { Header} from './components/Layouts/Header';

function App() {
  return (
   <div className="app">
      <Header />
      <AllRoutes />
      {/* <Footer /> */}
   </div>
  );
}

export default App;
