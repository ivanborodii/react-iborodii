import {Waiter} from "./type";
import React from "react";
import {useDispatch} from "react-redux";
import {setEditingItemAction} from "./store/reducer";
import {removeItem} from "./store/thunks";
import {useTheme} from "../../components/ThemeContext";

interface WaiterItemProps {
  waiter: Waiter;
}
export function WaiterItem({ waiter }: WaiterItemProps) {
    const dispatch = useDispatch()
    const theme = useTheme()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
  function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(setEditingItemAction(waiter))
  }

  async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (waiter.id) {
      setError('')
      setLoading(true)
      try {// @ts-ignore
        await dispatch(removeItem(waiter.id))
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <tr>
      <td>{waiter.id}</td>
      <td>{waiter.firstName}</td>
      <td>{waiter.phone}</td>
      <td>
        <button onClick={onEditBtnClick} disabled={loading}>Edit</button>
        <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </td>
    </tr>
  )
}