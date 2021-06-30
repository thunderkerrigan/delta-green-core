import CharacterManager from "./CharacterManager";

const manager = new CharacterManager();
test("should ", () => {
  const character = manager.randomCharacter(
    "toto",
    "toto",
    "female",
    "none.png"
  );
  expect(character).toBeDefined();
});
