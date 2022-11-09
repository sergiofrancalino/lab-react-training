/* Interation 7| Component DriveCard */
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driveCard">

      <img src={img} alt="Driver Imagem" className="driverCard-img"/>

      <article className="driverData">

        <h4 className="driverName">{name}</h4>

        <Rating className="driverName">{rating}</Rating>

        <p className="driverName"> {car.model} - {car.licensePlate}</p>

      </article>
    </div>
  );
}

export default DriverCard;