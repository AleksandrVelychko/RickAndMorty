export interface ICharacter {
    id: number;
    name: string;
    status: StatusEnum;
    species: SpeciesEnum;
    type?: string;
    gender: GenderEnum;
    origin?: ILocation;
    location: ILocation;
    image?: string;
    episode: string[];
    url?: string;
    created: Date;
}

export interface ILocation {
    name: string;
    url: string;
}

export enum StatusEnum {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'unknown'
}

export enum SpeciesEnum {
    Alien = 'Alien',
    Human = 'Human'
}

export enum GenderEnum {
    Female = 'Female',
    Male = 'Male',
    Unknown = 'unknown'
}
