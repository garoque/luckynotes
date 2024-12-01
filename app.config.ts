export default defineAppConfig({
  name: "Roque's lucky notes",
  description: 'Build & learn in public notes',
  host: 'notes.gabrielroque.com',

  author: {
    name: 'Gabriel Roque',
    email: 'gfroque1@gmail.com',
    twitter: 'gabriel_froque',
  },

  // auto publish notes configs
  publishing: {
    twitter: false,
  },

  header: {
    title: 'Hi there 👋',
    description: 'Welcome to my notes! here I share my thoughts, ideas, and learnings.',
  },

  ui: {
    primary: 'cyan',
  },
})
