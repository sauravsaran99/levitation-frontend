import React from 'react';

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = (users) => {
  // console.log('user', users.users);
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="border-b p-2">Name</th>
          <th className="border-b p-2">Email</th>
          <th className="border-b p-2">Phone Number</th>
          <th className="border-b p-2">Address Line 1</th>
          <th className="border-b p-2">Address Line 2</th>
          <th className="border-b p-2">City</th>
          <th className="border-b p-2">State</th>
          <th className="border-b p-2">Pincode</th>
          <th className="border-b p-2">Country</th>
        </tr>
      </thead>
      <tbody>
        {users.users.map((user:any, index:any) => (
          <tr key={index}>
            <td className="border-b p-2">{user.name}</td>
            <td className="border-b p-2">{user.email}</td>
            <td className="border-b p-2">{user.phoneNumber}</td>
            <td className="border-b p-2">{user.line1}</td>
            <td className="border-b p-2">{user.line2 || '-'}</td>
            <td className="border-b p-2">{user.city}</td>
            <td className="border-b p-2">{user.state}</td>
            <td className="border-b p-2">{user.pincode}</td>
            <td className="border-b p-2">{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
