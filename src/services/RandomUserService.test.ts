import { getRandomCharacter } from "./RandomUserService";

test("should fetch random character", async () => {
  expect.assertions(1);
  const character = await getRandomCharacter();
  expect(character).toBeDefined();
});

test("should fetch random female character", async () => {
  expect.assertions(1);

  const character = await getRandomCharacter("female");
  expect(character.gender).toBe("female");
});

test("should fetch random male character", async () => {
  expect.assertions(1);

  const character = await getRandomCharacter("female");
  expect(character.gender).toBe("female");
});
