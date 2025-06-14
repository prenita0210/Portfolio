const ProjectsData = [
  {
    name: "ServCorp",
    logo: "https://play-lh.googleusercontent.com/au3QvRNWZiRamIYLRb0irFPno-xuzSJDzrL1Te0vGx7889ROiOp3Sr7dIByGomFDJpbX=w480-h960-rw",
    description:
      "Developed responsive web interfaces using Angular for office space booking and IT service management. Built reusable UI components using Angular Material and Bootstrap. Collaborated via Git/GitLab, and contributed to continuous integration efforts.",
    link: "https://play.google.com/store/apps/details?id=com.sohezsoft.mcodo&hl=en_IN",
  },
  {
    name: "Utility Apps",
    logo: "https://cdn-icons-png.flaticon.com/128/14664/14664511.png",
    description:
      "I proactively contributed to front-end development tasks within internal projects and team initiatives. My focus was on creating user-friendly interfaces and improving the visual structure of web-based tools using HTML, CSS, and JavaScript..",
    link: "https://github.com/sohez/StudentPortalApp",
  },
  {
    name: "Calculator",
    logo: "https://cdn-icons-png.flaticon.com/128/1011/1011812.png",
    description:
      "powerful and easy-to-use solution for calculating academic performance. Built with HTML, CSS, JavaScript, html2canvas, and jsPDF.",
    link: "https://sohez.github.io/Marks-Percentage-Calculator/",
  },
  {
    name: "Tic-Tac-Toe",
    logo: "https://cdn-icons-png.flaticon.com/128/434/434798.png",
    description:
      "play against a bot using the Minimax algorithm or with a friend. This game is built with HTML, CSS, and JS.",
    link: "https://sohez.github.io/tic-tac-toe/",
  },
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
