import re
import os

filepath = '/media/eyad/app/projects/Nelover/index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Scripts in head
scripts = """
  <!-- Three.js and GSAP -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
"""
content = content.replace("</head>", scripts + "\n</head>")

# 2. Add #webgl-canvas to style
css_insert = """
    #webgl-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      pointer-events: none;
    }
"""
content = content.replace("</style>", css_insert + "\n  </style>")

# 3. Transparent backgrounds
content = content.replace("background: var(--black);", "background: transparent;")
content = content.replace("rgba(8, 11, 7, 0.95)", "rgba(8, 11, 7, 0.7)")

# Replace hero-bg inner black gradients to transparent
content = content.replace(
    "linear-gradient(160deg, var(--black) 0%, var(--forest) 40%, var(--black) 100%)",
    "linear-gradient(160deg, transparent 0%, rgba(15, 31, 18, 0.4) 40%, transparent 100%)"
)

content = content.replace(
    "linear-gradient(to right, var(--black) 0%, transparent 30%),",
    "linear-gradient(to right, transparent 0%, transparent 30%),"
)
# change `.products background: var(--deep);`
content = re.sub(
    r'\.products\s*\{\s*padding:\s*120px\s*60px;\s*background:\s*var\(--deep\);',
    r'.products {\n      padding: 120px 60px;\n      background: rgba(13, 20, 16, 0.6);\n      backdrop-filter: blur(10px);',
    content
)
# change `.testimonials background: var(--deep);`
content = re.sub(
    r'\.testimonials\s*\{\s*padding:\s*120px\s*60px;\s*background:\s*var\(--deep\);',
    r'.testimonials {\n      padding: 120px 60px;\n      background: transparent;',
    content
)

# Hide images
content = content.replace('<img src="assets/hero_xl.png"', '<img style="display:none;" src="assets/hero_xl.png"')
content = content.replace('<img src="assets/about_garden.png"', '<img style="display:none;" src="assets/about_garden.png"')

# Hide the about image placeholder gradient
content = content.replace(
    r"background: linear-gradient(135deg, var(--forest) 0%, var(--green-dark) 50%, var(--deep) 100%);",
    r"background: transparent;"
)
content = content.replace(
    r"radial-gradient(circle at 30% 40%, rgba(61, 139, 92, 0.3) 0%, transparent 50%),",
    r"radial-gradient(circle at 30% 40%, transparent 0%, transparent 50%),"
)
content = content.replace(
    r"radial-gradient(circle at 70% 70%, rgba(74, 103, 65, 0.2) 0%, transparent 40%);",
    r"radial-gradient(circle at 70% 70%, transparent 0%, transparent 40%);"
)

# 4. Canvas in body
content = content.replace("<body>", "<body>\n  <canvas id=\"webgl-canvas\"></canvas>")

# 5. Bring content above canvas with z-indexes
content = content.replace("<nav>", "<nav style=\"z-index: 100;\">")
content = content.replace('class="hero-content"', 'class="hero-content" style="z-index: 10;"')
content = content.replace('class="about-text-content"', 'class="about-text-content" style="z-index: 10; position: relative;"')
content = content.replace('class="products-header"', 'class="products-header" style="position: relative; z-index: 10;"')
content = content.replace('class="products-grid"', 'class="products-grid" style="position: relative; z-index: 10;"')
content = content.replace('class="specs"', 'class="specs" style="position: relative; z-index: 10;"')
content = content.replace('class="testimonials"', 'class="testimonials" style="position: relative; z-index: 10;"')
content = content.replace('class="process"', 'class="process" style="position: relative; z-index: 10;"')
content = content.replace('class="cta-section"', 'class="cta-section" style="position: relative; z-index: 10;"')
content = content.replace('class="newsletter"', 'class="newsletter" style="position: relative; z-index: 10;"')
content = content.replace('<footer>', '<footer style="position: relative; z-index: 10;">')

