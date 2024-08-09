import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { clearErrors, getAllUsers } from '../../Services/dashboard/actions/UserActions';
import { useSelector } from 'react-redux';
import UserListTable from '../../components/Dashboard/Table/UserListTable';

const Users = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {isLoading,users,error} = useSelector((state) => state.adminUsers)

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getAllUsers());
  }, [dispatch, error]);

  useEffect(() => {
    if (users) {
      setData(users.users);
    }
  }, [users]);

  return (
    <div>
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center pl-4 mb-5">
          <Link to="/admin/orders" className="text-lg font-semibold">
            All Users
          </Link>
        </div>
        <UserListTable data={data} />
      </div>
    </div>
  )
}

export default Users
