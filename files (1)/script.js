/* ============================================================
   PORTFOLIO SCRIPT
   RF / Microwave Engineering Portfolio
   ============================================================ */

/* ── 1. DATA ─────────────────────────────────────────────── */

const SKILLS_DATA = [
  // simulation
  { name: "ANSYS HFSS",          pct: 90, icon: "fa-solid fa-cube",            category: "simulation", color: "#00D4FF" },
  { name: "LTspice",             pct: 88, icon: "fa-solid fa-wave-square",      category: "simulation", color: "#00D4FF" },
  { name: "MATLAB / Simulink",   pct: 85, icon: "fa-solid fa-chart-line",       category: "simulation", color: "#00D4FF" },
  { name: "Altium Designer",     pct: 85, icon: "fa-solid fa-layer-group",      category: "simulation", color: "#00D4FF" },
  { name: "KiCad",               pct: 82, icon: "fa-solid fa-draw-polygon",     category: "simulation", color: "#00D4FF" },
  { name: "ADS",                 pct: 72, icon: "fa-solid fa-chart-area",       category: "simulation", color: "#00D4FF" },
  // rf & antenna
  { name: "RF Circuit Design (LNA/PA)", pct: 85, icon: "fa-solid fa-microchip", category: "rf",        color: "#7C5CFC" },
  { name: "Antenna Design",      pct: 88, icon: "fa-solid fa-satellite-dish",   category: "rf",         color: "#7C5CFC" },
  { name: "Microwave Engineering",pct:83, icon: "fa-solid fa-signal",           category: "rf",         color: "#7C5CFC" },
  { name: "PCB Design & Layout", pct: 87, icon: "fa-solid fa-circuit-board",    category: "rf",         color: "#7C5CFC" },
  { name: "S-Params / Smith Chart",pct:82,icon: "fa-solid fa-chart-pie",        category: "rf",         color: "#7C5CFC" },
  { name: "Impedance Matching",  pct: 80, icon: "fa-solid fa-arrows-to-dot",    category: "rf",         color: "#7C5CFC" },
  // hardware & power
  { name: "Power Electronics / BMS", pct: 85, icon: "fa-solid fa-bolt",        category: "hardware",   color: "#F59E0B" },
  { name: "Schematic Capture",   pct: 88, icon: "fa-solid fa-pen-ruler",        category: "hardware",   color: "#F59E0B" },
  { name: "Board Bring-up & Debug",pct:83,icon: "fa-solid fa-bug",              category: "hardware",   color: "#F59E0B" },
  { name: "CMOS VLSI (Electric)",pct: 72, icon: "fa-solid fa-microchip",        category: "hardware",   color: "#F59E0B" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "High-Gain Compact Patch Array Antenna",
    shortDesc: "Designed and fabricated multi-band microstrip patch antenna arrays (S-, Ku-, Ka-band) with AMC ground planes. Validated simulated RF performance against measured hardware results.",
    fullDesc: "As part of the SPIR Graduate Research program at Binghamton University, this ongoing project involves designing high-gain compact microstrip patch arrays targeting S-, Ku-, and Ka-band frequencies. Key research contributions include the design and optimization of Artificial Magnetic Conductor (AMC) unit cells integrated as ground planes to significantly enhance antenna gain and front-to-back ratio. Prototypes were fabricated and tested, with simulated and measured S-parameters (S11, S21, S22) compared for design validation.",
    tools: ["ANSYS HFSS", "MATLAB", "Altium Designer", "ADS"],
    category: "antenna",
    icon: "fa-solid fa-satellite-dish",
    bullets: [
      "Multi-band microstrip patch array: S-, Ku-, and Ka-band",
      "AMC unit cell design and integration as engineered ground plane",
      "Enhanced gain and improved front-to-back ratio with AMC",
      "Fabricated PCB prototypes and performed RF performance testing",
      "S-parameter correlation: simulated vs. measured (S11, S21, S22)",
      "SMA connector feed modeling for realistic transition behavior",
    ],
  },
  {
    id: 2,
    title: "2.4 GHz LNA Design — ATF-34143",
    shortDesc: "Simulated a 2.4 GHz Low Noise Amplifier using ATF-34143 in Qucs. Achieved S21 ≈ 16.8 dB, S11 ≈ −17 dB, S22 ≈ −21 dB with unconditional stability (K > 1).",
    fullDesc: "This project focused on the design and simulation of a 2.4 GHz Low Noise Amplifier using the ATF-34143 pHEMT device in Qucs. The design targeted unconditional stability and low noise figure while achieving useful gain. Input and output matching networks were designed using S-parameters and stability analysis. Ongoing work includes refining the input matching network and reducing lossy elements to further minimize the noise figure.",
    tools: ["Qucs", "LTspice", "MATLAB", "ATF-34143"],
    category: "rf",
    icon: "fa-solid fa-microchip",
    bullets: [
      "2.4 GHz LNA simulation using Qucs and ATF-34143 pHEMT",
      "Achieved S21 ≈ 16.8 dB gain",
      "S11 ≈ −17 dB and S22 ≈ −21 dB — well-matched input/output",
      "Unconditional stability confirmed: Rollett factor K > 1",
      "Input matching refinement underway to minimize noise figure",
      "Bias tee design (S11 ≈ −53 dB) for DC/RF signal separation",
    ],
  },
  {
    id: 3,
    title: "50-Ω Microstrip Transmission Line — HFSS",
    shortDesc: "Simulated a 50-Ω microstrip line on FR-4 substrate (h = 1.6 mm) with SMA edge-launch connectors in ANSYS HFSS. Analyzed reflection, resonance, and practical connector transition effects.",
    fullDesc: "This project explored the full-wave simulation of a 50-Ω controlled-impedance microstrip transmission line on an FR-4 dielectric substrate (h = 1.6 mm) using ANSYS HFSS. SMA edge-launch connectors were included in the model to capture realistic transition and reference-plane effects that are often overlooked when relying solely on ideal transmission line equations. The results demonstrated how line length, connector transitions, and reference plane placement affect S-parameter response, reflections, and resonance behavior.",
    tools: ["ANSYS HFSS", "MATLAB"],
    category: "rf",
    icon: "fa-solid fa-wave-square",
    bullets: [
      "Full-wave HFSS simulation of 50-Ω microstrip on FR-4 (h = 1.6 mm)",
      "SMA edge-launch connectors modeled for realistic RF transitions",
      "Analysis of reflection and resonance vs. line length",
      "Identified reference plane placement effects on S-parameter accuracy",
      "Correlated simulation results with ideal transmission line theory",
    ],
  },
  {
    id: 4,
    title: "12 V, 48 Ah Battery Management System",
    shortDesc: "Full hardware lifecycle: schematic capture, PCB layout, BMS assembly, and board-level testing for a 12 V 48 Ah Li-ion BMS at Sagar Semiconductors. Validated in a Toyota Innova test environment.",
    fullDesc: "Led the end-to-end design and validation of a 12 V, 48 Ah Li-ion Battery Management System for automotive auxiliary applications at Sagar Semiconductors. The BMS was designed for 100 A continuous operation, featuring MOSFET-based protection for overcurrent, overvoltage, and short-circuit conditions. PCB layout was completed in Altium Designer with careful component placement and thermal management. The final system was validated in a Toyota Innova test environment using oscilloscopes, multimeters, and programmable power supplies.",
    tools: ["Altium Designer", "LTspice", "Oscilloscope", "Multimeter"],
    category: "circuits",
    icon: "fa-solid fa-bolt",
    bullets: [
      "12 V, 48 Ah Li-ion BMS designed for 100 A continuous operation",
      "MOSFET-based protection: overcurrent, overvoltage, short-circuit",
      "Gate drive and current sensing circuit design",
      "Full PCB layout in Altium Designer with thermal management",
      "Board bring-up, debugging, and charge/discharge cycle verification",
      "Validated in Toyota Innova automotive test environment",
      "Technical documentation: test reports, updated schematics, BOMs",
    ],
  },
  {
    id: 5,
    title: "Isolated DC-DC Converter — 48 V to 12 V",
    shortDesc: "Designed and simulated a 48 V-to-12 V isolated DC-DC converter for automotive power applications. Correlated LTspice simulation results with hardware bench measurements.",
    fullDesc: "This project involved the design and validation of an isolated DC-DC converter intended to step down a 48 V battery bus to 12 V for automotive low-voltage loads. The switching frequency was selected considering MOSFET thermal limits and magnetics sizing. Inductor values were calculated analytically to limit ripple current. A full LTspice simulation model was built and output voltage regulation and ripple waveforms were compared against hardware bench measurements to validate design accuracy.",
    tools: ["LTspice", "Altium Designer", "MATLAB"],
    category: "circuits",
    icon: "fa-solid fa-plug",
    bullets: [
      "48 V-to-12 V isolated topology for automotive power applications",
      "Switching frequency selected based on MOSFET thermal and magnetics constraints",
      "Analytical inductor sizing to control output ripple current",
      "LTspice simulation model with output voltage and ripple analysis",
      "Hardware bench validation: simulation vs. measured results correlated",
      "Full design documentation: schematics, BOMs, and test reports",
    ],
  },
  {
    id: 6,
    title: "16-bit CMOS Accumulator — Electric VLSI",
    shortDesc: "Designed and laid out a 16-bit accumulator in Electric VLSI using four 4-bit ripple-carry adders and D flip-flops. Completed DRC, LVS, and multi-clock-cycle functional simulation.",
    fullDesc: "As the final project for the CMOS VLSI Design course at Binghamton University, this project involved the complete design and custom layout of a 16-bit accumulator. The schematic was built hierarchically using four 4-bit ripple-carry adders and a D flip-flop register bank. A full custom transistor-level layout was then implemented following MOSIS design rules, including multi-metal interconnect routing for the 16-bit datapath. DRC and LVS checks were performed to verify layout correctness, and functionality was validated across multiple clock cycles in simulation.",
    tools: ["Electric VLSI", "MOSIS Design Rules"],
    category: "research",
    icon: "fa-solid fa-microchip",
    bullets: [
      "Hierarchical schematic: four 4-bit ripple-carry adders + D flip-flop register bank",
      "Full custom transistor-level layout in Electric VLSI",
      "MOSIS design rules followed for fabrication-ready layout",
      "Multi-metal interconnect routing across the 16-bit datapath",
      "DRC and LVS checks passed for layout verification",
      "Functional simulation validated across multiple clock cycles",
    ],
  },
  {
    id: 7,
    title: "Sallen-Key Band-Pass Filter — LTspice",
    shortDesc: "Designed a 4th-order Sallen-Key band-pass filter in LTspice. Center frequency: 30 kHz, passband: 10–50 kHz. Achieved −32.5 dB attenuation at 15 Hz and −28.6 dB near 500 kHz.",
    fullDesc: "This project involved the design and AC analysis of a 4th-order Sallen-Key band-pass filter intended to isolate a 30 kHz signal from a composite noisy input (100 Hz + 30 kHz + 100 kHz). The filter combined active HPF and LPF Sallen-Key stages with a stage gain of K = 1.586. After correcting an RC mismatch, the filter met all specifications with nominal 0 dB passband gain. The project highlighted practical op-amp limitations such as finite gain-bandwidth product and the importance of stability analysis.",
    tools: ["LTspice", "MATLAB"],
    category: "circuits",
    icon: "fa-solid fa-wave-square",
    bullets: [
      "4th-order Sallen-Key BPF: center frequency 30 kHz",
      "Passband: 10 kHz – 50 kHz, unity gain (0 dB) in passband",
      "Stage gain K = 1.586 for Butterworth response",
      "−32.5 dB attenuation at 15 Hz, −28.6 dB near 500 kHz",
      "Op-amp supply: ±12 V; finite GBW effects analyzed",
      "RC mismatch correction and stability verification completed",
    ],
  },
  {
    id: 8,
    title: "Wireless Power Transfer for EV — BVRIT",
    shortDesc: "Developed a wireless inductive charging system for EVs at BVRIT. Analyzed inductive coupling efficiency, power transfer vs. distance, and validated a working prototype.",
    fullDesc: "Developed as part of undergraduate research at BV Raju Institute of Technology, this project designed and tested a wireless charging system for electric vehicles based on inductive power transfer (IPT). The system focused on optimizing coil geometry and resonant frequency matching to maximize power transfer efficiency over practical air gaps. A working prototype was built and tested, with efficiency and power transfer characterization performed as a function of coupling distance.",
    tools: ["MATLAB", "Prototype Hardware", "Power Electronics"],
    category: "research",
    icon: "fa-solid fa-wifi",
    bullets: [
      "Inductive power transfer system designed for EV wireless charging",
      "Coil geometry and resonant frequency optimization",
      "Power transfer efficiency vs. coupling distance characterization",
      "Prototype development and bench testing",
      "Real-world application analysis for charging station deployment",
    ],
  },
  {
    id: 9,
    title: "Small-Signal Amplifier — LTspice",
    shortDesc: "Designed and simulated a BJT small-signal amplifier in LTspice. Achieved ≈ 66 dB gain with stable bias, AC frequency response, and bandwidth characterization.",
    fullDesc: "This project involved the design and simulation of a BJT small-signal amplifier in LTspice. The primary focus was on establishing a stable DC operating point through bias network design, followed by AC analysis to characterize gain and frequency response. The simulation achieved a gain of approximately 66 dB, providing hands-on insight into transistor operation, small-signal models, and analog design fundamentals. The project reinforced understanding of how biasing affects bandwidth and gain stability.",
    tools: ["LTspice"],
    category: "circuits",
    icon: "fa-solid fa-chart-line",
    bullets: [
      "BJT small-signal amplifier designed and biased in LTspice",
      "DC operating point stability analysis via bias network design",
      "AC analysis across frequency — gain ≈ 66 dB achieved",
      "Frequency response characterization: bandwidth and roll-off",
      "Explored impact of biasing on gain, bandwidth, and stability",
    ],
  },
  {
    id: 10,
    title: "Electric Go-Kart — Team Lead (BVRIT)",
    shortDesc: "Led a team of 25 to design and manufacture a competition-winning electric go-kart at BVRIT. Delivered integrated powertrain, BMS, and chassis engineering.",
    fullDesc: "As team leader of a 25-member group at BV Raju Institute of Technology under Prof. Dr. Rayudu, this project involved the full design and manufacture of a high-performance electric go-kart. The project blended power electronics, vehicle dynamics, and energy management. Key engineering deliverables included the electric drivetrain with optimized power distribution, a Li-ion battery pack with BMS integration for real-time charge monitoring, and a lightweight chassis engineered for speed and stability. The team's design won the competition.",
    tools: ["Power Electronics", "BMS", "Embedded Systems", "Mechanical Design"],
    category: "research",
    icon: "fa-solid fa-car-battery",
    bullets: [
      "Led team of 25 engineers from concept to competition-winning vehicle",
      "Designed and integrated an efficient electric drivetrain and power distribution system",
      "Implemented Li-ion battery pack with real-time BMS monitoring",
      "Engineered lightweight chassis with aerodynamics focus for speed and stability",
      "Coordinated across power electronics, embedded, and mechanical sub-teams",
      "First-place finish at the inter-college electric vehicle competition",
    ],
  },
];

