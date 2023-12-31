import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-grey-50" onScroll={(e) => console.log(e)}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
