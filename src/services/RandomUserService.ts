import axios from "axios";
type Nationality =
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "IE"
  | "IR"
  | "NO"
  | "NL"
  | "NZ"
  | "TR"
  | "US";

type Gender = "male" | "female";

interface RandomUser {
  gender: Gender;
  name: { title: string; first: string; last: string };
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

export const getRandomCharacter = async (
  gender?: Gender,
  nat?: Nationality
): Promise<RandomUser> => {
  const inc = "gender,name,location,id,picture,nat,dob";
  const {
    data: { results },
  } = await axios.get<{ results: RandomUser[] }>("https://randomuser.me/api/", {
    params: { inc, gender, nat, noinfo: true },
  });

  if (results.length > 0) {
    return results[0];
  }
  throw new Error("no random character.");
};