const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Graduate Research Assistant — RF & Antenna Systems",
    company: "Binghamton University — SPIR Program",
    location: "Binghamton, NY",
    date: "Aug 2025 – Present",
    bullets: [
      "Designing and simulating high-gain compact microstrip patch antenna arrays (S-, Ku-, Ka-band) with AMC ground planes for enhanced gain and front-to-back ratio",
      "Performing LNA and PA design with focus on gain optimization and impedance matching techniques",
      "Fabricating and testing RF PCB prototypes; correlating simulated vs. measured S-parameters (S11, S21, S22)",
      "Designing PCB layouts for RF circuits with careful attention to grounding, transmission line routing, and parasitic mitigation",
      "Generating MATLAB scripts for simulation post-processing and preparing structured technical reports for faculty and research team",
    ],
    tags: ["ANSYS HFSS", "LTspice", "MATLAB", "Altium Designer", "LNA/PA", "RF PCB", "S-Parameters"],
    placeholder: false,
  },
  {
    id: 2,
    title: "Power Electronics Engineer (Field Application Engineer)",
    company: "Sagar Semiconductors",
    location: "Hyderabad, India",
    date: "May 2024 – June 2025",
    bullets: [
      "Designed a 12 V, 48 Ah Battery Management System (BMS) for 100 A operation — authored schematics, performed component selection, and completed PCB layout in Altium Designer",
      "Performed board bring-up, hands-on soldering/de-soldering of SMD and through-hole components, and iterative debugging of circuit faults",
      "Validated BMS design using oscilloscopes, multimeters, and programmable power supplies in a Toyota Innova test environment",
      "Designed and simulated a 48 V-to-12 V isolated DC-DC converter in LTspice; correlated simulation results with hardware bench measurements",
      "Delivered technical presentations to customers on product capabilities; supported pre-sale and post-sale engineering engagements",
      "Produced comprehensive documentation: test reports, updated schematics, BOMs, and design change records ensuring full traceability",
    ],
    tags: ["Altium Designer", "KiCad", "LTspice", "BMS", "DC-DC Converter", "PCB Design", "Board Bring-up"],
    placeholder: false,
  },
  {
    id: 3,
    title: "Electrical Engineering Intern",
    company: "TSSPDCL — 132 kV / 33 kV Substation",
    location: "Hyderabad, India",
    date: "Jan 2021 – July 2021",
    bullets: [
      "Assisted senior engineers in operation and monitoring of high-voltage substation equipment: transformers, circuit breakers, and protective relays",
      "Conducted field inspections and electrical measurements (multimeter, clamp meter, insulation tester) to support maintenance logs",
      "Documented technical observations and contributed to maintenance reports and engineering records",
      "Developed working familiarity with substation single-line diagrams and professional engineering drawing conventions",
    ],
    tags: ["High-Voltage Systems", "Substation Operations", "Electrical Measurements", "Technical Documentation"],
    placeholder: false,
  },
];

