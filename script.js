document.addEventListener('DOMContentLoaded', () => {
    // --- Localization Logic ---
    const translations = {
        'en': {
            'nav-home': 'Home',
            'nav-projects': 'Projects',
            'nav-experience': 'Experience',
            'nav-skills': 'Skills',
            'nav-contact': 'Contact',
            'hero-bio': 'I bridge the gap between technical complexity and business clarity with 7+ years of senior-level expertise. Focused on <strong>Azure/OCI</strong>, <strong>PySpark</strong>, <strong>PostgreSQL</strong> and <strong>Airflow</strong>.',
            'btn-work': 'See My Work',
            'btn-resume': 'Download Resume',
            'btn-connect': "Let's Connect",
            'projects-title': 'Selected Projects',
            'proj-1-tag': 'Modern Data Stack',
            'proj-1-title': 'OpsFlow Analytics',
            'proj-1-desc': 'Scalable demand forecasting engine built with BigQuery and dbt.',
            'proj-2-tag': '93% Latency Reduction',
            'proj-2-title': 'Cloud Data Lake Migration',
            'proj-2-desc': 'Legacy migration (Oracle/PostgreSQL) to OCI Medallion Architecture.',
            'proj-3-tag': 'USD 2.8M Managed',
            'proj-3-title': 'National Incentive Program',
            'proj-3-desc': 'Automated calculation for 400+ franchises using SQL and Python.',
            'proj-4-desc': 'Exploratory analysis of BRFSS dataset using PostgreSQL, Apache Superset and Docker.',
            'proj-5-tag': 'Kafka / FHIR / TimescaleDB',
            'proj-5-title': 'FHIR Telemetry Architecture',
            'proj-5-desc': 'Distributed Open Source infrastructure for real-time biometric ingestion and normalization.',
            'experience-title': 'Professional Journey',
            'exp-1-title': 'Data Engineer',
            'exp-1-focus': 'Modernizing Legacy Infrastructure & Latency Reduction',
            'exp-1-bullets': `
                <li><strong>The Challenge:</strong> Legacy Oracle systems couldn't scale with real-time business needs.</li>
                <li><strong>The Solution:</strong> Spearheaded a full-scale migration to <strong>OCI Data Lake</strong> using <strong>Medallion Architecture</strong>. I re-engineered pipelines in <strong>PySpark/Airflow</strong> that optimized data flow.</li>
                <li><strong>The Impact:</strong> Slashed processing latency by <strong>93%</strong>, enabling board-level decisions based on near real-time logistics data.</li>
            `,
            'exp-2-title': 'Data Analytics Lead',
            'exp-2-focus': 'Executive Alignment & Data Culture',
            'exp-2-bullets': `
                <li><strong>The Bridge:</strong> Managed a team of 7, translating C-suite business goals into technical roadmaps.</li>
                <li><strong>High Stakes:</strong> Engineered the data backbone for a <strong>R$14M/year</strong> performance program trusted by 400+ franchise owners.</li>
                <li><strong>Adoption:</strong> Achieved <strong>>95% dashboard adoption</strong>, fundamentally shifting the company culture to "data-first."</li>
            `,
            'exp-3-title': 'Sr. BI Analyst',
            'exp-3-focus': 'Technical Excellence & Forecasting',
            'exp-3-bullets': `
                <li><strong>Efficiency:</strong> Optimized complex SQL/PL/SQL environments, reducing execution times by over <strong>60%</strong> (from 43m to 17m).</li>
                <li><strong>Predictive Power:</strong> Developed the forecasting models used for "Peak Seasons," ensuring infrastructure robustness under extreme load.</li>
            `,
            'exp-4-title': 'Data / BI Analyst',
            'exp-4-focus': 'Business Intelligence & Process Automation',
            'exp-4-bullets': `
                <li><strong>The Core:</strong> Utilized analytical reasoning to translate operational pain points (SLAs, Route Time) into technical KPIs.</li>
                <li><strong>Automation:</strong> Restructured the data area by automating manual Excel reports into dynamic dashboards, eliminating human errors.</li>
                <li><strong>Scalability:</strong> Developed the first complex SQL queries for multi-source extraction, establishing the company's Data Warehouse foundation.</li>
            `,
            'skills-title': 'Core Expertise',
            'skills-subtitle': 'Bridging technical complexity with robust, governed, and scalable solutions.',
            'skill-1-title': 'Data Architecture & Scale',
            'skill-1-desc': 'Building high-performance environments using <strong>Spark (PySpark)</strong>, <strong>Airflow</strong>, and <strong>dbt</strong>. Expert in <strong>Medallion Architecture</strong> and scaling data flows.',
            'skill-2-title': 'Data Governance & Quality',
            'skill-2-desc': 'Establishing frameworks for <strong>Data Reliability</strong> and <strong>Traceability</strong>. Focused on documentation, single source of truth, and data quality monitoring.',
            'skill-3-title': 'Strategic Analytics',
            'skill-3-desc': 'Translating business needs into <strong>Star Schema</strong> models. Proficient in delivering governed data products via <strong>Power BI</strong>, <strong>Apache Superset</strong>, and <strong>Looker</strong>.',
            'skill-4-title': 'Cloud Platforms',
            'skill-4-desc': 'Specialized in <strong>Azure</strong> and <strong>OCI</strong> migrations. Experience managing data environments in <strong>Snowflake</strong>, <strong>Databricks</strong>, and <strong>AWS Glue/EMR</strong>.',
            'skill-5-title': 'Innovation & Generative AI',
            'skill-5-desc': 'Pioneering <strong>Agentic MVPs</strong> and testing frontier <strong>LLMs</strong>. Leading the cross-departmental <strong>AI adoption</strong> to foster a culture of technological innovation.',
            'contact-title': "Let's Connect",
            'contact-label-linkedin': 'LinkedIn',
            'contact-label-github': 'GitHub',
            'contact-label-email': 'Email',
            'profile-alt': 'Caio Moro - Data Engineer',
            'page-title': 'Caio Moro | Data & Analytics Engineer',
            // Typewriter phrases
            'typewriter': [
                "Architecting modern data environments.",
                "Solving operational complexity with data.",
                "Building scalable pipelines in Azure & OCI.",
                "Transforming raw data into strategic impact."
            ]
        },
        'pt': {
            'nav-home': 'Início',
            'nav-projects': 'Projetos',
            'nav-experience': 'Carreira',
            'nav-skills': 'Habilidades',
            'nav-contact': 'Contato',
            'hero-bio': 'Conecto complexidade técnica à clareza de negócios com mais de 7 anos de experiência sênior. Especialista em <strong>Azure/OCI</strong>, <strong>PySpark</strong>, <strong>PostgreSQL</strong> e <strong>Airflow</strong>.',
            'btn-work': 'Ver Projetos',
            'btn-resume': 'Baixar Currículo',
            'btn-connect': 'Contato',
            'projects-title': 'Projetos Desenvolvidos',
            'proj-1-tag': 'Modern Data Stack',
            'proj-1-title': 'OpsFlow Analytics',
            'proj-1-desc': 'Motor de previsão de demanda escalável com BigQuery e dbt.',
            'proj-2-tag': '93% Redução de Latência',
            'proj-2-title': 'Migração para Cloud Data Lake',
            'proj-2-desc': 'Migração de sistemas legados (Oracle/PostgreSQL) para OCI.',
            'proj-3-tag': 'R$ 14M Gerenciados',
            'proj-3-title': 'Programa de Bônus Nacional',
            'proj-3-desc': 'Criação de sistema de apuração de bônus para 400+ franquias.',
            'proj-4-desc': 'Análise exploratória de dados de saúde pública dos EUA (2024).',
            'proj-5-tag': 'TCC / Interoperabilidade',
            'proj-5-title': 'Arquitetura de Telemetria FHIR',
            'proj-5-desc': 'Infraestrutura distribuída para captação e normalização de biometrias em padrão clínico mundial FHIR.',
            'experience-title': 'Jornada Profissional',
            'exp-1-title': 'Engenheiro de Dados',
            'exp-1-focus': 'Modernização de Infraestrutura Legada e Redução de Latência',
            'exp-1-bullets': `
                <li><strong>O Desafio:</strong> Sistemas Oracle legados não escalavam com as necessidades de tempo real.</li>
                <li><strong>A Solução:</strong> Liderei a migração total para <strong>OCI Data Lake</strong> usando <strong>Arquitetura Medalhão</strong>. Re-engineerei pipelines em <strong>PySpark/Airflow</strong> que otimizaram o fluxo.</li>
                <li><strong>O Impacto:</strong> Reduzi a latência de processamento em <strong>93%</strong>, permitindo decisões de diretoria baseadas em dados logísticos quase em tempo real.</li>
            `,
            'exp-2-title': 'Líder de Analytics',
            'exp-2-focus': 'Alinhamento Executivo e Cultura de Dados',
            'exp-2-bullets': `
                <li><strong>A Ponte:</strong> Gerenciei um time de 7, traduzindo objetivos da C-suite em roadmaps técnicos.</li>
                <li><strong>Alto Impacto:</strong> Desenvolvi a base de dados para um programa de desempenho de <strong>R$14M/ano</strong>, utilizado por mais de 400 franqueados.</li>
                <li><strong>Adoção:</strong> Alcancei <strong>>95% de adoção de dashboards</strong>, mudando fundamentalmente a cultura da empresa para "data-first".</li>
            `,
            'exp-3-title': 'Analista de BI Sênior',
            'exp-3-focus': 'Excelência Técnica e Modelagem Preditiva',
            'exp-3-bullets': `
                <li><strong>Eficiência:</strong> Otimizei ambientes SQL/PL/SQL complexos, reduzindo tempos de execução em mais de <strong>60%</strong> (de 43m para 17m).</li>
                <li><strong>Poder Preditivo:</strong> Desenvolvi modelos de previsão para "Altas Saídas", garantindo robustez da infraestrutura sob carga extrema.</li>
            `,
            'exp-4-title': 'Analista de Dados / BI',
            'exp-4-focus': 'Business Intelligence e Automação de Processos',
            'exp-4-bullets': `
                <li><strong>O Core:</strong> Usei raciocínio analítico para traduzir dores operacionais (SLAs, Tempo de Rota) em KPIs técnicos.</li>
                <li><strong>Automação:</strong> Reestruturei a área de dados automatizando relatórios manuais em Excel para dashboards dinâmicos, eliminando erros humanos.</li>
                <li><strong>Escalabilidade:</strong> Desenvolvi as primeiras queries complexas para extração multi-source, estabelecendo o DW da empresa.</li>
            `,
            'skills-title': 'Principais Competências',
            'skills-subtitle': 'Unindo complexidade técnica a soluções robustas, governadas e escaláveis.',
            'skill-1-title': 'Arquitetura de Dados e Escala',
            'skill-1-desc': 'Construindo ambientes de alta performance com <strong>Spark (PySpark)</strong>, <strong>Airflow</strong> e <strong>dbt</strong>. Especialista em <strong>Arquitetura Medalhão</strong>.',
            'skill-2-title': 'Governança e Qualidade',
            'skill-2-desc': 'Estabelecendo frameworks de <strong>Confiabilidade</strong> e <strong>Rastreabilidade</strong>. Foco em documentação e monitoramento de qualidade.',
            'skill-3-title': 'Analytics Estratégico',
            'skill-3-desc': 'Traduzindo necessidades de negócio em modelos <strong>Star Schema</strong>. Entrega de produtos de dados via <strong>Power BI</strong> e <strong>Superset</strong>.',
            'skill-4-title': 'Plataformas de Nuvem',
            'skill-4-desc': 'Especialista em migrações <strong>Azure</strong> e <strong>OCI</strong>. Experiência em <strong>Snowflake</strong>, <strong>Databricks</strong> e <strong>AWS Glue/EMR</strong>.',
            'skill-5-title': 'Inovação e IA Generativa',
            'skill-5-desc': 'Desenvolvendo <strong>MVPs de Agentes</strong> e testando modelos de <strong>LLM</strong> para projetos do departamento de TI. Promovendo a adoção de <strong>inteligência artificial</strong>.',
            'contact-title': 'Vamos nos Conectar',
            'contact-label-linkedin': 'LinkedIn',
            'contact-label-github': 'GitHub',
            'contact-label-email': 'E-mail',
            'profile-alt': 'Caio Moro - Engenheiro de Dados',
            'page-title': 'Caio Moro | Engenheiro de Dados & Analytics',
            // Typewriter phrases
            'typewriter': [
                "Arquitetando ambientes de dados modernos.",
                "Resolvendo complexidade operacional com dados.",
                "Construindo pipelines escaláveis em Azure e OCI.",
                "Transformando dados brutos em impacto estratégico."
            ]
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update Alt Texts
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (translations[lang][key]) {
                el.setAttribute('alt', translations[lang][key]);
            }
        });

        // Update Page Title
        document.title = translations[lang]['page-title'];

        // Update active class on buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Reset typewriter
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typedTextElement.textContent = '';
    }

    // --- Typewriter Effect ---
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.getElementById('typed-text');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenWords = 2000;

    function type() {
        const words = translations[currentLang]['typewriter'];
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
            en: {
                title: 'OpsFlow Analytics',
                tag: 'Modern Data Stack',
                content: `
                    <h3>Context & Motivation</h3>
                    <p>Accurate demand forecasting is the backbone of efficient logistics. This project transforms operational data into actionable forecasting insights.</p>
                    <h3>Architecture</h3>
                    <p>Built with <strong>Google BigQuery</strong> and <strong>dbt</strong>, leveraging a Medallion Architecture layer model.</p>
                    <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                        <p><strong>Impact:</strong> Migrated legacy engine to ELT, improving maintainability.</p>
                    </div>
                `
            },
            pt: {
                title: 'OpsFlow Analytics',
                tag: 'Modern Data Stack',
                content: `
                    <h3>Contexto e Motivação</h3>
                    <p>Previsão de demanda precisa é a base da eficiência logística. Este projeto transforma dados operacionais em insights acionáveis.</p>
                    <h3>Arquitetura</h3>
                    <p>Construído com <strong>BigQuery</strong> e <strong>dbt</strong>, utilizando o modelo de Arquitetura Medalhão.</p>
                    <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                        <p><strong>Impacto:</strong> Migração de motor legado para ELT, melhorando manutenibilidade.</p>
                    </div>
                `
            }
        },
        'migration': {
            en: {
                title: 'Cloud Data Lake Migration',
                tag: '93% Latency Reduction',
                content: `
                    <h3>The Challenge</h3>
                    <p>Legacy architecture was struggling with volume. Queries were taking up to 15 minutes.</p>
                    <h3>Solution</h3>
                    <p>Migrated to <strong>OCI</strong> using PySpark and Airflow. Implemented Medallion Architecture.</p>
                    <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                        <p><strong>Result:</strong> Processing reduced to <1 minute. (93% reduction).</p>
                    </div>
                `
            },
            pt: {
                title: 'Migração para Cloud Data Lake',
                tag: '93% Redução de Latência',
                content: `
                    <h3>O Desafio</h3>
                    <p>Arquitetura legada sofrendo com volume de dados. Consultas demoravam até 15 minutos.</p>
                    <h3>Solução</h3>
                    <p>Migração para <strong>OCI</strong> usando PySpark e Airflow. Implementação de Arquitetura Medalhão.</p>
                    <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                        <p><strong>Resultado:</strong> Processamento reduzido para <1 minuto.</p>
                    </div>
                `
            }
        },
        'incentive': {
            en: {
                title: 'National Incentive Program',
                tag: 'USD 2.8M Managed',
                content: `
                    <h3>Business Impact</h3>
                    <p>Managed a performance program for 400+ franchises, distributing R$14M (USD 2.8M) annually.</p>
                    <h3>Technical Implementation</h3>
                    <p>Automated the entire calculation process using SQL pipelines and Python.</p>
                `
            },
            pt: {
                title: 'Programa Nacional de Incentivos',
                tag: 'R$ 14M Gerenciados',
                content: `
                    <h3>Impacto de Negócio</h3>
                    <p>Gerenciamento de programa de performance para 400+ franquias, distribuindo R$14M anualmente.</p>
                    <h3>Implementação Técnica</h3>
                    <p>Automação total do processo de cálculo, desde a mensuração dos indicadores até a distribuição dos bônus, usando pipelines SQL e Python.</p>
                `
            }
        },
        'public-health': {
            en: {
                title: 'Public Health Analysis',
                tag: 'Big Data / Docker',
                content: `
                    <h3>Analysis Overview</h3>
                    <p>EDA of the 2024 BRFSS dataset, analyzing 458,000+ records to identify health trends.</p>
                    <h3>Stack</h3>
                    <p>Deployment of <strong>Apache Superset</strong> via Docker for rapid collaborative visualization.</p>
                `
            },
            pt: {
                title: 'Análise de Saúde Pública',
                tag: 'Big Data / Docker',
                content: `
                    <h3>Visão Geral</h3>
                    <p>Análise exploratória (EDA) do maior sistema de monitoramento de saúde do mundo, o BRFSS 2024 (conduzido pelo CDC nos EUA). O projeto processa mais de 458 mil registros, transformando dados complexos de comportamento e fatores de risco em insights visíveis para gestão de saúde pública.</p>
                    <h3>Tecnologias</h3>
                    <p>Deploy do <strong>Apache Superset</strong> via Docker para visualização rápida e colaborativa.</p>
                `
            }
        },
        'tcc-fhir': {
            en: {
                title: 'FHIR Telemetry Architecture',
                tag: 'Kafka / FHIR / TimescaleDB',
                content: `
                    <h3>Capstone Overview</h3>
                    <p>Open-source distributed architecture designed to scale the capture, ingestion, and universal translation of patient biometrics into <strong>HL7 FHIR</strong> standards.</p>
                    <h3>Technical Mesh</h3>
                    <ul>
                        <li><strong>Ingestion:</strong> Python-based producers emulating real-time sensors via Kafka.</li>
                        <li><strong>Workflow:</strong> FHIR Workers (Python/Pydantic) performing LOINC-restricted transformations.</li>
                        <li><strong>Storage:</strong> TimescaleDB (PostgreSQL) for high-frequency clinical time-series.</li>
                        <li><strong>Security:</strong> SMART on FHIR compliance using OAuth2/JWT at the API Gateway.</li>
                    </ul>
                    <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                        <p><strong>Performance:</strong> Validated with high-throughput tests (>22k async req/s) ensuring architectural resilience.</p>
                    </div>
                `
            },
            pt: {
                title: 'Arquitetura de Telemetria FHIR',
                tag: 'TCC / Interoperabilidade HL7',
                content: `
                    <h3>Visão Geral do TCC</h3>
                    <p>Arquitetura distribuída Open Source desenhada para escalonar a captação, ingestão e tradução universal de biometrias vestíveis para o padrão clínico mundial <strong>HL7 FHIR</strong>.</p>
                    <h3>Malha Técnica</h3>
                    <ul>
                        <li><strong>Ingestão:</strong> Producers em Python emulando sensores em tempo real via Apache Kafka.</li>
                        <li><strong>Workflow:</strong> FHIR Workers realizando transformações estruturais com Pydantic e fhir.resources.</li>
                        <li><strong>Armazenamento:</strong> TimescaleDB para ingestão de séries temporais clínicas em milissegundos.</li>
                        <li><strong>Segurança:</strong> Conformidade SMART on FHIR com bloqueio lógico OAuth2/JWT no Gateway.</li>
                    </ul>
                    <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 1rem; border: 1px solid #e5e7eb;">
                        <p><strong>Engenharia:</strong> Projeto estrutural atrelado aos pilares das normas acadêmicas da ESALQ/USP, validado com throughput superior a 22k req. assíncronas.</p>
                    </div>
                `
            }
        }
    };

    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId][currentLang];
            if (data) {
                modalBody.innerHTML = `
                    <span class="project-tag">${data.tag}</span>
                    <h2 style="margin-top: 10px;">${data.title}</h2>
                    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #eee;">
                    ${data.content}
                `;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
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

    // --- Language Toggle Event ---
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Init Language
    setLanguage(currentLang);

    // --- Header & Scroll Logic ---
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a:not(.lang-btn)'); // Exclude lang buttons

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-blur');
        } else {
            header.classList.remove('header-blur');
        }

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

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
