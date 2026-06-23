function throttle(fn, delay) {
  let lastCall = -Infinity;
  let timer = null;
  let pendingThis = null;
  let pendingArgs = null;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    } else {
      pendingThis = this;
      pendingArgs = args;

      if (!timer) {
        timer = setTimeout(
          () => {
            lastCall = Date.now();
            fn.apply(pendingThis, pendingArgs);
            timer = null;
            pendingThis = null;
            pendingArgs = null;
          },
          lastCall + delay - now,
        );
      }
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

function throttleV3(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;

    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}
