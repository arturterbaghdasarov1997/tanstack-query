import React from 'react'
import useFetchUsers from '../hooks/queries/useFetchUsers'
import UserList from '../components/user/UserList'

const UsersPage:React.FC = () => {
    const {data: users, error, isLoading} = useFetchUsers()

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h1>Loading . . . </h1>

    return (<UserList users={users}/>)
}

export default UsersPage