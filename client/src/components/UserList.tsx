import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import type {} from 'redux-thunk/extend-redux';
import { fetchDevice } from "../http/deviceApi";


const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  console.log(users + 'users')

  const dispatch = useDispatch()
  // useEffect(() => {
    // dispatch(fetchDevice())
  // }, [])


  if(loading) {
    return <h1>Идет загрузка...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>
        )}
    </div>
  )
}

export default UserList