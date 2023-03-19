type Nationality = "AU" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FI" | "FR" | "GB" | "IE" | "IR" | "NO" | "NL" | "NZ" | "TR" | "US";
type Gender = "male" | "female";
interface RandomUser {
    seed: string;
    gender: Gender;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: string;
        city: string;
        state: string;
        postcode: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
    };
    id: {
        name: string;
        value: string;
    };
    cell: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: Nationality;
    dob: {
        date: string;
        age: number;
    };
}
export declare const getRandomCharacter: (requestedSeed?: string, gender?: Gender, nat?: Nationality) => Promise<RandomUser>;
export {};
