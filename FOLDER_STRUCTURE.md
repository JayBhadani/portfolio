# 📁 Folder Structure - Complete Setup Guide

Copy-paste this structure and organize your files accordingly:

```
portfolio-nextjs/
│
├── 📂 app/
│   ├── layout.tsx              ← Copy from: layout.tsx
│   ├── page.tsx                ← Copy from: page.tsx
│   └── globals.css             ← Copy from: globals.css
│
├── 📂 components/
│   ├── Navbar.tsx              ← Copy from: Navbar.tsx
│   ├── Hero.tsx                ← Copy from: Hero.tsx
│   ├── Skills.tsx              ← Copy from: Skills.tsx
│   ├── Projects.tsx            ← Copy from: Projects.tsx
│   ├── Contact.tsx             ← Copy from: Contact.tsx
│   └── Footer.tsx              ← Copy from: Footer.tsx
│
├── 📂 public/
│   ├── 📂 images/              (Create this folder for your images)
│   └── favicon.ico             (Optional: your favicon)
│
├── package.json                ← Copy from: package.json
├── tsconfig.json               ← Copy from: tsconfig.json
├── next.config.js              ← Copy from: next.config.js
├── tailwind.config.js          ← Copy from: tailwind.config.js
├── postcss.config.js           ← Copy from: postcss.config.js
├── .gitignore                  ← Copy from: .gitignore
├── README.md                   ← Copy from: README.md
└── QUICK_START.md              ← Copy from: QUICK_START.md

```

## 📋 Step-by-Step Setup

### Step 1: Create Main Folder
```bash
mkdir portfolio-nextjs
cd portfolio-nextjs
```

### Step 2: Create Subfolders
```bash
mkdir app components public/images
```

### Step 3: Copy Configuration Files to Root
Copy these files to the root `portfolio-nextjs/` folder:
- package.json
- tsconfig.json
- next.config.js
- tailwind.config.js
- postcss.config.js
- .gitignore
- README.md
- QUICK_START.md

### Step 4: Copy App Files
Copy these to `app/` folder:
- layout.tsx
- page.tsx
- globals.css

### Step 5: Copy Components
Copy these to `components/` folder:
- Navbar.tsx
- Hero.tsx
- Skills.tsx
- Projects.tsx
- Contact.tsx
- Footer.tsx

### Step 6: Install Dependencies
```bash
npm install
```

### Step 7: Start Development
```bash
npm run dev
```

## 🎯 File Mapping Reference

| File Name | Destination | Purpose |
|-----------|-------------|---------|
| layout.tsx | `app/` | Root layout & metadata |
| page.tsx | `app/` | Main homepage |
| globals.css | `app/` | Global styles & animations |
| Navbar.tsx | `components/` | Navigation bar |
| Hero.tsx | `components/` | Landing section |
| Skills.tsx | `components/` | Interactive skills |
| Projects.tsx | `components/` | Project showcase |
| Contact.tsx | `components/` | Contact form |
| Footer.tsx | `components/` | Footer section |
| package.json | Root | Dependencies |
| tsconfig.json | Root | TypeScript config |
| next.config.js | Root | Next.js config |
| tailwind.config.js | Root | Tailwind CSS config |
| postcss.config.js | Root | PostCSS config |
| .gitignore | Root | Git ignore rules |

## 🔄 Alternative: Using create-next-app

If you prefer using Create Next App:

```bash
# Create new Next.js project
npx create-next-app@latest portfolio-nextjs --typescript

# Navigate to project
cd portfolio-nextjs

# Replace the files according to the mapping above
```

## ✅ Verification Checklist

After copying all files, verify:

- [ ] `app/` folder contains: layout.tsx, page.tsx, globals.css
- [ ] `components/` folder contains: all 6 component files
- [ ] Root folder contains: all config files
- [ ] `public/` folder exists (for future images)
- [ ] `.gitignore` file is created
- [ ] `package.json` is in root

## 🚀 Final Commands

```bash
# Install all dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📚 File Dependencies

```
page.tsx imports:
  └── Hero.tsx
  └── Skills.tsx
  └── Projects.tsx
  └── Contact.tsx

layout.tsx imports:
  └── Navbar.tsx
  └── Footer.tsx
  └── globals.css

globals.css contains:
  └── All global styles
  └── All animations
  └── Utility classes
```

## 🎨 Customization Order

1. **First**: Update text in components
2. **Second**: Add your projects
3. **Third**: Update colors in globals.css
4. **Fourth**: Modify skills section
5. **Fifth**: Add social links in Footer
6. **Finally**: Deploy to Vercel

## 🔐 Important Notes

⚠️ **Do NOT modify**:
- `tsconfig.json` (unless you know TypeScript)
- `next.config.js` (unless needed)
- `tailwind.config.js` (unless customizing more)

✅ **Safe to modify**:
- All `.tsx` component files
- `globals.css` (for colors/animations)
- `package.json` (if adding packages)

## 🆘 If Something Goes Wrong

### Files in wrong folder?
Move them to correct location and run:
```bash
npm run dev
```

### TypeScript errors?
Make sure you're using the exact files provided - they're pre-configured for TypeScript.

### Styles not showing?
Check that `globals.css` is in `app/` folder and imported in `layout.tsx`.

### Components not found?
Verify all components are in `components/` folder with correct names.

---

**Everything ready? Let's code! 🚀**

For detailed information, see: **README.md** or **QUICK_START.md**
