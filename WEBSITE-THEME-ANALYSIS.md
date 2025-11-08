# RegStreet Website Structure & Theme Analysis

## Overview
RegStreet is a professional UK business address service provider with a modern, clean website focused on trust, compliance, and clarity. The site is built with vanilla HTML, CSS, and JavaScript with a professional corporate aesthetic.

---

## 1. MAIN HTML FILES

### Primary Pages
Located at: `/root/regoffice/`

- **index.html** - Homepage (16,629 bytes)
  - Hero section with CTA
  - Trust bar with 4 trust signals
  - Services overview (4 main services)
  - Benefits section (5 key benefits)
  - How it Works (3-step process)
  - Sandwell Business Hub bonus section
  - Final CTA section

- **pricing.html** - Pricing page (23,390 bytes)
  - Pricing toggle (monthly/yearly)
  - 4 pricing tiers: Starter, Business (featured), Pro, Enterprise
  - Individual services grid (6 services)
  - Optional add-ons section (6 add-ons with horizontal scroll)
  - What's included (promises)
  - Pricing FAQs

- **services.html** - Services detail page (16,581 bytes)
  - 4 main service sections with detailed info:
    1. Registered Office Address
    2. Directors' Service Address
    3. Mail Forwarding & Management
    4. Company Formation Support
  - Service FAQs (6 questions)

- **about.html** - About page (14,064 bytes)
  - Company story
  - Approach section
  - Who we serve
  - Commitment section
  - Location details
  - Accreditations

- **contact.html** - Contact page (15,230 bytes)
  - Contact information
  - Contact form
  - Business hours
  - Quick services section
  - Trust badges

- **privacy.html** - Privacy policy (12,713 bytes)
- **terms.html** - Terms of service (14,593 bytes)
- **newpricing.html** - Alternative pricing layout (4,665 bytes)

---

## 2. CSS FILES STRUCTURE

### Main Stylesheets

#### `/css/style.css` (1,983 lines)
**Color Palette:**
- Primary Navy: `#001F3F` (dark navy)
- Navy Accent: `#003b73` (lighter navy for CTAs)
- Navy Light: `#003D7A` (hover state)
- White: `#FFFFFF`
- Off-white: `#F8F9FA` (backgrounds)
- Light Grey: `#E9ECEF` (borders)
- Mid Grey: `#6C757D` (secondary text)
- Dark Grey: `#343A40` (primary text)
- Success Green: `#10B981` (checkmarks)
- Error Red: `#DC2626` (form errors)

**Typography:**
- Primary Font: Inter, Segoe UI, Roboto (sans-serif)
- Heading Font: Inter, Montserrat (sans-serif)
- Font Weight: 700 for headings, 600 for strong, 500 for nav

**Key Spacing System:**
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2.5rem
- xl: 4rem

**Border Radius:**
- sm: 4px
- default: 8px
- lg: 12px

**Sections Covered:**
1. Header & Navigation (sticky, navy background)
2. Hero Section (gradient: navy to light navy)
3. Trust Bar (light grey background)
4. Services Overview (white with bordered cards)
5. Benefits Section (5-column grid, light grey background)
6. How It Works (3-step numbered circles)
7. Pricing Section (toggle, 4-tier cards, featured middle card)
8. Individual Services Grid (6 items)
9. Add-Ons Section (horizontal scrollable)
10. FAQ Section (light grey background)
11. About Page Sections
12. Contact Forms & Methods
13. Footer (dark navy background)
14. SVG Icon Styling (navy stroke colors)

#### `/css/responsive.css` (572 lines)
**Breakpoints:**
- Desktop: 1200px (default container)
- Large Desktop: 1400px+
- Tablet: 768px and below
- Mobile: 480px and below
- Landscape Phone: Special handling

**Responsive Behaviors:**
- Mobile menu toggle appears at 768px
- Grid layouts change: multi-column → 1 column or 2 columns
- Hero CTA buttons: flex row → column (full width)
- Typography adjusts downward on smaller screens
- Footer grid: 4 columns → 2 columns → 1 column
- Accessibility enhancements: focus states, reduced motion, high contrast

---

## 3. NAVIGATION MENU STRUCTURE

### Header Navigation (across all pages)
```
Header (Navy background, sticky)
├── Logo (left side) → Links to index.html
└── Nav Menu (right side)
    ├── Home (index.html)
    ├── Services (services.html)
    ├── Pricing (pricing.html)
    ├── About (about.html)
    └── Contact Us (contact.html) - CTA style button
```

**Mobile Menu:** Hamburger toggle that shows full-screen dropdown menu

### Footer Navigation (consistent across all pages)
```
Footer (Dark Navy background)
├── RegStreet (company info)
├── Services (links to service sections)
├── Company (About, Pricing, Contact)
└── Legal (Privacy, Terms, Cookies)
```

---

## 4. PRICING & SERVICE PAGES ANALYSIS

### Pricing Page Structure
**Price Tiers:**
1. **Starter Plan** - £10.95/month (£109/year)
   - Registered Office Address
   - 1 Director Address
   - Statutory mail handling
   - Basic email notifications

