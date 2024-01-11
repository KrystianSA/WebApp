export interface Contact{
    id?:number
    name : string;
    surname : string;
    email : string;
    password : string;
    phoneNumber : number;
    categoryId : number;
    showDetails? : boolean;
}