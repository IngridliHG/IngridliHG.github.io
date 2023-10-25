let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #eb94ff;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: ##00baff;">Ellos insisten en tener prejuicios, pero aun así sigo mi camino, no sé lo que es rendirse.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
