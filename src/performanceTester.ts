import { PerformanceObserver, performance } from 'node:perf_hooks';

export function performanceTester(
  base: { fn: Function; label?: string },
  compare?: { fn: Function; label?: string },
) {
  const observer = new PerformanceObserver((items) => {
    console.log('Test Records:', items.getEntries());
    performance.clearMarks();
  });

  observer.observe({ type: 'measure' });
  performance.measure('Start to Now');

  const baseFunctionName = base.label || 'Function A';
  performance.mark(baseFunctionName);
  base.fn();
  performance.measure(`${baseFunctionName} to Now`, baseFunctionName);

  if (compare) {
    const compareFunctionName = compare.label || 'Function B';
    performance.mark(compareFunctionName);
    compare.fn();
    performance.measure(`${compareFunctionName} to Now`, compareFunctionName);
  }
}