2. **Business Plan** (FEATURED - "Most Popular") - £20.75/month (£249/year)
   - Registered Office Address
   - Up to 2 Director Addresses
   - 6 months Digital Mail Forwarding
   - PDF scans via email
   - Email & SMS notifications
   - 30-day digital storage

3. **Pro Plan** - £30.75/month (£369/year)
   - Registered Office Address
   - Up to 3 Directors
   - Full 12-month Digital Mail Forwarding
   - Priority scan service
   - Digital archive (12 months)
   - 2-hour document delivery

4. **Enterprise Plan** - £58.25/month (£699/year)
   - Multi-company setup
   - Dedicated account manager
   - Custom reporting
   - Volume discounts
   - Centralized administration
   - Priority support

**Individual Services:**
- Registered Office Address: £11.95/month or £119/year
- Director's Service Address: £12.95/month or £129/year
- Digital Mail Forwarding: £17.95/month or £179/year
- Trading/Business Address: £13.95/month or £139/year
- Telephone Answering: £16.95/month or £169/year
- Multi-Director Plan: £14.95/month or £149/year

**Optional Add-ons:**
- Digital Mail Scanning: £5.95/month
- Digital Archive: £4.95/month (£49/year)
- Trading Address: £13.95/month
- Phone Answering: £16.95/month
- Priority Scan: £3 per item
- Physical Mail Forwarding: £0.95/item + postage

### Services Page Structure
**Service Sections (with consistent template):**
1. Large service icon
2. Service name & tagline
3. Description paragraph
4. "What's Included" feature list (with green checkmarks)
5. "Ideal For" section (background highlight)
6. Price box with CTA button

---

## 5. COLOR SCHEME & DESIGN PATTERNS