/* ── 2. HERO CANVAS ANIMATION (RF Sine Waves) ────────────── */

function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H;
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Wave definitions
  const waves = [
    { amp: 55,  freq: 0.012, speed: 0.018, phase: 0,    alpha: 0.18, color: "#00D4FF" },
    { amp: 35,  freq: 0.020, speed: 0.025, phase: 1.5,  alpha: 0.12, color: "#7C5CFC" },
    { amp: 22,  freq: 0.030, speed: 0.032, phase: 3.0,  alpha: 0.08, color: "#00D4FF" },
    { amp: 65,  freq: 0.008, speed: 0.010, phase: 0.8,  alpha: 0.10, color: "#F59E0B" },
  ];

  // Floating particles
  const particles = Array.from({ length: 38 }, () => ({
    x: Math.random() * 1200,
    y: Math.random() * 800,
    r: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.4 + 0.1,
  }));

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Radial gradient background glow
    const grd = ctx.createRadialGradient(W * 0.55, H * 0.5, 0, W * 0.55, H * 0.5, W * 0.55);
    grd.addColorStop(0, "rgba(0,212,255,0.04)");
    grd.addColorStop(1, "transparent");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // Draw sine waves spanning full width
    waves.forEach((w) => {
      w.phase += w.speed;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = H / 2 + Math.sin(x * w.freq + w.phase) * w.amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = w.color;
      ctx.globalAlpha = w.alpha;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    // Particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#00D4FF";
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    t++;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── 3. NAVBAR ───────────────────────────────────────────── */

function initNavbar() {
  const navbar   = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const drawer   = document.getElementById("mobileDrawer");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll → sticky style + active link highlighting
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);

    // Back-to-top visibility
    document.getElementById("backTop").classList.toggle("visible", window.scrollY > 400);

    // Active nav link based on viewport
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  });

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    drawer.classList.toggle("open");
  });

  // Close drawer on mobile link click
  document.querySelectorAll(".mob-link").forEach((a) => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      drawer.classList.remove("open");
    });
  });

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Back-to-top button
  document.getElementById("backTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Footer year
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

/* ── 4. SCROLL REVEAL (Intersection Observer) ────────────── */

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Trigger skill bar fill on first reveal
          if (entry.target.closest("#skillsGrid")) {
            const fill = entry.target.querySelector(".skill-bar-fill");
            if (fill && !fill.style.width) {
              fill.style.width = fill.dataset.pct + "%";
            }
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
    observer.observe(el);
  });
}

