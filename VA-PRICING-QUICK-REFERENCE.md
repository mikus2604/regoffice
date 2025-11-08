# RegStreet Theme - Quick Reference for VA Pricing Page

## File Paths
- Main stylesheet: `/root/regoffice/css/style.css`
- Responsive stylesheet: `/root/regoffice/css/responsive.css`
- JavaScript: `/root/regoffice/js/main.js`
- SVG Icons: `/root/regoffice/icons/`
- Example pricing page: `/root/regoffice/pricing.html`
- Example services page: `/root/regoffice/services.html`

---

## Colors to Use (Copy-Paste Ready)

```css
:root {
    /* Navy Color Scheme */
    --color-navy-primary: #001F3F;        /* Dark navy headings */
    --color-navy-accent: #003b73;         /* CTA buttons */
    --color-navy-light: #003D7A;          /* Hover states */
    --color-white: #FFFFFF;               /* White text/backgrounds */
    --color-off-white: #F8F9FA;           /* Light section backgrounds */
    --color-light-grey: #E9ECEF;          /* Borders */
    --color-mid-grey: #6C757D;            /* Secondary text */
    --color-dark-grey: #343A40;           /* Primary text */
    --color-success: #10B981;             /* Green checkmarks */
    --color-error: #DC2626;               /* Red errors */
}
```

---

## Typography Reference

```css
/* Fonts */
--font-primary: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
--font-headings: 'Inter', 'Montserrat', sans-serif;

/* Font Sizes */
h1 { font-size: 2.5rem; }        /* Page titles */
h2 { font-size: 2rem; }          /* Section headers */
h3 { font-size: 1.5rem; }        /* Subsection headers */
.hero h1 { font-size: 2.75rem; } /* Hero title (larger) */

/* Font Weights */
Bold/Strong: 700 (headings), 600 (strong text)
Regular: 500 (navigation), 400 (body text)
```

---

## CSS Classes to Reuse

```html
<!-- Buttons -->
<a href="#" class="btn btn-primary">Primary CTA</a>
<a href="#" class="btn btn-secondary">Secondary</a>
<a href="#" class="btn btn-outline">Learn More</a>
<a href="#" class="btn btn-primary btn-large">Large Button</a>

<!-- Cards (for pricing tiers) -->
<div class="pricing-card">
    <div class="badge">Most Popular</div>
    <!-- content -->
</div>

<div class="pricing-card featured">
    <!-- Featured/highlighted card -->
</div>

<!-- Service/Feature Lists -->
<ul class="pricing-features">
    <li><img src="icons/check.svg" class="inline-icon" alt=""> Feature name</li>
</ul>

<ul class="feature-list">
    <li>Feature with green checkmark</li>
</ul>

<!-- Highlight Boxes -->
<div class="ideal-for">
    <h3>Ideal For:</h3>
    <p>Description text</p>
</div>

<!-- Sections with Light Background -->
<section class="packages-section">  <!-- light grey background -->
<section class="additional-costs">  <!-- white background -->
<section class="transparency-section"> <!-- light grey -->

<!-- Container for max-width wrapping -->
<div class="container">Content here</div>
```

---

## Page Structure Template

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="VA pricing...">
    <title>VA Pricing | RegStreet</title>
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- SAME HEADER AS OTHER PAGES (copy from services.html) -->
    <header class="header">
        <!-- nav structure -->
    </header>

    <!-- PAGE HEADER SECTION -->
    <section class="page-header">
        <div class="container">
            <h1>Virtual Assistant Pricing</h1>
            <p>Description of VA services</p>
        </div>
    </section>

    <!-- MAIN CONTENT SECTIONS (alternate white/grey backgrounds) -->
    <section class="pricing-section">
        <div class="container">
            <!-- Your pricing content -->
        </div>
    </section>

    <section class="packages-section">
        <div class="container">
            <!-- Additional services or tiers -->
        </div>
    </section>

    <section class="additional-costs">
        <div class="container">
            <!-- Add-ons section -->
        </div>
    </section>

    <!-- FINAL CTA SECTION -->
    <section class="final-cta">
        <div class="container">
            <h2>Ready to Get Started?</h2>
            <p>Your subtitle here</p>
            <a href="contact.html" class="btn btn-primary btn-large">Get Started</a>
        </div>
    </section>

    <!-- SAME FOOTER AS OTHER PAGES (copy from services.html) -->
    <footer class="footer">
        <!-- footer content -->
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

## Navigation Link to Add

In the header navigation (after Services, before Pricing), add:

```html
<li><a href="va-pricing.html">VA Pricing</a></li>
```

In the footer Services section, add:

```html
<li><a href="va-pricing.html">Virtual Assistant Pricing</a></li>
```

