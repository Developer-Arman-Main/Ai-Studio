# Aistudio - Premium & Luxury Web Design Brand

Welcome to the official, production-ready source code of **Aistudio** (founded by Arman), a premium, futuristic, and conversion-focused web design and development studio tailored for modern startups, creators, restaurants, salons, coaching, gym, and local businesses.

---

## ✦ Key Brand Specifications

- **Brand Name**: Aistudio
- **Founder**: Arman
- **Instagram**: [@dev_arman19](https://instagram.com/dev_arman19)
- **Email**: sainiiarmann19@gmail.com
- **Tagline**: *"We build Websites that build your Brand"*
- **Design Philosophy**: Deep charcoal blacks, gold accent gradients (`#c5a880`), glassmorphic layouts, and micro-animations with maximum PageSpeed delivery.

---

## ✦ Secret Admin Interface

The portal includes a fully private, client-hidden administration panel where you can demonstrate content updates live to client prospects or manipulate state for presentation purposes.

- **Trigger Command**: Press **`Ctrl + Shift + A`** on your keyboard from anywhere on the live page.
- **Mobile/Tablet Alternative**: *Double click* on the header studio logo to bring up the login interface.
- **Admin Login Parameters**:
  - **Username**: `Arman`
  - **Password**: `Arman@1905`

### ⚙️ Admin Dashboard Capabilities
1. **View Proposals Grid**: Inspect submissions received from client interest forms.
2. **Interactive Portfolio Updates**: Add, modify, or remove website mockup cards with real image/demo links.
3. **Endorsement Modifiers**: Edit client ratings, testimonials content, or register new Indian customer feedback.
4. **Interactive Pricing and Service Customizations**: Real-time update of prices, descriptions, and feature capabilities.
5. All updates are seamlessly stored using client-side persistent databases (`localStorage`).

---

## ✦ Tech Stack & Dependencies

- **Framework**: React 19 (Vite Single Page Application)
- **Language**: TypeScript (Strong, secure types pre-configured)
- **Styling**: Tailwind CSS v4 (Sleek layout tokens, glass panels, golden glow utilities)
- **Animations**: Framer Motion (`motion/react` with spring physics and hardware acceleration)
- **Icons**: Lucide Icons (Comprehensive, lightweight, and responsive)
- **API Form Submission**: Formspree (Integrated directly to endpoint `https://formspree.io/f/xgojrgzp`)

---

## ✦ Local Development & Deployment

### 1. Installation
To install initial package dependencies, run:
```bash
npm install
```

### 2. Run Dev Server
Launch your local premium presentation on port `3000` with HMR and file audits:
```bash
npm run dev
```

### 3. Production Build
Prepare optimized static HTML/CSS/JS delivery bundles inside `/dist`:
```bash
npm run build
```

---

## ✦ Environment Variables

The application can optionally be customized further by creating a `.env` file at the root:

| Variable Name | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Optional | For AI Studio runtime and advanced server proxies. |
| `APP_URL` | Optional | Injected automatically with the host web URL during deployment. |

---

*Designed and Developed with absolute precision by Arman @ Aistudio.*
