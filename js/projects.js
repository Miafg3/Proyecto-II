// Cargar JSON

async function getProjects() {
  const response = await fetch("./js/data.json");
  return await response.json();
}

// Crear tags

function createTags(concepts) {
  return concepts
    .map((concept) => `<span class="tag">${concept}</span>`)
    .join("");
}

// Crear card

function createProjectCard(project) {
  return `
    <article class="project-card">
      <div class="day-number">
        ${project.day}
      </div>

      <h3 class="project-title">
        ${project.title}
      </h3>

      <p class="project-description">
        ${project.description}
      </p>

      <div class="tags">
        ${createTags(project.concepts)}
      </div>

      <div class="project-links">
        <a class="demo-btn" href="${project.demo}">
          🚀 Demo
        </a>

        <a class="code-btn" href="${project.github}" target="_blank">
          🐍 Código
        </a>
      </div>
    </article>
  `;
}

// Pintar las cards

function renderProjects(projects) {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects.map(createProjectCard).join("");
}

// Inicializar

async function initProjects() {
  try {
    const projects = await getProjects();
    renderProjects(projects);
  } catch (error) {
    console.error(error);
  }
}