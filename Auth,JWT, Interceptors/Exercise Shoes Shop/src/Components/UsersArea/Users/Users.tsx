import { useEffect, useState } from "react";
import "./Users.css";
import UserModel from "../../../Model/UsersModel";
import usersService from "../../../Services/UsersServices";

function Users(): JSX.Element {
  const [frontendUsers, setFrontendUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    usersService
      .getAllUsers()
      .then((backendUsers) => setFrontendUsers(backendUsers))
      .catch((err) => alert(err.message));
  }, []);

  return (
        <div className="Users">
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Username:</th>
                        <th>email:</th>
                        <th>phone:</th>
                        <th>city:</th>
                    </tr>
                </thead>
                <tbody>
                    {frontendUsers.map(f => <tr key={f.id}>
                        <td>{f.name}</td>
                        <td>{f.username}</td>
                        <td>{f.email}</td>
                        <td>{f.phone}</td>
                        <td>{f.address.city}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>);
}

export default Users;
