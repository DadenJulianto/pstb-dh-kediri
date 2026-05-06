'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function SuccessMessage({ formData }: { formData: any }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4 sm:py-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl border-0">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-600 animate-bounce" />
            </div>

            <h1 className="text-4xl font-bold text-green-700 mb-4">Pendaftaran Berhasil!</h1>

            <p className="text-gray-700 text-lg mb-6">
              Terima kasih telah mendaftar sebagai Santri Baru. Data Anda telah kami terima dengan
              baik.
            </p>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6 text-left">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Ringkasan Data Anda:</h2>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Nama Lengkap:</span>
                  <span>{formData.nama_lengkap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Jenis Kelamin:</span>
                  <span>{formData.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Jenjang:</span>
                  <span>{formData.jenjang}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Asal Sekolah:</span>
                  <span>{formData.asal_sekolah}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Nama Ayah:</span>
                  <span>{formData.nama_ayah}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Nama Ibu:</span>
                  <span>{formData.nama_ibu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Komitmen SPP:</span>
                  <span className="capitalize">{formData.komitmen_spp}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Anda akan menerima email konfirmasi dalam waktu 24 jam. Harap periksa folder spam
              jika tidak menemukan email kami.
            </p>

            <p className="text-sm text-gray-500">
              Halaman ini akan kembali ke form pendaftaran dalam beberapa detik...
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
