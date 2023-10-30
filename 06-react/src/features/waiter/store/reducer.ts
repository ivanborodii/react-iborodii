import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Waiter} from "../type";

const DEFAULT_WAITER: Waiter = {
  firstName: '',
  phone: '',
}
interface WaiterState {
  editingWaiter: Waiter,
  list: Waiter[],
  listLoading: boolean,
  listError?: Error
}

const initialState: WaiterState = {
  editingWaiter: DEFAULT_WAITER,
  list: [],
  listLoading: false,
  listError: undefined
}

export const waiterSlice =
    createSlice({
  name: 'waiter',
  initialState,
  reducers: {
    getListActionLoading: (state: WaiterState) => {
      state.listLoading = true
      state.listError = undefined
    },
    getListActionSuccess: (state: WaiterState, action: PayloadAction<Waiter[]>) => {
      state.list = action.payload
      state.listLoading = false
    },
    getListActionError: (state: WaiterState, action: PayloadAction<Error>) => {
      state.listError = action.payload
      state.listLoading = false
    },
    setEditingItemAction: (state: WaiterState, action: PayloadAction<Waiter>) => {
      state.editingWaiter = action.payload
    },
    updateItemAction: (state: WaiterState, action: PayloadAction<Waiter>) => {
      state.list = state.list.map((waiter: Waiter) => waiter.id === action.payload.id ? action.payload : waiter)
      state.editingWaiter = DEFAULT_WAITER
    },
    createItemAction: (state: WaiterState, action: PayloadAction<Waiter>) => {
      state.list = [...state.list, action.payload]
      state.editingWaiter = { ...DEFAULT_WAITER }
    },
    removeItemAction: (state: WaiterState, action: PayloadAction<number>) => {
      state.list = state.list.filter((waiter: Waiter) => waiter.id !== action.payload)
    }
  },
})

export const { actions, reducer } = waiterSlice
export const {
  getListActionLoading,
  getListActionSuccess,
  getListActionError,
  setEditingItemAction,
  updateItemAction,
  createItemAction,
  removeItemAction,
} = actions