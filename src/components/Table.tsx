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
          <th className="border-b p-2 dark:text-black">Name</th>
          <th className="border-b p-2 dark:text-black">Email</th>
          <th className="border-b p-2 dark:text-black">Phone Number</th>
          <th className="border-b p-2 dark:text-black">Address Line 1</th>
          <th className="border-b p-2 dark:text-black">Address Line 2</th>
          <th className="border-b p-2 dark:text-black">City</th>
          <th className="border-b p-2 dark:text-black">State</th>
          <th className="border-b p-2 dark:text-black">Pincode</th>
          <th className="border-b p-2 dark:text-black">Country</th>
        </tr>
      </thead>
      <tbody>
        {users.users.map((user:any, index:any) => (
          <tr key={index}>
            <td className="border-b p-2 dark:text-black">{user.name}</td>
            <td className="border-b p-2 dark:text-black">{user.email}</td>
            <td className="border-b p-2 dark:text-black">{user.phoneNumber}</td>
            <td className="border-b p-2 dark:text-black">{user.line1}</td>
            <td className="border-b p-2 dark:text-black">{user.line2 || '-'}</td>
            <td className="border-b p-2 dark:text-black">{user.city}</td>
            <td className="border-b p-2 dark:text-black">{user.state}</td>
            <td className="border-b p-2 dark:text-black">{user.pincode}</td>
            <td className="border-b p-2 dark:text-black">{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
