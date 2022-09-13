import { PerformanceObserver, performance } from 'node:perf_hooks';

export function samplePerformanceTest() {
  const observer = new PerformanceObserver((items) => {
    console.log(items.getEntries());
    performance.clearMarks();
  });

  observer.observe({ type: 'measure' });
  performance.measure('Start to Now');

  performance.mark('Simple Loop');
  let str = '';
  for (let i = 0; i < 100000; i++) {
    if (i % 2) {
      str += 'b';
    } else {
      str += 'a';
    }
  }
  performance.measure('Simple Loop to Now', 'Simple Loop');
}
