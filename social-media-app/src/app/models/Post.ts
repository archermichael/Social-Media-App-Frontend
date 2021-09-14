import { Like } from "./Like";
import { PostImage } from "./PostImage";
import { User } from "./User";

export interface Post {
    postId?: number,
    postCreatedDate: Date,
    postMessage: string,
    userIdFk?: number,
    user: User,
    likes?: Like[],
    postImageList?: PostImage[]
}