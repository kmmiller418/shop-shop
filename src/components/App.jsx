import '../stylesheets/App.css';
import Header from './Header'
import Footer from './Footer';
import Home from './Home';


function App() {
  return (
    <div>
      <Header/>
      <Home className="home"/>
      <Footer/>
    </div>
  );
}

export default App;
