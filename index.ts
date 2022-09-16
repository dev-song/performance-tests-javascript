import { accumulateNestedMap, generateNestedMap, generateSimpleMap } from './src/utils/map';
import { testPerformance } from './src/testPerformance';
import { fruits } from './src/utils/constants';
import { accumulateNestedObj, generateNestedObj } from './src/utils/object';

function main() {
  const DESIRED_DEPTH = 6;
  const DESIRED_SIZE = 1000000;
  const nestedMap = generateNestedMap(fruits, DESIRED_DEPTH);
  const nestedObj = generateNestedObj(fruits, DESIRED_DEPTH);
  const mapSum = accumulateNestedMap(nestedMap);
  const objSum = accumulateNestedObj(nestedObj);

  // testPerformance(
  //   {
  //     fn: () => generateNestedMap(fruits, DESIRED_DEPTH),
  //     label: `Generating a nested map with depth of ${DESIRED_DEPTH}`,
  //   },
  //   {
  //     fn: () => generateNestedObj(fruits, DESIRED_DEPTH),
  //     label: `Generating a nested obj with depth of ${DESIRED_DEPTH}`,
  //   },
  // );
  // testPerformance(
  //   {
  //     fn: () => accumulateNestedMap(nestedMap),
  //     label: `Sum of a nested map with depth of ${DESIRED_DEPTH}`,
  //   },
  //   {
  //     fn: () => accumulateNestedObj(nestedObj),
  //     label: `Sum of a nested obj with depth of ${DESIRED_DEPTH}`,
  //   },
  // );

  testPerformance(
    {
      fn: () => generateSimpleMap(DESIRED_SIZE),
      label: `Generating a simple map with size of ${DESIRED_SIZE}`,
    },
    {
      fn: () => generateSimpleMap(DESIRED_SIZE),
      label: `Generating a simple obj with size of ${DESIRED_SIZE}`,
    },
  );

  // console.time('Object Generation');
  // generateSimpleObj(DESIRED_SIZE);
  // console.timeEnd('Object Generation');

  // console.time('Map Generation');
  // generateSimpleMap(DESIRED_SIZE);
  // console.timeEnd('Map Generation');
}

main();
