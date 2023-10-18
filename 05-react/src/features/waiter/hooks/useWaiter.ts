import React, {useEffect, useCallback} from "react";
import {Waiter} from "../type";
import {WaiterApi} from "../api/WaiterApi";
import {useDispatch, useSelector} from "react-redux";
import {
  createItemAction,
  removeItemAction, setEditingItemAction,
  setListAction,
  updateItemAction
} from "../store/actions";

export function useWaiter() {
  const dispatch = useDispatch()
  const list = useSelector((state: any) => state.waiter.list)
  const editingWaiter = useSelector((state: any) => state.waiter.editingWaiter)

  const getList = useCallback(() => {
    WaiterApi.getList().then((waiterList: Waiter[]) => {
      dispatch(setListAction(waiterList))
    })
  }, [])

  useEffect(() => {
    getList()
  }, [getList])

  const onWaiterSubmit = (waiter: Waiter) => {
    if (waiter.id) {
      WaiterApi.update(waiter.id, waiter).then((updatedWaiter: Waiter) => {
        dispatch(updateItemAction(updatedWaiter))
      })
    } else {
      WaiterApi.create(waiter).then((newWaiter: Waiter) => {
         dispatch(createItemAction(newWaiter))
      })
    }
  }

  const deleteWaiter = (id: number) => {
    WaiterApi.delete(id).then(() => {
      dispatch(removeItemAction(id))
    })
  }

  const editWaiter = (waiter: Waiter) => {
    dispatch(setEditingItemAction(waiter))
  }

  return {
    editingWaiter,
    list,
    onWaiterSubmit,
    deleteWaiter,
    editWaiter,
  }
}