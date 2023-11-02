import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Waiter} from "../type";
import {FILTER} from "../constants";

export const DEFAULT_WAITER: Waiter = {
  firstName: '',
  phone: '',
}
interface WaiterState {
  editingWaiter: Waiter,
  list: Waiter[],
  listLoading: boolean,
  listError?: string,
  filter: FILTER,
  editingWaiterLoading: boolean,
  editingWaiterError?: string,
}

const initialState: WaiterState = {
  editingWaiter: DEFAULT_WAITER,
  list: [],
  listLoading: false,
  listError: '',
  filter: FILTER.ALL,
  editingWaiterLoading: false,
  editingWaiterError: '',

}

export const waiterSlice =
    createSlice({
  name: 'waiter',
  initialState,
  reducers: {
    getListActionLoading: (state: WaiterState) => {
      state.listLoading = true
      state.listError = ''
    },
    getListActionSuccess: (state: WaiterState, action: PayloadAction<Waiter[]>) => {
      state.list = action.payload
      state.listLoading = false
    },
    getListActionError: (state: WaiterState, action: PayloadAction<string>) => {
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
    },
    getEditingItemActionLoading: (state: WaiterState) => {
      state.editingWaiterLoading = true
      state.editingWaiterError = ''
    },
    getEditingItemActionSuccess: (state: WaiterState, action: PayloadAction<Waiter>) => {
      state.editingWaiter = action.payload
      state.editingWaiterLoading = false
    },
    getEditingItemActionError: (state: WaiterState, action: PayloadAction<string>) => {
      state.editingWaiterError = action.payload
      state.editingWaiterLoading = false
    },
    setFilterAction: (state: WaiterState, action: PayloadAction<FILTER>) => {
      state.filter = action.payload
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
  getEditingItemActionLoading,
  getEditingItemActionSuccess,
  getEditingItemActionError,
  setFilterAction,
} = actions