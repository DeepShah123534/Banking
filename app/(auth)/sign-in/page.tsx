import React from 'react'
import AuthForm from '@/components/ui/AuthForm'

const SignIn = () => {
  return (
    <section className = "flex-center size-full max-sm:px6">
      <AuthForm type = "sign-in"/>
    </section>
  )
}

export default SignIn