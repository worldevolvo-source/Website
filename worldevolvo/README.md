# WorldEvolvo Website — Cloudflare Pages

## Files Overview
```
worldevolvo/
├── index.html          ← Homepage
├── services.html       ← Services page
├── about.html          ← About page
├── contact.html        ← Contact + Cal.com booking embed
├── _headers            ← Cloudflare security & cache headers
├── _redirects          ← Cloudflare URL redirects
├── css/
│   └── style.css       ← All styles (responsive, dark-theme)
├── js/
│   └── main.js         ← Scroll effects, mobile menu, form
└── images/
    └── favicon.svg     ← SVG favicon (replace with your logo)
```

---

## Deploying to Cloudflare Pages

### Option A — Drag & Drop (Simplest)
1. Go to **Cloudflare Dashboard → Pages → Create Application**
2. Select **"Upload assets"**
3. Zip the entire `worldevolvo/` folder and upload
4. Set your custom domain to `worldevolvo.com`

### Option B — GitHub (Recommended for updates)
1. Push this folder to a GitHub repository
2. Go to **Cloudflare Pages → Connect to Git**
3. Select your repo
4. Build settings: **Framework = None**, **Build output = `/`** (root)
5. Deploy — Cloudflare automatically handles `_headers` and `_redirects`

---

## Logo Replacement
The current logo is an SVG globe illustration. To replace it with your logo:

1. **Replace the SVG logo icon** in each `.logo` element inside all 4 HTML files:
   ```html
   <!-- Find this block in each file's navbar and footer -->
   <svg class="logo-icon" ...>...</svg>
   ```
   Replace with:
   ```html
   <img class="logo-icon" src="images/your-logo.svg" alt="WorldEvolvo" width="38" height="38">
   ```

2. **Update favicon**: Replace `images/favicon.svg` with your logo file.

---

## Colour Customisation
All colours are CSS variables in `css/style.css` at the top:
```css
:root {
  --cyan:    #00D4FF;   ← Primary accent (change to match logo)
  --teal:    #00B4A0;   ← Secondary accent
  --green:   #3DFFA0;   ← Highlight / CTA accent
  --bg-deep: #050B18;   ← Darkest background
  --bg-navy: #0A1525;   ← Section background
}
```

---

## Contact Form Integration
The contact form currently simulates submission. To connect it to a real endpoint:

### Cloudflare Workers (recommended)
Add a Worker that POSTs to your email service (SendGrid, Resend, Mailgun):
```javascript
// Example: POST handler for contact form
async function handleForm(request) {
  const data = await request.formData();
  // Send to hello@worldevolvo.com via Resend/SendGrid API
}
```

### Formspree (Simplest)
Replace the form tag's action in `contact.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## Cal.com Booking
The Cal.com embed on the contact page uses:
- **Calendar link**: `worldevolvo/30min`
- **Theme**: dark (matches website)
- **Brand colour**: `#00D4FF`

This is already live and functional — no changes needed if `cal.com/worldevolvo/30min` is set up.

---

## Checklist Before Going Live
- [ ] Replace SVG logo with actual logo
- [ ] Update `images/favicon.svg` with branded favicon  
- [ ] Verify Cal.com link `worldevolvo/30min` is active
- [ ] Connect contact form to real email endpoint
- [ ] Add social media links (LinkedIn, Twitter URLs) in footer
- [ ] Set Cloudflare custom domain: `worldevolvo.com` + `www.worldevolvo.com`
- [ ] Enable Cloudflare "Always Use HTTPS" setting
- [ ] Test on mobile, tablet, desktop

---

Email for all contact: **hello@worldevolvo.com**
