/* Interation 6| Component Rating */

function Rating({ children }) {
   
    let stars = '★'.repeat(Math.round(children)) + '☆'.repeat(5 - Math.round(children));
    
    return (
       <div>
          <span>{stars}</span>
       </div>)
}

export default Rating;