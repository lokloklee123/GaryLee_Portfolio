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
                    "assets/images/projects/2dhappytravel/2Dp2.png"
                ],
                video: "https://youtu.be/VLZAA7F4CW0",
                content: `
                    <h3>Overview</h3>
                    <p>2DHappyTravel is a 2D side-scrolling game that I developed using Unity Engine with my groupmates. 
                    It is a simple game that allows the player to control a character and navigate through a world. 
                    Including platforming elements and battle system.</p>
                    
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
                title: "ReelSteel",
                description: "ReelSteel",
                images: [
                    "assets/images/projects/ReelSteel/RSp1.png",
                    "assets/images/projects/ReelSteel/RSp2.png"
                ],
                video: [
                    "https://youtu.be/IBaK5M9-1vc",
                    "https://youtu.be/6Dz2cuqOZa8"
                ],
                content: `
                    <h3>Overview</h3>
                    <p>ReelSteel is a VR boxing game that developed via using Unity Engine with my groupmates. 
                    To provide the player with a realistic boxing experience, the game is developed in a first-person perspective.
                    Allows the player to control a character to fight against the opponent in a boxing ring.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>VR boxing game</li>
                        <li>First-person perspective to control the character to punch or dodge</li>
                        <li>Realistic boxing experience with other players</li>
                        <li>Multiple boxing moves</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Developed using Unity Engine, C# for programming, and Oracle VR device for the game development.</p>
                `
            },
            {
                title: "MealTheory",
                description: "MealTheory",
                images: [
                    "assets/images/projects/MealTheory/MTp1.png",
                    "assets/images/projects/MealTheory/MTp2.png"
                ],
                video: "https://youtu.be/tKOW-CyVin8",
                content: `
                    <h3>Overview</h3>
                    <p>MealTheory is a 3D cooking simulator that I developed using Unity Engine with my groupmates. 
                    It is a simple game that allows the player to cook the food by themselves and try to complete the goal.
                    A clean user interface and graphics interaction in game to provide a good gameplay experience.</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>3D cooking simulator base on real food recipe</li>
                        <li>Interactive cooking process</li>
                        <li>Realistic cooking experience</li>
                        <li>Multiple cooking recipes</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Built with Unity Engine, C# for programming, 3D modeling for the game art by ourselves.</p>
                `
            },
            {
                title: "The Grind",
                description: "A Job-search website with different roles",
                images: [
                    "assets/images/projects/TheGrind/TGp1.png",
                    "assets/images/projects/TheGrind/TGp2.png"
                ],
                video: "https://youtu.be/PkiGqUPSXBc",
                content: `
                    <h3>Overview</h3>
                    <p>The Grind is a Job-search website that provide over three different roles 
                    including Admin, Emplyoer and Job-seekeer.
                    Provide some simple and useful function like sorting, filtering and searching for job-seeker.
                    Provide employers with the functionality to create job postings, 
                    along with a unique custom question feature, 
                    enabling employers to screen suitable candidates based on applicants' responses.
                    Additionally, offer job seekers a machine learning matching function that utilizes NLP and data analysis to match and recommend the most suitable jobs to users based on the attributes provided in their profiles.
                    </p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>User-Friendly Job Searching Website</li>
                        <li>Employer Job Creation & Custom Screening</li>
                        <li>AI-Powered Job Matching</li>
                        <li>Bidirectional Matching Efficiency</li>
                        <li>Profile-Driven Personalization</li>
                    </ul>
                    
                    <h3>Technologies Used</h3>
                    <p>Powered by Node.js for backend streaming, Angular for frontend user interface, and MySQL for data storage.</p>
                `
            },
            
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
                const videoList = Array.isArray(project.video) ? project.video : [project.video];
                const videoGrid = document.createElement('div');
                videoGrid.className = 'modal-video-grid';

                videoList.forEach((videoUrl) => {
                    if (!videoUrl) return;
                    if (isYouTubeUrl(videoUrl)) {
                        const embedUrl = getYouTubeEmbedUrl(videoUrl);
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
                            videoGrid.appendChild(iframeContainer);
                        } else {
                            const errorMsg = document.createElement('p');
                            errorMsg.style.color = 'var(--secondary)';
                            errorMsg.textContent = 'Invalid YouTube URL';
                            videoGrid.appendChild(errorMsg);
                        }
                    } else {
                        const videoElement = document.createElement('video');
                        videoElement.src = videoUrl;
                        videoElement.controls = true;
                        videoElement.style.width = '100%';
                        videoElement.preload = 'metadata';
                        videoElement.onerror = function() {
                            const errorMsg = document.createElement('p');
                            errorMsg.style.color = 'var(--secondary)';
                            errorMsg.textContent = 'video failed to load';
                            this.replaceWith(errorMsg);
                        };
                        videoGrid.appendChild(videoElement);
                    }
                });

                modalMedia.appendChild(videoGrid);
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