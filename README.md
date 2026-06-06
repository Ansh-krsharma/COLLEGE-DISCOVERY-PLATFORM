cat << 'EOF' > README.md
# UniFind — College Discovery & Admission Prediction Platform

UniFind is a high-performance, strictly typed frontend application engineered to help students seamlessly discover, analyze, compare, and predict admissions to premier educational institutions. Built with modern web performance strategies, it demonstrates clean layout state orchestration, asynchronous simulation, and responsive UX design patterns.

---

## 🚀 Core Features

* **Advanced Directory & Search (Feature 1):** Multi-faceted real-time filtering engine allowing students to filter institutions by Type, Region/Location, and Maximum Tuition Fee thresholds. Features a custom debounce mechanism to protect system stability.
* **Persistent Comparison Matrix (Feature 2):** A side-by-side comparative grid system supporting up to 3 institutions simultaneously. Built on top of isolated global state tracking that remains persistent as users navigate across the directory.
* **Dynamic Interactive Detail Layout (Feature 3):** An asset view at `/college/[id]` utilizing an interactive tab layout framework (Overview, Courses, Placements, Reviews) to limit cumulative layout shift (CLS).
* **AI Admission Predictor Tool (Feature 4):** A logic-heavy form processing engine that matches student examination ranks against historical institutional cutoffs, automatically grouping outcome trajectories into **Safe**, **Target**, or **Reach** probability pools.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Next.js (App Router Architecture)
* **Language:** TypeScript (Strict Type Safety Framework)
* **Styling:** Tailwind CSS (Utility-first, mobile-responsive layout composition)
* **State Management:** Zustand (Lightweight, atomic, action-driven store)
* **Data Synchronization:** TanStack React Query (State lifecycle, performance background caching)
* **Iconography:** Lucide React

---

## 📁 Key Project Directory Structure

```text
src/
├── app/
│   ├── layout.tsx         # Global layout provider & persistent floating bar wrapper
│   ├── page.tsx           # Search Directory Dashboard with reactive controls
│   ├── compare/           # Side-by-Side comparison table matrix view
│   ├── predictor/         # AI Cutoff matching form utility page
│   └── college/[id]/      # Dynamic tab-driven resource detail viewer
├── components/
│   ├── providers/         # Global TanStack Query wrapper context
│   └── ui/                # Isolated presentation layers (Card, Skeletons, FloatingBar)
├── hooks/
│   ├── use-colleges.ts    # Async-simulated background data mapping hook
│   └── use-debounce.ts    # Performance optimizing input throttling utility
├── lib/
│   ├── mock-data.ts       # Structured multi-variate dataset registry
│   └── utils.ts           # Tailwind class merger layout utility wrapper
├── store/
│   └── use-compare-store.ts # Zustand global multi-asset transaction layer
└── types/
    └── index.ts           # Strict data interface contract models


⚙️ Local Development Setup
Follow these commands to install modules, initialize dependencies, and start your local engine environment:

1. Clone the repository and navigate to root
Bash
cd college-discovery
2. Install dependency packages
Bash
npm install
3. Run the development environment server
Bash
npm run dev
Open http://localhost:3000 with your browser to see the live system.

4. Build for Production Compilation
To audit type-safety rules and generate production-optimized assets, run:

Bash
npm run build
💡 Frontend Engineering & Design Decisions
⚡ State Management Optimization via Zustand
Instead of utilizing standard React Context Providers, which cause heavy top-down component branch re-renders, the comparison bucket uses Zustand. This guarantees atomic, select-driven updates, keeping the directory interactions fluid while maintaining a strict maximum ceiling constraint of 3 assets.

🛡️ Core Input Throttling
To minimize unnecessary filter evaluation sweeps and mock latency triggers during quick typing intervals, a Custom Debounce Hook gates the processing pipeline. Data filtering runs only after the user stops typing for 300ms.

🔄 Decoupled Data Handshaking via TanStack Query
All data lookup requests are processed via React Query hook abstractions. By mapping internal dataset filtering into simulated async network latencies (500ms), the system mirrors real-world production configurations complete with loading states and skeleton wireframes.
EOF