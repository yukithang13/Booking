import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import  database  from "../../firebase/config";
import { ActionProps } from "../action/LoadData";


// Load du lieu 
export const LoadData = () => async (dispatch: Dispatch<ActionProps>) => {
    try {
        const snapshot = collection(database,"Booking");
        console.log('snap',snapshot);
        const snapshotdata = await getDocs(snapshot);
        console.log('data', snapshotdata);
        dispatch({
            type: 'LOAD_DATA',
            payload: snapshotdata
        })
    }
    catch(error) {
        console.log('Co Loi!');
    }
}