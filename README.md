# Ongo Weight Loss — Patient Onboarding Survey & Transition Screen

A responsive, production-ready implementation of the **Ongo Weight Loss Patient Onboarding Survey** and **Transition Screen**, built with React, Vanilla CSS design tokens, and modern healthcare UI principles.

---

## 🌟 Key Highlights

1. **Centerpiece Onboarding Transition Screen**:
   - Matches the reference design with **"Great! Now a few questions"** and **"Here's what's next on your journey to a personalised plan."**
   - **Compact Header (`#174B38`)** with 22px top rounded corners, Ongo logo with coral accent dot, and direct phone link (`+1 (888) 655-5267`).
   - **4-Stage Progress Stepper** with 28–32px circular nodes connected by `#B8D7C3` dotted lines.
   - **4 Journey Cards** featuring the active green state for Card 1 (`#EEF8EC` background, `#6DBA91` border, `#2F8968` badge) and inactive off-white cards for steps 2–4.
   - **Trust Row**: Outlined healthcare icons for *"Licensed physicians"* and *"HIPAA secure"*.
   - **Dominant Pill CTA**: `#11110F` button with accessible 44px+ touch target and hover lift.

2. **Complete 10-Screen Clinical Survey Funnel**:
   - **Screen 1**: Account Creation (Email, Password, Legal checkboxes, Google/Apple OAuth, Login link).
   - **Screen 2**: Tell Us About You (Name, Gender, DOB, State picker, Phone, conditional Pregnancy/Breastfeeding check).
   - **Screen 3**: Your Starting Point (Dynamic Imperial/Metric BMI Calculator with live visual gauge and clinical classification).
   - **Transition Screen**: Signature reassurance milestone between initial registration and clinical questionnaire.
   - **Screen 4**: Important Safety Checks (8 contraindication screenings + "None of these apply to me" toggle + clinical disclaimer).
   - **Screen 5**: Previous GLP-1 Experience (Selectable chips for Ozempic, Mounjaro, Wegovy, etc., dose, frequency, tolerance rating, and prescription upload zone).
   - **Screen 6**: Your Initial Result (*"You may be eligible for GLP-1 treatment"* with 4-phase journey breakdown).
   - **Screen 7**: Meet Your Physician (Licensed clinical profile with Dr. Sarah Jenkins, MD, state credentialing, and 100% virtual telehealth reassurance).
   - **Screen 8**: Review Treatment Options (Compounded Semaglutide/Tirzepatide injections, chewables, and oral drops with clinical selection disclaimer).
   - **Screen 9**: Choose Treatment Plan (1-Month Kickstart, 3-Month Momentum Recommended, 6-Month Transform, plus Ongo Full-Refund Guarantee).
   - **Screen 10**: Secure Payment (Card, Apple Pay, Google Pay, promo code input e.g. `ONGO50`, dynamic order calculation with discounts & free shipping).
   - **Screen 11**: Payment Confirmed ✓ (Celebration confetti, order receipt ID, and continuation to physician health assessment).

3. **Built-in Reviewer Toolbar**:
   - **⭐ Reference Screen**: 1-click jump directly to the centerpiece transition screen.
   - **Screen Selector**: Jump to any of the 11 steps instantly.
   - **Autofill Demo**: Auto-populates realistic clinical test data.
   - **Mobile Frame Toggle**: Switch between Desktop Centered (620px) and Mobile iPhone View (390px).

---

## 🎨 Design Tokens

- **Primary Dark**: `#174B38`
- **Primary Brand Green**: `#1F4F3D`
- **Accent Green**: `#2F8968`
- **Pale Green (Active Card)**: `#EEF8EC`
- **Active Border**: `#6DBA91`
- **Background Gradient**: `linear-gradient(180deg, #EAF6E7 0%, #F5F3E8 48%, #F8E2D2 100%)`
- **CTA Button**: `#11110F` (Text: `#FFFFFF`)
- **Typography**: `Manrope`, sans-serif (Google Fonts)

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle
npm run build
```
Local dev server runs at: `http://127.0.0.1:5173/`
