import { setImmediate } from './helpers/timers';

type Thenable<T> = { then: (callback: () => T) => unknown };

export function flushMicroTasks(): Thenable<void> {
  return {
    // using "thenable" instead of a Promise, because otherwise it breaks when
    // using "modern" fake timers
    then(resolve) {
      setImmediate(resolve);
    },
  };
}
