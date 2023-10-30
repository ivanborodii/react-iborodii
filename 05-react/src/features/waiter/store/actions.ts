import {Waiter} from "../type";

export const ACTION_WAITER_SET_LIST = 'ACTION_WAITER_SET_LIST'
export const ACTION_WAITER_SET_EDITING_ITEM = 'ACTION_WAITER_SET_EDITING_ITEM'
export const ACTION_WAITER_UPDATE_ITEM = 'ACTION_WAITER_UPDATE_ITEM'
export const ACTION_WAITER_CREATE_ITEM = 'ACTION_WAITER_CREATE_ITEM'
export const ACTION_WAITER_REMOVE_ITEM = 'ACTION_WAITER_REMOVE_ITEM'

export function setListAction(list: Waiter[]) {
  return { type: ACTION_WAITER_SET_LIST, payload: list, }
}

export function setEditingItemAction(waiter: Waiter) {
  return { type: ACTION_WAITER_SET_EDITING_ITEM, payload: waiter }
}

export function updateItemAction(waiter: Waiter) {
  return { type: ACTION_WAITER_UPDATE_ITEM, payload: waiter }
}

export function createItemAction(waiter: Waiter) {
  return { type: ACTION_WAITER_CREATE_ITEM, payload: waiter }
}

export function removeItemAction(id: number) {
  return { type: ACTION_WAITER_REMOVE_ITEM, payload: id }
}