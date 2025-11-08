# RegStreet - Quick Start Guide

## 🚀 Get Your Website Live in 5 Steps

### Step 1: Review Content (15 minutes)
1. Open each HTML file and search for `[Insert Number]`
2. Replace with your company registration number
3. Add phone numbers where indicated
4. Verify email address is correct throughout

**Files to update:**
- All `.html` files (especially footer sections)

### Step 2: Add Your Logo (5 minutes)
1. Create a logo image (recommended: 300x80px, PNG format)
2. Save as `/images/logo.png`
3. Optionally update logo reference in HTML header sections

### Step 3: Set Up Contact Form (20 minutes)

**Option A - Formspree (Easiest, Free tier available)**
1. Go to https://formspree.io
2. Sign up for free account
3. Create new form
4. Copy your form endpoint URL
5. Update `contact.html` line 115:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Test form submission

**Option B - Netlify Forms (If deploying to Netlify)**
1. Add `netlify` attribute to form tag in `contact.html`
2. Deploy to Netlify
3. Forms automatically work

**Option C - EmailJS (JavaScript-based)**
1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Update JavaScript in `js/main.js`

### Step 4: Deploy Website (10-30 minutes)

**Option A - Netlify (Recommended for beginners)**
1. Create account at https://netlify.com
2. Drag & drop `/root/regoffice` folder to Netlify
3. Your site goes live immediately!
4. Add custom domain in settings

**Option B - Traditional Hosting (cPanel)**
1. Log into your web hosting cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files from `/root/regoffice`
5. Set file permissions (644 for files, 755 for folders)
6. Visit your domain

**Option C - GitHub Pages (Free)**
1. Create GitHub account
2. Create new repository named `your-company-website`
3. Upload all files
4. Go to Settings > Pages
5. Enable GitHub Pages from main branch
6. Your site is live at `yourusername.github.io/your-company-website`

### Step 5: Configure SEO (15 minutes)
1. Update `sitemap.xml` - replace `regstreet.co.uk` with your domain
2. Create Google Search Console account
3. Add your property (domain)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`
5. Done!

---

## ✅ Post-Launch Checklist

After your site is live:

**Immediate (Day 1):**
- [ ] Test website loads correctly
- [ ] Submit test contact form
- [ ] Check email notification received
- [ ] Test on mobile device
- [ ] Share with 2-3 people for feedback

**Week 1:**
- [ ] Set up Google Analytics (see guide below)
- [ ] Monitor contact form submissions
- [ ] Check for any errors or issues
- [ ] Make note of any needed improvements

**Month 1:**
- [ ] Review analytics data
- [ ] Optimize based on user behavior
- [ ] Add any missing content
- [ ] Consider adding blog posts for SEO

---

## 📊 Add Google Analytics (Optional but Recommended)

**5-Minute Setup:**

1. Go to https://analytics.google.com
2. Create account and property (GA4)
3. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)
4. Add this code before `</head>` in ALL HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Save all files and re-upload
6. Visit your site and check "Realtime" in GA4 - you should see yourself!

---

## 🎨 Customize Colors (Optional)

Want to change the navy blue color scheme?

1. Open `/css/style.css`
2. Find the `:root` section (around line 12)
3. Change these values:

```css
--color-navy-primary: #001F3F;  /* Main navy blue */
--color-navy-accent: #0066CC;   /* Lighter accent blue */
```

Replace with your brand colors (use hex codes)

---

## 📱 Test Your Website

Before announcing launch, test on:

1. **Desktop browsers:**
   - Chrome: https://yourdomain.com
   - Firefox: https://yourdomain.com
   - Safari (Mac): https://yourdomain.com

2. **Mobile devices:**
   - Pull up website on your phone
   - Test navigation menu (hamburger icon)
   - Try filling out contact form

3. **Speed test:**
   - Visit: https://pagespeed.web.dev
   - Enter your URL
   - Aim for 90+ score (may need image optimization)

---

## 🆘 Common Issues & Fixes

### "Contact form doesn't send emails"
- Check: Did you set up Formspree/EmailJS?
- Fix: Follow Step 3 above

### "Website looks broken on mobile"
- Check: Are CSS files loading?
- Fix: Verify `/css/style.css` and `/css/responsive.css` uploaded correctly

### "Images not showing"
- Check: Did you upload images to `/images/` folder?
- Fix: Create folder and upload images

### "Google can't find my site"
- Check: Did you submit sitemap to Search Console?
- Fix: Follow Step 5 above
- Note: Can take 1-2 weeks for Google to index new sites

### "SSL/HTTPS not working"
- Check: Does your hosting include SSL certificate?
- Fix: Most hosts (Netlify, etc.) provide free SSL - enable in settings
- For cPanel: Use "Let's Encrypt" in SSL section

---

## 📞 Need Help?

**Website Issues:**
- Check `README.md` for detailed documentation
- Review `DEPLOYMENT-CHECKLIST.md` for comprehensive setup

**Technical Support:**
- Hosting provider support (check your hosting dashboard)
- Netlify: https://docs.netlify.com
- GitHub Pages: https://docs.github.com/en/pages

**SEO & Marketing:**
- Google Search Console Help: https://support.google.com/webmasters
- Google Analytics Help: https://support.google.com/analytics

---

## 🎉 You're All Set!

Your professional website is ready to attract customers and grow your business.

**Next Steps:**
1. Share your website URL on social media
2. Add to email signatures
3. Update Google Business Profile
4. Tell your customers!

**Ongoing Maintenance:**
- Update content quarterly
- Monitor form submissions daily
- Review analytics monthly
- Keep contact details current

---

**Questions?** Refer to the comprehensive `README.md` file for detailed documentation.

Good luck with your new website! 🚀
