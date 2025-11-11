<!-- BADGES -->
<p align="center">
  <a href="https://vercel.com/"><img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel"></a>
  <a href="#license"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge"></a>
  <a href="https://www.linkedin.com/in/syedharif/"><img alt="Linkedin - Syed Harif" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555"></a>
</p>

<a name="top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="public\assets\nav-link-previews\keyboard website.png" alt="Logo" width="150" height="120">
  </a>

  <h3 align="center">3D Interactive Developer Portfolio</h3>

  <p align="center">
    Professional, modern portfolio showcasing work, technical skills, and a custom 3D Spline keyboard with polished animations and responsive design.
    <br />
    <br />
    <a href="https://syedharif.xyz"><strong> View Live Preview »</strong></a>
  </p>
</div>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Environment Setup](#environment-setup)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Deployment (Vercel)](#deployment-vercel)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)


<!-- ABOUT -->
## About The Project

<p align="center">
  <img src="public\assets\nav-link-previews\landing.png" alt="Hero preview" width="800" style="max-width:100%; border-radius:8px; box-shadow: 0 8px 24px rgba(0,0,0,0.35)"/>
</p>

This repository hosts my **personal 3D portfolio website**, designed to reflect my creativity and technical expertise through immersive, responsive design and fluid animations.

At its core lies a **custom-built 3D interactive keyboard** (<u><a href="https://app.spline.design/file/b75b8877-3ed4-45ba-a50f-6e98972e48f7" target="_blank">download here</a></u>) made in **Spline**. Each keycap maps to a skill and reveals a title and short description on hover, offering visitors a fun and engaging way to explore my skillset.

**Key Features**
- **Custom 3D Spline Keyboard**: interactive keycaps implemented with Spline Runtime; hover to reveal skill metadata.
- **Smooth Motion & Interactions**: GSAP + Framer Motion power scroll-triggered reveals and micro-interactions.
- **Space-inspired Visual Theme**: subtle particle system and dark, minimal aesthetic.
- **Responsive & Accessible**: Tailwind CSS and component-driven UI for consistent behavior across devices.
- **Validated Contact Flow**: contact form handled via Resend API, input validated with Zod.
- **Realtime Utilities**: Socket.io integrated for realtime features where applicable.

<p align="right">(<a href="#top">back to top</a>)</p>


## Tech Stack
| Layer | Tools |
|---|---|
| Framework | Next.js, React |
| Styling & UI | Tailwind CSS, Shadcn UI, Aceternity UI |
| 3D & Animations | Spline Runtime, GSAP, Framer Motion |
| Utilities | Resend, Socket.io, Zod |
| Hosting | Vercel |

<p align="right">(<a href="#top">back to top</a>)</p>


## Getting Started

### Prerequisites
- Node.js v16+ (recommended)
- npm or yarn

### Install
```bash
# clone
git clone https://github.com/syedharif/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio

# install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a .env.local file in the root directory and add your environment variables:

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key_here
```

> **Security Tip**: Never commit your .env.local file. Use Vercel’s Environment Variables section for deployment secrets.


### Running Locally
```bash
# Start development server
npm run dev
# or
yarn dev
```
Open http://localhost:3000 to view your local build.


**Build for Production**
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

<p align="right">(<a href="#top">back to top</a>)</p>


## Project Structure
```bash
+---public
|   \---assets
|       +---icons
|       +---nav-link-previews
|       +---projects-screenshots
|       |   \---portfolio
|       \---seo
\---src
    +---app
    |   +---about
    |   +---api
    |   |   \---send
    |   +---blog
    |   +---contact
    |   \---projects
    +---components
    |   +---footer
    |   +---header
    |   |   \---nav
    |   |       +---body
    |   |       +---footer
    |   |       \---image
    |   +---logos
    |   +---preloader
    |   +---realtime
    |   +---sections
    |   +---social
    |   +---theme
    |   \---ui
    +---contexts
    +---data
    +---hooks
    +---lib
    |   \---lenis
    +---types
    \---utils
```
<p align="right">(<a href="#top">back to top</a>)</p>


## Deployment (Vercel)

1. Push your repository to GitHub.

2. Go to [Vercel](https://vercel.com/) → *New Project*.

3. Import your repository.

4. Add your environment variables under **Settings → Environment Variables**.

5. Deploy — Vercel automatically handles builds, previews, and production updates.

>**Note**: You can enable automatic deployments for commits pushed to the main branch.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

This is a personal project, but performance, accessibility, and security suggestions are welcome.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


>⭐ Don’t forget to star the repository if you found it inspiring!

<p align="right">(<a href="#top">back to top</a>)</p>

## License
This project is open source and distributed under the <a href="https://github.com/syedharif/project_3D_developer_portfolio/blob/00f6c3e65efdd430610ff8ef50e533f176e22bfe/LICENSE">MIT License</a>.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

**Syed Harif Fayaz**  |  [LinkedIn](https://linkedin.com/in/syedharif/)  -  [Twitter](https://x.com/syed_harif)  -  [dev.syedharif@gmail.com](mailto:dev.syedharif@gmail.com)

<p align="right">(<a href="#top">back to top</a>)</p>


## Acknowledgements
- [Naresh Khatri](https://github.com/Naresh-Khatri/) - for open-sourcing his 3D portfolio

- The open-source community for the tools that make creative web experiences possible.

<p align="right">(<a href="#top">back to top</a>)</p>
