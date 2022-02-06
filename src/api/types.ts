export type Skill = {
    id: string;
    title: string;
    value: number;
};

export type Profile = {
    id: string;
    name: string;
    intro: string;
    position: string;
    title: string;
    article: {
        year: string;
        event: string;
    }[];
};
