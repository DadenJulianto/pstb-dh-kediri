'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import PersonalDataSection from './form-sections/personal-data-section'
import ParentDataSection from './form-sections/parent-data-section'
import DocumentUploadSection from './form-sections/document-upload-section'

interface FormDataType {
  nama_lengkap: string
  jenis_kelamin: string
  tempat_lahir: string
  tanggal_lahir: string
  alamat: string
  jenjang: string
  asal_sekolah: string
  prestasi: string
  riwayat_penyakit: string
  alergi: string
  nama_ayah: string
  pekerjaan_ayah: string
  no_hp_ayah: string
  alamat_ayah: string
  nama_ibu: string
  pekerjaan_ibu: string
  no_hp_ibu: string
  alamat_ibu: string
  komitmen_spp: string
  ktp_ortu: string | null
  foto_santri: string | null
  kk: string | null
  ijazah: string | null
}

export default function RegistrationForm({ onSubmit }: { onSubmit: (payload: { data: FormDataType }) => void }) {
  const [formData, setFormData] = useState<FormDataType>({
    nama_lengkap: '',
    jenis_kelamin: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat: '',
    jenjang: '',
    asal_sekolah: '',
    prestasi: '',
    riwayat_penyakit: '',
    alergi: '',
    nama_ayah: '',
    pekerjaan_ayah: '',
    no_hp_ayah: '',
    alamat_ayah: '',
    nama_ibu: '',
    pekerjaan_ibu: '',
    no_hp_ibu: '',
    alamat_ibu: '',
    komitmen_spp: '',
    ktp_ortu: null,
    foto_santri: null,
    kk: null,
    ijazah: null,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const requiredFields = [
    'nama_lengkap',
    'jenis_kelamin',
    'tempat_lahir',
    'tanggal_lahir',
    'alamat',
    'jenjang',
    'asal_sekolah',
    'nama_ayah',
    'no_hp_ayah',
    'nama_ibu',
    'no_hp_ibu',
    'komitmen_spp',
  ]

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    requiredFields.forEach((field) => {
      // @ts-ignore
      if (!formData[field]) {
        newErrors[field] = 'Bidang ini wajib diisi'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadLoading, setUploadLoading] = useState(false)

  const handleFileUpload = async (field: string, file: File) => {
    if (!file) return

    try {
      setUploadLoading(true)
      const formDataUpload = new FormData()
      formDataUpload.append('file', file)
      formDataUpload.append('upload_preset', 'pstb_upload')

      const response = await fetch('https://api.cloudinary.com/v1_1/dzlrhfivk/image/upload', {
        method: 'POST',
        body: formDataUpload,
      })

      const responseData = await response.json()
      console.log("Upload response:", responseData)
      console.log("File:", file)

      if (!response.ok) {
        throw new Error(responseData.error?.message || 'Upload gagal')
      }

      console.log("Uploaded URL:", responseData.secure_url)

      setFormData((prev) => ({
        ...prev,
        [field]: responseData.secure_url,
      }))
    } catch (error: any) {
      console.error(error)
      alert(error.message || "Upload gagal")
    } finally {
      setUploadLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const payloadData = {
          ...formData,
          created_at: new Date().toISOString()
        }
        
        console.log(payloadData)

        const response = await fetch('https://sheetdb.io/api/v1/vj4mrevkrxpym', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: payloadData
          })
        })

        if (!response.ok) {
          throw new Error('Failed to submit')
        }

        alert('Pendaftaran berhasil!')
        onSubmit({ data: formData })
      } catch (error) {
        console.error(error)
        alert('Gagal mengirim data')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }))
    }
  }

  return (
    <Card className="shadow-xl">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="bg-white p-2 rounded-full shadow-md shrink-0">
            <Image src="/logo-utama.png" alt="Logo Sekolah" width={64} height={64} className="w-16 h-16 object-contain" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-3xl font-bold">Form Pendaftaran Santri Baru</CardTitle>
            <p className="text-emerald-100 mt-2">Mohon isi data diri Anda dengan lengkap dan benar</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Data Section */}
          <PersonalDataSection
            data={formData}
            errors={errors}
            onChange={handleChange}
          />

          <div className="border-t pt-8" />

          {/* Parent Data Section */}
          <ParentDataSection
            data={formData}
            errors={errors}
            onChange={handleChange}
          />

          <div className="border-t pt-8" />

          {/* Document Upload Section */}
          <DocumentUploadSection
            documents={{
              ktp_ortu: formData.ktp_ortu,
              foto_santri: formData.foto_santri,
              kk: formData.kk,
              ijazah: formData.ijazah
            }}
            onFileChange={(docType, file) => {
              if (file) {
                handleFileUpload(docType, file)
              }
            }}
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              disabled={isSubmitting || uploadLoading}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-12 py-6 rounded-lg font-semibold shadow-lg"
            >
              {isSubmitting ? 'Mengirim...' : uploadLoading ? 'Uploading...' : 'Daftar Sekarang'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
