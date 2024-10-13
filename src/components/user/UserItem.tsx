import React from 'react'
import { useNavigate } from 'react-router-dom'

interface UserItemProps {
    id: number,
    name: string,
    username: string
}

const UserItem:React.FC<UserItemProps> = ({id, name, username}) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/users/${id}`)} key={id} className='border border-gray-300 cursor-pointer'>
            <h3>{name}</h3>
            <h3><strong>Username: </strong>{username}</h3>
        </div>
)
}

export default UserItem