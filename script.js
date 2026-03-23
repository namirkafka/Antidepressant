const medicationSelect = document.getElementById("medication-select");
const timelineInput = document.getElementById("timeline");
const doseStrengthInput = document.getElementById("dose-strength");
const stressLevelInput = document.getElementById("stress-level");
const weekLabel = document.getElementById("week-label");
const timelineDescription = document.getElementById("timeline-description");
const doseLabel = document.getElementById("dose-label");
const doseDescription = document.getElementById("dose-description");
const stressLabel = document.getElementById("stress-label");
const stressDescription = document.getElementById("stress-description");
const resetButton = document.getElementById("reset-model");
const treatmentName = document.getElementById("treatment-name");
const treatmentDescription = document.getElementById("treatment-description");
const treatmentExamples = document.getElementById("treatment-examples");
const chemicalSummary = document.getElementById("chemical-summary");
const chemicalSerotoninFill = document.getElementById("chemical-serotonin-fill");
const chemicalNorepinephrineFill = document.getElementById("chemical-norepinephrine-fill");
const chemicalDopamineFill = document.getElementById("chemical-dopamine-fill");
const chemicalSerotoninValue = document.getElementById("chemical-serotonin-value");
const chemicalNorepinephrineValue = document.getElementById("chemical-norepinephrine-value");
const chemicalDopamineValue = document.getElementById("chemical-dopamine-value");
const chemicalName = document.getElementById("chemical-name");
const chemicalDescription = document.getElementById("chemical-description");
const chemicalPlain = document.getElementById("chemical-plain");
const chemicalConnect = document.getElementById("chemical-connect");
const chemicalGroups = Array.from(document.querySelectorAll(".chemical-bar"));
const headlineSummary = document.getElementById("headline-summary");
const whySummary = document.getElementById("why-summary");
const onsetWindow = document.getElementById("onset-window");
const classSummary = document.getElementById("class-summary");
const regionName = document.getElementById("region-name");
const regionEffect = document.getElementById("region-effect");
const regionLevel = document.getElementById("region-level");
const regionDirection = document.getElementById("region-direction");
const regionPlain = document.getElementById("region-plain");
const timelineStrip = document.getElementById("timeline-strip");
const regionGroups = Array.from(document.querySelectorAll(".region-group"));

const regionMeta = {
  prefrontal: {
    name: "Prefrontal cortex",
    description: "Helps with focus and emotional control.",
    direction: "More stable regulation",
    plain: "Better focus and less spiraling.",
  },
  amygdala: {
    name: "Amygdala",
    description: "Acts like the brain's alarm system.",
    direction: "Less threat reactivity",
    plain: "Less panic and dread.",
  },
  hippocampus: {
    name: "Hippocampus",
    description: "Supports memory and stress recovery.",
    direction: "Stronger stress adaptation",
    plain: "Better recovery after stress.",
  },
  striatum: {
    name: "Striatum",
    description: "Supports motivation and reward.",
    direction: "Improved reward drive",
    plain: "More interest and drive.",
  },
  insula: {
    name: "Insula",
    description: "Tracks body tension and internal state.",
    direction: "Reduced distress bias",
    plain: "Less keyed-up body tension.",
  },
};

const chemicalMeta = {
  serotonin: {
    name: "Serotonin",
    description: "Often linked to mood balance, worry, and emotional steadiness.",
    plain: "Often discussed in depression and anxiety treatment.",
    connect: "Mood balance and emotional regulation.",
  },
  norepinephrine: {
    name: "Norepinephrine",
    description: "Often linked to alertness, energy, and the stress response.",
    plain: "Can relate to drive, alertness, and feeling mentally switched on.",
    connect: "Stress response, arousal, and energy.",
  },
  dopamine: {
    name: "Dopamine",
    description: "Often linked to reward, motivation, and interest.",
    plain: "Can relate to wanting, drive, and the sense that things feel worth doing.",
    connect: "Reward, motivation, and pleasure.",
  },
};

