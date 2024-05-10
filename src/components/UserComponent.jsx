import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../config/redux/slices/userSlice';
function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(userData);
  return (
    <div className="w-fit h-fit bg-white p-5 rounded-xl border-[3px] ring-1 border-blue-700">
      <h2 className="font-bold">User Details</h2>
      {userData?.map((item) => (
        <div key={item.id}>
          <span>Name: {item.name}</span>
          <span> - </span>
          <span>Email: {item.email}</span>
        </div>
      ))}
    </div>
  );
}
export default UserComponent;
