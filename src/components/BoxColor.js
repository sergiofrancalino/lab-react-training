/* Interation 4| Component BoxColor */

function BoxColor({r, g, b}) {

    let color = `rgb(${r},${g},${b})`;

    return (
      <div style={{ backgroundColor: color }} className="boxColor-box">
         
          <h3> 
            rgb({r},{g},{b})
            { r === 128 ? <p>#80ff00</p> : <p>#ff0000</p>}  
          </h3>
      </div>
    );
  }

  export default BoxColor;