import { generateNestedMap } from './src/mapVsObject';
import { samplePerformanceTest } from './src/samplePerformanceTest';
import { fruits } from './src/utils/constants';

function main() {
  // samplePerformanceTest();
  const nestedMap = generateNestedMap(fruits);
  console.log(nestedMap);
}

main();