/* ── 5. SKILLS ───────────────────────────────────────────── */

function renderSkills(filter = "all") {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === filter);

  filtered.forEach((skill, i) => {
    const card = document.createElement("div");
    card.className = "skill-card reveal";
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="skill-top">
        <div class="skill-name-wrap">
          <div class="skill-icon"><i class="${skill.icon}"></i></div>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-pct">${skill.pct}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-pct="${skill.pct}"
          style="background: linear-gradient(90deg, ${skill.color}, ${skill.color}88);"></div>
      </div>
      <span class="skill-category-tag">${skill.category}</span>
    `;
    grid.appendChild(card);
  });

  // Re-observe new cards
  initScrollReveal();
}

function initSkillsTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(btn.dataset.tab);
    });
  });
}

/* ── 6. PROJECTS ─────────────────────────────────────────── */

let currentFilter = "all";
let currentSearch = "";

function renderProjects() {
  const grid    = document.getElementById("projectsGrid");
  const noMsg   = document.getElementById("noResults");
  const countEl = document.getElementById("totalProjects");

  const search  = currentSearch.toLowerCase();
  const filtered = PROJECTS_DATA.filter((p) => {
    const matchFilter = currentFilter === "all" || p.category === currentFilter;
    const matchSearch =
      p.title.toLowerCase().includes(search) ||
      p.shortDesc.toLowerCase().includes(search) ||
      p.tools.some((t) => t.toLowerCase().includes(search));
    return matchFilter && matchSearch;
  });

  countEl.textContent = filtered.length;
  grid.innerHTML = "";

  if (!filtered.length) {
    noMsg.style.display = "block";
    return;
  }
  noMsg.style.display = "none";

  filtered.forEach((proj, i) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.style.animationDelay = `${i * 0.08}s`;

    const catLabel = proj.category.charAt(0).toUpperCase() + proj.category.slice(1);

    card.innerHTML = `
      <div class="proj-card-top">
        <div class="proj-icon"><i class="${proj.icon}"></i></div>
        <span class="proj-category cat-${proj.category}">${catLabel}</span>
      </div>
      <h3 class="proj-title">${proj.title}</h3>
      <p class="proj-desc">${proj.shortDesc}</p>
      <div class="proj-tools">
        ${proj.tools.map((t) => `<span class="tool-tag">${t}</span>`).join("")}
      </div>
      <div class="proj-footer">
        <button class="proj-view-btn" data-id="${proj.id}">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> View Details
        </button>
      </div>
    `;

    // View Details button
    card.querySelector(".proj-view-btn").addEventListener("click", () => openModal(proj.id));
    grid.appendChild(card);
  });

  initScrollReveal();
}

function initProjectControls() {
  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  // Search bar
  document.getElementById("projSearch").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProjects();
  });
}

/* ── 7. PROJECT MODAL ────────────────────────────────────── */

function openModal(id) {
  const proj    = PROJECTS_DATA.find((p) => p.id === id);
  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");
  if (!proj) return;

  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.2rem;">
      <div class="proj-icon"><i class="${proj.icon}"></i></div>
      <span class="proj-category cat-${proj.category}" style="font-size:0.78rem;">
        ${proj.category.charAt(0).toUpperCase() + proj.category.slice(1)}
      </span>
    </div>
    <h3>${proj.title}</h3>
    <p>${proj.fullDesc}</p>
    <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--accent-cyan);margin-top:1.2rem;">
      Key Highlights
    </p>
    <ul>${proj.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    <p style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--accent-cyan);margin-top:1.2rem;">
      Tools &amp; Technologies
    </p>
    <div class="proj-tools" style="margin-top:0.5rem;">
      ${proj.tools.map((t) => `<span class="tool-tag">${t}</span>`).join("")}
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function initModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ── 8. EXPERIENCE TIMELINE ──────────────────────────────── */

function renderExperience() {
  const timeline = document.getElementById("expTimeline");
  timeline.innerHTML = "";

  EXPERIENCE_DATA.forEach((exp, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.style.transitionDelay = `${i * 0.12}s`;

    if (exp.placeholder) {
      item.innerHTML = `
        <div class="timeline-dot placeholder"></div>
        <div class="exp-placeholder">
          <i class="fa-regular fa-clock"></i>
          <p>${exp.placeholderText}</p>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="exp-card">
          <div class="exp-header">
            <div>
              <h3 class="exp-title">${exp.title}</h3>
              <p class="exp-company">${exp.company}</p>
              <p class="exp-location"><i class="fa-solid fa-location-dot"></i>${exp.location}</p>
            </div>
            <span class="exp-date">${exp.date}</span>
          </div>
          <ul class="exp-bullets">
            ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
          <div class="exp-tags">
            ${exp.tags.map((t) => `<span class="exp-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
    }
    timeline.appendChild(item);
  });
}

/* ── 9. CONTACT FORM ─────────────────────────────────────── */

function initContactForm() {
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name    = document.getElementById("formName").value.trim();
    const email   = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !email || !message) {
      // Simple shake animation on empty fields
      [document.getElementById("formName"),
       document.getElementById("formEmail"),
       document.getElementById("formMessage")].forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = "#ef4444";
          setTimeout(() => (field.style.borderColor = ""), 1600);
        }
      });
      return;
    }

    // Simulate send (replace with backend/EmailJS/Formspree as needed)
    const btn = form.querySelector(".btn-primary");
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      success.classList.add("show");
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      btn.disabled = false;
      setTimeout(() => success.classList.remove("show"), 5000);
    }, 1400);
  });
}

/* ── 10. STAGGER REVEAL for hero ─────────────────────────── */

function heroEntrance() {
  const heroItems = document.querySelectorAll(".hero .reveal");
  heroItems.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200 + i * 220);
  });
}

/* ── 11. TYPEWRITER ANIMATION ────────────────────────────── */

function initTypewriter() {
  const roles = [
    "Graduate Research Assistant",
    "RF & Microwave Engineer",
    "Antenna Design Researcher",
    "PCB & Hardware Designer",
    "Power Electronics Engineer",
  ];
  const el = document.getElementById("typewriterText");
  if (!el) return;

  let roleIdx  = 0;
  let charIdx  = 0;
  let deleting = false;
  let paused   = false;

  function tick() {
    const current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        paused = true;
        setTimeout(() => { paused = false; deleting = true; }, 2000);
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting  = false;
        roleIdx   = (roleIdx + 1) % roles.length;
      }
    }

    if (!paused) {
      const speed = deleting ? 40 : 75;
      setTimeout(tick, speed);
    }
  }

  // Start after hero entrance
  setTimeout(tick, 900);
}

/* ── 12. ANIMATED STAT COUNTERS ──────────────────────────── */

function animateCounter(el, target, suffix = "", duration = 1200) {
  const isFloat   = String(target).includes(".");
  const start     = 0;
  const startTime = performance.now();

  function update(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const ease     = 1 - Math.pow(1 - progress, 3);
    const value    = start + (target - start) * ease;

    el.textContent = isFloat
      ? value.toFixed(1) + suffix
      : Math.round(value) + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  // Hero stats
  const heroCounters = [
    { selector: ".hero-stats .stat-num", targets: ["10+", "3", "3.7"] },
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Hero stats section
      if (entry.target.classList.contains("hero-stats")) {
        const nums = entry.target.querySelectorAll(".stat-num");
        nums.forEach((el) => {
          const raw    = el.textContent.replace(/[^0-9.]/g, "");
          const suffix = el.textContent.replace(/[0-9.]/g, "");
          if (raw) animateCounter(el, parseFloat(raw), suffix);
        });
        observer.unobserve(entry.target);
      }

      // Dashboard stat sections
      if (entry.target.classList.contains("dash-stats")) {
        const nums = entry.target.querySelectorAll(".dash-num");
        nums.forEach((el) => {
          const raw = parseFloat(el.textContent.replace(/[^0-9.]/g, ""));
          if (!isNaN(raw) && raw > 0) {
            const suffix = el.textContent.replace(/[0-9.]/g, "").trim();
            animateCounter(el, raw, suffix);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll(".hero-stats, .dash-stats").forEach((el) => {
    observer.observe(el);
  });
}

/* ── 13. NAV LINK FONT FIT ───────────────────────────────── */

function fitNavLinks() {
  const links = document.querySelectorAll(".nav-link");
  // Slightly reduce padding at mid sizes if nav overflows
  const nav = document.querySelector(".nav-links");
  if (!nav) return;
  function check() {
    const overflow = nav.scrollWidth > nav.clientWidth;
    links.forEach((l) => {
      l.style.padding = overflow ? "0.5rem 0.55rem" : "";
      l.style.fontSize = overflow ? "0.76rem" : "";
    });
  }
  check();
  window.addEventListener("resize", check);
}

/* ── 14. INITIALISE ALL ──────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initHeroCanvas();
  initNavbar();
  fitNavLinks();

  // Render data-driven sections
  renderSkills();
  renderProjects();
  renderExperience();

  // Controls & interactions
  initSkillsTabs();
  initProjectControls();
  initModal();
  initContactForm();

  // Animations
  heroEntrance();
  initTypewriter();
  initCounters();
  initScrollReveal();
});
