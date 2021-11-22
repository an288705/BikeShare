import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'bikes',
    initialState : {
        due : {},
        rented : {},
        available : {}
    },
    reducers : {
        addBikeToDue : (state,action)=>{
            const {_id,serialNumber,model,dateRented,notes,name,email,phone} = action.payload;
            //add bike to state.due hashmap
            const bike = {
                serialNumber : serialNumber,
                model : model,
                dateRented : dateRented,
                notes : notes,
                name : name,
                email : email,
                phone : phone
            };
            state.due[_id]=bike;
        },
        addBikeToRented : (state,action)=>{
            const {_id,serialNumber,model,dateRented,notes,name,email,phone} = action.payload;
            //add bike to state.due hashmap
            const bike = {
                serialNumber : serialNumber,
                model : model,
                dateRented : dateRented,
                notes : notes,
                name : name,
                email : email,
                phone : phone
            };

            state.rented[_id]=bike;
        },
        addBikeToAvailable : (state,action)=>{
            const {_id,serialNumber,model,dateRented,notes,name,email,phone} = action.payload;
            //add bike to state.due hashmap
            const bike = {
                serialNumber : serialNumber,
                model : model,
                dateRented : dateRented,
                notes : notes,
                name : name,
                email : email,
                phone : phone
            };

            state.available[_id]=bike;
        },
        deleteBike : (state,action)=>{
            const {_id} = action.payload;
            /* search through entire bike state and 
               delete when id is found*/
            
            Object.keys(state).map(bikeState=>{
                if(_id in state[bikeState]){
                    delete state[bikeState][_id];
                    return;
                }
            });
        }
    }
})

export default slice.reducer;
export const {addBikeToDue,addBikeToRented,addBikeToAvailable,deleteBike} = slice.actions;