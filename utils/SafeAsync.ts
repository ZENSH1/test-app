type AsyncFunction<T extends any[]> = (...args: T) => Promise<void>;
type ErrorHandler = (error: unknown) => void;

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

function defaultErrorHandler(error: unknown) {
  console.error('Operation failed:', error);
  // Add any default error handling logic here
}