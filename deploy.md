# Deploy Portfolio ke Vercel + Custom Domain

## Step 1: Benerin Project Structure dulu

### 1.1 Update vite.config.ts
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### 1.2 Bikin vercel.json di root project
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### 1.3 Update package.json (pastiin scripts-nya bener)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

---

## Step 2: Push ke GitHub

```bash
# Init git (kalo belum)
git init

# Bikin .gitignore
echo "node_modules
dist
.env
.DS_Store" > .gitignore

# Commit
git add .
git commit -m "Initial commit - Portfolio ready for deployment"

# Bikin repo baru di GitHub (github.com/new)
# Namain repo: portfolio atau terserah lu

# Push ke GitHub
git remote add origin https://github.com/USERNAME_LU/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy ke Vercel

### Option A: Via CLI (Cepet & Gue Rekomen)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login
# Pilih GitHub, ikutin auth flow

# Deploy
cd /path/to/portfolio
vercel

# Jawab pertanyaan:
# - Set up and deploy? Y
# - Which scope? (pilih account lu)
# - Link to existing project? N
# - Project name? portfolio (atau terserah)
# - In which directory? ./ (enter aja)
# - Want to modify settings? N

# Deploy to production
vercel --prod
```

### Option B: Via Dashboard (Lebih Visual)

1. Buka [vercel.com](https://vercel.com)
2. Login pake GitHub
3. Click **"Add New..."** → **"Project"**
4. Import repo `portfolio` dari GitHub
5. Vercel auto-detect Vite, langsung klik **Deploy**
6. Wait 1-2 menit, DONE ✅

---

## Step 4: Setup Custom Domain (mfadlans.xyz)

### 4.1 Di Vercel Dashboard

1. Buka project lu di Vercel
2. **Settings** → **Domains**
3. Add domain: `mfadlans.xyz`
4. Add juga: `www.mfadlans.xyz` (optional)
5. Vercel bakal kasih DNS records yang perlu lu setup

### 4.2 Di Registrar Domain (Tempat Beli mfadlans.xyz)

Vercel bakal minta lu tambahin salah satu dari ini:

#### Option A: Nameservers (RECOMMENDED)
Ganti nameserver domain lu jadi Vercel punya:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Caranya:**
1. Login ke dashboard registrar (Namecheap/GoDaddy/Niagahoster/etc)
2. Cari domain `mfadlans.xyz`
3. Pilih "Manage DNS" atau "Nameservers"
4. Ganti ke **Custom Nameservers**
5. Masukin nameserver Vercel di atas
6. Save

#### Option B: A Record (Kalo gak bisa ganti nameserver)
Tambahin DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3 Wait & Verify
- DNS propagation bisa 5 menit - 48 jam (biasanya 10-30 menit)
- Check status di Vercel dashboard
- Kalo udah valid, https://mfadlans.xyz otomatis dapet SSL

---

## Step 5: Automatic Deployment Setup

**Kelebihan Vercel:** Setiap kali lu push ke GitHub, otomatis deploy!

```bash
# Workflow sehari-hari:
git add .
git commit -m "Update portfolio content"
git push

# Vercel otomatis:
# 1. Detect push
# 2. Build project
# 3. Deploy ke production
# 4. Update mfadlans.xyz
# 5. Kasih notif di dashboard/email
```

---

## Troubleshooting

### Error: "Build failed"
```bash
# Test build di local dulu
npm run build

# Kalo error, fix dulu, terus:
git add .
git commit -m "Fix build issues"
git push
```

### Domain gak connect
```bash
# Check DNS propagation
# Buka: https://dnschecker.org
# Masukin: mfadlans.xyz
# Tunggu sampe semua region ijo

# Atau pake terminal:
dig mfadlans.xyz
# Harusnya nunjukin A record ke 76.76.21.21
```

### "Module not found" di Vercel
```bash
# Pastiin dependencies di package.json lengkap
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

## Production Checklist

Sebelum kasih link ke HRD, cek ini:

- [ ] `https://mfadlans.xyz` bisa dibuka
- [ ] SSL/HTTPS ijo (secure)
- [ ] Responsive di mobile
- [ ] No console errors (buka DevTools)
- [ ] Meta tags SEO udah bener
- [ ] Lighthouse score bagus (run di DevTools → Lighthouse)
- [ ] Fast loading (<3 detik)

---

## Bonus: Update Meta Tags buat Professional Look

Tambahin di `index.html`:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Muhammad Fadlan - Full-Stack Developer</title>
    <meta name="description" content="Full-Stack Developer specializing in React, TypeScript, and modern web technologies. Building accessible, human-centered digital experiences." />
    <meta name="author" content="Muhammad Fadlan" />
    
    <!-- Open Graph (buat share di sosmed) -->
    <meta property="og:title" content="Muhammad Fadlan - Full-Stack Developer" />
    <meta property="og:description" content="Full-Stack Developer specializing in React, TypeScript, and modern web technologies." />
    <meta property="og:url" content="https://mfadlans.xyz" />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Muhammad Fadlan - Full-Stack Developer" />
    <meta name="twitter:description" content="Full-Stack Developer specializing in React, TypeScript, and modern web technologies." />
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

---

## Timeline

| Step | Time |
|------|------|
| Push to GitHub | 2 min |
| Deploy via Vercel | 1-2 min |
| DNS Setup | 2 min |
| DNS Propagation | 10-30 min |
| **TOTAL** | ~15-35 min |

---

## Commands Cheat Sheet

```bash
# First time setup
npm i -g vercel
vercel login
vercel --prod

# Daily workflow
git add .
git commit -m "Update XYZ"
git push
# Vercel auto-deploy ✨

# Redeploy manual
vercel --prod

# Check deployment logs
vercel logs

# List deployments
vercel ls

# Rollback to previous deployment (kalo ada bug)
vercel rollback
```

---

## Pro Tips buat Interview

1. **Pake Google Analytics** (optional) biar tau HRD udah buka belum:
   - Daftar di analytics.google.com
   - Dapet tracking ID
   - Tambahin script di index.html
   
2. **Setup Vercel Analytics** (gratis):
   - Project Settings → Analytics → Enable
   - Dapet insight berapa visitor, page views, etc

3. **Preview Deployment**:
   - Setiap branch dapet unique URL
   - Bikin branch `staging` buat testing
   - Production tetep stabil di `main`

4. **Environment Variables** (kalo pake API keys):
   - Settings → Environment Variables
   - Add secrets (API_KEY, etc)
   - Gak perlu commit .env

---

## What Happens After `vercel --prod`?

```
✓ Vercel CLI detected
✓ Linked to username/portfolio
✓ Inspecting project structure
✓ Building project...
  - Running `npm run build`
  - TypeScript compiled
  - Vite bundling...
✓ Build completed (23.4s)
✓ Deploying...
✓ Deployment ready!

Production: https://portfolio-xyz123.vercel.app
            https://mfadlans.xyz (if domain configured)
```

Literally 30 detik dari command sampe live. No cap.

---

Udah bre, tinggal eksekusi aja. Kalo stuck di step manapun, screenshot error-nya terus tanya gue lagi! 🚀