import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:'en'
}

const language=createSlice({
    name: 'language',
    initialState,
    reducers:{
        toggleLanguage:(state) =>{
            state.value =state.value == 'en' ? 'hi' : 'en';
        }
    }

});

export const {toggleLanguage} = language.actions;
export default language.reducer;