
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App"> 
    <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

 
   {/* Tudo que é passado entre a TAG de abertura e do fechamento */}

   {/* Condicional */}
   
   <Greetings lang="de">Ludwig</Greetings>
   <Greetings lang="fr">François</Greetings>

    </div>  
  );
}

export default App;
