// JavaScript Document

// Neural Network Background Animation
        const canvas = document.getElementById('neural-bg');
        const ctx = canvas.getContext('2d');
        let nodes = [];
        let mouse = { x: 0, y: 0 };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Node {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 3 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#00ffff';
                ctx.fill();
            }
        }

        function init() {
            nodes = [];
            for (let i = 0; i < 100; i++) {
                nodes.push(new Node(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                ));
            }
        }

        function connectNodes() {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / 150})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.forEach(node => {
                node.update();
                node.draw();
            });

            connectNodes();
            requestAnimationFrame(animate);
        }

        // Initialize and start animation
        init();
        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });

        // Mouse move effect
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');

        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Fade in sections
            const sections = document.querySelectorAll('.fade-in');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        });

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Message sent! (This is a demo)');
            });
        }

        // Project Modal Functionality
        const projectModal = document.getElementById('project-modal');
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const modalMedia = document.getElementById('modal-media');
        const modalText = document.getElementById('modal-text');
        
        const projectsData = [
            {
                title: "2DHappyTravel",
                description: "2DHappyTravel",
                images: [
                    "assets/images/projects/2dhappytravel/2Dp1.png",
                ],
                video: "https://youtu.be/VLZAA7F4CW0",
                content: `
                    <h3>Description</h3>
                    <p>2DHappyTravel is a 2D side-scrolling game that I developed using Unity Engine. It is a simple game that allows the player to control a character and navigate through a world. Including platforming elements and battle system.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>2D Side-scrolling Adventure</li>
                        <li>Pixel-art style and character movement animation</li>
                        <li>Implementing local elements(food, culture, religion)</li>
                        <li>Focus on combat experience, boss fight</li>
                        <li>Story background take place in local hotspot</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Built with unity engine, C# for programming, and pixel art for the game art by myself.</p>
                `
            },
            {
                title: "Quantum UI",
                description: "Experimental interface system inspired by quantum computing principles",
                images: [
                    "assets/images/projects/quantum-ui/image1.jpg"
                ],
                video: "assets/videos/projects/quantum-ui/demo.mp4",
                content: `
                    <h3>Project Overview</h3>
                    <p>Quantum UI represents a revolutionary approach to user interface design, drawing inspiration from quantum computing principles to create an experimental interface system that challenges traditional interaction paradigms.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Quantum-inspired state management</li>
                        <li>Superposition-based UI components</li>
                        <li>Entanglement-driven interactions</li>
                        <li>Probabilistic rendering system</li>
                        <li>Adaptive interface morphing</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Developed using Vue.js, WebGL for advanced graphics, and custom quantum simulation algorithms to create unique user experiences.</p>
                `
            },
            {
                title: "Cyber Portal",
                description: "Immersive web experience with advanced WebGL and Three.js effects",
                images: [
                    "assets/images/projects/cyber-portal/image1.jpg",
                    "assets/images/projects/cyber-portal/image2.jpg"
                ],
                video: null,
                content: `
                    <h3>Project Overview</h3>
                    <p>Cyber Portal is an immersive web experience that combines cutting-edge WebGL technology with Three.js to create stunning 3D environments and interactive cyberpunk-themed worlds.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Real-time 3D rendering with WebGL</li>
                        <li>Interactive particle systems</li>
                        <li>Dynamic lighting and shadows</li>
                        <li>VR/AR compatibility</li>
                        <li>Procedural environment generation</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Built with Three.js, WebGL, GLSL shaders, and modern JavaScript frameworks to deliver high-performance 3D experiences in the browser.</p>
                `
            },
            {
                title: "Data Stream",
                description: "Live data visualization platform with real-time streaming capabilities",
                images: [
                    "assets/images/projects/data-stream/image1.jpg"
                ],
                video: "assets/videos/projects/data-stream/demo.mp4",
                content: `
                    <h3>Project Overview</h3>
                    <p>Data Stream is a powerful live data visualization platform designed to handle massive streams of real-time data with minimal latency, providing instant insights and analytics.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Real-time data streaming and processing</li>
                        <li>Multiple visualization types (charts, graphs, heatmaps)</li>
                        <li>Low-latency WebSocket connections</li>
                        <li>Scalable architecture for high throughput</li>
                        <li>Customizable alerting system</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Powered by Node.js for backend streaming, Apache Kafka for message queuing, and D3.js/Chart.js for advanced visualizations.</p>
                `
            },
            {
                title: "Neon Grid",
                description: "Cyberpunk-themed design system with glowing components and animations",
                images: [
                    "assets/images/projects/neon-grid/image1.jpg",
                    "assets/images/projects/neon-grid/image2.jpg",
                    "assets/images/projects/neon-grid/image3.jpg"
                ],
                video: null,
                content: `
                    <h3>Project Overview</h3>
                    <p>Neon Grid is a comprehensive cyberpunk-themed design system featuring glowing components, smooth animations, and a cohesive visual language perfect for futuristic interfaces.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Comprehensive component library</li>
                        <li>Custom CSS animations and effects</li>
                        <li>Neon glow and lighting effects</li>
                        <li>Responsive grid system</li>
                        <li>Theme customization tools</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Created with SCSS, CSS animations, JavaScript for interactive components, and a focus on performance and accessibility.</p>
                `
            },
            {
                title: "Matrix View",
                description: "3D data exploration tool with virtual reality integration support",
                images: [
                    "assets/images/projects/matrix-view/image1.jpg"
                ],
                video: "assets/videos/projects/matrix-view/demo.mp4",
                content: `
                    <h3>Project Overview</h3>
                    <p>Matrix View is an innovative 3D data exploration tool that allows users to navigate and interact with complex datasets in immersive three-dimensional space, with full VR support.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>3D data visualization and navigation</li>
                        <li>VR/AR headset compatibility</li>
                        <li>Interactive data manipulation</li>
                        <li>Multi-dimensional data representation</li>
                        <li>Collaborative viewing sessions</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Built with A-Frame for VR, Three.js for 3D rendering, WebXR APIs, and modern JavaScript frameworks for seamless cross-platform experiences.</p>
                `
            }
        ];

        // Function to extract YouTube video ID and convert to embed URL
        function getYouTubeEmbedUrl(url) {
            if (!url) return null;
            
            // Check if it's already an embed URL
            if (url.includes('youtube.com/embed/')) {
                return url;
            }
            
            // Extract video ID from various YouTube URL formats
            let videoId = null;
            
            // Format: https://www.youtube.com/watch?v=VIDEO_ID
            const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
            if (watchMatch) {
                videoId = watchMatch[1];
            }
            
            // Format: https://www.youtube.com/embed/VIDEO_ID
            const embedMatch = url.match(/youtube\.com\/embed\/([^&\n?#]+)/);
            if (embedMatch) {
                videoId = embedMatch[1];
            }
            
            if (videoId) {
                // Extract additional parameters if present (like si=...)
                const urlParams = new URLSearchParams(url.split('?')[1] || '');
                const siParam = urlParams.get('si');
                
                let embedUrl = `https://www.youtube.com/embed/${videoId}`;
                if (siParam) {
                    embedUrl += `?si=${siParam}`;
                }
                return embedUrl;
            }
            
            return null;
        }

        // Function to check if URL is YouTube
        function isYouTubeUrl(url) {
            if (!url) return false;
            return url.includes('youtube.com') || url.includes('youtu.be');
        }

        // Open modal function
        function openModal(projectIndex) {
            const project = projectsData[projectIndex];
            if (!project) return;

            modalTitle.textContent = project.title;
            
            // Clear and populate media
            modalMedia.innerHTML = '';
            
            // Add video if available
            if (project.video) {
                if (isYouTubeUrl(project.video)) {
                    // YouTube video - use iframe
                    const embedUrl = getYouTubeEmbedUrl(project.video);
                    if (embedUrl) {
                        const iframeContainer = document.createElement('div');
                        iframeContainer.className = 'youtube-video-container';
                        
                        const iframe = document.createElement('iframe');
                        iframe.src = embedUrl;
                        iframe.title = 'YouTube video player';
                        iframe.frameBorder = '0';
                        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
                        iframe.allowFullscreen = true;
                        iframe.className = 'youtube-embed';
                        
                        iframeContainer.appendChild(iframe);
                        modalMedia.appendChild(iframeContainer);
                    } else {
                        console.error('Failed to extract YouTube video ID from:', project.video);
                        const errorMsg = document.createElement('p');
                        errorMsg.style.color = 'var(--secondary)';
                        errorMsg.textContent = 'Invalid YouTube URL';
                        modalMedia.appendChild(errorMsg);
                    }
                } else {
                    // Regular video file - use video element
                    const videoElement = document.createElement('video');
                    videoElement.src = project.video;
                    videoElement.controls = true;
                    videoElement.style.width = '100%';
                    videoElement.preload = 'metadata';
                    // error handling
                    videoElement.onerror = function() {
                        console.error('Video failed to load:', project.video);
                        const errorMsg = document.createElement('p');
                        errorMsg.style.color = 'var(--secondary)';
                        errorMsg.textContent = 'video failed to load';
                        modalMedia.appendChild(errorMsg);
                    };
                    modalMedia.appendChild(videoElement);
                }
            }
            
            // Add images
            if (project.images && project.images.length > 0) {
                if (project.images.length === 1) {
                    const img = document.createElement('img');
                    img.src = project.images[0];
                    img.alt = project.title;
                    img.loading = 'lazy';
                    // error handling
                    img.onerror = function() {
                        console.error('Image failed to load:', project.images[0]);
                        this.style.border = '2px solid var(--secondary)';
                        this.alt = 'photo failed to load';
                    };
                    modalMedia.appendChild(img);
                } else {
                    const grid = document.createElement('div');
                    grid.className = 'modal-media-grid';
                    project.images.forEach(imageSrc => {
                        const img = document.createElement('img');
                        img.src = imageSrc;
                        img.alt = project.title;
                        img.loading = 'lazy';
                        // error handling
                        img.onerror = function() {
                            console.error('Image failed to load:', imageSrc);
                            this.style.border = '2px solid var(--secondary)';
                            this.alt = 'photo failed to load';
                        };
                        grid.appendChild(img);
                    });
                    modalMedia.appendChild(grid);
                }
            }
            
            // Add text content
            modalText.innerHTML = project.content;
            
            // Show modal
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close modal function
        function closeModal() {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Event listeners for project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                openModal(index);
            });
        });

        // Close modal events
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }
        if (modalOverlay) {
            modalOverlay.addEventListener('click', closeModal);
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeModal();
            }
        });