
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import './App.css'
import reactImg from"./assets/react.png";
import htmlImg from"./assets/html.png";
import cssImg from"./assets/css.png";
function App() {
  
  return (
    <>
      <div className="app">
       <Header/>
       <div className='card-container'>
        <Card 
        title="React"
        description="React is a UI library"
        image={reactImg}
        />
         <Card 
        title="Html"
        description="Html is a create a structure of webpage"
        image={htmlImg}
        />
         <Card 
        title="css"
        description="css is a style the webpage"
        image={cssImg}
        />
       </div>
       <Footer/>

      
      </div>
      
    </>
  )
}

export default App
