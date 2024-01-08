import { selectDonates } from "../action/donates"

const initialState = {
    arr: [
        { id: 1, name: "rut merchavi", sum: 2000, dedication: "להצלחת חיילי צהל" },
        { id: 2, name: "shira eliyahu", sum: 400, dedication: "להצלחת חיילי צהל" },
        { id: 3, name: "miri shimoni", sum: 800, dedication: "להצלחת חיילי צהל" }
    ],
     selectedDonates: null,
    selectedDonatesForEdit: null
}
export const donatesReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_DONATES" :
            return {
                ...state,
                   arr: [...state.arr,action.payload]
               
             }
             case "SELECT_DONATES" :
                return {
                    ...state,
                    selectedDonates:action.donates
                }
                case "DELETE_DONATES" :
                    return {
                        ...state,
                        arr :state.arr.filter(item=>item.id!==action.donatesId)
                    }
                    case "SELECT_DONATES_FOR_EDIT":
                        return {
                            ...state,
                            selectedDonatesForEdit:action.payload
                        }
                        case "SAVE_EDIT_DONATES":
                          let b=state.arr.map(item=>
                            {if(item.id==action.payload.id)
                                return action.payload ;
                            return item;
                      })
                            return{
                                ...state,
                                arr:b
                         
                        }
                        
                        default :return state;
            }

        }
    


