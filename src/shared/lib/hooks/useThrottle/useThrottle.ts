import { useCallback, useRef } from "react";

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;
          clearTimeout(timeoutRef.current);
        }, delay);
      }
    },
    [callback, delay]
  );
}
