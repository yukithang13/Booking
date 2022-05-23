import db from "../firebase/config";


export type Todo = {
    id?: string;
    BookingCode: string;
    TenSuKien: string;
    CongCheckIn: string;
    NgaySuDung: any;
    NgayXuatVe:any;
    TenLoaiVe:string;
    DoiSoat:string;
    TinhTrang:string;
};

export const all = async (): Promise<Array<Todo>> => {
    const snapshot = await db.collection("Booking").get();
    const data: Array<any> = [];

    // eslint-disable-next-line array-callback-return
    snapshot.docs.map((_data) => {
        data.push({
            id: _data.id, 
            ..._data.data(), 
        });
    });

    return data as Array<Todo>;
};

