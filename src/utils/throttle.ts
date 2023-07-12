export const throttle = (callback: () => void, delay: number) => {
  let timerId: NodeJS.Timeout | undefined;
  return () => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = undefined;
    }, delay);
  };
};
