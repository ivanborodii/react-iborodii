import { createSelector } from "@reduxjs/toolkit";
import {RootState} from "../../../store";

export const listSelector = (state: RootState) => state.waiter.list
export const filterSelector = (state: RootState) => state.waiter.filter
export const editingWaiterSelector = (state: RootState) => state.waiter.editingWaiter
export const editingWaiterLoadingSelector = (state: RootState) => state.waiter.editingWaiterLoading
export const editingWaiterErrorSelector = (state: RootState) => state.waiter.editingWaiterError

export const editingWaiterCombinedSelector = createSelector(
  editingWaiterSelector,
  editingWaiterLoadingSelector,
  editingWaiterErrorSelector,
  (editingWaiter, editingWaiterLoading, editingWaiterError) => ({
    editingWaiter,
    editingWaiterLoading,
    editingWaiterError,
  })
);

export const filteredWaiterListSelector = createSelector(
  listSelector,
  filterSelector,
  (list, filter) => {
    switch (filter) {
      case 'active':
        return list.filter((waiter) => !waiter.phone)
      case 'done':
        return list.filter((waiter) => waiter.phone)
      default:
        return list
    }
  }
)