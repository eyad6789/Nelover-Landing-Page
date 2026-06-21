# Nelover — Living Terrariums

A premium, modern landing page for handcrafted, artisan living terrariums.

## Features
- **High-End Aesthetics**: Beautiful dark-mode design with frosted glassmorphism elements.
- **Interactive 3D**: A fully procedural 3D terrarium model rendered with **Three.js** that responds to cursor movements.
- **Scroll Animations**: Smooth, performant scroll-triggered transitions and animations powered by **GSAP** and **ScrollTrigger**. 

## How to Run Locally

To view the website correctly (and avoid CORS issues with 3D components or assets), you should serve this directory using a local web server rather than opening `index.html` directly.

### Prerequisites
You will need **Python 3** installed on your system.

### Steps to Run
1. Open your terminal.
2. Navigate to the root folder of this project:
   ```bash
   cd /media/eyad/app/projects/Nelover
   ```
3. Start the built-in Python HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and navigate to:
   **[http://localhost:8000](http://localhost:8000)**

*Note: If port 8000 is already in use, you can specify a different port (e.g., `python3 -m http.server 8080`).*