const medicationProfiles = {
  ssri: {
    label: "SSRI",
    helper: "Common first-line antidepressants that mainly affect serotonin.",
    examples: "Examples: sertraline, fluoxetine, escitalopram",
    chemicals: { serotonin: "main", norepinephrine: "low", dopamine: "low" },
    chemicalSummary: "This class mainly targets serotonin first. The system bars below show what that may influence next.",
    onset: "2 to 6 weeks",
    summary: "Often dampens threat reactivity and supports mood stabilization.",
    intensity: {
      prefrontal: [0.32, 0.36, 0.42, 0.47, 0.53, 0.58, 0.61, 0.64, 0.67, 0.69, 0.71, 0.73, 0.75],
      amygdala: [0.25, 0.31, 0.39, 0.46, 0.54, 0.61, 0.65, 0.68, 0.7, 0.73, 0.75, 0.76, 0.78],
      hippocampus: [0.21, 0.25, 0.29, 0.34, 0.4, 0.45, 0.5, 0.55, 0.59, 0.63, 0.66, 0.68, 0.7],
      striatum: [0.19, 0.2, 0.22, 0.26, 0.31, 0.35, 0.39, 0.42, 0.45, 0.48, 0.5, 0.51, 0.53],
      insula: [0.28, 0.31, 0.36, 0.41, 0.46, 0.51, 0.56, 0.59, 0.62, 0.65, 0.67, 0.68, 0.69],
    },
  },
  snri: {
    label: "SNRI",
    helper: "Antidepressants that affect serotonin and norepinephrine.",
    examples: "Examples: venlafaxine, duloxetine, desvenlafaxine",
    chemicals: { serotonin: "main", norepinephrine: "main", dopamine: "low" },
    chemicalSummary: "This class mainly targets serotonin and norepinephrine. That can show up below in mood, stress, and energy-related systems.",
    onset: "2 to 6 weeks",
    summary: "Targets serotonin and norepinephrine systems, often affecting mood, arousal, and pain processing.",
    intensity: {
      prefrontal: [0.34, 0.39, 0.44, 0.5, 0.56, 0.61, 0.66, 0.69, 0.72, 0.74, 0.76, 0.78, 0.79],
      amygdala: [0.24, 0.29, 0.36, 0.42, 0.49, 0.56, 0.61, 0.65, 0.68, 0.7, 0.72, 0.73, 0.74],
      hippocampus: [0.22, 0.27, 0.31, 0.37, 0.44, 0.5, 0.56, 0.61, 0.65, 0.68, 0.7, 0.72, 0.74],
      striatum: [0.25, 0.28, 0.32, 0.37, 0.42, 0.47, 0.52, 0.56, 0.6, 0.63, 0.65, 0.67, 0.69],
      insula: [0.26, 0.3, 0.34, 0.39, 0.44, 0.48, 0.53, 0.57, 0.61, 0.64, 0.66, 0.68, 0.7],
    },
  },
  atypical: {
    label: "Atypical",
    helper: "A mixed group of antidepressants that work in different ways.",
    examples: "Examples: bupropion, mirtazapine, trazodone",
    chemicals: { serotonin: "some", norepinephrine: "some", dopamine: "main" },
    chemicalSummary: "This mixed class works in different ways. Dopamine can matter more here, especially for reward and motivation.",
    onset: "1 to 4 weeks",
    summary: "Mechanisms vary, but some atypical agents show earlier effects on drive, energy, or reward processing.",
    intensity: {
      prefrontal: [0.29, 0.34, 0.4, 0.46, 0.52, 0.57, 0.61, 0.64, 0.66, 0.68, 0.7, 0.71, 0.72],
      amygdala: [0.2, 0.24, 0.29, 0.35, 0.4, 0.46, 0.52, 0.56, 0.59, 0.61, 0.63, 0.64, 0.65],
      hippocampus: [0.18, 0.21, 0.25, 0.3, 0.36, 0.41, 0.47, 0.52, 0.57, 0.6, 0.63, 0.65, 0.67],
      striatum: [0.3, 0.35, 0.41, 0.48, 0.55, 0.61, 0.65, 0.69, 0.72, 0.74, 0.76, 0.77, 0.78],
      insula: [0.24, 0.27, 0.31, 0.36, 0.41, 0.46, 0.5, 0.54, 0.57, 0.59, 0.61, 0.62, 0.63],
    },
  },
  tricyclic: {
    label: "Tricyclic",
    helper: "Older antidepressants with broader effects across brain signaling systems.",
    examples: "Examples: amitriptyline, nortriptyline, imipramine",
    chemicals: { serotonin: "main", norepinephrine: "main", dopamine: "low" },
    chemicalSummary: "This class mainly targets serotonin and norepinephrine, but with broader effects than newer classes.",
    onset: "2 to 6 weeks",
    summary: "Older agents with broader receptor effects that can influence mood, pain, sleep, and autonomic tone.",
    intensity: {
      prefrontal: [0.33, 0.37, 0.42, 0.48, 0.54, 0.58, 0.62, 0.65, 0.68, 0.7, 0.72, 0.73, 0.74],
      amygdala: [0.23, 0.28, 0.34, 0.4, 0.47, 0.54, 0.59, 0.63, 0.66, 0.68, 0.7, 0.71, 0.72],
      hippocampus: [0.2, 0.24, 0.29, 0.34, 0.4, 0.47, 0.53, 0.58, 0.62, 0.65, 0.68, 0.69, 0.71],
      striatum: [0.22, 0.25, 0.29, 0.34, 0.39, 0.44, 0.49, 0.53, 0.56, 0.59, 0.61, 0.63, 0.64],
      insula: [0.27, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.58, 0.61, 0.64, 0.66, 0.67, 0.68],
    },
  },
};

