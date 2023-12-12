import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTeerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            //Assumption
            //action.payload === { name: 'ab', cost: 140 }
            state.cars.push({
                name: action.payload.name,
                const: action.payload.cost,
                id: Math.random()
            });
        },
    }
});