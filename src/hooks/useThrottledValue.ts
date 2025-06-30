import { useEffect, useRef, useState } from 'react';

export function useThrottledValue<T>(value: T, fps = 15): T {
  const [throttled, setThrottled] = useState(value);
  const frameMs = 1000 / fps;

  // ref stores the timestamp of the last commit
  const last = useRef(0);

  useEffect(() => {
    const now = performance.now();

    // skip this tick
    if (now - last.current < frameMs) {
      return;
    }
    // commit to React
    last.current = now;
    setThrottled(value);
  }, [value, frameMs]);

  return throttled;
}
