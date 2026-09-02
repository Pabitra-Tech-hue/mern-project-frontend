export enum Role {

 USER = "USER",
 ADMIN = "ADMIN",
 SUPER_ADMIN = "SUPER_ADMIN"

}
export const all_admins=[Role.ADMIN, Role.SUPER_ADMIN];
 export type TResponseData={
    _id:string;
    creaatedAt:string;
    updatedAt:string;
};

export type TImage={
    path:string;
    public_id:string;
};