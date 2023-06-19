import { IBook } from "./data.interface";
export interface IStore {
  main: IMainState;
}
export interface IMainState {
  books: IBook[];
  list: IBook[];
}
