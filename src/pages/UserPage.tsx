import React from 'react'
import useFetchUser from '../hooks/queries/useFetchUser'
import { useParams } from 'react-router-dom'
import UserItem from '../components/user/UserItem'
import { IUser } from '../interfaces/user.interface'

const UserPage:React.FC = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useFetchUser(id!)
    const {id: userId, name, username} = data || ({} as IUser)

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h1>Loading . . . </h1>

    return (
        <div>
            <UserItem id={userId} name={name} username={username} />
        </div>
    )
}

export default UserPage