const timelineCards = [
  {
    title: "Hours to days",
    description: "Neurochemical levels shift quickly, but subjective mood change is usually limited this early.",
    range: [0, 1],
  },
  {
    title: "Weeks 1 to 2",
    description: "Emotional bias and stress reactivity can begin to soften before a full mood response is obvious.",
    range: [2, 3],
  },
  {
    title: "Weeks 3 to 6",
    description: "Clinical improvement often becomes more noticeable as regulation networks adapt.",
    range: [4, 6],
  },
  {
    title: "Weeks 7 to 12",
    description: "Sustained changes may include improved resilience, motivation, and cognitive flexibility.",
    range: [7, 12],
  },
];

let selectedRegion = "prefrontal";
let selectedChemical = "serotonin";

function intensityToLabel(value) {
  if (value < 0.4) return "Lower";
  if (value < 0.65) return "Moderate";
  return "Stronger";
}

function weekNarrative(week) {
  if (week <= 1) return "Initial neurochemical changes happen quickly, but symptom relief is often not yet obvious.";
  if (week <= 3) return "Early adaptation phase with subtle shifts in emotional regulation.";
  if (week <= 6) return "Typical clinical response window, with clearer mood and stress changes for some people.";
  return "Later consolidation phase, where sustained benefits and neuroplastic changes may become more apparent.";
}

function describeDose(value) {
  if (value <= 1) {
    return {
      label: "Lower example",
      description: "A lighter example, not a real prescription recommendation.",
      modifier: -0.08,
    };
  }

  if (value === 2) {
    return {
      label: "Typical example",
      description: "A simple middle example, not a real prescription recommendation.",
      modifier: 0,
    };
  }

  return {
    label: "Higher example",
    description: "A stronger example, not a real prescription recommendation.",
    modifier: 0.08,
  };
}

function describeStress(value) {
  if (value < 35) {
    return {
      label: "Lower stress load",
      description: "A calmer starting point.",
      amygdala: -0.06,
      insula: -0.04,
      hippocampus: 0.02,
    };
  }

  if (value < 70) {
    return {
      label: "Elevated stress load",
      description: "More stress in the system.",
      amygdala: 0.03,
      insula: 0.03,
      hippocampus: 0,
    };
  }

  return {
    label: "High stress load",
    description: "Heavy stress burden.",
    amygdala: 0.07,
    insula: 0.07,
    hippocampus: -0.02,
  };
}

function clamp(value, min = 0.12, max = 0.88) {
  return Math.min(max, Math.max(min, value));
}

function computeRegionValue(profile, region, week, settings) {
  const base = profile.intensity[region][week];
  const doseEffect = settings.dose.modifier;
  const stressEffect =
    region === "amygdala"
      ? settings.stress.amygdala
      : region === "insula"
        ? settings.stress.insula
        : region === "hippocampus"
          ? settings.stress.hippocampus
          : 0;

  return clamp(base + doseEffect + stressEffect);
}

function buildHeadlineSummary(strongestRegion) {
  if (strongestRegion === "prefrontal") return "Focus / control system";
  if (strongestRegion === "amygdala") return "Alarm / anxiety system";
  if (strongestRegion === "hippocampus") return "Recovery / memory system";
  if (strongestRegion === "striatum") return "Reward / motivation system";
  if (strongestRegion === "insula") return "Body tension system";
  return "Balanced mood systems";
}

function buildWhySummary(week, dose, stress, strongestRegion) {
  const stageText = week <= 1 ? "very early treatment" : week <= 6 ? "the early response window" : "later treatment";
  const regionText = regionMeta[strongestRegion].name;

  return `Why: ${stageText}, ${dose.label.toLowerCase()}, and ${stress.label.toLowerCase()} make ${regionText} stand out most in this example.`;
}

function chemicalLevelDetails(level) {
  if (level === "main") return { height: "84%", label: "Main" };
  if (level === "some") return { height: "58%", label: "Some" };
  return { height: "30%", label: "Small" };
}

function strongestChemicalKey(profile) {
  const order = { low: 1, some: 2, main: 3 };
  return Object.entries(profile.chemicals).sort((a, b) => order[b[1]] - order[a[1]])[0][0];
}

