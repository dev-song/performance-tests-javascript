import { generateRandomNumber, generateRandomString } from '.';

type NestedMap<T = string> = Map<T, number | NestedMap<T>>;

export function generateMap<T>(keys: T[]) {
  const map = new Map();
  keys.forEach((key) => {
    const randomNumber = generateRandomNumber({ max: 100 });
    map.set(key, randomNumber);
  });

  return map;
}

export function generateSimpleMap(size: number) {
  const map = new Map();

  for (let i = 0; i < size; i++) {
    const key = generateRandomString();
    const randomNumber = generateRandomNumber({ max: 100 });
    map.set(key, randomNumber);
  }

  return map;
}

export function generateNestedMap<T extends string>(keys: T[], depth: number = 2): NestedMap<T> {
  let nestedMap = new Map();
  for (let i = depth; i > 0; i--) {
    if (depth === 1) {
      nestedMap = generateMap(keys);
    } else {
      keys.forEach((key) => {
        const targetMap = generateNestedMap(keys, depth - 1);
        nestedMap.set(key, targetMap);
      });
    }
  }

  return nestedMap;
}

export function accumulateNestedMap(nestedMap: NestedMap): number {
  let accumulator = 0;
  const mapKeys = nestedMap.keys();
  for (const key of mapKeys) {
    const value = nestedMap.get(key);
    if (value) {
      accumulator += typeof value === 'number' ? value : accumulateNestedMap(value);
    }
  }

  return accumulator;
}
