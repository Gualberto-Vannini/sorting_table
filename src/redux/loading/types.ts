export type ActionPrefixesToCheck = 'users';

export interface RequestState {
  isLoading: boolean;
  isLoaded: boolean;
}

export interface LoadingState {
  users: RequestState;
}
