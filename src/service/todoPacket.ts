import db from "../firebase/config";


export type TodoPacket = {
    id?: string;
    GiaVe: number;
    GiaCombo: number;
    NgayAD: any;
    NgayHH:any;
    TenGoiVe:string;
    SoLuong:number;
    TinhTrangGoi:string;
};

export const all = async (): Promise<Array<TodoPacket>> => {
    const snapshot = await db.collection("BookingPacket").get();
    const data: Array<any> = [];

    // eslint-disable-next-line array-callback-return
    snapshot.docs.map((_data) => {
        data.push({
            id: _data.id, 
            ..._data.data(), 
        });
    });

    
    return data.reverse() as Array<TodoPacket>;
};

// create a todo
export const create = async (todo: TodoPacket): Promise<TodoPacket> => {
    const docRef = await db.collection("BookingPacket").add(todo);

    return {
        id: docRef.id ,
        ...todo,
    } as TodoPacket;
};

// update a todo
export const update = async (id: string, todo: TodoPacket): Promise<TodoPacket> => {
    await db.collection("BookingPacket").doc(id).update(todo);
    // return updated todo
    return {
        id: id,
        ...todo,
    } as TodoPacket;
};

// delete a todo
export const remove = async (id: string) => {
    await db.collection("BookingPacket").doc(id).delete();
};