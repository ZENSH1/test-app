type AsyncFunction<T extends any[]> = (...args: T) => Promise<void>;
type ErrorHandler = (error: unknown) => void;
type SyncFunction<T extends any[], R = void> = (...args: T) => R;

export function asyncHandler<T extends any[]>(
  fn: AsyncFunction<T>, 
  errorHandler?: ErrorHandler
) {
  return async (...args: T) => {
    try {
      await fn(...args);
    } catch (error) {
      (errorHandler || defaultErrorHandler)(error);
    }
  };
}

export function syncHandler<T extends any[], R = void>(
  fn: SyncFunction<T, R>,
  errorHandler?: ErrorHandler
): (...args: T) => R | void {
  return (...args: T) => {
    try {
      return fn(...args);
    } catch (error) {
      (errorHandler || defaultErrorHandler)(error);
    }
  };
}


function defaultErrorHandler(error: unknown) {
  console.error('Operation failed:', error);
  // Add any default error handling logic here
}