import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Yetkazib berish manzili',
}

export default async function ShippingPage() {
  return <Form />
}
