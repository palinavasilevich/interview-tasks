type Turtle = "turtle" | null;
type Direction = "left" | "right";

type Game = {
  makeTurn: (direction: Direction) => void;
  state: Array<Turtle>;
};

export const startGame = (): Game => {
  const state: Array<Turtle> = ["turtle", null, null, null, null];

  const makeTurn = (direction: Direction): void => {
    const currentPositionIndex = state.indexOf("turtle");
    const nextPositionIndex =
      direction === "left"
        ? currentPositionIndex - 1
        : currentPositionIndex + 1;

    if (nextPositionIndex < 0 || nextPositionIndex > state.length - 1) {
      throw new Error("Out of bounds");
    }

    state[currentPositionIndex] = null;
    state[nextPositionIndex] = "turtle";
  };

  return { makeTurn, state };
};
