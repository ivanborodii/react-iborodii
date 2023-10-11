import React, {useEffect} from "react";
import {WaiterList} from "./WaiterList";
import {WaiterApi} from "./api/WaiterApi";
import {Waiter} from "./type";
import {FormEdit} from "./FormEdit";

export function WaiterApp() {
  const [list, setList] = React.useState<Waiter[]>([])

  useEffect(() => {
    WaiterApi.getList().then((WaiterList) => {
      setList(WaiterList)
    })
  }, [])

  const onWaiterSubmit = (waiter: Waiter) => {
    WaiterApi.create(waiter).then((newWaiter) => {
      setList([...list, newWaiter])
    })
  }

  return (
    <div>
      <FormEdit onWaiterSubmit={onWaiterSubmit} />
      <WaiterList list={list} />
    </div>
  );
}