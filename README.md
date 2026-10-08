# Winchester Place Men's Hairstyling — Website Concept Demo

> **Disclaimer**: Unofficial website concept — created for demonstration purposes only. This project has not been commissioned, approved, sponsored, or endorsed by Winchester Place Men's Hairstyling.

---

## 1. Verified Business Information

| Field | Verified Detail |
|---|---|
| **Business Name** | Winchester Place Men's Hairstyling |
| **Category** | Barber shop / men's hairstyling / hair care service |
| **Address** | 154 Queen St S, Mississauga, Ontario, L5M 2P4, Canada |
| **Neighbourhood** | Streetsville, Mississauga |
| **Phone** | 905-826-8622 |
| **Click-to-Call** | `tel:+19058268622` |
| **Primary Conversion Goal** | Call the Barbershop (`tel:+19058268622`) |
| **Secondary Conversion Goal** | Get Directions (Google Maps to 154 Queen St S) |

---

## 2. Publicly Listed Hours

| Day | Status / Hours |
|---|---|
| **Monday** | *Please call to confirm* (unconfirmed for demo) |
| **Tuesday** | 9:00 AM – 7:00 PM |
| **Wednesday** | 9:00 AM – 7:00 PM |
| **Thursday** | 9:00 AM – 7:00 PM |
| **Friday** | 9:00 AM – 7:00 PM |
| **Saturday** | 8:00 AM – 5:00 PM |
| **Sunday** | *Please call to confirm* (unconfirmed for demo) |

*Notice: "Hours may change. Please call to confirm."*

---

## 3. Publicly Listed Core Services Only

1. **Men's Haircuts** — Traditional men's haircutting and grooming tailored to your style and preference.
2. **Beard Trims** — Neat beard trimming, line-ups, and grooming for a well-maintained finish.
3. **Head Shaves** — A clean, smooth head-shaving service delivered with classic barbershop care.
4. **Hot Towel Shaves** — A traditional hot-towel shaving service for skin comfort and a close shave.

*Pricing Policy: No prices have been invented. All cards and notices state "Call for current pricing and availability."*

---

## 4. Architecture & File Structure

```
winchester-place-barbershop/
├── index.html                   # Semantic, accessible HTML5 single page website
├── README.md                    # Documentation & owner handoff guide
├── serve.js                     # Lightweight local preview static server (Node.js)
├── assets/
│   ├── css/
│   │   └── styles.css           # Mobile-first stylesheet (CSS variables, fluid typography, dark/gold theme)
│   ├── js/
│   │   ├── business-data.js     # Centralized single source of truth for business information
│   │   └── main.js              # Accessible mobile drawer, live Eastern-time schedule indicator
│   └── images/
│       ├── hero-barber.jpg      # Royalty-free placeholder barber chair & interior
│       ├── haircut.jpg          # Royalty-free placeholder haircut demonstration
│       ├── beard-trim.jpg       # Royalty-free placeholder beard trimming
│       ├── head-shave.jpg       # Royalty-free placeholder head shave demonstration
│       ├── hot-towel.jpg        # Royalty-free placeholder hot towel shave
│       └── tools.jpg            # Royalty-free placeholder barber shears workstation
```

---

## 5. Centralized Maintenance

All key business data is configured in `assets/js/business-data.js`. If the business owner provides updated hours, confirmed prices, or additional contact methods, modify the values in `assets/js/business-data.js` and the corresponding lines in `index.html`.

---

## 6. How to Run Locally

You can open `index.html` directly in any web browser, or run the included static preview server:

```bash
# Using Node.js
node serve.js
# Access at http://localhost:3456
```

---

## 7. Future Production Conversion Checklist

When the business owner approves the website for live production:

1. **Remove Unofficial Concept Notices**:
   - Remove the `<aside class="demo-banner">` from `index.html`.
   - Update the footer disclaimer from concept notice to standard business copyright.
   - Remove placeholder badges on service images.
2. **Enable Search Engine Indexing**:
   - Change `<meta name="robots" content="noindex, nofollow">` to `<meta name="robots" content="index, follow">`.
   - Update page title to `"Winchester Place Men's Hairstyling | Streetsville Barbershop"`.
3. **Confirm Hours & Services**:
   - Confirm Monday and Sunday operating hours directly with the owner.
   - Add confirmed service pricing if requested by the owner.
4. **Swap Authentic Photography**:
   - Replace placeholder images in `assets/images/` with real photographs of the 154 Queen St S shop interior, barbers, and station.
5. **Add Owner-Approved Reviews**:
   - Replace the review placeholder banner with authentic, owner-approved Google Reviews or testimonials.
6. **Deploy to Production**:
   - Deploy as a fast, zero-maintenance static site to Firebase Hosting, Cloudflare Pages, Netlify, or Vercel with a custom domain.
