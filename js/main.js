const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const card = `
        <article class="project-card">
            <span class="project-number">
                Día ${project.day}
            </span>

            <h2 class="project-title">
                ${project.title}
            </h2>

            <p class="project-description">
                ${project.description}
            </p>

            <div class="project-footer">
                <div class="project-tags">
                    ${project.technologies
                      .map(
                        (technology) => `
                        <span class="project-tag">${technology}</span>
                    `,
                      )
                      .join("")}
                </div>

                <div class="project-links">

                    <a href="${project.demo}" class="project-link" aria-label="Ver demo">
                        <i class="fa-solid fa-eye"></i>
                    </a>

                    <a href="${project.github}" class="project-link" aria-label="Ver código">
                        <i class="fa-brands fa-github"></i>
                    </a>

                </div>
            </div>
        </article>
    `;

  projectsGrid.innerHTML += card;
});