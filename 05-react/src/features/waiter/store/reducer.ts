import {
  ACTION_WAITER_CREATE_ITEM,
  ACTION_WAITER_REMOVE_ITEM,
  ACTION_WAITER_SET_EDITING_ITEM,
  ACTION_WAITER_SET_LIST,
  ACTION_WAITER_UPDATE_ITEM,
} from './actions'
import {Waiter} from "../type";

const DEFAULT_WAITER: Waiter = {
  firstName: '',
  phone: '',
}
interface INITIAL_STATE_ {
  editingWaiter: Waiter,
  list: Waiter[],
}

const INITIAL_STATE: INITIAL_STATE_ = {
  editingWaiter: DEFAULT_WAITER,
  list: [],
}

export const reducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_WAITER_CREATE_ITEM:
      return {
        ...state,
        list: [...state.list, payload],
        editingWaiter: { ...DEFAULT_WAITER },
      }
    case ACTION_WAITER_REMOVE_ITEM:
      return {...state, list: state.list.filter((waiter: Waiter) => waiter.id !== payload)}
    case ACTION_WAITER_SET_EDITING_ITEM:
      return {...state, editingWaiter: payload}
    case ACTION_WAITER_SET_LIST:
      return {...state, list: payload}
    case ACTION_WAITER_UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map((waiter: Waiter) => waiter.id === payload.id ? payload : waiter),
        editingWaiter: DEFAULT_WAITER,
      }
    default:
      return state
  }
}