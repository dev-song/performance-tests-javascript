import { accumulateNestedMap, generateNestedMap } from './src/utils/mapTester';
import { performanceTester } from './src/performanceTester';
import { fruits } from './src/utils/constants';

function main() {
  // samplePerformanceTest();
  const nestedMap = generateNestedMap(fruits, 5);
  const sum = accumulateNestedMap(nestedMap);

  performanceTester(
    {
      fn: () => generateNestedMap(fruits, 5),
      label: 'Generate a nested map with depth of 5',
    },
    { fn: () => accumulateNestedMap(nestedMap), label: 'Accumulate numbers from a nested map' },
  );

  // console.log(nestedMap);
  // console.log(sum);
}

main();
