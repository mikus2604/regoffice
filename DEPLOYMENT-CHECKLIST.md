# RegStreet - Deployment Checklist

Use this checklist before launching your website to ensure everything is configured correctly.

## ✅ Pre-Launch Checklist

### 1. Content Review
- [ ] Review all pages for spelling and grammar errors
- [ ] Verify company registration number is added (search for `[Insert Number]`)
- [ ] Add phone numbers where indicated (search for `[Insert Number]`)
- [ ] Verify all service descriptions are accurate
- [ ] Check pricing is correct on all pages
- [ ] Confirm email address (hello@regstreet.co.uk) is correct
- [ ] Review legal pages (Privacy Policy, Terms of Service)
- [ ] Verify business address details are accurate

### 2. Visual Assets
- [ ] Add company logo to `/images/logo.png`
- [ ] Add favicon.ico to root directory
- [ ] Add hero background images (optional)
- [ ] Add service icons or images
- [ ] Add team photos for About page (optional)
- [ ] Optimize all images (compress with TinyPNG or similar)
- [ ] Add alt text to all images

### 3. Domain & Hosting
- [ ] Purchase domain name
- [ ] Set up web hosting (or deploy to Netlify/Vercel)
- [ ] Install SSL certificate (HTTPS)
- [ ] Point domain to hosting
- [ ] Configure DNS records
- [ ] Test website on staging URL
- [ ] Update sitemap.xml with actual domain
- [ ] Uncomment HTTPS redirect in .htaccess

