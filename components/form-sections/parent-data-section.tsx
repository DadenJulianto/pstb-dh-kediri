'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ParentDataSectionProps {
  data: any
  errors: Record<string, string>
  onChange: (field: string, value: string) => void
}

export default function ParentDataSection({ data, errors, onChange }: ParentDataSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Orang Tua</h2>

      {/* Father Section */}
      <div className="bg-emerald-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold text-emerald-900 mb-4">Data Ayah</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nama Ayah */}
          <div>
            <Label htmlFor="nama_ayah" className="text-sm font-semibold text-gray-700 mb-2 block">
              Nama Ayah <span className="text-red-600">*</span>
            </Label>
            <Input
              id="nama_ayah"
              type="text"
              placeholder="Masukkan nama ayah"
              value={data.nama_ayah}
              onChange={(e) => onChange('nama_ayah', e.target.value)}
              className={`${errors.nama_ayah ? 'border-red-500' : ''}`}
            />
            {errors.nama_ayah && (
              <p className="text-red-500 text-sm mt-1">{errors.nama_ayah}</p>
            )}
          </div>

          {/* Pekerjaan Ayah */}
          <div>
            <Label htmlFor="pekerjaan_ayah" className="text-sm font-semibold text-gray-700 mb-2 block">
              Pekerjaan Ayah
            </Label>
            <Input
              id="pekerjaan_ayah"
              type="text"
              placeholder="Masukkan pekerjaan ayah"
              value={data.pekerjaan_ayah}
              onChange={(e) => onChange('pekerjaan_ayah', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Nomor HP Ayah */}
          <div>
            <Label htmlFor="no_hp_ayah" className="text-sm font-semibold text-gray-700 mb-2 block">
              Nomor HP Ayah <span className="text-red-600">*</span>
            </Label>
            <Input
              id="no_hp_ayah"
              type="tel"
              placeholder="Masukkan nomor HP ayah"
              value={data.no_hp_ayah}
              onChange={(e) => onChange('no_hp_ayah', e.target.value)}
              className={`${errors.no_hp_ayah ? 'border-red-500' : ''}`}
            />
            {errors.no_hp_ayah && (
              <p className="text-red-500 text-sm mt-1">{errors.no_hp_ayah}</p>
            )}
          </div>

          {/* Alamat Ayah */}
          <div>
            <Label htmlFor="alamat_ayah" className="text-sm font-semibold text-gray-700 mb-2 block">
              Alamat Ayah
            </Label>
            <Input
              id="alamat_ayah"
              type="text"
              placeholder="Masukkan alamat ayah"
              value={data.alamat_ayah}
              onChange={(e) => onChange('alamat_ayah', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mother Section */}
      <div className="bg-pink-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold text-pink-900 mb-4">Data Ibu</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nama Ibu */}
          <div>
            <Label htmlFor="nama_ibu" className="text-sm font-semibold text-gray-700 mb-2 block">
              Nama Ibu <span className="text-red-600">*</span>
            </Label>
            <Input
              id="nama_ibu"
              type="text"
              placeholder="Masukkan nama ibu"
              value={data.nama_ibu}
              onChange={(e) => onChange('nama_ibu', e.target.value)}
              className={`${errors.nama_ibu ? 'border-red-500' : ''}`}
            />
            {errors.nama_ibu && (
              <p className="text-red-500 text-sm mt-1">{errors.nama_ibu}</p>
            )}
          </div>

          {/* Pekerjaan Ibu */}
          <div>
            <Label htmlFor="pekerjaan_ibu" className="text-sm font-semibold text-gray-700 mb-2 block">
              Pekerjaan Ibu
            </Label>
            <Input
              id="pekerjaan_ibu"
              type="text"
              placeholder="Masukkan pekerjaan ibu"
              value={data.pekerjaan_ibu}
              onChange={(e) => onChange('pekerjaan_ibu', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Nomor HP Ibu */}
          <div>
            <Label htmlFor="no_hp_ibu" className="text-sm font-semibold text-gray-700 mb-2 block">
              Nomor HP Ibu <span className="text-red-600">*</span>
            </Label>
            <Input
              id="no_hp_ibu"
              type="tel"
              placeholder="Masukkan nomor HP ibu"
              value={data.no_hp_ibu}
              onChange={(e) => onChange('no_hp_ibu', e.target.value)}
              className={`${errors.no_hp_ibu ? 'border-red-500' : ''}`}
            />
            {errors.no_hp_ibu && (
              <p className="text-red-500 text-sm mt-1">{errors.no_hp_ibu}</p>
            )}
          </div>

          {/* Alamat Ibu */}
          <div>
            <Label htmlFor="alamat_ibu" className="text-sm font-semibold text-gray-700 mb-2 block">
              Alamat Ibu
            </Label>
            <Input
              id="alamat_ibu"
              type="text"
              placeholder="Masukkan alamat ibu"
              value={data.alamat_ibu}
              onChange={(e) => onChange('alamat_ibu', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* SPP Commitment */}
      <div>
        <Label htmlFor="komitmen_spp" className="text-sm font-semibold text-gray-700 mb-2 block">
          Komitmen Infaq Bulanan <span className="text-red-600">*</span>
        </Label>
        <select
          id="komitmen_spp"
          value={data.komitmen_spp}
          onChange={(e) => onChange('komitmen_spp', e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${errors.komitmen_spp ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Pilih Komitmen Infaq</option>
          <option value="mandiri">Mandiri</option>
          <option value="beasiswa-berprestasi">Beasiswa Berprestasi</option>
          <option value="beasiswa-yatim-piatu">Beasiswa Yatim-Piatu</option>

        </select>
        {errors.komitmen_spp && (
          <p className="text-red-500 text-sm mt-1">{errors.komitmen_spp}</p>
        )}

        {/* Informasi Pembayaran */}
        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <h4 className="text-sm font-semibold text-emerald-800 mb-2">Informasi Pembayaran</h4>
          <p className="text-sm text-emerald-700">
            Pembayaran SPP dapat dilakukan melalui transfer bank ke rekening berikut:
          </p>
          <ul className="list-disc list-inside text-sm text-emerald-700 mt-2 space-y-1">
            <ul className="list-disc list-inside text-sm text-emerald-700 mt-2 space-y-1">
  <li>
    Bank Jawa Timur (BJT): 
    <strong 
      className="cursor-pointer hover:underline decoration-dotted" 
      onClick={() => {
        navigator.clipboard.writeText("6112003337");
        alert("Nomor rekening disalin!");
      }}
      title="Klik untuk salin"
    >
      6112003337
      </strong> 
       Yayasan Ar-Risalah
  </li>
</ul>
          </ul>
          <p className="text-sm text-emerald-700 mt-2">
            Harap simpan bukti transfer untuk verifikasi pembayaran.
          </p>
        </div>
        {/* Informasi infaq pendidikan */}
        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <h4 className="text-sm font-semibold text-emerald-800 mb-2">Informasi Infq Pendidikan</h4>
          
          <ol className="list-decimal list-inside text-sm text-emerald-700 mt-2 space-y-1">
            <li>Beasiswa Prestasi - Potongan infaq pendidikan hingga <strong>50%</strong></li>
            <li>Beasiswa keluarga pra sejahtera - Potongan infaq pendidikan hingga <strong>100%</strong></li>
            <li>Beasiswa Yatim dan Piatu - Gratis infaq pendidikan </li>

          </ol>
          <p className="text-sm text-emerald-700 mt-2">
            <strong>Note </strong> : syarat dan ketentuan berlaku
          </p>
        </div>
      </div>
    </div>
  )
}
