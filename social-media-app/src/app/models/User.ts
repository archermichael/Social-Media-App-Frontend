import { Post } from "./Post";

export interface User {
    userId?: number,
    userFirstName?: string,
    userLastName?: string,
    userEmail?: string,
    username: string,
    password: string,
    userProfileDescription?: string,
    userProfileImage?: string,
    userPostList?: Post[]
}