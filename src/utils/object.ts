import { generateRandomNumber, generateRandomString } from '.';

type NestedObject = { [key: string]: number | NestedObject };

export function generateObj(keys: string[]) {
  const obj: Record<string, number> = {};
  keys.forEach((key) => {
    const randomNumber = generateRandomNumber({ max: 100 });
    obj[key] = randomNumber;
  });

  return obj;
}

export function generateSimpleObj(size: number) {
  const obj: Record<string, number> = {};

  for (let i = 0; i < size; i++) {
    const key = generateRandomString();
    const randomNumber = generateRandomNumber({ max: 100 });
    obj[key] = randomNumber;
  }

  return obj;
}

export function generateNestedObj(keys: string[], depth: number = 2): NestedObject {
  let nestedObj: NestedObject = {};
  for (let i = depth; i > 0; i--) {
    if (depth === 1) {
      nestedObj = generateObj(keys);
    } else {
      keys.forEach((key) => {
        const targetObj = generateNestedObj(keys, depth - 1);
        nestedObj[key] = targetObj;
      });
    }
  }

  return nestedObj;
}

export function accumulateNestedObj(nestedObj: NestedObject): number {
  let accumulator = 0;
  for (const key in nestedObj) {
    const value = nestedObj[key];
    accumulator += typeof value === 'number' ? value : accumulateNestedObj(value);
  }

  return accumulator;
}
