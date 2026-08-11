export type DataState =
  | { status: LoadingStatus.Loading }
  | { status: LoadingStatus.Error; error: Error }
  | { status: LoadingStatus.Success; data: number };

export enum LoadingStatus {
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}

export function handleData(dataState: DataState) {
  switch (dataState.status) {
    case LoadingStatus.Loading:
      return "loading...";
    case LoadingStatus.Error:
      return dataState.error.message;
    case LoadingStatus.Success:
      return dataState.data.toString();
    default:
      return "unknown";
  }
}
