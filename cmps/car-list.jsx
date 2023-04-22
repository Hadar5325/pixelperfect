const { Link } = ReactRouterDOM

import { CarPreview } from "./car-preview.jsx";

export function CarList({ cars, onRemoveCar }) {

    return <ul className="car-list">
        {
            cars.map(car => <li key={car.id}>
                <CarPreview car={car} />
                <div>
                    <button onClick={() => onRemoveCar(car.id)}>Remove</button>
                    <Link to={`/car/${car.id}`}>Details</Link> | 
                    <Link to={`/car/edit/${car.id}`}> Edit</Link>
                </div>
            </li>)
        }
    </ul>
}