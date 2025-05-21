import AdminLayout from '@/components/admin/AdminLayout'
import Users from './Users'

export const metadata = {
  title: 'Admin foydalanuvchilar',
}
const AdminUsersPage = () => {
  return (
    <AdminLayout activeItem="users">
      <Users />
    </AdminLayout>
  )
}

export default AdminUsersPage
