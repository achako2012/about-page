export interface Skill {
    id: string;
    title: string;
    value: number;
}

export interface Profile {
    id: string;
    name: string;
    intro: string;
    position: string;
    title: string;
    article: {
        year: string;
        event: string;
    }[];
}

export interface Experience {
    id: string;
    title: string;
    article: string;
}