### 4. Contact Form Setup
- [ ] Choose form submission method:
  - [ ] Option A: Set up backend API endpoint
  - [ ] Option B: Use Formspree (https://formspree.io)
  - [ ] Option C: Use Netlify Forms
  - [ ] Option D: Use EmailJS (https://www.emailjs.com)
- [ ] Update form action in contact.html
- [ ] Configure email notifications
- [ ] Test form submissions
- [ ] Set up auto-responder email (optional)
- [ ] Add spam protection (reCAPTCHA optional)

### 5. Analytics & Tracking
- [ ] Create Google Analytics 4 property
- [ ] Add GA4 tracking code to all HTML pages (before `</head>`)
- [ ] Set up Google Tag Manager (optional)
- [ ] Configure conversion goals in GA4
- [ ] Test analytics tracking
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Submit sitemap to Bing

### 6. SEO Configuration
- [ ] Verify meta titles on all pages (max 60 characters)
- [ ] Verify meta descriptions on all pages (max 160 characters)
- [ ] Check all headings (H1-H6) are properly structured
- [ ] Verify internal links work correctly
- [ ] Update Open Graph tags for social media
- [ ] Add Twitter Card meta tags (optional)
- [ ] Generate and add favicon (multiple sizes)
- [ ] Create Apple touch icons
- [ ] Test structured data with Google Rich Results Test
- [ ] Ensure robots.txt is accessible
- [ ] Verify sitemap.xml is accessible

### 7. Performance Optimization
- [ ] Enable GZIP compression (.htaccess already configured)
- [ ] Enable browser caching (.htaccess already configured)
- [ ] Minify CSS files (optional - use tool like cssnano)
- [ ] Minify JavaScript files (optional - use tool like uglify-js)
- [ ] Set up CDN (optional - Cloudflare recommended)
- [ ] Optimize images with WebP format (optional)
- [ ] Test with PageSpeed Insights (aim for 90+)
- [ ] Test with GTmetrix
- [ ] Test with WebPageTest

### 8. Security
- [ ] Install SSL certificate
- [ ] Force HTTPS redirect (.htaccess)
- [ ] Review security headers in .htaccess
- [ ] Set up automatic backups
- [ ] Review file permissions (644 for files, 755 for directories)
- [ ] Ensure sensitive files are protected (.htaccess configured)
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Configure firewall rules (if available)

### 9. Legal Compliance
- [ ] Verify GDPR compliance in Privacy Policy
- [ ] Add cookie consent banner (if using cookies beyond essential)
- [ ] Ensure Terms of Service are accurate
- [ ] Verify AML compliance statements
- [ ] Check Companies House authorization claims
- [ ] Review all legal disclaimers
- [ ] Ensure accessibility compliance (WCAG 2.1 AA)

### 10. Browser & Device Testing
- [ ] Test on Chrome (desktop)
- [ ] Test on Firefox (desktop)
- [ ] Test on Safari (desktop)
- [ ] Test on Edge (desktop)
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad/tablet
- [ ] Test with different screen sizes
- [ ] Test all forms and interactive elements
- [ ] Verify mobile menu works correctly
- [ ] Test keyboard navigation
- [ ] Test with screen reader (basic check)

### 11. Functionality Testing
- [ ] Test all navigation links
- [ ] Test all internal page links
- [ ] Test smooth scrolling anchor links
- [ ] Test contact form validation
- [ ] Test contact form submission
- [ ] Verify email notifications work
- [ ] Test mobile navigation menu
- [ ] Check all buttons work correctly
- [ ] Verify phone number links work (if clickable)
- [ ] Test email links open mail client

### 12. Email Configuration
- [ ] Set up professional email (hello@regstreet.co.uk)
- [ ] Configure email forwarding if needed
- [ ] Test email delivery
- [ ] Set up email signature
- [ ] Configure SPF records
- [ ] Configure DKIM records
- [ ] Set up DMARC policy

### 13. Marketing Setup
- [ ] Create Google Business Profile
- [ ] Set up social media profiles (optional)
- [ ] Link website to social profiles
- [ ] Create email marketing list (MailChimp, etc.)
- [ ] Set up review collection system
- [ ] Plan content marketing strategy

### 14. Post-Launch
- [ ] Announce website launch
- [ ] Monitor analytics for first week
- [ ] Check for 404 errors in Search Console
- [ ] Monitor form submissions
- [ ] Check email deliverability
- [ ] Monitor site speed
- [ ] Set up weekly/monthly reporting
- [ ] Schedule regular content updates

## 🔧 Optional Enhancements

### Nice-to-Have Features
- [ ] Add live chat widget (Tawk.to, Intercom, etc.)
- [ ] Create blog section for SEO content
- [ ] Add customer testimonials with photos
- [ ] Create FAQ accordion functionality
- [ ] Add click-to-call buttons on mobile
- [ ] Set up email newsletter signup
- [ ] Create downloadable service guides (PDFs)
- [ ] Add location map (Google Maps embed)
- [ ] Create custom 404 error page
- [ ] Add breadcrumb navigation
- [ ] Implement schema markup for FAQs
- [ ] Add video content (optional)
- [ ] Create case studies section
- [ ] Add trust badges/certifications logos

### Advanced Features
- [ ] Create customer portal login area
- [ ] Add online payment integration
- [ ] Build service quote calculator
- [ ] Implement multi-language support
- [ ] Add progressive web app (PWA) features
- [ ] Create AMP versions of pages
- [ ] Set up A/B testing

## 📋 Final Checks

### Before Going Live
- [ ] Complete all items in "Pre-Launch Checklist"
- [ ] Get approval from stakeholders
- [ ] Create backup of current site (if updating existing)
- [ ] Schedule launch time
- [ ] Prepare rollback plan
- [ ] Inform team of launch

### Immediately After Launch
- [ ] Test website on live domain
- [ ] Verify all pages load correctly
- [ ] Check analytics tracking works
- [ ] Submit form test to verify delivery
- [ ] Check mobile version
- [ ] Monitor server logs for errors

### First 24 Hours
- [ ] Monitor website uptime
- [ ] Check for any broken links
- [ ] Review analytics data
- [ ] Monitor form submissions
- [ ] Check email notifications
- [ ] Review any user feedback

### First Week
- [ ] Analyze visitor behavior in GA4
- [ ] Check Search Console for indexing
- [ ] Review page performance
- [ ] Make any necessary adjustments
- [ ] Respond to all enquiries promptly

## 📞 Support Contacts

**Web Development Issues:**
- Developer contact: [Add contact details]

**Hosting Support:**
- Hosting provider: [Add provider name]
- Support contact: [Add support contact]

**Domain Support:**
- Domain registrar: [Add registrar name]
- Support contact: [Add support contact]

## 📝 Notes

Add any specific notes or customizations here:

---

**Last Updated:** January 2025
**Website Version:** 1.0.0
