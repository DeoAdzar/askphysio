# Cara Upload Image untuk Specializations di cPanel

## 📁 Struktur Folder
```
public/
  └── images/
      └── specializations/
          ├── neuro.jpg
          ├── sport.jpg
          ├── pediatri.jpg
          └── ... (dan seterusnya)
```

## 🚀 Langkah-langkah Upload di cPanel:

### 1. Via File Manager cPanel
1. Login ke cPanel
2. Buka **File Manager**
3. Navigate ke folder: `public_html/public/images/specializations/`
4. Klik tombol **Upload** di toolbar atas
5. Pilih gambar dari komputer Anda
6. Upload file dengan nama yang sesuai (contoh: `neuro.jpg`, `sport.jpg`)

### 2. Via FTP (FileZilla/WinSCP)
1. Connect ke server menggunakan FTP client
2. Navigate ke: `/public_html/public/images/specializations/`
3. Drag & drop files dari komputer ke server
4. Pastikan permission file 644 (rw-r--r--)

## 💾 Update Database

Setelah upload image, update database via phpMyAdmin:

```sql
-- Update satu per satu
UPDATE specializations 
SET image = '/images/specializations/neuro.jpg' 
WHERE id = 1;

UPDATE specializations 
SET image = '/images/specializations/sport.jpg' 
WHERE id = 2;

-- Atau update sekaligus
UPDATE specializations SET image = '/images/specializations/neuro.jpg' WHERE name LIKE '%NEUROLOGI%';
UPDATE specializations SET image = '/images/specializations/sport.jpg' WHERE name LIKE '%OLAHRAGA%';
UPDATE specializations SET image = '/images/specializations/pediatri.jpg' WHERE name LIKE '%PEDIATRI%';
UPDATE specializations SET image = '/images/specializations/geriatri.jpg' WHERE name LIKE '%GERIATRI%';
UPDATE specializations SET image = '/images/specializations/disabilitas.jpg' WHERE name LIKE '%DISABILITAS%';
UPDATE specializations SET image = '/images/specializations/muskuloskeletal.jpg' WHERE name LIKE '%MUSKULOSKELETAL%';
UPDATE specializations SET image = '/images/specializations/kardio.jpg' WHERE name LIKE '%KARDIOVASKULAR%';
UPDATE specializations SET image = '/images/specializations/wanita.jpg' WHERE name LIKE '%WANITA%';
UPDATE specializations SET image = '/images/specializations/integumen.jpg' WHERE name LIKE '%INTEGUMEN%';
```

## 📝 Rekomendasi Ukuran Image
- **Resolusi**: 400x400 px (square/kotak)
- **Format**: JPG atau PNG
- **Ukuran file**: Max 200KB per image
- **Background**: Warna solid atau transparan

## ⚙️ Cara Kerja Sistem
- Jika column `image` di database **ada isinya** → tampilkan image dari path tersebut
- Jika column `image` **NULL/kosong** → tampilkan dummy image dari Picsum

## 🔧 Troubleshooting

### Image tidak muncul?
1. Cek apakah file sudah ter-upload di folder yang benar
2. Cek permission folder: `755` (rwxr-xr-x)
3. Cek permission file: `644` (rw-r--r--)
4. Cek path di database apakah sudah benar (harus diawali `/images/...`)
5. Clear cache browser (Ctrl+F5)

### Permission Error di cPanel?
```bash
# Set permission via File Manager:
# - Klik kanan pada folder → Change Permissions
# - Folder: 755
# - Files: 644
```
