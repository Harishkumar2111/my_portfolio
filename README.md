# Harish K. M — Personal Portfolio Website

A modern, responsive, and professional personal portfolio website for **Harish K. M**, an Artificial Intelligence and Machine Learning student.

---

## 📁 Project Structure

```
harish-portfolio/
│
├── index.html                  ← Main HTML file (open this in browser)
│
├── css/
│   └── style.css               ← All website styles (light theme)
│
├── js/
│   └── script.js               ← All JavaScript functionality
│
├── assets/
│   ├── images/
│   │   └── profile.jpg         ← YOUR profile photograph (add this file)
│   │
│   └── resume/
│       └── Harish_Kumar.pdf    ← YOUR resume PDF (add this file)
│
└── README.md                   ← This file
```

---

## 🚀 How to Run the Website

### Option 1 — Open Directly in Browser (Quickest)
1. Navigate to the `harish-portfolio/` folder.
2. Double-click `index.html`.
3. It will open in your default browser immediately.

### Option 2 — Using VS Code Live Server (Recommended)

> Live Server automatically reloads the page when you edit files.

**Step 1:** Install the **Live Server** extension in VS Code.
- Press `Ctrl + Shift + X` → Search for **Live Server** → Install it.

**Step 2:** Open the project folder in VS Code.
- Press `Ctrl + K`, then `Ctrl + O` → Select the `harish-portfolio/` folder.

**Step 3:** Start Live Server.
- Right-click `index.html` in the Explorer panel → **Open with Live Server**
- OR press `Alt + L`, then `Alt + O`

**Step 4:** The website opens at `http://127.0.0.1:5500` in your browser.

---

## 🖼️ How to Add Your Profile Photograph

1. Copy your photograph file and rename it to `profile.jpg`.
2. Paste it into the `assets/images/` folder.
3. Refresh the browser — your photo will appear in the **Hero** and **About** sections.

> **Tip:** Use a square or portrait image for best results. Recommended minimum size: 400×400 px.

---

## 📄 How to Add Your Resume PDF

1. Copy your resume PDF and rename it to `Harish_Kumar.pdf`.
2. Paste it into the `assets/resume/` folder.
3. Refresh the browser — the **View Resume** and **Download Resume** buttons will now work.

---

## ✨ Website Sections

| Section | Description |
|---------|-------------|
| **Home / Hero** | Introduction, animated role text, profile photo, social links |
| **About** | Personal introduction, highlights, download resume button |
| **Skills** | Programming, Python libraries, ML, Deep Learning, AI topics, tools |
| **Education** | Timeline: MCA (pursuing), B.Sc. AI & ML, Higher Secondary |
| **Internship** | SwordNex Technologies — AI & ML Intern card |
| **Projects** | Citizen AI project card + placeholder for future projects |
| **Certifications** | Web Dev, Excel, AI, ML certification cards |
| **Resume** | View and Download resume buttons |
| **Contact** | Contact details + validated contact form |
| **Footer** | Logo, navigation links, social icons, dynamic year |

---

## ⚙️ JavaScript Features

- ✅ Mobile hamburger navigation (open/close with keyboard support)
- ✅ Typed text animation in the hero section
- ✅ Scroll-reveal animations (fade-in on scroll)
- ✅ Active navigation link highlighting
- ✅ Scroll-to-top button (appears after scrolling 400px)
- ✅ Contact form validation (all fields)
- ✅ Download Resume button
- ✅ View Resume button (opens PDF in new tab)
- ✅ Dynamic footer year
- ✅ Smooth scrolling with navbar offset
- ✅ Respects `prefers-reduced-motion` for accessibility

---

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|-----------|
| Desktop | > 900px (two-column layouts) |
| Tablet | ≤ 900px (stacked layouts, hamburger menu) |
| Mobile | ≤ 600px (single column, full-width buttons) |

---

## 🎨 Colour Theme

| Purpose | Value |
|---------|-------|
| Background | `#f5f7fa` (light grey-white) |
| Surface (cards) | `#ffffff` |
| Navy (headings) | `#0d1b3e` |
| Accent (blue) | `#2563eb` |
| Text | `#1e293b` |
| Muted text | `#64748b` |

---

## 📝 Contact Form — Important Note

This website is a **frontend-only static website**. The contact form validates input on the client side but does not send emails by itself.

To enable real email delivery, integrate one of the following:
- **[EmailJS](https://www.emailjs.com/)** — Free, no server needed
- **[Formspree](https://formspree.io/)** — Simple form backend
- **[Netlify Forms](https://www.netlify.com/products/forms/)** — If hosted on Netlify

---

## 🔍 SEO Metadata

The following tags are included in `index.html`:
- `<title>` — Page title
- `<meta name="description">` — Search engine description
- `<meta name="keywords">` — Keywords
- `<meta name="author">` — Author name
- `<meta property="og:*">` — Open Graph tags for social sharing

---

## ✅ Feature Verification Checklist

Use this checklist to confirm everything works after setup:

### Files
- [ ] `assets/images/profile.jpg` exists and appears in Hero + About sections
- [ ] `assets/resume/Harish_Kumar.pdf` exists

### Navigation
- [ ] All navigation links scroll smoothly to correct sections
- [ ] Active nav link highlights as you scroll
- [ ] Hamburger menu opens/closes on mobile (< 900px)
- [ ] Pressing Escape closes the hamburger menu
- [ ] Clicking outside the menu closes it

### Hero Section
- [ ] Profile photo loads correctly
- [ ] Typed text animation cycles through role phrases
- [ ] "View My Projects" scrolls to Projects section
- [ ] "Download Resume" downloads the PDF
- [ ] "Contact Me" scrolls to Contact section
- [ ] LinkedIn, GitHub, Email icons open correct links

### About Section
- [ ] Profile photo loads correctly
- [ ] "Download Resume" button works
- [ ] "Let's Connect" scrolls to Contact section

### Skills Section
- [ ] All 6 skill categories are visible
- [ ] Skill tags have hover effects

### Education Section
- [ ] Timeline displays 3 education entries
- [ ] Timeline cards have hover animations

### Internship Section
- [ ] SwordNex Technologies card displays correctly
- [ ] All 5 responsibilities are listed

### Projects Section
- [ ] Citizen AI project card displays correctly
- [ ] Placeholder card shows "More Projects Coming Soon"

### Certifications Section
- [ ] All 4 certification cards display

### Resume Section
- [ ] "View Resume" opens PDF in a new browser tab
- [ ] "Download Resume" downloads the PDF

### Contact Section
- [ ] Email, Phone, Location, LinkedIn, GitHub items display
- [ ] Submitting empty form shows validation errors
- [ ] Valid submission shows success message
- [ ] Form resets after success

### Scroll & Misc
- [ ] Scroll-to-top button appears after scrolling down
- [ ] Scroll-to-top button scrolls to top smoothly
- [ ] Navbar adds shadow after scrolling
- [ ] Footer year shows current year dynamically

---

## 👨‍💻 About the Developer

**Harish K. M**
AI & Machine Learning Student
Annai College of Arts and Science, Kumbakonam, Tamil Nadu

- 📧 kumarharish4222@gmail.com
- 📞 +91 93457 68795
- 🔗 [LinkedIn](https://www.linkedin.com/in/harish-kumar-489768284)
- 💻 [GitHub](https://github.com/Harishkumar2111)
