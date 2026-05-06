'use client'

import { Upload } from 'lucide-react'
import { Label } from '@/components/ui/label'

interface DocumentUploadSectionProps {
  documents: {
    ktp_ortu: string | null
    foto_santri: string | null
    kk: string | null
    ijazah: string | null
  }
  onFileChange: (
    docType: 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah',
    file: File | null
  ) => void
}

export default function DocumentUploadSection({
  documents,
  onFileChange,
}: DocumentUploadSectionProps) {
  const documentTypes = [
    {
      id: 'ktp_ortu',
      label: 'KTP Orang Tua',
      description: 'Format: JPG, PNG (Maks 5MB)',
    },
    {
      id: 'foto_santri',
      label: 'Foto Santri (3x4)',
      description: 'Format: JPG, PNG (Maks 2MB)',
    },
    {
      id: 'kk',
      label: 'Kartu Keluarga (KK)',
      description: 'Format: JPG, PNG, PDF (Maks 5MB)',
    },
    {
      id: 'ijazah',
      label: 'Ijazah / SK Lulus',
      description: 'Format: JPG, PNG, PDF (Maks 5MB)',
    },
  ]

  const handleFileInputChange = (
    docType: 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah',
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null
    onFileChange(docType, file)
  }

  const getFileName = (
    docType: 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah'
  ): string | null => {
    return documents[docType] ? 'File berhasil diunggah' : null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Dokumen</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentTypes.map((doc) => (
          <div
            key={doc.id}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition"
          >
            <Label htmlFor={doc.id} className="text-sm font-semibold text-gray-700 mb-2 block">
              {doc.label}
            </Label>
            <p className="text-xs text-gray-500 mb-4">{doc.description}</p>

            <div className="flex items-center justify-center mb-4">
              <label
                htmlFor={doc.id}
                className="flex flex-col items-center justify-center w-full cursor-pointer"
              >
                <Upload className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-sm text-blue-600 font-medium">
                  {getFileName(doc.id as 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah')
                    ? 'Ubah file'
                    : 'Pilih file'}
                </span>
              </label>
              <input
                id={doc.id}
                type="file"
                accept={
                  doc.id === 'ijazah' || doc.id === 'kk'
                    ? '.jpg,.jpeg,.png,.pdf'
                    : '.jpg,.jpeg,.png'
                }
                onChange={(e) =>
                  handleFileInputChange(
                    doc.id as 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah',
                    e
                  )
                }
                className="hidden"
              />
            </div>

            {getFileName(doc.id as 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah') && (
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <p className="text-sm text-green-800 font-medium">
                  ✓{' '}
                  {getFileName(doc.id as 'ktp_ortu' | 'foto_santri' | 'kk' | 'ijazah')}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Catatan:</span> Pastikan semua dokumen jelas dan dapat
          dibaca dengan baik. File yang tidak sesuai dengan format akan ditolak.
        </p>
      </div>
    </div>
  )
}
