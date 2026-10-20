NIKITA'S PORTFOLIO (HTML + CSS + Bootstrap 5)
=============================================

HOW TO RUN
  Double-click index.html. That's it! (Needs internet for Bootstrap and Google Fonts.)

WHAT TO EDIT, AND WHERE
  Your name, role, tagline, intro ..... index.html  -> section "HERO"
  About text ........................... index.html  -> section "ABOUT"
  Fun facts ............................ js/main.js  -> the "facts" list at the top
  Skills and bar levels ................ index.html  -> section "SKILLS" (change --w:80% etc.)
  Projects (title, text, tags, links) .. index.html  -> section "PROJECTS"
  Education / experience ............... index.html  -> section "JOURNEY"
  Email and social links ............... index.html  -> section "CONTACT" and the FOOTER
  Colors ............................... css/style.css -> the :root block at the very top
  Fonts ................................ index.html (Google Fonts link) + css/style.css
  Resume ............................... put resume.pdf inside /images (the button links to it)
  Profile photo ........................ in index.html, replace the cupcake <svg> with:
                                         <img src="images/me.jpg" class="photo" alt="Nikita">
                                         and add to style.css:
                                         .photo{position:absolute;inset:14%;width:72%;height:72%;object-fit:cover;border-radius:50%;border:5px solid #fff}
  Project images ....................... replace the emoji in <div class="thumb"> with
                                         <img src="images/p1.jpg" alt="..." class="w-100 h-100 rounded-4 object-fit-cover">

CONTACT FORM
  It is UI only. To receive messages, sign up at formspree.io (free tier) and add
  action="https://formspree.io/f/YOUR_ID" method="POST" to the <form> tag.

PUBLISHING
  Drag the whole folder onto Netlify Drop, or use GitHub Pages.
