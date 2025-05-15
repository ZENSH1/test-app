type AsyncFunction<T extends any[]> = (...args: T) => Promise<void>;
type ErrorHandler = (error: unknown) => void;
type SyncFunction<T extends any[], R = void> = (...args: T) => R;

type ApiResponse<T> = {
  success: {
    data: T;
    message: string;
  }
  failure: {
    data: null;
    message: string;
  }
  loading: {
    data: null;
    message: string;
  }
}

export function asyncHandler<T extends any[]>(
  fn: AsyncFunction<T>, 
  errorHandler?: ErrorHandler
) {
  return async (...args: T) => {
    try {
      await fn(...args);
    } catch (error) {
      console.log("An error gotten");
      (errorHandler || defaultErrorHandler)(error);
      console.log("An error thrown");
      throw error; // Re-throw the error to propagate it to the caller if needed
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
  //throw error message with error 
  throw error;
}