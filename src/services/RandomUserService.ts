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
  seed: string;
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

export const getRandomCharacter = async (
  requestedSeed?: string,
  gender?: Gender,
  nat?: Nationality
): Promise<RandomUser> => {
  const inc = "gender,name,location,id,picture,nat,dob, cell";
  const {
    data: {
      results,
      info: { seed },
    },
  } = await axios.get<{
    results: Omit<RandomUser, "seed">[];
    info: { seed: string };
  }>("https://randomuser.me/api/", {
    params: { inc, gender, nat, seed: requestedSeed },
  });

  if (results.length > 0) {
    return { ...results[0], seed };
  }
  throw new Error("no random character.");
};
