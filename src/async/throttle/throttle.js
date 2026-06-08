function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function throttleV2(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) return;

    timer = setTimeout(() => {
      try {
        fn.apply(this, args);
      } finally {
        timer = null;
      }
    }, delay);
  };
}
