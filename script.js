document.addEventListener('DOMContentLoaded', () => {
    // --- Typewriter Effect ---
    const words = [
        "Architecting modern data environments.",
        "Solving operational complexity with data.",
        "Building scalable pipelines in Azure & OCI.",
        "Transforming raw data into strategic impact."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.getElementById('typed-text');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenWords = 2000;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, pauseBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }
    type();

    // --- Modal Logic ---
    const projectData = {
        'opsflow': {
            title: 'OpsFlow Analytics',
            tag: 'Modern Data Stack',
            content: `
                <h3>Context & Motivation</h3>
                <p>Accurate demand forecasting is the backbone of efficient logistics. This project transforms operational data into actionable forecasting insights using a Modern Data Stack approach.</p>
                <h3>Architecture</h3>
                <p>Built with <strong>Google BigQuery</strong> and <strong>dbt</strong>, leveraging a Medallion Architecture (Bronze, Silver, Gold layers) to ensure data quality and scalability.</p>
                <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                    <p><strong>Impact:</strong> Migrated legacy Python engine to ELT, improving maintainability and version control.</p>
                </div>
                <a href="https://github.com/datamoro/opsflow-analytics" target="_blank" class="btn btn-outline" style="width: 100%;">View Code on GitHub</a>
            `
        },
        'migration': {
            title: 'Cloud Data Lake Migration',
            tag: '93% Latency Reduction',
            content: `
                <h3>The Challenge</h3>
                <p>Legacy architecture (Oracle + PostgreSQL) was struggling with data freshness and volume. Queries were taking up to 15 minutes to process.</p>
                <h3>Solution</h3>
                <p>Migrated to <strong>Oracle Cloud Infrastructure (OCI)</strong> using PySpark and Airflow. Implemented a Medallion Architecture.</p>
                <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                    <p><strong>Result:</strong> Processing time reduced from 15 minutes to <1 minute. (93% reduction).</p>
                </div>
            `
        },
        'incentive': {
            title: 'National Incentive Program',
            tag: 'USD 2.8M Managed',
            content: `
                <h3>Business Impact</h3>
                <p>Managed a "pay-by-performance" program for 400+ franchises, distributing approximately R$14M (USD 2.8M) annually based on operational excellence.</p>
                <h3>Technical Implementation</h3>
                <p>Automated the entire auditing and calculation process using SQL pipelines and Python scripts, ensuring transparency and 100% auditing accuracy.</p>
            `
        },
        'public-health': {
            title: 'Public Health Analysis',
            tag: 'Big Data / Docker',
            content: `
                <h3>Analysis Overview</h3>
                <p>Exploratory data analysis of the 2024 BRFSS dataset, analyzing over 458,000 records to identify trends in health equity and chronic disease burden.</p>
                <h3>Stack</h3>
                <p>Deployment of <strong>Apache Superset</strong> via Docker containers, allowing for rapid visualization and collaborative data exploration.</p>
            `
        }
    };

    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];
            if (data) {
                modalBody.innerHTML = `
                    <span class="project-tag">${data.tag}</span>
                    <h2 style="margin-top: 10px;">${data.title}</h2>
                    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #eee;">
                    ${data.content}
                `;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Stop background scroll
            }
        });
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // --- Header & Navigation Logic ---
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-blur');
        } else {
            header.classList.remove('header-blur');
        }

        // Active Link Highlighting
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth Scroll specifically for deep links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
