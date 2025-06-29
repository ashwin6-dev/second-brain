import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    title: "",
    prompt: "",
    label: "",
    onSubmit: (value: string) => {}
};

const openInputModalReducer = (state: any, action: any) => {
    const { title,  prompt, onSubmit, label } = action.payload;

    state.open = true;
    state.title = title;
    state.prompt = prompt;
    state.onSubmit = onSubmit;
    state.label = label;
}

const closeModalReducer = (state) => {
    state.open = false;
}

const inputModalSlice = createSlice({
    name: 'inputModal',
    initialState,
    reducers: {
        openInputModal: openInputModalReducer,
        closeInputModal: closeModalReducer
    }
});

export const { openInputModal, closeInputModal } = inputModalSlice.actions;
export default inputModalSlice.reducer;