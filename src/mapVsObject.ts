export function generateMap(keys: string[]) {
  const map = new Map();
  keys.forEach((key) => {
    const randomNumber = Math.round(Math.random() * 100);
    map.set(key, randomNumber);
  });

  return map;
}

export function generateNestedMap(keys: string[], depth: number = 2) {
  let nestedMap = new Map();
  for (let i = 0; i < depth; i++) {
    const targetMap = generateNestedMap(keys, depth - 1);
    if (depth === 1) {
      nestedMap = generateMap(keys);
    } else {
      keys.forEach((key) => {
        nestedMap.set(key, targetMap);
      });
    }
  }

  return nestedMap;
}
