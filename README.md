# Westchester ENT — Modern Website Redesign

> A modern, glassmorphic healthcare web application redesign for **Westchester ENT** and **Aaron Spingarn, MD** (Otolaryngology / Head & Neck Surgery) located in Hartsdale, NY.

Designed with modern UI/UX principles, frosted glassmorphism, responsive CSS/Tailwind styling, interactive quick-booking workflows, and animated service sliders using copy, credentials, and photography scraped from [westchesterent.com](https://www.westchesterent.com/).

---

## 📸 Key Features

- **Floating Frosted Glass Pill Navigation**:
  - Sticky glass header with `backdrop-filter: blur(18px) saturate(180%)`.
  - Brand identity with original high-resolution logo and doctor credentials.
  - Smooth anchor navigation, direct click-to-call, and interactive mobile drawer menu.

- **Announcement & Accreditations Ticker**:
  - Continuous marquee ticker showcasing **Castle Connolly Top Doctor 2024**, **Yelp Beloved Business**, Saturday/evening office hours, phone numbers, and InstaMed billing links.

- **Hero & Floating Quick-Appointment Widget**:
  - Airy, luminous medical cyan/teal gradient canvas with ambient glow orbs.
  - Direct appointment booking widget allowing patients to select department, physician, and preferred date.
  - Doctor showcase card featuring Dr. Aaron Spingarn's portrait and floating trust chips.

- **Clinical Performance Stat Counters**:
  - **25+** Years of Clinical Excellence
  - **15,000+** Satisfied Patients
  - **4.9★** Average Patient Rating (1,000+ verified patient reviews)
  * **100%** Individualized Care Plans

- **"Our Departments" Care Cards**:
  - Modern soft-cushioned glass cards with customized SVG icons covering Emergency ENT, Pediatric Department, Audiology & Hearing, Sinus Surgery, Sleep Apnea & Snoring, and Facial Aesthetics.

- **"Featured Services" Animated Carousel**:
  - Horizontal sliding service carousel with prev/next controls, automatic scrolling with pause-on-hover, touch/swipe support, and indicator dots.
  - Features high-resolution clinical procedure photos for Adult ENT, Pediatric ENT, Audiology, Allergy, Sinus Surgery, Botox & Fillers, Sleep Apnea, and Oral Appliance Therapy.

- **High-Contrast Dark Glass Bento Section**:
  - Premium deep obsidian glass container (`rgba(15, 23, 42, 0.94)`) spotlighting in-office video endoscopy, minimally invasive techniques, and custom oral appliances.

- **Financial Flexibility & Value Proposition Card**:
  - Highlights in-network coverage, out-of-network advocacy, online payment portals (InstaMed & Venmo `@WestchesterENT`), and accepted insurance network logos.

- **Real Patient Testimonials**:
  - Verified patient reviews from Hector P., Gregory C., John R., Salvatore D., Jose A., and Bill D.

- **Dynamic Live Clinic Status & Interactive Map**:
  - Live office status indicator (`Clinic Open` / `After Hours • Online Booking 24/7`) that evaluates in real-time against the practice's operating hours based on local time.
  - Embedded responsive Google Map of the Hartsdale, NY office.

- **Interactive Appointment Booking Modal**:
  - Step-by-step modal with form fields, pre-selection synchronization from the quick booking bar, validation, and confirmation state.

---

## 📁 Repository Structure

```text
westchester-ent-redesign/
├── index.html              # Main HTML entry point (standalone & responsive)
├── assets/
│   ├── css/
│   │   └── style.css       # Full stylesheet (glassmorphism, layout, animations)
│   └── js/
│       └── main.js         # Interactive JS (carousel, booking modal, status checker)
├── .gitignore              # Standard git ignore definitions
└── README.md               # Project documentation and specifications
```

---

## 🚀 Quick Start / How to Run

### Option 1: Open Directly in Any Browser
Simply double-click `index.html` or open it with your favorite browser (Chrome, Edge, Safari, Firefox). All CSS and JavaScript are self-contained and require no build tools.

### Option 2: Run with a Local Static Server
If you have Python or Node installed:
```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .
```
Then navigate to `http://localhost:8000`.

### Option 3: Deploy to GitHub Pages
1. Push this repository to GitHub.
2. In your repository settings, go to **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be live instantly!

---

## 🎨 Design Tokens & Palette

| Token | Hex / Value | Description |
|---|---|---|
| Primary Medical Teal | `#008796` | Primary action buttons and badges |
| Medical Dark Teal | `#006874` | Hover states and deep accents |
| Accent Cyan | `#0284c7` | Secondary accents and gradient stops |
| Frosted Glass Surface | `rgba(255, 255, 255, 0.78)` | Floating panels with 18px blur |
| Dark Obsidian Glass | `rgba(15, 23, 42, 0.94)` | High-contrast bento feature section |
| Body Text | `#0f172a` | High-contrast slate typography |
| Background Canvas | `#f8fafc` / `#f3f9fb` | Luminous ambient mesh gradient |

---

## 🩺 Practice Information

- **Practice**: Westchester ENT
- **Medical Director**: Aaron Spingarn, MD (Board-Certified Otolaryngologist)
- **Address**: 141 South Central Avenue, Suite 100, Hartsdale, NY 10530
- **Phone**: (914) 686-3950 | (914) 216-4497
- **Original Website**: [westchesterent.com](https://www.westchesterent.com/)
