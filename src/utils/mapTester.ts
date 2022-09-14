type NestedMap<T = string> = Map<T, number | NestedMap<T>>;

export function generateMap<T>(keys: T[]) {
  const map = new Map();
  keys.forEach((key) => {
    const randomNumber = Math.round(Math.random() * 100);
    map.set(key, randomNumber);
  });

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
  nestedMap.forEach((value) => {
    if (typeof value === 'number') {
      accumulator += value;
    } else {
      accumulator += accumulateNestedMap(value);
    }
  });

  return accumulator;
}
