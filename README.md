# Personal Portfolio Website

A clean, responsive, multi-page personal portfolio website built with vanilla HTML5, CSS3, and JavaScript. Designed with a custom framed layout, dynamic page transitions, and a mobile-friendly slide-out navigation system.

## 🚀 Live Demo

[View Live Website](https://Rishab-jain-builds/Portfolio/) *(Replace with your GitHub Pages link)*

---

## 🛠️ Features

- **Multi-Page Architecture:** Dedicated pages for Home, Resume, Projects, Research Papers, and Contact details.
- **Fully Responsive Design:** Dynamic viewport scaling (`vw`/`vh`) ensuring seamless viewing on mobile, tablet, and desktop screens.
- **Mobile Hamburger Navigation:** Clean toggle menu powered by vanilla JavaScript for smooth mobile browsing.
- **Accordion UI Support:** Interactive collapsible sections on the Resume page for listing education (reverse chronological order), skills, and certifications.
- **Custom Project Layout:** Visual cards highlighting published articles, web development repositories, and media editing work.
- **Social Media Integration:** Quick-access icons for GitHub, LinkedIn, Instagram, Email, and X (Twitter) powered by Font Awesome.

---

## 📁 Project Structure

```text
├── index.html                                     # Home / Main landing page
├── resume.html                                    # Resume 
    ├── personal details                              # Accordian personal details section 
    ├── education                                     # Accordian Education section
        ├── BS_Subject.html                                # B.S. Subject list
        ├── BT_Subject.html                                # B.Tech Subjects list    {currently hidden}
    ├── Achievement                                   # Accordian Achievement section  {Currently hidden}
    ├── Work experiance                               # Accordian Work experiance section
    ├── extracirruculur activities                    # Accordian extracirruculr activities section
    ├── Skills                                        # Accordian Skills section
├── projects.html                                  # Detailed showcase of work & repository links
    ├── Rishab.html                                   # Personal webpage can be used for vlogging, etc. 
        ├── Article-1.html
        ├── Article-2.html
        ├── Article-3.html
    ├── Github Profile for web projects
    ├── Media editing google drive folder                         
├── research.html                                 # Research papers & ongoing work section
├── contact.html                                  # Direct contact details & social links
├── LICENSE                                       # MIT License & Copyright declaration of the resporitory
└── README.md                                     # Repository documentation