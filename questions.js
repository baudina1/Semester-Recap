// Quiz questions, one list per session.
// To add a session: add a new key here, then copy launchlab.html
// and change data-session="launchlab" to the new key.
window.QUIZZES = {
  launchlab: [
    { q: "Which tool lets you design your site's look without writing code?",
      choices: ["Claude Code", "Claude Design", "Vercel", "GitHub"], answer: 1,
      why: "Claude Design builds the visual shell; Claude Code turns it into a working site." },
    { q: "How do you send your design from Claude Design to Claude Code?",
      choices: ["Export as PDF", "Copy link", "Share → Handoff to Claude Code", "Send to Canva"], answer: 2,
      why: "The Handoff option in the Share menu is the bridge between the two tools." },
    { q: "After a commit, where are your changes saved?",
      choices: ["On GitHub", "On Vercel", "Only on your computer", "In Supabase"], answer: 2,
      why: "A commit is a local snapshot. You need to push to send it to GitHub." },
    { q: "What does 'fork' mean?",
      choices: ["Delete a repo", "Make your own copy of someone else's repo on GitHub", "Download a repo to your computer", "Merge two branches"], answer: 1,
      why: "A fork is your own online copy. Cloning is what downloads it to your computer." },
    { q: "When should you use a pull request instead of a direct push?",
      choices: ["When working solo", "When you want teammates to review changes first", "When the site is down", "Never"], answer: 1,
      why: "Pull requests let others comment and approve before changes are merged." },
    { q: "What's the difference between GitHub and Vercel?",
      choices: ["They do the same thing", "GitHub stores code; Vercel turns it into a live site", "Vercel stores code; GitHub hosts the site", "GitHub is only for teams"], answer: 1,
      why: "Vercel reads your repo, builds it, and updates the live site on every push." },
    { q: "Which file do you edit to make a button orange?",
      choices: ["index.html", "styles.css", "script.js", "README.md"], answer: 1,
      why: "HTML is the content, CSS is the look, JS is the behaviour." },
    { q: "What does Supabase add to your site?",
      choices: ["Hosting", "A design tool", "User accounts and a database", "Version control"], answer: 2,
      why: "Without a backend, your site forgets everyone once the tab closes." }
  ]
};
