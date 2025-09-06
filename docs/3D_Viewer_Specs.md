
# 🦷 SmileDesignsX 3D Viewer Specs

This document outlines the complete technical blueprint for the SmileDesignsX 3D viewer, which renders STL files, overlays mockups on facial images, and provides real-time esthetic simulation.

---

## 🧱 Tech Stack

- **Three.js**: WebGL-based rendering engine for STL models
- **React Three Fiber**: Integration between React and Three.js
- **Electron**: Desktop container (ensures GPU access and isolated runtime)
- **STL Loader**: Parses binary or ASCII STL dental scans
- **Canvas2D**: Used for overlaying facial images

---

## 🧰 Viewer Features

| Feature                    | Description |
|----------------------------|-------------|
| Load STL File              | Accepts binary `.stl` files, renders mesh |
| Face Image Overlay         | Aligns frontal JPEG/PNG photo to 3D scene |
| Zoom, Pan, Rotate          | Mouse + trackpad controls enabled |
| Tooth Selector             | Click-to-select individual teeth from mesh (region detection) |
| Before/After Toggle        | Split or side-by-side view of original STL vs AI overlay |
| Tooth Shade Customizer     | Dropdown to apply common shade sets (e.g., Vita A1-D4) |
| Gum Color Simulation       | Slider for pink tone (e.g., inflammation vs graft esthetics) |
| Export View                | Capture canvas frame as image/PDF |
| Reset Controls             | One-click revert to default camera/view |

---

## 🧠 Alignment Pipeline

1. Detect facial landmarks in uploaded photo (OpenCV or MediaPipe)
2. Normalize angle using inter-pupillary distance
3. Align STL arch to mouth region (based on standard dental scan orientation)
4. Overlay mockup results using rendered texture (mapped to tooth regions)

---

## 🧪 Rendering Performance Targets

- Initial load time: < 1.2 seconds
- Frame rate: > 55 FPS at 1920x1080 resolution
- GPU Memory Use: < 300MB

---

## 🧯 Fail-safes

- Render fallback: grayscale wireframe if GPU not available
- Error states: “Invalid STL file”, “Image alignment failed”, “Overlay model missing”
- Logging: `render.log` captures all camera events, STL parsing, and load times

