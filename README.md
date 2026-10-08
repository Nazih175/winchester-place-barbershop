# Winchester Place Men's Hairstyling — Website Concept Demo

> **Notice**: Unofficial website concept — created for demonstration purposes only. This project has not been commissioned, approved, sponsored, or endorsed by Winchester Place Men's Hairstyling.

---

## 1. Verified Business Information

| Field | Detail |
|---|---|
| **Business Name** | Winchester Place Men's Hairstyling |
| **Category** | Barber shop / men's hairstyling / grooming |
| **Address** | 154 Queen St S, Mississauga, Ontario, L5M 2P4, Canada |
| **Neighbourhood** | Streetsville, Mississauga |
| **Phone** | 905-826-8622 |
| **Click-to-Call** | `tel:+19058268622` |
| **Primary Conversion Goal** | Call the Barbershop (`tel:+19058268622`) |
| **Secondary Conversion Goal** | Get Directions (Google Maps to 154 Queen St S) |

---

## 2. Publicly Listed Hours (Google Maps)

| Day | Status / Hours |
|---|---|
| **Monday** | Closed |
| **Tuesday** | 9:00 AM – 7:00 PM |
| **Wednesday** | 9:00 AM – 7:00 PM |
| **Thursday** | 9:00 AM – 7:00 PM |
| **Friday** | 9:00 AM – 7:00 PM |
| **Saturday** | 8:00 AM – 5:00 PM |
| **Sunday** | Closed |

*Notice: "Holiday hours may vary. Please call ahead."*

---

## 3. Core Barbering Services

1. **Men's Haircuts** — Precision scissor and clipper cutting for men, seniors, and boys of all ages tailored to your personal style.
2. **Beard Trims & Shaping** — Neat beard shaping, trimming, line-ups, and grooming for a sharp finish.
3. **Head Shaves** — A clean, smooth head-shaving service delivered with classic barbershop care.
4. **Hot Towel Shaves** — Traditional hot towel shave for skin comfort, warmth, and a clean, close finish.

*Pricing Policy: All service cards direct visitors to call for current pricing (`tel:+19058268622`).*

---

## 4. Architecture & File Structure

```
winchester-place-barbershop/
├── index.html                   # Semantic, accessible HTML5 single page website
├── robots.txt                   # Disallow crawler indexing during concept phase
├── firebase.json                # Firebase Hosting configuration & Cache-Control headers
├── README.md                    # Documentation & owner handoff guide
├── serve.js                     # Lightweight local preview static server (Node.js)
├── assets/
│   ├── css/
│   │   └── styles.css           # Mobile-first stylesheet (CSS variables, fluid typography, dark/gold theme)
│   ├── js/
│   │   ├── business-data.js     # Centralized single source of truth for business information
│   │   └── main.js              # Accessible mobile drawer, live Eastern-time schedule indicator, modal dialog
│   └── images/
│       ├── shop-front.jpg       # Authentic storefront at 154 Queen St S plaza
│       ├── shop-interior.jpg    # Authentic styling station and barber chairs
│       ├── tools.jpg            # Authentic tools workstation
│       ├── haircut.jpg          # Licensed service demonstration photo
│       ├── beard-trim.jpg       # Licensed service demonstration photo
│       ├── head-shave.jpg       # Licensed service demonstration photo
│       └── hot-towel.jpg        # Licensed service demonstration photo
```

---

## 5. Centralized Maintenance

Key business data is documented in `assets/js/business-data.js`. If the business owner provides updated hours, confirmed prices, or additional contact methods, modify the values in `assets/js/business-data.js` and the corresponding sections in `index.html`.

---

## 6. How to Run Locally

You can open `index.html` directly in any web browser, or run the included static preview server:

```bash
# Using Node.js
node serve.js
# Access at http://localhost:3456
```

---

## 7. Owner Confirmation Required Before Official Launch

Before converting this demo concept into an official commercial website, the following items must be verified directly with the owner of Winchester Place Men's Hairstyling:

- [ ] **Written Approval**: Explicit owner consent to represent Winchester Place Men's Hairstyling online.
- [ ] **Business Leadership & Staffing**: Confirmation of owner/barber names, titles, and bios before publishing.
- [ ] **Exact Pricing**: Current pricing for men's haircuts, beard trims, shaves, and any senior or youth rates.
- [ ] **Operating Hours**: Confirmation of weekly hours and holiday closure policies.
- [ ] **Payment Methods**: Confirmation of accepted payment methods (cash, debit, credit).
- [ ] **Appointment Policy**: Confirmation of walk-in vs appointment scheduling rules.
- [ ] **Photography Rights**: Confirmation that interior and exterior photographs are approved for marketing use.
- [ ] **Testimonials**: Written approval for any customer review quotes highlighted on the site.

---

## 8. Production-Launch Checklist (Post-Approval)

Once owner approval is obtained:

1. **Remove Unofficial Concept Notice**:
   - Remove `<p class="demo-disclaimer-note">` from the footer in `index.html`.
2. **Enable Search Engine Indexing**:
   - Change `<meta name="robots" content="noindex, nofollow">` to `<meta name="robots" content="index, follow">`.
   - Update `robots.txt` to allow standard crawling.
   - Update page title to `"Winchester Place Men's Hairstyling | Streetsville Barbershop"`.
   - Add `<link rel="canonical">` pointing to the official production custom domain.
   - Generate and deploy `sitemap.xml`.
3. **Structured Data**:
   - If approved by the owner, restore verified `aggregateRating` and `priceRange` to the Schema.org JSON-LD markup.
4. **Custom Domain & DNS**:
   - Connect the approved custom domain (e.g., `winchesterplace.ca`) via Firebase Hosting / Cloudflare.
   - Configure DNS records (A / ALIAS / CNAME records) with provider guidance.
   - SSL certificates are automatically provisioned and renewed by Firebase Hosting at no charge.
5. **Google Business Profile Integration**:
   - Add the official website URL to the business's verified Google Business Profile.
6. **Hosting Reliability**:
   - Firebase Hosting runs on Google Cloud global CDN infrastructure with high uptime and automated SSL. Note that standard free tiers (Spark) operate under Google Cloud terms of service without enterprise SLA financial guarantees; upgrade to Blaze if high-traffic commercial SLAs are required.
