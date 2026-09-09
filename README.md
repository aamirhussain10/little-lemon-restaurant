# 🍋 Little Lemon Restaurant - Web Application

> **Meta Front-End Developer Professional Certificate Capstone Project**  
> An accessible, responsive Mediterranean restaurant web application featuring an interactive table reservation system built with React, React Router, and `useReducer`.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features & Rubric Highlights](#-key-features--rubric-highlights)
- [Tech Stack](#-tech-stack)
- [Directory Structure](#-directory-structure)
- [Quick Start Guide](#-quick-start-guide)
- [Running Unit Tests](#-running-unit-tests)
- [How to Upload to GitHub](#-how-to-upload-to-github)
- [How to Deploy to Netlify](#-how-to-deploy-to-netlify)

---

## 🍽️ Project Overview
Little Lemon is a family-owned Mediterranean restaurant located in Chicago, run by two brothers, Mario and Adrian. The website allows diners to explore the weekly specials, read customer reviews, discover the story behind the restaurant, and reserve a table online with real-time available time slots.

---

## ✨ Key Features & Rubric Highlights

* **Accessible Table Reservation Form (`BookingForm`)**:
  * Date picker with minimum constraint (`min` set to today).
  * Dynamic time selection powered by `useReducer` and `fetchAPI(date)`.
  * Guest count validation (1 to 10 diners).
  * Occasion selection (Birthday, Anniversary, Engagement, etc.).
  * Form validation feedback with error messages and disabled submit state when invalid.
  * Full accessibility compliance: semantic labels (`<label htmlFor="...">`), `aria-required`, `aria-invalid`, `aria-describedby`, and keyboard navigation.
* **Confirmation Page (`ConfirmedBooking`)**:
  * Seamless client-side routing upon successful reservation submission with booking summary details.
* **Responsive Layout & Little Lemon Design System**:
  * Brand colors: Primary Green (`#495E57`), Primary Yellow (`#F4CE14`), Peach (`#EE9972`).
  * Fonts: **Markazi Text** (Headings) and **Karla** (Body & Buttons).
  * Mobile-first responsive drawer navigation.
* **Netlify Ready**:
  * Pre-configured `public/_redirects` (`/* /index.html 200`) and `netlify.toml` to prevent 404 errors on browser page reloads.

---

## 🛠️ Tech Stack
* **Framework**: React 18
* **Routing**: React Router v6
* **Build Tool**: Vite
* **Testing**: Vitest & React Testing Library (`@testing-library/jest-dom`, `@testing-library/react`)
* **Styling**: Modern CSS with CSS Variables & Flexbox/Grid

---

## 📂 Directory Structure

```text
little-lemon/
├── public/
│   ├── _redirects              # Netlify SPA redirect rule
│   ├── favicon.ico
│   └── assets/
│       └── images/             # Restaurant imagery (logo, dishes, chefs, customers)
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with logo and mobile hamburger
│   │   ├── Nav.jsx             # Navigation menu
│   │   ├── Hero.jsx            # Hero section with CTA button
│   │   ├── Specials.jsx        # Weekly specials section
│   │   ├── SpecialCard.jsx     # Menu item card
│   │   ├── Testimonials.jsx    # Reviews section
│   │   ├── TestimonialCard.jsx # Reviewer card with stars
│   │   ├── About.jsx           # Mario & Adrian story
│   │   ├── Footer.jsx          # Semantic footer with doormat nav
│   │   └── BookingForm.jsx     # Rubric-compliant reservation form
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── BookingPage.jsx     # Reservation page
│   │   └── ConfirmedBooking.jsx# Reservation confirmation page
│   ├── reducers/
│   │   └── bookingReducer.js   # initializeTimes & updateTimes functions
│   ├── utils/
│   │   ├── tempAPI.js          # Course fetchAPI and submitAPI algorithms
│   │   └── images.js           # Image asset resolver & fallbacks
│   ├── styles/                 # Modular CSS stylesheets
│   ├── __tests__/
│   │   ├── BookingForm.test.jsx
│   │   └── initializeTimes.test.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── setupTests.js
├── netlify.toml                # Netlify deployment configuration
├── package.json
└── vite.config.js
```

---

## 🚀 Quick Start Guide

### 1. Copy Generated Assets (Windows)
Double-click `copy-assets.bat` inside the project folder, or run:
```cmd
copy-assets.bat
```
*(The app also includes high-resolution automatic fallbacks in `src/utils/images.js`, so images will display even before copying).*

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
# or: npm start
```
Open your browser and visit: `http://localhost:5173`

---

## 🧪 Running Unit Tests
To run the automated tests required for the Meta peer review:
```bash
npm test
```
This tests:
1. Static labels and element rendering in `BookingForm`.
2. HTML5 form validation attributes (`required`, `type`, `min`, `max`).
3. Validation errors and submit button enable/disable states.
4. Form submission handler triggering.
5. `initializeTimes` returning a non-empty array of time slots.
6. `updateTimes` returning the updated times when a date change action is dispatched.

---

## 🐙 How to Upload to GitHub

1. Open your terminal inside this folder (`little-lemon`):
```bash
git init
git add .
git commit -m "Initial commit: Little Lemon Meta Capstone Project"
```

2. Go to [GitHub.com](https://github.com) and create a new public repository named `little-lemon`.

3. Link and push your local project to GitHub:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/little-lemon.git
git push -u origin main
```

---

## 🌐 How to Deploy to Netlify

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Log in to [Netlify](https://app.netlify.com).
2. Click **"Add new site"** $\to$ **"Import an existing project"**.
3. Select **GitHub** and authorize your account.
4. Choose your `little-lemon` repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   * **Build command**: `npm run build`
   * **Publish directory**: `dist`
6. Click **"Deploy Little Lemon"**. Your site will be live with an HTTPS URL in seconds!

### Option 2: Drag & Drop (Netlify Drop)
1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Log into [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the browser window.
4. Your site is deployed immediately!

---

## 📜 License & Acknowledgements
Created as part of the **Meta Front-End Developer Professional Certificate** on Coursera.
Design assets and curriculum provided by Meta.
