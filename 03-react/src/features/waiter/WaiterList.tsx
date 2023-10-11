import {Waiter} from "./type";
import {WaiterItem} from "./WaiterItem";

interface WaiterListProps {
  list: Waiter[];
  editWaiter: (waiter: Waiter) => void;
  deleteWaiter: (id: number) => void;
}

export function WaiterList({ list, deleteWaiter, editWaiter }: WaiterListProps): React.ReactElement {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((waiter) => (
            <WaiterItem waiter={waiter}
                        key={waiter.id}
                        deleteWaiter={deleteWaiter}
                        editWaiter={editWaiter}
            />))}
      </tbody>
    </table>
  );
}