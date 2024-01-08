export const selectDonates=(donates)=>{//הצגת תורם
    return{
        type:"SELECT_DONATES",
        donates:donates
    }
}
export const selectDonatesForEdit=(donates)=>{
    return{
        type:"SELECT_DONATES_FOR_EDIT",
        payload:donates
    }
}
export const deleteDonates = (donatesid) => {
    return {
        type: "DELETE_DONATES",
        donatesId: donatesid
    }
}

export const addDonates = (donates) => {
    return {
        type: "ADD_DONATES",
        payload: donates
    }

}
export const saveEditDonates=(donates)=>{
    return{
        type:"SAVE_EDIT_DONATES",
        payload:donates
    }
}
