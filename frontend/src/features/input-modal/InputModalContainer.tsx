import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import InputModal from "./InputModal.tsx";
import {closeInputModal} from "../../state/inputModalSlice.ts";

const InputModalContainer = () => {
    const dispatch = useDispatch();
    const inputModalState = useSelector(state => state.inputModal);

    if (inputModalState.open) {
        return <InputModal {...inputModalState}
                           onClose={() => dispatch(closeInputModal())} />
    }

    return <></>
}

export default InputModalContainer;