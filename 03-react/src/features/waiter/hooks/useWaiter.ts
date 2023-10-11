import React, {useEffect, useCallback} from "react";
import {Waiter} from "../type";
import {WaiterApi} from "../api/WaiterApi";

const DEFAULT_WAITER: Waiter = {
  firstName: '',
  phone: '',
}

export function useWaiter() {
  const [editingWaiter, setEditingWaiter] = React.useState<Waiter>(DEFAULT_WAITER)
  const [list, setList] = React.useState<Waiter[]>([])

  const getList = useCallback(() => {
    WaiterApi.getList().then((waiterList: Waiter[]) => {
      setList(waiterList)
    })
  }, [])

  useEffect(() => {
    getList()
  }, [getList])

  const onWaiterSubmit = (waiter: Waiter) => {
    if (waiter.id) {
      WaiterApi.update(waiter.id, waiter).then((updatedWaiter: Waiter) => {
        setList(list.map((waiter) => waiter.id === updatedWaiter.id ? updatedWaiter : waiter))
        setEditingWaiter(DEFAULT_WAITER)
      })
    } else {
      WaiterApi.create(waiter).then((newWaiter: Waiter) => {
        setList([...list, newWaiter])
        setEditingWaiter({ ...DEFAULT_WAITER })
      })
    }
  }

  const deleteWaiter = (id: number) => {
    WaiterApi.delete(id).then(() => {
      setList(list.filter((waiter) => waiter.id !== id))
    })
  }

  const editWaiter = (waiter: Waiter) => {
    setEditingWaiter(waiter)
  }

  return {
    editingWaiter,
    list,
    onWaiterSubmit,
    deleteWaiter,
    editWaiter,
  }
}