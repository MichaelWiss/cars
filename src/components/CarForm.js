function CarForm() {
    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form action="">
            <div className="field-group">
                <div className="field">
                    <label htmlFor="" className="label">Name</label>
                    <input type="text" className="input is-expanded" 
                    value={name}
                    onchange={handleNameChange}
                    />
                </div>
            </div>
        </form>
    </div>;
}

export default CarForm;