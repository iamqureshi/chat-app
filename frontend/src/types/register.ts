export interface IRegisterInfo {
    name: string;
    email: string;
    password: string;
    pic: File | null;
}

export interface ILogin {
    email: string;
    password: string;
}