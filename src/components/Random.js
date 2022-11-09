/* Interation 3| Component: Ramdom - Exibir um número inteiro aleatório
   no intervalo entre o número mínimo e máximo
*/

function Random ({min, max}){
    
    let raffle = min + Math.floor(Math.random() * (max - min));

    return (
      <div className="randoms">
        <h3>
          Random value between {min} and {max} &rArr; {raffle}
        </h3>
      </div>
    );
  }

  export default Random;  