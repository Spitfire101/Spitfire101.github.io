import './style.css'

// Portfolio Website TypeScript Functionality

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Sample projects data - replace with your actual projects
const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Modelling and Optimizing Spanish National Police Resources',
    description: 'My thesis consisting on a hybrid approach to optimizing the allocation of officers per region in the whole of Spain. Grade: 10/10.',
    image: 'fas fa-balance-scale',
    technologies: ['Pandas', "Numpy", "Scikit-Learn", "Matplotlib", "Seaborn", "LightGBM", "XGBoost", "Lasso", "ElasticNet"],
    category: 'ai',
    // githubUrl: 'https://github.com/[username]/',
  },
  {
    id: 'project-2',
    title: 'Use of Neural Networks to Classify Vowel Sounds',
    description: 'Used Tensorflor with Keras backend to classify vowels as nasal or oral with state of the art techniques.',
    image: 'fas fa-wave-square',
    technologies: ['Python', 'Tensorflow', 'Keras', 'Pandas', 'Numpy', "Matplotlib", "Scikit-Learn", "UMAP"],
    category: 'ai',
    // githubUrl: 'https://github.com/',
  },
  {
    id: 'project-3',
    title: 'Simulation of a Distributed Voting System',
    description: 'The project simulates a Bitcoin-like distributed system featuring "miners", "checkers" and a "monitor" all communicating and synchronizing via shared memory, pipes and message queues.',
    image: 'fas fa-bitcoin-sign',
    technologies: ['C', 'Operating Systems'],
    category: 'low-level',
    // githubUrl: 'https://github.com/'
  },
  {
    id: 'project-4',
    title: 'Web Engine in C',
    description: 'Developed a concurrent multi-threaded HTTP 1.1 web engine in C that supports most of the HTTP methods including images and code execution.',
    image: 'fas fa-code',
    technologies: ['C', 'HTTP', 'low-level programming'],
    category: 'low-level',
    // githubUrl: 'https://github.com/'
  },
  {
    id: 'project-5',
    title: 'Implementation of a Enhanced Segmented Risc-V',
    description: 'Designed the segmented version of the Risc-V plus some other enhancements like data forwarding, hazard detection unit and branch prediciton.',
    image: 'fas fa-v',
    technologies: ['VHDL', 'Assembly'],
    category: 'low-level',
    // githubUrl: 'https://github.com/'
  },
  {
    id: 'project-6',
    title: 'Neural Network Library',
    description: 'Developed a neural network library from the ground up in Python and tested it with various datasets.',
    image: 'fas fa-circle-nodes',
    technologies: ['Python', 'Numpy'],
    category: 'ai',
    // githubUrl: 'https://github.com/'
  },
  {
    id: 'project-7',
    title: 'Online Chess Website',
    description: 'Developed a website application to play chess with other people with Django as backend and Vue as frontend. Can take around 30 seconds initialy for requests to start working.',
    image: 'fas fa-chess',
    technologies: ['Django', 'Vue', 'API REST', 'Websockets'],
    category: 'web',
    // githubUrl: 'https://github.com/Spitfire101/psi_pr4/tree/main',
    liveUrl: 'https://psi-pr4-vue-wwhp.onrender.com/'
    
  },
  {
    id: 'project-8',
    title: 'Enterprise App for Gyms',
    description: 'System that allows a gym to represent their business in the app and keep track of it.',
    image: 'fas fa-dumbbell',
    technologies: ['Java', 'Full-Stack'],
    category: 'other',
    // githubUrl: 'https://github.com/'
  }
];

class Portfolio {
  private currentFilter: string = 'all';
  private visibleProjects: number = 6;
  private readonly projectsPerLoad: number = 3;

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupNavigation();
    this.setupProjectFilter();
    this.renderProjects();
    this.setupContactForm();
    this.setupScrollAnimations();
    this.setupLoadMoreButton();
  }

  private setupNavigation(): void {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
      navMenu?.classList.toggle('active');
      navToggle?.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
      });
    });

    // Smooth scrolling and active link highlighting
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
    });
  }

  private updateActiveNavLink(): void {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  private setupProjectFilter(): void {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current filter and reset visible projects
        this.currentFilter = button.getAttribute('data-filter') || 'all';
        this.visibleProjects = this.projectsPerLoad;
        
        // Re-render projects
        this.renderProjects();
      });
    });
  }

  private renderProjects(): void {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    // Filter projects
    const filteredProjects = this.currentFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === this.currentFilter);

    // Clear existing projects
    projectsGrid.innerHTML = '';

    // Render visible projects
    const projectsToShow = filteredProjects.slice(0, this.visibleProjects);
    
    projectsToShow.forEach((project, index) => {
      const projectCard = this.createProjectCard(project);
      projectCard.style.animationDelay = `${index * 0.1}s`;
      projectsGrid.appendChild(projectCard);
    });

    // Update load more button visibility
    this.updateLoadMoreButton(filteredProjects.length);
  }

  private createProjectCard(project: Project): HTMLElement {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image">
        <i class="${project.image}"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>` : ''}
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
        </div>
      </div>
    `;
    return card;
  }

  private setupLoadMoreButton(): void {
    const loadMoreBtn = document.getElementById('load-more-projects');
    
    loadMoreBtn?.addEventListener('click', () => {
      this.visibleProjects += this.projectsPerLoad;
      this.renderProjects();
    });
  }

  private updateLoadMoreButton(totalProjects: number): void {
    const loadMoreContainer = document.querySelector('.projects-load-more');
    
    if (this.visibleProjects >= totalProjects) {
      loadMoreContainer?.classList.add('hidden');
    } else {
      loadMoreContainer?.classList.remove('hidden');
    }
  }

  private setupContactForm(): void {
    const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
    
    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmission(contactForm);
    });
  }

  private async handleFormSubmission(form: HTMLFormElement): Promise<void> {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    if (submitButton) {
      submitButton.classList.add('loading');
      (submitButton as HTMLButtonElement).disabled = true;
    }

    try {
      // Simulate form submission (replace with actual form handling)
      await this.simulateFormSubmission(formData);
      
      // Show success message
      this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      form.reset();
      
    } catch (error) {
      // Show error message
      this.showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      // Remove loading state
      if (submitButton) {
        submitButton.classList.remove('loading');
        (submitButton as HTMLButtonElement).disabled = false;
      }
    }
  }

  private async simulateFormSubmission(formData: FormData): Promise<void> {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data:', Object.fromEntries(formData));
        resolve();
      }, 1500);
    });
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  private setupScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .contact-card');
    animatedElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
});

// Add notification styles dynamically
const notificationStyles = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    max-width: 400px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 10000;
    box-shadow: var(--shadow-lg);
  }

  .notification.show {
    transform: translateX(0);
  }

  .notification-success {
    border-color: var(--success);
  }

  .notification-error {
    border-color: var(--error);
  }

  .notification-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--text-primary);
  }

  .notification-success .notification-content i {
    color: var(--success);
  }

  .notification-error .notification-content i {
    color: var(--error);
  }

  .hidden {
    display: none !important;
  }
`;

// Inject notification styles
const style = document.createElement('style');
style.textContent = notificationStyles;
document.head.appendChild(style);

