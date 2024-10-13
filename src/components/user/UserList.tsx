import React from 'react'
import { IUser } from '../../interfaces/user.interface'
import UserItem from './UserItem'

interface UserListProps {
    users: IUser[] | undefined
}

const UserList:React.FC<UserListProps> = ({users}) => {
  return (
    <div>{users?.map(({id, name, username}) => (
        <UserItem key={id} id={id} name={name} username={username} />
    ))}</div>
  )
}

export default UserList