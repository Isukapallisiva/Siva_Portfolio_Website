import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();
  const [isUnblurred, setIsUnblurred] = useState(false);

  useEffect(() => {
    if (canvasDiv.current) {
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width || window.innerWidth, height: rect.height || window.innerHeight };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.set(0, 0, 25);
      camera.updateProjectionMatrix();

      // Ambient and directional lighting for the metallic look
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xaa42ff, 3);
      dirLight1.position.set(5, 5, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x00ffff, 2);
      dirLight2.position.set(-5, -5, 5);
      scene.add(dirLight2);

      const pointLight = new THREE.PointLight(0xffffff, 2, 50);
      pointLight.position.set(0, 0, 8);
      scene.add(pointLight);

      const clock = new THREE.Clock();
      let mouse = { x: 0, y: 0 };

      // Create group for the brand logo system
      const brandGroup = new THREE.Group();
      scene.add(brandGroup);

      let progress = setProgress((value) => setLoading(value));

      // Abstract Torus Knot mesh
      const torusKnotGeom = new THREE.TorusKnotGeometry(1.0, 0.32, 120, 16);
      
      const torusKnotMat = new THREE.MeshPhysicalMaterial({
        color: 0xaa42ff,
        emissive: 0xaa42ff,
        emissiveIntensity: 0.4,
        metalness: 0.8,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });

      const mainMesh = new THREE.Mesh(torusKnotGeom, torusKnotMat);
      brandGroup.add(mainMesh);

      // Glowing Orbits (Torus)
      const ringGeom1 = new THREE.TorusGeometry(2.8, 0.03, 16, 100);
      const ringMat1 = new THREE.MeshPhysicalMaterial({
        color: 0x00ffff,
        emissive: 0x00ffff,
        emissiveIntensity: 1.5,
        roughness: 0.1,
      });
      const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
      ring1.rotation.x = Math.PI / 3.5;
      brandGroup.add(ring1);

      const ringGeom2 = new THREE.TorusGeometry(3.2, 0.02, 16, 100);
      const ringMat2 = new THREE.MeshPhysicalMaterial({
        color: 0xaa42ff,
        emissive: 0xaa42ff,
        emissiveIntensity: 1.5,
        roughness: 0.1,
      });
      const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
      ring2.rotation.x = -Math.PI / 4;
      brandGroup.add(ring2);

      // Starfield particles background
      const starsGeom = new THREE.BufferGeometry();
      const starsCount = 120;
      const starsPositions = new Float32Array(starsCount * 3);
      for (let i = 0; i < starsCount; i++) {
        starsPositions[i * 3] = (Math.random() - 0.5) * 35;
        starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 35;
        starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10;
      }
      starsGeom.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));
      
      // Custom canvas particle texture for glowing stars
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 16;
      pCanvas.height = 16;
      const pCtx = pCanvas.getContext("2d");
      if (pCtx) {
        const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.5, "rgba(170, 66, 255, 0.5)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        pCtx.fillStyle = grad;
        pCtx.fillRect(0, 0, 16, 16);
      }
      const pTexture = new THREE.CanvasTexture(pCanvas);

      const starsMat = new THREE.PointsMaterial({
        size: 0.35,
        map: pTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const starField = new THREE.Points(starsGeom, starsMat);
      scene.add(starField);

      // Resize handler
      const handleSceneResize = () => {
        if (canvasDiv.current) {
          const w = canvasDiv.current.clientWidth || window.innerWidth;
          const h = canvasDiv.current.clientHeight || window.innerHeight;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      window.addEventListener("resize", handleSceneResize);

      // Timeline Scroll triggers
      setCharTimeline(brandGroup, camera, null);
      setAllTimeline();

      progress.loaded().then(() => {
        // Resolve loading progress
      });

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Float effect
        brandGroup.position.y = Math.sin(time * 0.8) * 0.15;
        brandGroup.position.x = Math.cos(time * 0.5) * 0.1;

        // Gentle rotations
        mainMesh.rotation.y = time * 0.25;
        mainMesh.rotation.x = time * 0.15;
        
        ring1.rotation.z = -time * 0.2;
        ring2.rotation.z = time * 0.15;
        
        starField.rotation.y = time * 0.005;

        // Mouse interactive rotation offsets
        brandGroup.rotation.x = THREE.MathUtils.lerp(brandGroup.rotation.x, mouse.y * 0.4, 0.05);
        brandGroup.rotation.y = THREE.MathUtils.lerp(brandGroup.rotation.y, mouse.x * 0.4, 0.05);

        renderer.render(scene, camera);
      };
      animate();

      const onMouseMove = (event: MouseEvent) => {
        const x = (event.clientX / window.innerWidth) - 0.5;
        const y = (event.clientY / window.innerHeight) - 0.5;
        mouse = { x, y };
      };

      document.addEventListener("mousemove", onMouseMove);

      const handleUnblur = () => {
        setIsUnblurred(true);
        window.removeEventListener("mousemove", handleUnblur);
        window.removeEventListener("touchstart", handleUnblur);
      };
      window.addEventListener("mousemove", handleUnblur);
      window.addEventListener("touchstart", handleUnblur);

      return () => {
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", handleSceneResize);
        document.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mousemove", handleUnblur);
        window.removeEventListener("touchstart", handleUnblur);
        if (canvasDiv.current && renderer.domElement) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className={`character-model ${isUnblurred ? "unblurred" : ""}`} ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
