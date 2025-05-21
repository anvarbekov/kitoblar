'use client'
import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import useSWR from 'swr'

export default function Orders() {
  const { data: orders, error } = useSWR(`/api/admin/orders`)
  if (error) return 'Xatolik yuz berdi.'
  if (!orders) return 'Yuklanmoqda...'

  return (
    <div>
      <h1 className="py-4 text-2xl">Buyurtmalar</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>FOYDALANUVCHI</th>
              <th>SANA</th>
              <th>JAMI</th>
              <th>TO'LANGAN</th>
              <th>YETKAZIB BERILDI</th>
              <th>HARAKAT</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr key={order._id}>
                <td>..{order._id.substring(20, 24)}</td>
                <td>{order.user?.name || "O'chirilgan foydalanuvchi"}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid && order.paidAt
                    ? `${order.paidAt.substring(0, 10)}`
                    : "to'lanmagan"}
                </td>
                <td>
                  {order.isDelivered && order.deliveredAt
                    ? `${order.deliveredAt.substring(0, 10)}`
                    : 'yetkazib berilmagan'}
                </td>
                <td>
                  <Link href={`/order/${order._id}`} passHref>
                    Tafsilotlar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
