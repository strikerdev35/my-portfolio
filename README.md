# Deep Narayan Baidya – Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev      # start dev server
npm run build    # production build into /dist
npm run preview  # preview the build
```

## Where things are
```
src/
  App.jsx                 page = list of sections, in order
  index.css               all styles (unchanged from the original HTML)
  data/content.js         ALL text, projects, skills, timeline: edit here
  assets/                 portrait + project screenshots
  hooks/                  useMotion, useInView, useRafScroll, useActiveSection
  components/
    Header.jsx            sticky nav, motion toggle, mobile menu
    Hero.jsx              intro, giant "PORTFOLIO" text, portrait, stats
    Work.jsx              project filter + cards   (ProjectCard, ProjectDialog)
    Tools.jsx             toolkit list
    Process.jsx           "From data to decisions" steps + chart
    About.jsx
    Journey.jsx           timeline + built so far
    Contact.jsx
    Footer.jsx
    ScrollProgress.jsx    red bar at top
    SwarmCanvas.jsx       arrows that follow the mouse
    KineticHeading.jsx    section title that slides in
    MagneticLink.jsx      red button that leans toward the mouse
```

## Common edits
- Add or change a project: `src/data/content.js` → `projects` (drop the image in `src/assets/`).
- Change skills / timeline / steps: same file.
- Change copy in the hero: `src/components/Hero.jsx`.
