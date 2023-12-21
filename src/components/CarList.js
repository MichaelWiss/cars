import { useSelector } from "react-redux";

function CarList() {
    const cars = useSelector((state) => {
        return state.cars.data;
    });

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
            </div>
        );
    });
    

    return <div>CarList</div>
}

export default CarList;