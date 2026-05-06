'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RegistrationForm from '@/components/registration-form'
import SuccessMessage from '@/components/success-message'

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<any>(null)

  const handleSubmit = (payload: { data: any }) => {
    setFormData(payload.data)
    setIsSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData(null)
    }, 5000)
  }

  if (isSubmitted) {
    return <SuccessMessage formData={formData} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-8 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <RegistrationForm onSubmit={handleSubmit} />
      </div>
    </main>
  )
}
