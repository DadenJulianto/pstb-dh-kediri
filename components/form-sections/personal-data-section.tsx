'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PersonalDataSectionProps {
  data: any
  errors: Record<string, string>
  onChange: (field: string, value: string) => void
}

export default function PersonalDataSection({
  data,
  errors,
  onChange,
}: PersonalDataSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Pribadi</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Nama Lengkap */}
        <div>
          <Label htmlFor="nama_lengkap" className="text-sm font-semibold text-gray-700 mb-2 block">
            Nama Lengkap <span className="text-red-600">*</span>
          </Label>
          <Input
            id="nama_lengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
            value={data.nama_lengkap}
            onChange={(e) => onChange('nama_lengkap', e.target.value)}
            className={`${errors.nama_lengkap ? 'border-red-500' : ''}`}
          />
          {errors.nama_lengkap && (
            <p className="text-red-500 text-sm mt-1">{errors.nama_lengkap}</p>
          )}
        </div>

        {/* Jenis Kelamin */}
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">
            Jenis Kelamin <span className="text-red-600">*</span>
          </Label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="jenis_kelamin"
                value="L"
                checked={data.jenis_kelamin === 'L'}
                onChange={(e) => onChange('jenis_kelamin', e.target.value)}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-gray-700">Laki-laki</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="jenis_kelamin"
                value="P"
                checked={data.jenis_kelamin === 'P'}
                onChange={(e) => onChange('jenis_kelamin', e.target.value)}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-gray-700">Perempuan</span>
            </label>
          </div>
          {errors.jenis_kelamin && (
            <p className="text-red-500 text-sm mt-1">{errors.jenis_kelamin}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Tempat Lahir */}
        <div>
          <Label htmlFor="tempat_lahir" className="text-sm font-semibold text-gray-700 mb-2 block">
            Tempat Lahir <span className="text-red-600">*</span>
          </Label>
          <Input
            id="tempat_lahir"
            type="text"
            placeholder="Masukkan tempat lahir"
            value={data.tempat_lahir}
            onChange={(e) => onChange('tempat_lahir', e.target.value)}
            className={`${errors.tempat_lahir ? 'border-red-500' : ''}`}
          />
          {errors.tempat_lahir && (
            <p className="text-red-500 text-sm mt-1">{errors.tempat_lahir}</p>
          )}
        </div>

        {/* Tanggal Lahir */}
        <div>
          <Label htmlFor="tanggal_lahir" className="text-sm font-semibold text-gray-700 mb-2 block">
            Tanggal Lahir <span className="text-red-600">*</span>
          </Label>
          <Input
            id="tanggal_lahir"
            type="date"
            value={data.tanggal_lahir}
            onChange={(e) => onChange('tanggal_lahir', e.target.value)}
            className={`${errors.tanggal_lahir ? 'border-red-500' : ''}`}
          />
          {errors.tanggal_lahir && (
            <p className="text-red-500 text-sm mt-1">{errors.tanggal_lahir}</p>
          )}
        </div>
      </div>

      {/* Alamat */}
      <div className="mb-6">
        <Label htmlFor="alamat" className="text-sm font-semibold text-gray-700 mb-2 block">
          Alamat Lengkap <span className="text-red-600">*</span>
        </Label>
        <textarea
          id="alamat"
          placeholder="Masukkan alamat lengkap (Jalan, Desa, Kecamatan, Kabupaten)"
          value={data.alamat}
          onChange={(e) => onChange('alamat', e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.alamat ? 'border-red-500' : 'border-gray-300'}`}
          rows={3}
        />
        {errors.alamat && (
          <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Jenjang */}
        <div>
          <Label htmlFor="jenjang" className="text-sm font-semibold text-gray-700 mb-2 block">
            Jenjang <span className="text-red-600">*</span>
          </Label>
          <select
            id="jenjang"
            value={data.jenjang}
            onChange={(e) => onChange('jenjang', e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.jenjang ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Pilih Jenjang</option>
            <option value="putra">SMP/MTS Putra</option>
            <option value="putri">SMP/MTS Putri</option>
          </select>
          {errors.jenjang && <p className="text-red-500 text-sm mt-1">{errors.jenjang}</p>}
        </div>

        {/* Asal Sekolah */}
        <div>
          <Label htmlFor="asal_sekolah" className="text-sm font-semibold text-gray-700 mb-2 block">
            Asal Sekolah <span className="text-red-600">*</span>
          </Label>
          <Input
            id="asal_sekolah"
            type="text"
            placeholder="Masukkan nama sekolah asal"
            value={data.asal_sekolah}
            onChange={(e) => onChange('asal_sekolah', e.target.value)}
            className={`${errors.asal_sekolah ? 'border-red-500' : ''}`}
          />
          {errors.asal_sekolah && (
            <p className="text-red-500 text-sm mt-1">{errors.asal_sekolah}</p>
          )}
        </div>
      </div>

      {/* Prestasi */}
      <div className="mb-6">
        <Label htmlFor="prestasi" className="text-sm font-semibold text-gray-700 mb-2 block">
          Prestasi
        </Label>
        <textarea
          id="prestasi"
          placeholder="Tuliskan prestasi Anda (opsional)"
          value={data.prestasi}
          onChange={(e) => onChange('prestasi', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Riwayat Penyakit */}
        <div>
          <Label htmlFor="riwayat_penyakit" className="text-sm font-semibold text-gray-700 mb-2 block">
            Riwayat Penyakit
          </Label>
          <Input
            id="riwayat_penyakit"
            type="text"
            placeholder="Tuliskan jika ada (opsional)"
            value={data.riwayat_penyakit}
            onChange={(e) => onChange('riwayat_penyakit', e.target.value)}
          />
        </div>

        {/* Alergi */}
        <div>
          <Label htmlFor="alergi" className="text-sm font-semibold text-gray-700 mb-2 block">
            Alergi
          </Label>
          <Input
            id="alergi"
            type="text"
            placeholder="Tuliskan jika ada (opsional)"
            value={data.alergi}
            onChange={(e) => onChange('alergi', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
