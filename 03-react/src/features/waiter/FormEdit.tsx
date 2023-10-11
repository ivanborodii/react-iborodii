import React, {useState, useEffect} from "react";
import {Waiter} from "./type";

interface FormEditProps {
  waiter: Waiter;
  onWaiterSubmit: (waiter: Waiter) => void;
}

export function FormEdit({ waiter, onWaiterSubmit }: FormEditProps) {
  const [firstName, setFirstName] = useState(waiter.firstName)
  const [phone, setPhone] = useState(waiter.phone)

  useEffect(() => {
    setFirstName(waiter.firstName)
    setPhone(waiter.phone)
  }, [waiter])

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onWaiterSubmit({
      ...waiter,
      firstName,
      phone,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" id="firstName" />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}