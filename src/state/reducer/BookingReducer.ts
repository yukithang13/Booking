import {ActionProps} from '../action/LoadData';
const initialValues = {
    listBooking: []
};

export const BookingReducer = (state:any = initialValues, action:ActionProps) => {

    switch(action.type) {

        case 'LOAD_DATA': {

            const data = action.payload.docs.map((item:any)=>({...item.data(), id: item.id}));

            state.listBooking = data;

            return {...state};
        }
        // eslint-disable-next-line no-unreachable
        break;
        
        default: return state;
    }
}  