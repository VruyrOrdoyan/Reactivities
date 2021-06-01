import { User } from "./user";

export interface Profile {
    username: string;
    displayName: string;
    image?: string;
    bio?: string;
    photos?: Photo[];
    followersCount: number;
    followingCount: number;
    following: boolean
}

export class Profile implements Profile {
    constructor(user: User) {
        this.username = user.username;
        this.image = user.image;
        this.displayName = user.displayName;
    }
}

export interface Photo {
    id: string,
    url: string,
    isMain: boolean
}

export interface UserActivity {
    id: string;
    title: string,
    category: string;
    date: Date;
}