function updateChemicalSignals(profile) {
  const serotonin = chemicalLevelDetails(profile.chemicals.serotonin);
  const norepinephrine = chemicalLevelDetails(profile.chemicals.norepinephrine);
  const dopamine = chemicalLevelDetails(profile.chemicals.dopamine);
  const availableChemicals = Object.keys(profile.chemicals);

  if (!availableChemicals.includes(selectedChemical)) {
    selectedChemical = strongestChemicalKey(profile);
  }

  const featuredChemical = chemicalMeta[selectedChemical];

  chemicalSerotoninFill.style.height = serotonin.height;
  chemicalNorepinephrineFill.style.height = norepinephrine.height;
  chemicalDopamineFill.style.height = dopamine.height;
  chemicalSerotoninValue.textContent = serotonin.label;
  chemicalNorepinephrineValue.textContent = norepinephrine.label;
  chemicalDopamineValue.textContent = dopamine.label;
  chemicalSummary.textContent = profile.chemicalSummary;
  chemicalName.textContent = featuredChemical.name;
  chemicalDescription.textContent = featuredChemical.description;
  chemicalPlain.textContent = featuredChemical.plain;
  chemicalConnect.textContent = featuredChemical.connect;

  chemicalGroups.forEach((group) => {
    const isActive = group.dataset.chemical === selectedChemical;
    group.classList.toggle("active", isActive);
    group.setAttribute("aria-pressed", String(isActive));
    group.setAttribute("aria-label", `${chemicalMeta[group.dataset.chemical].name}, ${chemicalLevelDetails(profile.chemicals[group.dataset.chemical]).label} effect`);
  });
}

function renderTimeline(week) {
  timelineStrip.innerHTML = "";

  timelineCards.forEach((card) => {
    const element = document.createElement("article");
    const active = week >= card.range[0] && week <= card.range[1];

    element.className = `timeline-card${active ? " active" : ""}`;
    element.innerHTML = `<strong>${card.title}</strong><p>${card.description}</p>`;
    timelineStrip.appendChild(element);
  });
}

function updateRegionCard(values) {
  const meta = regionMeta[selectedRegion];
  const value = values[selectedRegion];

  regionName.textContent = meta.name;
  regionEffect.textContent = meta.description;
  regionLevel.textContent = intensityToLabel(value);
  regionDirection.textContent = meta.direction;
  regionPlain.textContent = meta.plain;
}

function updateVisualization() {
  const medication = medicationSelect.value;
  const week = Number(timelineInput.value);
  const doseValue = Number(doseStrengthInput.value);
  const stressValue = Number(stressLevelInput.value);
  const profile = medicationProfiles[medication];
  const dose = describeDose(doseValue);
  const stress = describeStress(stressValue);
  const settings = { dose, stress };
  const values = {};

  weekLabel.textContent = `Week ${week}`;
  timelineDescription.textContent = weekNarrative(week);
  doseLabel.textContent = dose.label;
  doseDescription.textContent = dose.description;
  stressLabel.textContent = stress.label;
  stressDescription.textContent = stress.description;
  treatmentName.textContent = profile.label;
  treatmentDescription.textContent = profile.helper;
  treatmentExamples.textContent = profile.examples;
  updateChemicalSignals(profile);
  onsetWindow.textContent = profile.onset;
  classSummary.textContent = profile.summary;

  let strongestRegion = "prefrontal";
  let highestValue = -Infinity;

  regionGroups.forEach((group) => {
    const region = group.dataset.region;
    const value = computeRegionValue(profile, region, week, settings);
    const barFill = group.querySelector(".bar-fill");
    const barValue = group.querySelector(".bar-value");

    values[region] = value;

    barFill.style.height = `${Math.round(value * 100)}%`;
    barValue.textContent = intensityToLabel(value);
    group.classList.toggle("active", region === selectedRegion);
    group.setAttribute("aria-pressed", String(region === selectedRegion));
    group.setAttribute(
      "aria-label",
      `${regionMeta[region].name} region, ${intensityToLabel(value).toLowerCase()} effect level`
    );

    if (value > highestValue) {
      highestValue = value;
      strongestRegion = region;
    }
  });

  headlineSummary.textContent = buildHeadlineSummary(strongestRegion);
  whySummary.textContent = buildWhySummary(week, dose, stress, strongestRegion);
  updateRegionCard(values);
  renderTimeline(week);
}

regionGroups.forEach((group) => {
  group.addEventListener("click", () => {
    selectedRegion = group.dataset.region;
    updateVisualization();
  });

  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectedRegion = group.dataset.region;
      updateVisualization();
    }
  });
});

chemicalGroups.forEach((group) => {
  group.addEventListener("click", () => {
    selectedChemical = group.dataset.chemical;
    updateVisualization();
  });
});

medicationSelect.addEventListener("change", updateVisualization);
timelineInput.addEventListener("input", updateVisualization);
doseStrengthInput.addEventListener("input", updateVisualization);
stressLevelInput.addEventListener("input", updateVisualization);
resetButton.addEventListener("click", () => {
  medicationSelect.value = "ssri";
  timelineInput.value = "4";
  doseStrengthInput.value = "2";
  stressLevelInput.value = "60";
  selectedRegion = "prefrontal";
  selectedChemical = "serotonin";
  updateVisualization();
});

updateVisualization();
