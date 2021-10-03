export interface User{
    username?: string,
    password?:string,
    role?:string,
    isActivated?: boolean
}

export interface Comment {
    postId?:number,
    id?:number,
    name?:string,
    email?: string, 
    body?: string
}
