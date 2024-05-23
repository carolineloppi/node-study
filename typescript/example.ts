type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: "Justine",
  age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);

//const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");

//run npx tsc example.ts to transpile the TypeScript code to JavaScript.
