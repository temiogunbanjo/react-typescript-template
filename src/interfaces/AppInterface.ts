export interface IAppState {
  token: string;
  isAuthenticated: boolean;
}

export interface IDispatch {
  type: string;
  payload: any;
}

export const initialAppState: IAppState = {
  token: '',
  isAuthenticated: false,
};