script_insert = """
  <script>
    // --- 3D procedural Terrarium with Three.js & GSAP ---
    (function init3D() {
      const canvas = document.getElementById('webgl-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x080b07, 1); // --black

      const scene = new THREE.Scene();
      // add a subtle fog to blend the 3D model into the dark background
      scene.fog = new THREE.FogExp2(0x080b07, 0.05);
      
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 12);

      // --- LIGHTS ---
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xfff0dd, 2);
      directionalLight.position.set(5, 8, 5);
      scene.add(directionalLight);

      const fillLight = new THREE.DirectionalLight(0x8da399, 1.5);
      fillLight.position.set(-5, 3, -5);
      scene.add(fillLight);

      // --- 3D TERRARIUM MODEL ---
      const terrariumGroup = new THREE.Group();
      scene.add(terrariumGroup);

      // 1. Glass Dome
      const glassGeo = new THREE.CylinderGeometry(2, 2, 4.5, 64);
      const topGeo = new THREE.SphereGeometry(2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2);
      topGeo.translate(0, 2.25, 0);
      
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 1, // Full transmission for glass
        opacity: 1,
        metalness: 0,
        roughness: 0.05,
        ior: 1.52,
        thickness: 0.1,
        specularIntensity: 1,
        specularColor: 0xffffff,
        envMapIntensity: 1,
        side: THREE.BackSide,
        transparent: true
      });
      
      const glassCylinder = new THREE.Mesh(glassGeo, glassMat);
      const glassTop = new THREE.Mesh(topGeo, glassMat);
      terrariumGroup.add(glassCylinder);
      terrariumGroup.add(glassTop);

      // Re-create outer side of glass for dual sided effect
      const glassOuterMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 1,
        opacity: 1,
        metalness: 0.1,
        roughness: 0.02,
        ior: 1.52,
        thickness: 0.1,
        side: THREE.FrontSide,
        transparent: true
      });
      const glassCylinderOuter = new THREE.Mesh(glassGeo, glassOuterMat);
      const glassTopOuter = new THREE.Mesh(topGeo, glassOuterMat);
      terrariumGroup.add(glassCylinderOuter);
      terrariumGroup.add(glassTopOuter);

      // 2. Base (Dark Wood/Metal)
      const baseGeo = new THREE.CylinderGeometry(2.1, 2.2, 0.6, 64);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 0.8,
        metalness: 0.1
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.y = -2.55;
      terrariumGroup.add(baseMesh);

      // Inner glow/light inside the terrarium
      const innerLight = new THREE.PointLight(0xa3e0b8, 2, 6);
      innerLight.position.set(0, -1, 0);
      terrariumGroup.add(innerLight);

      // 3. Inner Terrain (Dirt/Moss)
      const terrainGeo = new THREE.SphereGeometry(1.9, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2);
      const terrainMat = new THREE.MeshStandardMaterial({
        color: 0x1f3d2b,
        roughness: 0.9,
        metalness: 0.1,
        flatShading: true
      });
      const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
      terrainMesh.position.y = -2.3;
      terrainMesh.scale.set(1, 0.6, 1);
      terrariumGroup.add(terrainMesh);

      const terrainDetailGeo = new THREE.DodecahedronGeometry(1.6, 1);
      const terrainDetailMat = new THREE.MeshStandardMaterial({
        color: 0x4a6741,
        roughness: 1,
        metalness: 0,
        flatShading: true
      });
      const terrainDetail = new THREE.Mesh(terrainDetailGeo, terrainDetailMat);
      terrainDetail.position.y = -1.6;
      terrainDetail.scale.set(1, 0.3, 1);
      terrariumGroup.add(terrainDetail);

      // 4. Inner Plant (Procedural beautiful tree/fern)
      const plantGroup = new THREE.Group();
      
      // Central Trunk (Twisted logic)
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3627, roughness: 1 });
      for(let i=0; i<6; i++) {
         const tGeo = new THREE.CylinderGeometry(0.1 - (i*0.01), 0.15 - (i*0.01), 0.5, 8);
         const tMesh = new THREE.Mesh(tGeo, trunkMat);
         tMesh.position.y = -1 + (i*0.4);
         tMesh.rotation.z = Math.sin(i) * 0.2;
         tMesh.rotation.x = Math.cos(i) * 0.2;
         plantGroup.add(tMesh);
      }
      
      // Leaves/Canopy
      const leafGeo = new THREE.IcosahedronGeometry(0.6, 2);
      const leafMat1 = new THREE.MeshStandardMaterial({ color: 0x3d8b5c, roughness: 0.6, flatShading: true });
      const leafMat2 = new THREE.MeshStandardMaterial({ color: 0x6abf85, roughness: 0.6, flatShading: true });
      const leafMat3 = new THREE.MeshStandardMaterial({ color: 0x2d5a3d, roughness: 0.8, flatShading: true });

      const leafPositions = [
        [0, 1.5, 0, leafMat1, 1.2],
        [0.6, 1.0, 0.4, leafMat2, 0.9],
        [-0.5, 1.2, -0.3, leafMat3, 1.0],
        [0.4, 0.6, -0.6, leafMat1, 0.8],
        [-0.6, 0.5, 0.5, leafMat2, 0.7],
      ];

      leafPositions.forEach(pos => {
        const mesh = new THREE.Mesh(leafGeo, pos[3]);
        mesh.position.set(pos[0], pos[1] - 0.5, pos[2]);
        mesh.scale.setScalar(pos[4]);
        plantGroup.add(mesh);
      });

      // Tiny hanging vines
      const vineMat = new THREE.MeshStandardMaterial({ color: 0x8ab896 });
      for(let i=0; i<5; i++) {
         const vGeo = new THREE.CylinderGeometry(0.02, 0.02, 1 + Math.random(), 4);
         const vMesh = new THREE.Mesh(vGeo, vineMat);
         vMesh.position.set(
            (Math.random() - 0.5) * 1.5,
            0.5,
            (Math.random() - 0.5) * 1.5
         );
         plantGroup.add(vMesh);
      }

      plantGroup.position.y = -0.5;
      terrariumGroup.add(plantGroup);

      // Floating spores inside
      const sporesGeo = new THREE.BufferGeometry();
      const sCount = 80;
      const sPos = new Float32Array(sCount * 3);
      for(let i=0; i<sCount*3; i+=3) {
        sPos[i] = (Math.random() - 0.5) * 3.5;
        sPos[i+1] = (Math.random() - 0.5) * 4;
        sPos[i+2] = (Math.random() - 0.5) * 3.5;
      }
      sporesGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
      const sMat = new THREE.PointsMaterial({ color: 0xc9a84c, size: 0.02, transparent: true, opacity: 0.8 });
      const sporesSystem = new THREE.Points(sporesGeo, sMat);
      terrariumGroup.add(sporesSystem);

      // Hero Initial Positioning
      terrariumGroup.position.set(3, -0.5, 0);
      terrariumGroup.rotation.set(0.1, -Math.PI / 4, 0);
      terrariumGroup.scale.set(1.1, 1.1, 1.1);

      // Smooth Animation Time
      let time = 0;
      // Cursor interaction for parallax
      let targetRotX = 0;
      let targetRotY = 0;

      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 0.2;
        const y = (e.clientY / window.innerHeight - 0.5) * 0.2;
        targetRotX = y;
        targetRotY = x;
      });

      function animate() {
        requestAnimationFrame(animate);
        time += 0.005;
        
        // Idle animation
        terrariumGroup.position.y += Math.sin(time * 2) * 0.001;
        
        // Spores swirl softly
        sporesSystem.rotation.y = time * 0.3;
        
        renderer.render(scene, camera);
      }
      animate();

      // --- GSAP SCROLL ANIMATIONS ---
      gsap.registerPlugin(ScrollTrigger);

      // Create a timeline that spans the whole body height
      // Match Hero -> About -> Products -> Process -> Newsletter -> Footer

      // Hero -> About
      gsap.to(terrariumGroup.position, {
        x: -3.5, // Move left for About section image placeholder
        y: -1.0,
        z: 0.0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.rotation, {
        y: Math.PI / 2, // Spin right
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.scale, {
        x: 1.4, y: 1.4, z: 1.4, // Make it big
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });

      // About -> Products
      gsap.to(terrariumGroup.position, {
        x: 0, 
        y: 1.0, 
        z: -5.0, // Push far back
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.products',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.rotation, {
        y: Math.PI * 1.5,
        x: 0.1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.products',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.scale, {
        x: 0.8, y: 0.8, z: 0.8,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.products',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });

      // Products -> Specs Comparison
      gsap.to(terrariumGroup.position, {
        x: 4, 
        y: 0, 
        z: 0, 
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.specs',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.rotation, {
        y: Math.PI * 2,
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.specs',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.scale, {
        x: 1.2, y: 1.2, z: 1.2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.specs',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });

      // Specs -> CTA Section (Move center large)
      gsap.to(terrariumGroup.position, {
        x: 0, 
        y: -1.5, 
        z: 2, 
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.rotation, {
        y: Math.PI * 2.5,
        x: -0.1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.scale, {
        x: 1.8, y: 1.8, z: 1.8,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });

      // CTA -> Footer (Rest quietly behind footers)
      gsap.to(terrariumGroup.position, {
        x: 3, 
        y: -4, 
        z: 0, 
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top bottom',
          end: 'top center', // Adjust slightly
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.rotation, {
        y: Math.PI * 3,
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });
      gsap.to(terrariumGroup.scale, {
        x: 0.9, y: 0.9, z: 0.9,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      });

      // Responsive layout fixes
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Update positions array based on mobile
        if(window.innerWidth <= 1024) {
          gsap.set(terrariumGroup.position, { x: 0 }); // Center mostly on mobile
        }
      }
      window.addEventListener('resize', onWindowResize);

    })();
  </script>
"""
content = content.replace("</body>", script_insert + "\n</body>")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patching successful.")
