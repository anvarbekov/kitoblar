'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast'

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Form = () => {
  const { data: session } = useSession()

  const params = useSearchParams()
  const router = useRouter()
  let callbackUrl = params.get('callbackUrl') || 'http://kitoblarstoreapp.vercel.app/'
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl)
    }
  }, [callbackUrl, params, router, session])

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password } = form

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      if (res.ok) {
        return router.push(
          `/signin?callbackUrl=${callbackUrl}&success=Hisob yaratildi`
        )
      } else {
        const data = await res.json()
        throw new Error(data.message)
      }
    } catch (err: any) {
      const error =
        err.message && err.message.indexOf('E11000') === 0
          ? 'Elektron pochta dublikat'
          : err.message
      toast.error(error || 'xato!')
    }
  }
  return (
    <div className="max-w-sm  mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Roʻyxatdan oʻtish</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label className="label" htmlFor="name">
              Ism
            </label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Ism talab qilinadi',
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.name?.message && (
              <div className="text-error">{errors.name.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register('email', {
                required: 'Elektron pochta kerak',
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Elektron pochta manzili yaroqsiz',
                },
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.email?.message && (
              <div className="text-error"> {errors.email.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="password">
              Parol
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Parol talab qilinadi',
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="confirmPassword">
              Parolni tasdiqlang
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Parolni tasdiqlash talab qilinadi',
                validate: (value) => {
                  const { password } = getValues()
                  return password === value || 'Parollar mos kelishi kerak!'
                },
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.confirmPassword?.message && (
              <div className="text-error">{errors.confirmPassword.message}</div>
            )}
          </div>
          <div className="my-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Roʻyxatdan oʻtish
            </button>
          </div>
        </form>

        <div className="divider"> </div>
        <div>
          Hisobingiz bormi?{' '}
          <Link className="link" href={`/signin?callbackUrl=${callbackUrl}`}>
            Kirish
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Form
