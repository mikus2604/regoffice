# RegStreet (RegStreet Ltd) - Website

Professional UK registered office and business address services website.

## 📋 Overview

This is a fully responsive, SEO-optimized website for RegStreet (RegStreet Ltd), a UK-based registered office address service provider. The website features a modern navy and white corporate design with comprehensive service information, pricing, and contact functionality.

## 🎨 Design Features

- **Color Scheme**: Navy blue (#001F3F) and white corporate theme
- **Typography**: Inter/Montserrat corporate fonts
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation support
- **Performance**: Optimized for fast loading and Core Web Vitals

## 📁 File Structure

```
/root/regoffice/
├── index.html              # Homepage
├── services.html           # Services page
├── pricing.html            # Pricing page
├── about.html              # About page
├── contact.html            # Contact page with form
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── sitemap.xml             # XML sitemap for SEO
├── robots.txt              # Robots.txt for search engines
├── claude.md               # Project documentation
├── regoffice.txt           # Original content source
├── README.md               # This file
├── css/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Responsive design styles
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image assets (to be added)
│   └── icons/              # Icon files
└── assets/                 # Additional assets
    └── fonts/              # Custom fonts (if needed)
```

## 🚀 Quick Start

### 1. Local Development

Simply open `index.html` in a web browser:

```bash
# Using Python's built-in server
python3 -m http.server 8000

# Using PHP's built-in server
php -S localhost:8000

# Using Node.js http-server (install first: npm install -g http-server)
http-server -p 8000
```

Then visit: `http://localhost:8000`

### 2. Deployment Options

#### Option A: Traditional Web Hosting (cPanel/FTP)
1. Upload all files to your web hosting public_html directory
2. Ensure proper file permissions (644 for files, 755 for directories)
3. Update domain references in sitemap.xml

#### Option B: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Option C: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Select the main branch as source

#### Option D: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## ⚙️ Configuration

### Before Going Live

1. **Update Company Information**:
   - Replace `[Insert Number]` with your company registration number
   - Add phone numbers where indicated
   - Verify all address details are correct

2. **Update Domain in Files**:
   - `sitemap.xml`: Replace `regstreet.co.uk` with your actual domain
   - All HTML files: Update email links if different

3. **Add Logo and Images**:
   - Place company logo in `/images/logo.png`
   - Add service images to `/images/` directory
   - Update image references in HTML files

4. **Set Up Contact Form Backend**:
   - Current form shows success message without sending
   - Uncomment AJAX code in `js/main.js` and set up backend endpoint
   - Or integrate with services like Formspree, Netlify Forms, or EmailJS

5. **Add Analytics**:
   - Insert Google Analytics tracking code in all HTML pages (before `</head>`)
   - Add Google Tag Manager if needed
   - Set up Google Search Console

6. **Configure SEO**:
   - Submit sitemap to Google Search Console
   - Set up Bing Webmaster Tools
   - Verify meta descriptions and titles are optimized

## 🔧 Customization

### Color Scheme
Edit CSS variables in `/css/style.css`:

```css
:root {
    --color-navy-primary: #001F3F;
    --color-navy-accent: #0066CC;
    /* Modify as needed */
}
```

### Fonts
The website uses system fonts by default. To add custom fonts:

1. Add font files to `/assets/fonts/`
2. Update CSS font-family in `/css/style.css`

### Content
All content can be edited directly in the HTML files. Key sections:
- Hero sections: Update headlines and CTAs
- Services: Modify service descriptions and pricing
- Contact info: Update throughout all pages

## 📱 Features

### Implemented
- ✅ Responsive navigation with mobile menu
- ✅ Contact form with client-side validation
- ✅ Smooth scrolling navigation
- ✅ SEO-optimized HTML structure
- ✅ Schema.org markup for local business
- ✅ GDPR-compliant privacy policy
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Performance optimizations
- ✅ Print-friendly styles

### Optional Enhancements (Commented Out in JS)
- Scroll-to-top button
- FAQ accordion functionality
- Form auto-save to localStorage
- Event tracking for analytics

Uncomment relevant functions in `/js/main.js` to enable.

## 🔍 SEO Checklist

- ✅ Semantic HTML5 structure
- ✅ Meta titles and descriptions on all pages
- ✅ Schema.org LocalBusiness markup
- ✅ XML sitemap
- ✅ Robots.txt file
- ✅ Alt text for images (add when images are added)
- ✅ Clean URL structure
- ✅ Internal linking
- ✅ Mobile-responsive design
- ✅ Fast loading performance
- ⚠️ Submit sitemap to Google Search Console (after deployment)
- ⚠️ Set up Google Analytics (before launch)

## 🛡️ Security & Compliance

- **GDPR Compliant**: Privacy policy and cookie consent ready
- **AML Compliance**: Mentioned throughout content
- **Secure Forms**: Client-side validation (add server-side validation)
- **HTTPS**: Ensure SSL certificate is installed on hosting

## 📊 Performance

### Optimization Tips
1. Compress images before uploading (use tools like TinyPNG)
2. Enable GZIP compression on web server
3. Enable browser caching (add .htaccess rules)
4. Consider using a CDN for assets
5. Minify CSS and JS for production (optional)

### Expected Metrics
- PageSpeed Insights: 90+ (with optimized images)
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Mobile-friendly: Yes

## 🐛 Troubleshooting

### Mobile menu not working
- Check browser console for JavaScript errors
- Ensure `js/main.js` is properly linked

### Form not submitting
- Form currently shows success without backend
- Set up backend endpoint or use form service (Formspree, etc.)

### Styles not loading
- Check CSS file paths are correct
- Clear browser cache
- Verify files uploaded correctly

## 📞 Support & Maintenance

### Regular Updates
- Review and update content quarterly
- Check for broken links monthly
- Monitor analytics for user behavior
- Update privacy policy as needed for compliance

### Browser Compatibility
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

© 2025 RegStreet (RegStreet Ltd). All rights reserved.

This website is proprietary to RegStreet (RegStreet Ltd).

## 🤝 Contributing

This is a private business website. For changes or improvements, contact the development team.

## 📮 Contact

**RegStreet (RegStreet Ltd)**
Suite 2, 2nd Floor, 309 High Street
West Midlands
West Midlands
B70 8LX
United Kingdom

Email: hello@regstreet.co.uk
Website: https://regstreet.co.uk

---

**Built with:** HTML5, CSS3, JavaScript
**Last Updated:** January 2025
**Version:** 1.0.0
