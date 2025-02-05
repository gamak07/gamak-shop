import { useUser } from "../authentication/useUser";
import {useOrder} from '../order/useOrder'
import {useNavigate} from 'react-router-dom'
import Button from '../../ui/Button'
const OrderHistory = () => {
  const navigate = useNavigate()
  const {user} = useUser()
  const {orders} = useOrder(user?.id)

  const orderShown = orders?.slice(0,3)

  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        <ul className="divide-y divide-gray-200">{orderShown?.map(order=>(
          <li key={order.id} className="py-4 flex justify-between items-center">
            <span>Order #{order.order_id}</span>
            <span className={`${order.status === 'pending'? 'text-yellow-600' :"text-green-600"}`}>{order.status}</span>
          </li>
        ))}
          
        </ul>
        <Button className='flex items-center justify-center shadow-md w-full border' onClick={()=>navigate('/orders')}>See all ...</Button>
      </div>
  )
}

export default OrderHistory