import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTeerm: '',
        cars: []
    },
});