### Primary Colors
- **Navy (#001F3F):** Main branding, headings, headers
- **Navy Accent (#003b73):** CTA buttons, hover states, highlights
- **White (#FFFFFF):** Text on dark backgrounds, card backgrounds
- **Light Grey (#F8F9FA):** Section backgrounds for visual separation
- **Green (#10B981):** Success indicators, checkmarks
- **Red (#DC2626):** Form errors, warnings

### Design Patterns
1. **Card-based Layout:** All content grouped in bordered/shadowed cards
2. **Gradient Headers:** Navy gradient backgrounds for hero and CTA sections
3. **Icon Usage:** SVG icons throughout (navy stroke color)
4. **Checkmark Pattern:** Green checkmarks for feature lists
5. **Numbered Circles:** Navy circles with white numbers for steps
6. **Badge Labels:** Navy badges for "Most Popular" or featured status
7. **Horizontal Dividers:** Light grey 1px lines separate service sections

### Typography Hierarchy
- h1: 2.5rem (white on navy gradients)
- h2: 2rem (navy on white)
- h3: 1.5rem (navy on white)
- Subtitle/Tagline: 1.125rem grey text
- Body: 1rem regular, 600/700 for emphasis
- Small text: 0.85-0.95rem grey

### Button Styles
1. **Primary Button (.btn-primary):** Navy background with white text
   - Hover: Darker navy, slight lift (translateY -2px), shadow
2. **Secondary Button (.btn-secondary):** Transparent with white border
   - Hover: White background, navy text
3. **Outline Button (.btn-outline):** Transparent with navy border
   - Hover: Navy background, white text
4. **Large Button (.btn-large):** Increased padding (1rem 2.5rem)

---

## 6. KEY COMPONENT STYLES

### Hero Section
- Full-width navy gradient background
- Max-width 900px content container
- Large h1 (2.75rem), light grey subtitle
- Dual CTA buttons (primary + secondary)
- Trust line with 3 checkmark items below

### Service Cards
- Border: 2px light grey
- Border radius: 12px
- Padding: 2.5rem
- Icon: 3rem size, navy stroke
- Hover effect: Border changes to navy accent, shadow appears, lift (translateY -5px)

### Pricing Cards
- Similar card style to service cards
- Featured card: Navy border, shadow, no transform on hover
- Badge positioned absolutely at top-right (-12px offset)
- Price display: Large amount with currency symbol

### Trust Bar
- Light grey background (#F8F9FA)
- 4-column grid (auto-fit, minmax 200px)
- Icon (2.5rem), text beside (flex layout)
- Light text color

### Benefit Cards
- White background
- Minimal shadow
- Arranged in 5-column grid
- Center-aligned text

### Add-Ons Section
- Horizontal scroll container with fade gradient
- Individual items: 280px width, white background
- Card hover: Shadow + lift effect
- Scrollbar styling: Navy accent color

---

## 7. FORM & INTERACTIVE ELEMENTS

### Contact Form
- Full-width inputs with 2px light grey border
- Focus state: Navy accent border
- Required fields marked with red asterisk
- Real-time validation with color feedback
- Error styling: Red border, red text
- Success styling: Green border, green text
- GDPR consent checkbox required

### Pricing Toggle
- Horizontal toggle switch with labels
- Toggle slider: Navy when active
- Savings badge: Green background
- Smooth transition between states

### Mobile Menu
- Position: Absolute, top 100%
- Full-width dropdown with navy background
- Flex column layout
- Smooth transitions

---

## 8. ICONS USED

Located at `/root/regoffice/icons/` (SVG format):
- check.svg - Checkmarks
- location.svg - Location/address indicator
- shield.svg - Security/privacy
- mail.svg - Email/mail
- rocket.svg - Company formation/launch
- lock.svg - Secure/AML compliance
- lightning.svg - Speed/same-day
- chat.svg - Support/communication
- gift.svg - Bonus/offer
- phone.svg - Phone service
- building.svg - Business/office
- chart.svg - Analytics/reports
- globe.svg - International/worldwide
- laptop.svg - Digital/online

---

## 9. RESPONSIVE BEHAVIOR

### Desktop (>1200px)
- Full multi-column grids
- Horizontal navigation
- Full-width sections

### Tablet (768px and below)
- Mobile menu toggle visible
- Grids reduce to 2 columns or 1 column
- Hero CTA buttons stack vertically
- Service cards single column

### Mobile (480px and below)
- Extra-reduced font sizes
- Single column layouts throughout
- Buttons full width
- Trust bar items stack vertically
- Logo height reduced (54px vs 75px)
- Form fonts 16px (prevent iOS zoom)

### Special Considerations
- Landscape phone: Reduced padding
- Touch devices: Minimum 44px touch targets
- Print media: Hide nav, footer, CTA buttons
- High contrast mode: Stronger borders
- Reduced motion: Disable animations

---

## 10. INTERACTIVE FEATURES (JavaScript)

Located at `/js/main.js`:

1. **Mobile Menu Toggle:** Click hamburger to show/hide nav
2. **Smooth Scrolling:** Anchor links scroll smoothly with header offset
3. **Form Validation:** Real-time validation with visual feedback
4. **Form Auto-save:** Optional localStorage persistence
5. **Pricing Toggle:** Monthly/yearly price switching with animation
6. **Scroll Detection:** Fade gradient on horizontal scroll sections
7. **URL Parameters:** Pre-select form fields from URL params
8. **Scroll-to-Top:** Optional button for long pages
9. **FAQ Accordion:** Expandable Q&A sections
10. **Analytics Tracking:** GA4 event tracking setup
11. **Performance Monitoring:** LCP tracking and page load timing
12. **Accessibility:** Skip-to-content link, keyboard navigation
13. **Sandwell Tooltip:** Keyboard-accessible tooltip with viewport detection

---

## 11. KEY DESIGN TOKENS FOR VA PRICING PAGE

To match the existing theme, your VA pricing page should use:

**Colors:**
```css
--color-navy-primary: #001F3F;
--color-navy-accent: #003b73;
--color-white: #FFFFFF;
--color-off-white: #F8F9FA;
--color-light-grey: #E9ECEF;
--color-mid-grey: #6C757D;
--color-success: #10B981;
```

**Typography:**
- Font: Inter, Segoe UI, Roboto
- Headings: 1.5-2rem in navy
- Body: 1rem in dark grey
- Accent text: Navy #003b73

**Components:**
- Cards: 2px light grey border, 8px radius, 2.5rem padding
- Buttons: Navy bg with white text, hover effect with lift
- Icons: 3rem size, navy stroke color
- Section backgrounds: Alternate white and light grey

**Patterns:**
- Feature lists with green checkmarks
- "Ideal For" highlight boxes
- Numbered step circles
- Horizontal dividers between services
- Badge labels for featured items

---

## 12. DEPLOYMENT STRUCTURE

```
/root/regoffice/
├── index.html                  # Homepage
├── services.html               # Services detail
├── pricing.html                # Pricing page
├── about.html                  # About
├── contact.html                # Contact
├── privacy.html                # Legal
├── terms.html                  # Legal
├── css/
│   ├── style.css              # Main stylesheet (1,983 lines)
│   └── responsive.css         # Responsive rules (572 lines)
├── js/
│   └── main.js                # JavaScript (670 lines)
├── images/
│   └── Logo1_white_nobg.png  # Logo
├── icons/                      # SVG icons (14 files)
├── .htaccess                  # Apache config
├── robots.txt                 # SEO
└── sitemap.xml               # SEO
```

---

## 13. RECOMMENDATIONS FOR VA PRICING PAGE

1. **Location:** Create `/root/regoffice/va-pricing.html` or similar
2. **Navigation:** Add link to main nav and footer (between services and pricing)
3. **Styling:** Import existing `css/style.css` and `css/responsive.css`
4. **Template:** Use same page header structure, footer, navigation
5. **Color Scheme:** Match navy/white/green palette exactly
6. **Cards:** Use same `.pricing-card` or `.service-item` classes
7. **Icons:** Use SVG from icons/ folder or create matching style
8. **Pricing Table:** Follow same format as pricing.html with toggle/tiers
9. **CTAs:** Use `.btn-primary` and `.btn-secondary` classes
10. **Typography:** Follow same h2/h3/p sizing hierarchy
11. **Spacing:** Use CSS variables for consistent padding/margins
12. **Responsive:** Ensure mobile breakpoints work at 768px and 480px

