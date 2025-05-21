import AdminLayout from '@/components/admin/AdminLayout'
import Orders from './Orders'

export const metadata = {
  title: 'Admin buyurtmalari',
}
const AdminOrdersPage = () => {
  return (
    <AdminLayout activeItem="orders">
      <Orders />
    </AdminLayout>
  )
}

export default AdminOrdersPage
