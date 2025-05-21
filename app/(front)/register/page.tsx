import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: "Ro'yhatdan o'tish",
}

export default async function Register() {
  return <Form />
}
