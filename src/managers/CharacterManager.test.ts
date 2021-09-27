import CharacterManager from "./CharacterManager";

const manager = new CharacterManager();
test("should ", () => {
  const character = manager.randomCharacter("toto", "female");
  expect(character).toBeDefined();
});
