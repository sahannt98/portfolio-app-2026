// Ensure portfolioData is loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Render Dynamic Sections
  renderProfile();
  renderInterests();
  renderExperience();
  renderPublications();
  renderProjects('all');
  renderSkills();
  renderCertifications();
  
  // Initialize Interactive Elements
  initMobileMenu();
  initHeaderScroll();
  initTypingEffect();
  initParticleBackground();
  initScrollSpy();
  initProjectFilter();
  
  // Initial Lucide Icons Render
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// --- Dynamic Rendering Functions ---

function renderProfile() {
  const profile = portfolioData.profile;
  
  // Hero Summary
  const summaryEl = document.getElementById('hero-profile-summary');
  if (summaryEl) {
    summaryEl.textContent = profile.summary;
  }
}

function renderInterests() {
  const container = document.getElementById('interests-grid-container');
  if (!container) return;
  
  container.innerHTML = portfolioData.researchInterests.map(interest => `
    <div class="interest-card">
      <div class="interest-icon-box">
        <i data-lucide="${interest.icon}"></i>
      </div>
      <h3>${interest.title}</h3>
      <p>${interest.description}</p>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;
  
  // Filter out Upwork since it has its own special highlighted card
  const timelineExps = portfolioData.experience.filter(exp => 
    !exp.company.toLowerCase().includes('upwork')
  );
  
  container.innerHTML = timelineExps.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="role-title">${exp.role}</h3>
            <div class="company-info">
              <i data-lucide="building"></i>
              <span>${exp.company}</span>
              <span class="text-muted">•</span>
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">${exp.location}</span>
            </div>
          </div>
          <span class="timeline-date">${exp.period}</span>
        </div>
        <ul class="timeline-desc">
          ${exp.description.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
        <div class="tech-tags">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderPublications() {
  const container = document.getElementById('publications-container');
  if (!container) return;
  
  container.innerHTML = portfolioData.publications.map((pub, index) => {
    // Format authors to highlight Sahan Nayanajith
    const formattedAuthors = pub.authors.replace(
      /Sahan Nayanajith/g, 
      '<strong>Sahan Nayanajith</strong>'
    );
    
    return `
      <div class="publication-card">
        <div class="pub-header">
          <span class="pub-badge">
            <i data-lucide="book-open"></i> IEEE Conference
          </span>
          <span class="pub-year">${pub.year}</span>
        </div>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-authors">${formattedAuthors}</p>
        <p class="pub-venue">${pub.conference}, ${pub.location}</p>
        
        <div class="pub-actions">
          <a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="pub-btn pub-btn-doi">
            <i data-lucide="external-link"></i> View DOI Link
          </a>
          <button class="pub-btn pub-btn-cite" onclick="toggleCitation(${index})" id="cite-btn-${index}">
            <i data-lucide="copy"></i> Cite / BibTeX
          </button>
        </div>
        
        <div class="citation-collapse" id="citation-collapse-${index}">
          <div class="citation-block">
            <button class="copy-citation-btn" onclick="copyCitation(${index})" id="copy-btn-${index}">Copy</button>
            <pre id="bibtex-content-${index}">${pub.citation}</pre>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Global functions for toggling and copying citations (called inline in HTML template)
window.toggleCitation = function(index) {
  const element = document.getElementById(`citation-collapse-${index}`);
  const btn = document.getElementById(`cite-btn-${index}`);
  
  if (element.classList.contains('show')) {
    element.classList.remove('show');
    btn.innerHTML = `<i data-lucide="copy"></i> Cite / BibTeX`;
  } else {
    element.classList.add('show');
    btn.innerHTML = `<i data-lucide="x"></i> Hide BibTeX`;
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
};

window.copyCitation = function(index) {
  const content = document.getElementById(`bibtex-content-${index}`).innerText;
  const btn = document.getElementById(`copy-btn-${index}`);
  
  navigator.clipboard.writeText(content).then(() => {
    btn.innerText = 'Copied!';
    btn.style.borderColor = 'var(--accent-cyan)';
    btn.style.color = 'var(--accent-cyan)';
    
    setTimeout(() => {
      btn.innerText = 'Copy';
      btn.style.borderColor = 'var(--border-glass)';
      btn.style.color = 'var(--text-secondary)';
    }, 2000);
  });
};

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;
  
  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);
    
  if (filteredProjects.length === 0) {
    container.innerHTML = `<p style="grid-column: span 3; text-align: center; color: var(--text-secondary);">No projects found in this category.</p>`;
    return;
  }
  
  container.innerHTML = filteredProjects.map(proj => {
    // Map icons based on category
    let icon = 'folder-git-2';
    if (proj.category === 'ai-ml') icon = 'brain';
    else if (proj.category === 'iot') icon = 'cpu';
    else if (proj.category === 'web-se') icon = 'globe';
    
    return `
      <div class="project-card">
        <div class="project-visual">
          <div class="project-icon-circle">
            <i data-lucide="${icon}"></i>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <span class="project-date">${proj.period}</span>
          <p class="project-desc">${proj.description}</p>
          
          <ul class="project-bullets-hidden">
            ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          
          <div class="project-footer">
            <div class="project-links">
              <div class="tech-tags">
                ${proj.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                ${proj.technologies.length > 3 ? `<span class="tech-tag" style="opacity: 0.7;">+${proj.technologies.length - 3} more</span>` : ''}
              </div>
              <div style="display: flex; gap: 0.75rem;">
                ${proj.github ? `
                  <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link-icon" title="View Code">
                    <i data-lucide="github"></i>
                  </a>
                ` : ''}
                ${proj.demo ? `
                  <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="project-link-icon" title="View Demo">
                    <i data-lucide="external-link"></i>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Re-render Lucide icons inside projects container
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderSkills() {
  const container = document.getElementById('skills-categories-container');
  if (!container) return;
  
  const skillCategories = [
    { name: "Languages", key: "languages" },
    { name: "AI/ML & Frameworks", key: "tools" },
    { name: "Databases & Caching", key: "databases" },
    { name: "Other Tech & DevOps", key: "others" }
  ];
  
  container.innerHTML = skillCategories.map(cat => `
    <div class="skill-category">
      <h4>${cat.name}</h4>
      <div class="skill-tags">
        ${portfolioData.skills[cat.key].map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certifications-grid-container');
  if (!container) return;
  
  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-info">
        <h4>${cert.title}</h4>
        <span class="cert-issuer">${cert.issuer}</span>
        <span class="text-muted" style="margin: 0 0.5rem;">•</span>
        <span class="cert-year">${cert.year}</span>
      </div>
      <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-link" aria-label="View Certification for ${cert.title}">
        <i data-lucide="external-link"></i>
      </a>
    </div>
  `).join('');
}

// --- Interactive Page Logic ---

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav-link');
  
  if (!hamburger || !navMenu) return;
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger lines
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initTypingEffect() {
  const textEl = document.getElementById('typing-text');
  if (!textEl) return;
  
  const phrases = [
    "Software Engineer",
    "AI / ML Developer",
    "Top Rated Freelancer",
    "Quantum Tech Enthusiast"
  ];
  
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      textEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      textEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIdx === currentPhrase.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      // Pause before next word
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start the typing loop
  setTimeout(type, 1000);
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let currentSection = 'home';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 120)) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const filterValue = e.target.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

// --- Canvas Network Particle Background ---

function initParticleBackground() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  
  // Canvas Size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
  });
  
  resizeCanvas();
  
  // Particle Class
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    
    update() {
      // Check boundaries and bounce
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }
      
      // Move particle
      this.x += this.directionX;
      this.y += this.directionY;
      
      this.draw();
    }
  }
  
  // Populate Particles
  function createParticles() {
    particlesArray = [];
    // Number of particles depends on screen size
    const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 100);
    
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1; // 1 to 3 size
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      
      // Speed multiplier
      const directionX = (Math.random() * 0.4) - 0.2;
      const directionY = (Math.random() * 0.4) - 0.2;
      const color = 'rgba(0, 242, 254, 0.2)'; // Cyber Cyan with opacity
      
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }
  
  // Connect Particles with lines
  function connect() {
    let opacityValue = 1;
    const maxDistance = 120;
    
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
        
        if (distance < maxDistance * maxDistance) {
          // Line fades as nodes get further
          opacityValue = 1 - (distance / (maxDistance * maxDistance));
          ctx.strokeStyle = `rgba(157, 78, 221, ${opacityValue * 0.12})`; // Violet connector lines
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    
    connect();
    requestAnimationFrame(animate);
  }
  
  createParticles();
  animate();
}
