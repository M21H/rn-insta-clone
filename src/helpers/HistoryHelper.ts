import {IHistoryUser} from '../types/HistoryTypes';

export class HistoryHelper {
  static getHistory(history: IHistoryUser[]) {
    return history.sort((a, b) => Number(a.active) - Number(b.active));
  }
}
