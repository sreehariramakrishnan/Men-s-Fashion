# Hosting Guide for Mens Fashions Website

This guide will help you host your website online so it can be accessed from anywhere.

## Quick Hosting Options (Free)

### Option 1: Netlify (Recommended - Easiest)

1. **Create a Netlify Account**
   - Go to [https://www.netlify.com](https://www.netlify.com)
   - Sign up for free (use GitHub, Google, or Email)

2. **Deploy Your Website**
   - Log in to Netlify
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire project folder (containing index.html, styles.css, script.js)
   - Wait for deployment (takes 1-2 minutes)
   - Your site will be live at: `https://random-name-123.netlify.app`

3. **Custom Domain (Optional)**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain (e.g., mensfashions.com)
   - Follow the DNS configuration instructions

### Option 2: Vercel

1. **Create a Vercel Account**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up for free

2. **Deploy**
   - Click "Add New Project"
   - Drag and drop your project folder
   - Click "Deploy"
   - Your site will be live immediately

### Option 3: GitHub Pages (Free)

1. **Create GitHub Account**
   - Go to [https://github.com](https://github.com)
   - Sign up for free

2. **Create Repository**
   - Click "New repository"
   - Name it (e.g., "mens-fashions")
   - Make it public
   - Click "Create repository"

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all your files (index.html, styles.css, script.js)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be at: `https://yourusername.github.io/mens-fashions`

### Option 4: Firebase Hosting (Free)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Set public directory as `.` (current directory)
   - Configure as single-page app: No
   - Set up automatic builds: No

4. **Deploy**
   ```bash
   firebase deploy
   ```

## Adding Your Images

### For UPI QR Code:
1. Generate your UPI QR code from your payment app (Paytm, PhonePe, Google Pay, etc.)
2. Save it as `upi-qr-code.png` in your project folder
3. In `index.html`, find this line (around line 179):
   ```html
   <!-- Replace the div above with: <img src="your-upi-qr-code.png" alt="UPI QR Code" class="upi-qr-image"> -->
   ```
4. Replace the placeholder div with:
   ```html
   <img src="upi-qr-code.png" alt="UPI QR Code" class="upi-qr-image">
   ```

### For Fashion Images:
1. Generate AI images of men wearing different shirt/pant/suit combinations
2. Save them with descriptive names:
   - `white-navy.jpg`
   - `navy-beige.jpg`
   - `black-gray.jpg`
   - `suit-navy.jpg`
   - `lightblue-gray.jpg`
   - `suit-black.jpg`

3. In `index.html`, find each placeholder div (around lines 90-141) and replace with:
   ```html
   <img src="white-navy.jpg" alt="White Shirt + Navy Pant" class="fashion-image">
   ```

## Updating Contact Information

1. **Update Address** (Already added: 9th Cross, New Baiyappanahalli, Bengaluru)
2. **Update Phone Number**: In `index.html`, find line 401 and replace `+91 XXXXX XXXXX` with your actual phone number
3. **Update Email**: Replace `info@mensfashions.com` with your actual email
4. **Update UPI ID**: In `index.html`, find line 181 and replace `your-upi-id@paytm` with your actual UPI ID

## Testing Before Hosting

1. Open `index.html` in your browser
2. Test all features:
   - Color selection
   - Order form
   - Admin panel
   - Payment options
3. Make sure everything works locally first

## Important Notes

- **LocalStorage**: Orders are stored in browser's localStorage. For production, consider using a database.
- **Data Persistence**: If you clear browser data, orders will be lost. Consider backend integration for real production use.
- **Mobile Testing**: Test on actual mobile devices or use browser's device emulator (F12 → Toggle device toolbar)

## Need Help?

- Netlify Support: [https://docs.netlify.com](https://docs.netlify.com)
- Vercel Support: [https://vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [https://pages.github.com](https://pages.github.com)

## Quick Start (Recommended: Netlify)

1. Go to netlify.com and sign up
2. Drag your project folder to Netlify
3. Done! Your site is live in 2 minutes!

Your website will be accessible from anywhere in the world! 🌍