---

## Spacing Variables (CSS)

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2.5rem;   /* 40px */
--spacing-xl: 4rem;     /* 64px - section padding */
```

---

## Border & Shadow Styles

```css
/* Borders */
--border-radius: 8px;      /* Standard buttons, inputs */
--border-radius-sm: 4px;   /* Small elements */
--border-radius-lg: 12px;  /* Large cards */

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);

/* Card Borders (Common) */
border: 2px solid var(--color-light-grey);
border-radius: var(--border-radius-lg);
```

---

## Responsive Breakpoints

```css
/* Mobile Menu Appears */
@media (max-width: 768px) {
    /* Grid columns: reduce to 1 or 2 */
    /* Full-width buttons */
    /* Smaller headings */
}

/* Extra-Small Devices */
@media (max-width: 480px) {
    /* Single column everywhere */
    /* Smallest font sizes */
    /* Touch-friendly button sizes */
}

/* Large Screens */
@media (min-width: 1400px) {
    max-width: 1400px;  /* Wider container */
}
```

---

## Icon Usage Examples

```html
<!-- In service cards or features -->
<div class="service-icon">
    <img src="icons/mail.svg" alt="">
</div>

<!-- In pricing cards -->
<div class="pricing-icon">
    <img src="icons/shield.svg" alt="">
</div>

<!-- In feature lists (checkmarks) -->
<li><img src="icons/check.svg" class="inline-icon" alt=""> Feature name</li>
```

---

## Hover Effects

```css
/* Button Hover */
.btn-primary:hover {
    background-color: var(--color-navy-light);
    transform: translateY(-2px);      /* Subtle lift */
    box-shadow: var(--shadow-md);
}

/* Card Hover */
.pricing-card:hover {
    border-color: var(--color-navy-accent);
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);      /* Lift on hover */
}

/* Link Hover */
a:hover {
    color: var(--color-navy-light);
}
```

---

## Form Styling

```html
<div class="form-group">
    <label for="name">Field Name <span class="required">*</span></label>
    <input type="text" id="name" name="name" required>
</div>

<!-- Styling Applied: -->
<!-- Normal: light grey border -->
<!-- Focus: navy accent border -->
<!-- Error: red border, red text -->
<!-- Valid: green border -->
```

```css
.form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--color-light-grey);
    border-radius: var(--border-radius);
    font-family: var(--font-primary);
    font-size: 1rem;
}

.form-group input:focus {
    outline: none;
    border-color: var(--color-navy-accent);
}
```

---

## Sample Pricing Card HTML

```html
<div class="pricing-card featured">
    <div class="badge">Most Popular</div>
    
    <div class="pricing-header">
        <div class="pricing-icon">
            <img src="icons/shield.svg" alt="">
        </div>
        <h3>Professional Plan</h3>
        <p>For growing teams</p>
    </div>
    
    <div class="pricing-price" data-monthly="29.99" data-yearly="299">
        <span class="currency">£</span>
        <span class="amount">29.99</span>
        <span class="period">/month</span>
    </div>
    
    <ul class="pricing-features">
        <li><img src="icons/check.svg" class="inline-icon" alt=""> Feature one</li>
        <li><img src="icons/check.svg" class="inline-icon" alt=""> Feature two</li>
        <li><img src="icons/check.svg" class="inline-icon" alt=""> Feature three</li>
    </ul>
    
    <p class="ideal-for"><strong>Ideal for:</strong> Small to medium teams</p>
    
    <a href="contact.html?service=professional" class="btn btn-primary">Choose Plan</a>
</div>
```

---

## Key Design Patterns

1. **Section Alternation:** White background → Light grey background → White (creates visual rhythm)
2. **Card Borders:** Always 2px light grey, changes to navy accent on hover
3. **Typography Hierarchy:** h2 (2rem) for main sections, h3 (1.5rem) for subsections
4. **CTA Buttons:** Use `.btn-primary` for main actions, `.btn-secondary` for secondary
5. **Feature Lists:** Green checkmarks from check.svg icon
6. **Icons:** Always navy stroke color, sized at 2.5rem-3rem
7. **Spacing:** Use CSS variables consistently (--spacing-lg, --spacing-md)
8. **Mobile:** Test at 480px and 768px breakpoints

---

## Files to Reference

Copy structure from these existing pages:
- `/root/regoffice/pricing.html` - Pricing page structure
- `/root/regoffice/services.html` - Service detail layout
- `/root/regoffice/index.html` - Homepage sections

Copy styling from:
- `/root/regoffice/css/style.css` - All component styles
- `/root/regoffice/css/responsive.css` - Mobile breakpoints

Copy navigation/footer from any page (all identical)

