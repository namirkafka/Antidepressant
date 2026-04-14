// ── DOM refs ─────────────────────────────────────────────────────────────────
const medicationSelect      = document.getElementById("medication-select");
const timelineInput         = document.getElementById("timeline");
const doseStrengthInput     = document.getElementById("dose-strength");
const stressLevelInput      = document.getElementById("stress-level");
const weekLabel             = document.getElementById("week-label");
const timelineDescription   = document.getElementById("timeline-description");
const treatmentName         = document.getElementById("treatment-name");
const treatmentDescription  = document.getElementById("treatment-description");
const treatmentExamples     = document.getElementById("treatment-examples");
const chemicalSummary       = document.getElementById("chemical-summary");
const chemicalSerotoninFill         = document.getElementById("chemical-serotonin-fill");
const chemicalNorepinephrineFill    = document.getElementById("chemical-norepinephrine-fill");
const chemicalDopamineFill          = document.getElementById("chemical-dopamine-fill");
const chemicalSerotoninValue        = document.getElementById("chemical-serotonin-value");
const chemicalNorepinephrineValue   = document.getElementById("chemical-norepinephrine-value");
const chemicalDopamineValue         = document.getElementById("chemical-dopamine-value");
const chemicalName          = document.getElementById("chemical-name");
const chemicalDescription   = document.getElementById("chemical-description");
const chemicalPlain         = document.getElementById("chemical-plain");
const chemicalConnect       = document.getElementById("chemical-connect");
const chemicalGroups        = Array.from(document.querySelectorAll(".chemical-bar"));
const headlineSummary       = document.getElementById("headline-summary");
const whySummary            = document.getElementById("why-summary");
const onsetWindow           = document.getElementById("onset-window");
const classSummary          = document.getElementById("class-summary");
const genderCard            = document.getElementById("gender-card");
const genderCardTitle       = document.getElementById("gender-card-title");
const genderCardText        = document.getElementById("gender-card-text");
const sideEffectsCard       = document.getElementById("side-effects-card");
const sideEffectsTitle      = document.getElementById("side-effects-title");
const sideEffectsText       = document.getElementById("side-effects-text");
const sideEffectsNote       = document.getElementById("side-effects-note");
const sidefxChart           = document.getElementById("sidefx-chart");
const sidefxBars            = Array.from(document.querySelectorAll(".sidefx-bar"));
const advancedPathways      = document.getElementById("advanced-pathways");
const advancedGlutamateFill = document.getElementById("advanced-glutamate-fill");
const advancedGabaFill      = document.getElementById("advanced-gaba-fill");
const advancedGlutamateValue = document.getElementById("advanced-glutamate-value");
const advancedGabaValue      = document.getElementById("advanced-gaba-value");
const regionName            = document.getElementById("region-name");
const regionEffect          = document.getElementById("region-effect");
const regionLevel           = document.getElementById("region-level");
const regionDirection       = document.getElementById("region-direction");
const regionPlain           = document.getElementById("region-plain");
const timelineFocusTitle    = document.getElementById("timeline-focus-title");
const timelineFocusWeek     = document.getElementById("timeline-focus-week");
const timelineFocusDescription = document.getElementById("timeline-focus-description");
const timelineFocusSummary  = document.getElementById("timeline-focus-summary");
const regionGroups          = Array.from(document.querySelectorAll(".region-group"));
const doseThumbLabel        = document.getElementById("dose-thumb-label");
const stressThumbLabel      = document.getElementById("stress-thumb-label");

// ── Profile state ─────────────────────────────────────────────────────────────
let userProfile = { age: null, gender: null, knowledge: null };
let currentLanguageLevel = "standard";
let currentLanguageVariant = "casual";

function loadProfile() {
  try {
    const saved = localStorage.getItem("brainSiteProfile");
    if (saved) userProfile = JSON.parse(saved);
  } catch (_) {}
}

function saveProfile() {
  try { localStorage.setItem("brainSiteProfile", JSON.stringify(userProfile)); } catch (_) {}
}

function clearProfile() {
  try { localStorage.removeItem("brainSiteProfile"); } catch (_) {}
  userProfile = { age: null, gender: null, knowledge: null };
}

function getLanguageLevel() {
  if (userProfile.knowledge === "medical") return "complex";
  if (userProfile.knowledge === "beginner") return "easy";
  return "standard";
}

function getUiStyle() {
  return userProfile.age === "child" ? "playful" : "standard";
}

// ── Content variants ──────────────────────────────────────────────────────────
// Each object has three keys: playful | casual | clinical

const heroContent = {
  playful: {
    eyebrow: "Brain guide",
    headline: "How mood medicine helps your brain",
    lede: "Simple view of mood, stress, and energy changes.",
  },
  casual: {
    eyebrow: "Interactive neuroscience explainer",
    headline: "How antidepressants can shift mood systems over time",
    lede: "A simple interactive guide to how treatment may affect emotion, stress, and motivation.",
  },
  clinical: {
    eyebrow: "Psychopharmacology reference model",
    headline: "Antidepressant-mediated modulation of corticolimbic mood circuits",
    lede: "An interactive model illustrating approximate temporal trajectories of monoaminergic and neuroplastic changes across key affective brain regions.",
  },
};

const regionMetaVariants = {
  playful: {
    prefrontal: {
      name: "The Brain's Boss",
      description: "Helps you focus and stay calm.",
      direction: "Getting better at being in charge",
      plain: "Less drama, better focus.",
    },
    amygdala: {
      name: "The Alarm Bell",
      description: "Your danger alarm.",
      direction: "Alarm goes off less often",
      plain: "Less panic, less dread.",
    },
    hippocampus: {
      name: "The Memory Helper",
      description: "Helps memory and recovery.",
      direction: "Bounces back quicker",
      plain: "Stress doesn't stick as long.",
    },
    striatum: {
      name: "The Reward Center",
      description: "Helps you feel interested and motivated.",
      direction: "More excited about things",
      plain: "More interest and energy.",
    },
    insula: {
      name: "The Body Sensor",
      description: "Tracks body tension and discomfort.",
      direction: "Body feels calmer",
      plain: "Less tense and wound-up.",
    },
  },
  casual: {
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
  },
  clinical: {
    prefrontal: {
      name: "Prefrontal cortex (PFC)",
      description: "Mediates executive function, cognitive flexibility, and top-down regulation of limbic reactivity.",
      direction: "Enhanced top-down inhibitory control",
      plain: "Improved regulatory capacity over limbic circuits.",
    },
    amygdala: {
      name: "Amygdala",
      description: "Central to threat appraisal, fear conditioning, and hyperreactive stress responses in MDD.",
      direction: "Attenuated amygdala hyperreactivity",
      plain: "Reduced threat-bias and fear-response amplitude.",
    },
    hippocampus: {
      name: "Hippocampus",
      description: "Implicated in contextual memory, stress-axis regulation, and neurogenesis-dependent recovery.",
      direction: "Neuroplastic recovery and HPA normalisation",
      plain: "Improved contextual extinction and stress resilience.",
    },
    striatum: {
      name: "Striatum (Nucleus accumbens / Caudate)",
      description: "Key substrate for reward prediction, anhedonia, and mesolimbic dopaminergic signalling.",
      direction: "Restored mesolimbic reward salience",
      plain: "Improved hedonic tone and motivational drive.",
    },
    insula: {
      name: "Insula (Anterior insula)",
      description: "Integrates interoceptive signals; implicated in somatic dysphoria and visceral threat anticipation.",
      direction: "Reduced interoceptive distress bias",
      plain: "Decreased somatic hypervigilance and body-based anxiety.",
    },
  },
};

const chemicalMetaVariants = {
  playful: {
    serotonin: {
      name: "Serotonin",
      description: "The calm chemical.",
      plain: "Often targeted in depression treatment.",
      connect: "Feeling balanced and emotionally steady.",
    },
    norepinephrine: {
      name: "Norepinephrine",
      description: "The alert and energy chemical.",
      plain: "Helps you feel awake and focused.",
      connect: "Energy, alertness, and stress response.",
    },
    dopamine: {
      name: "Dopamine",
      description: "The reward chemical.",
      plain: "Linked to interest and motivation.",
      connect: "Motivation, reward, and enjoying things.",
    },
  },
  casual: {
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
  },
  clinical: {
    serotonin: {
      name: "Serotonin (5-HT)",
      description: "A monoamine neurotransmitter with broad projections from dorsal raphe nuclei; central to affective dysregulation in MDD and anxiety disorders.",
      plain: "Primary pharmacological target for most first-line antidepressants (SSRIs, SNRIs).",
      connect: "5-HT1A autoreceptor desensitisation, synaptic plasticity, and mood stabilisation.",
    },
    norepinephrine: {
      name: "Norepinephrine (NE)",
      description: "A catecholamine from the locus coeruleus; modulates arousal, attention, and the HPA stress axis.",
      plain: "Implicated in psychomotor retardation, fatigue, and cognitive dysfunction in depression.",
      connect: "Arousal, HPA regulation, prefrontal α2-adrenoceptor signalling.",
    },
    dopamine: {
      name: "Dopamine (DA)",
      description: "A catecholamine mediating mesolimbic reward salience and mesocortical executive function.",
      plain: "Reduced DA signalling underlies anhedonia and impaired motivation in MDD.",
      connect: "Reward prediction error, anhedonia, and nucleus accumbens activity.",
    },
  },
};

const medicationProfileVariants = {
  playful: {
    ssri: {
      helper: "Common medicines that boost serotonin.",
      chemicalSummary: "Mainly affects serotonin first, then other systems.",
      summary: "Can lower alarm signals and steady mood.",
    },
    snri: {
      helper: "Affects serotonin and norepinephrine.",
      chemicalSummary: "Targets calm and energy systems together.",
      summary: "May help mood, focus, and low energy.",
    },
    atypical: {
      helper: "Mixed group with different effects.",
      chemicalSummary: "Some can affect dopamine more.",
      summary: "May help motivation and interest.",
    },
    tricyclic: {
      helper: "Older medicines with broad effects.",
      chemicalSummary: "Affects serotonin, norepinephrine, and more.",
      summary: "Can help mood and sleep, but may have more side effects.",
    },
  },
  casual: {
    ssri: {
      helper: "Common first-line antidepressants that mainly affect serotonin.",
      chemicalSummary: "This class mainly targets serotonin first. The system bars below show what that may influence next.",
      summary: "Often dampens threat reactivity and supports mood stabilization.",
    },
    snri: {
      helper: "Antidepressants that affect serotonin and norepinephrine.",
      chemicalSummary: "This class mainly targets serotonin and norepinephrine. That can show up below in mood, stress, and energy-related systems.",
      summary: "Targets serotonin and norepinephrine systems, often affecting mood, arousal, and pain processing.",
    },
    atypical: {
      helper: "A mixed group of antidepressants that work in different ways.",
      chemicalSummary: "This mixed class works in different ways. Dopamine can matter more here, especially for reward and motivation.",
      summary: "Mechanisms vary, but some atypical agents show earlier effects on drive, energy, or reward processing.",
    },
    tricyclic: {
      helper: "Older antidepressants with broader effects across brain signaling systems.",
      chemicalSummary: "This class mainly targets serotonin and norepinephrine, but with broader effects than newer classes.",
      summary: "Older agents with broader receptor effects that can influence mood, pain, sleep, and autonomic tone.",
    },
  },
  clinical: {
    ssri: {
      helper: "Selective serotonin reuptake inhibitors: first-line agents that block SERT to increase synaptic 5-HT availability.",
      chemicalSummary: "SSRIs selectively inhibit the serotonin transporter (SERT). Downstream effects on limbic and cortical circuits emerge after receptor desensitisation.",
      summary: "Attenuates amygdala hyperreactivity and promotes prefrontal top-down regulatory control via serotonergic plasticity.",
    },
    snri: {
      helper: "Serotonin–norepinephrine reuptake inhibitors: dual SERT/NET blockade; indicated for MDD, GAD, and pain disorders.",
      chemicalSummary: "SNRIs inhibit both SERT and NET, increasing synaptic 5-HT and NE. This dual action influences both limbic reactivity and prefrontal arousal networks.",
      summary: "Dual monoaminergic reuptake inhibition modulates affective circuits, prefrontal activation, and descending pain pathways.",
    },
    atypical: {
      helper: "Heterogeneous class with diverse receptor mechanisms: includes NRI/NDRI (bupropion), NaSSA (mirtazapine), and 5-HT antagonists (trazodone).",
      chemicalSummary: "Mechanistic diversity within this class means dopaminergic and noradrenergic pathways can feature more prominently than in SSRIs.",
      summary: "Variable receptor profiles may produce earlier effects on motivation, anhedonia, and sleep architecture depending on agent.",
    },
    tricyclic: {
      helper: "Tricyclic antidepressants: non-selective reuptake inhibitors with additional receptor antagonism (muscarinic, histaminergic, α1-adrenergic).",
      chemicalSummary: "TCAs block SERT and NET broadly, with significant off-target receptor activity contributing to both efficacy and side-effect burden.",
      summary: "Broad-spectrum receptor action provides multimodal antidepressant and analgesic effects; higher side-effect and overdose risk than newer agents.",
    },
  },
};

const timelineCardVariants = {
  playful: [
    {
      phase: "First sparks",
      title: "Hours to days",
      description: "Brain chemicals change fast, but feelings usually do not change yet.",
      range: [0, 1],
      shift: "Early chemical shift.",
      feel: "Side effects may appear first.",
      jumpWeek: 1,
    },
    {
      phase: "Getting warmer",
      title: "Weeks 1 to 2",
      description: "Some stress signals may start to calm.",
      range: [2, 3],
      shift: "Alarm signals soften a bit.",
      feel: "You may feel slightly less on edge.",
      jumpWeek: 2,
    },
    {
      phase: "Starting to help",
      title: "Weeks 3 to 6",
      description: "This is when benefits are often easier to notice.",
      range: [4, 6],
      shift: "Mood systems adapt.",
      feel: "Mood may feel steadier.",
      jumpWeek: 4,
    },
    {
      phase: "Settling in",
      title: "Weeks 7 to 12",
      description: "Changes can become more stable over time.",
      range: [7, 12],
      shift: "Benefits become more consistent.",
      feel: "Recovery and motivation may improve.",
      jumpWeek: 8,
    },
  ],
  casual: [
    {
      phase: "Signal spark",
      title: "Hours to days",
      description: "Neurochemical levels shift quickly, but subjective mood change is usually limited this early.",
      range: [0, 1],
      shift: "Fast chemical movement happens before obvious emotional relief.",
      feel: "Side effects or subtle shifts can show up before benefits feel clear.",
      jumpWeek: 1,
    },
    {
      phase: "Bias softening",
      title: "Weeks 1 to 2",
      description: "Emotional bias and stress reactivity can begin to soften before a full mood response is obvious.",
      range: [2, 3],
      shift: "Threat bias and emotional urgency may begin to loosen.",
      feel: "Some people notice slightly less dread, friction, or internal intensity.",
      jumpWeek: 2,
    },
    {
      phase: "Clinical response",
      title: "Weeks 3 to 6",
      description: "Clinical improvement often becomes more noticeable as regulation networks adapt.",
      range: [4, 6],
      shift: "Regulation networks start having clearer day-to-day impact.",
      feel: "Mood changes can become easier to notice and recover from.",
      jumpWeek: 4,
    },
    {
      phase: "Consolidation",
      title: "Weeks 7 to 12",
      description: "Sustained changes may include improved resilience, motivation, and cognitive flexibility.",
      range: [7, 12],
      shift: "Benefits can stabilize into something more durable and consistent.",
      feel: "Recovery after stress may get steadier, with more flexibility and drive.",
      jumpWeek: 8,
    },
  ],
  clinical: [
    {
      phase: "Acute pharmacodynamic phase",
      title: "Hours to days",
      description: "Rapid inhibition of reuptake transporters elevates synaptic monoamine levels; clinical response is not yet evident due to autoreceptor-mediated feedback.",
      range: [0, 1],
      shift: "Transporter blockade precedes receptor desensitisation; no meaningful mood shift expected.",
      feel: "Adverse effects (GI, activation, or sedation) may emerge before therapeutic benefit.",
      jumpWeek: 1,
    },
    {
      phase: "Receptor adaptation",
      title: "Weeks 1 to 2",
      description: "Progressive desensitisation of 5-HT1A autoreceptors and β-adrenoceptors reduces inhibitory feedback, increasing net monoaminergic tone.",
      range: [2, 3],
      shift: "Autoreceptor downregulation permits sustained elevation of synaptic 5-HT and NE.",
      feel: "Subclinical reductions in amygdala reactivity may precede self-reported mood improvement.",
      jumpWeek: 2,
    },
    {
      phase: "Clinical response window",
      title: "Weeks 3 to 6",
      description: "Threshold for detectable clinical response; correlates with neuroplastic remodelling of corticolimbic circuits.",
      range: [4, 6],
      shift: "BDNF-mediated synaptogenesis and hippocampal neurogenesis contribute to functional recovery.",
      feel: "Improvements in affective regulation, rumination, and emotional reactivity become measurable.",
      jumpWeek: 4,
    },
    {
      phase: "Consolidation & neuroplasticity",
      title: "Weeks 7 to 12",
      description: "Sustained monoaminergic signalling facilitates long-term potentiation, dendritic remodelling, and stress-axis normalisation.",
      range: [7, 12],
      shift: "Structural and functional plasticity yields durable gains in resilience and cognitive flexibility.",
      feel: "HPA axis homeostasis, improved executive function, and consolidated mood stabilisation.",
      jumpWeek: 8,
    },
  ],
};

const languageVariantByLevel = {
  easy: "playful",
  standard: "casual",
  complex: "clinical",
};

// Active content — populated by applyProfile()
let regionMeta        = regionMetaVariants.casual;
let chemicalMeta      = chemicalMetaVariants.casual;
let timelineCards     = timelineCardVariants.casual;
let activeMedVariant  = medicationProfileVariants.casual;

const medicationLabelsByMode = {
  playful: {
    ssri: "Common type (SSRI)",
    snri: "Dual type (SNRI)",
    atypical: "Mixed type",
    tricyclic: "Older type",
  },
  casual: {
    ssri: "SSRI",
    snri: "SNRI",
    atypical: "Atypical",
    tricyclic: "Tricyclic",
  },
  clinical: {
    ssri: "SSRI",
    snri: "SNRI",
    atypical: "Atypical",
    tricyclic: "Tricyclic",
  },
};

const chemicalBarLabelsByMode = {
  playful: {
    serotonin: "Calm",
    norepinephrine: "Energy",
    dopamine: "Reward",
  },
  casual: {
    serotonin: "Serotonin",
    norepinephrine: "Norepinephrine",
    dopamine: "Dopamine",
  },
  clinical: {
    serotonin: "Serotonin",
    norepinephrine: "Norepinephrine",
    dopamine: "Dopamine",
  },
};

const regionBarTextByMode = {
  playful: {
    prefrontal: { label: "Think", sub: "Brain boss" },
    amygdala: { label: "Alarm", sub: "Alert center" },
    hippocampus: { label: "Memory", sub: "Recovery area" },
    striatum: { label: "Drive", sub: "Reward area" },
    insula: { label: "Body feel", sub: "Body signals" },
  },
  casual: {
    prefrontal: { label: "Focus", sub: "Prefrontal" },
    amygdala: { label: "Alarm", sub: "Amygdala" },
    hippocampus: { label: "Recovery", sub: "Hippocampus" },
    striatum: { label: "Reward", sub: "Striatum" },
    insula: { label: "Body tension", sub: "Insula" },
  },
  clinical: {
    prefrontal: { label: "Focus", sub: "Prefrontal" },
    amygdala: { label: "Alarm", sub: "Amygdala" },
    hippocampus: { label: "Recovery", sub: "Hippocampus" },
    striatum: { label: "Reward", sub: "Striatum" },
    insula: { label: "Body tension", sub: "Insula" },
  },
};

const uiLabelsByMode = {
  playful: {
    controlsTitle: "Try the sliders",
    medProfileLabel: "Medicine type",
    biggestChangeLabel: "Biggest shift now",
    treatmentUsualLabel: "What this type often does",
    visualizationTitle: "See how the signals change",
    chemicalsSectionTitle: "1. Main brain chemicals",
    chemicalGuideLabel: "Quick guide",
    systemsSectionTitle: "2. Brain systems",
    systemsSectionText: "These bars show a simple estimate in this demo.",
    selectedRegionLabel: "Selected system",
    currentPhaseTitle: "Where you are now",
    currentPhaseLabel: "Current stage",
  },
  casual: {
    controlsTitle: "Adjust the model",
    medProfileLabel: "Medication profile",
    biggestChangeLabel: "Biggest change right now",
    treatmentUsualLabel: "What this treatment usually does",
    visualizationTitle: "Signals shift as the effect gets stronger",
    chemicalsSectionTitle: "1. Chemicals this treatment targets",
    chemicalGuideLabel: "Chemical guide",
    systemsSectionTitle: "2. Brain systems that may shift",
    systemsSectionText: "These bars show the possible downstream effect in this simplified model.",
    selectedRegionLabel: "Selected region",
    currentPhaseTitle: "Current phase",
    currentPhaseLabel: "Current phase",
  },
  clinical: {
    controlsTitle: "Adjust the model",
    medProfileLabel: "Medication profile",
    biggestChangeLabel: "Biggest change right now",
    treatmentUsualLabel: "What this treatment usually does",
    visualizationTitle: "Signals shift as the effect gets stronger",
    chemicalsSectionTitle: "1. Chemicals this treatment targets",
    chemicalGuideLabel: "Chemical guide",
    systemsSectionTitle: "2. Brain systems that may shift",
    systemsSectionText: "These bars show the possible downstream effect in this simplified model.",
    selectedRegionLabel: "Selected region",
    currentPhaseTitle: "Current phase",
    currentPhaseLabel: "Current phase",
  },
};

const genderCardContentByVariant = {
  playful: {
    female: {
      title: "Girl-focused note",
      text: "In some studies, girls may report anxiety symptoms more often during adolescence.",
    },
    male: {
      title: "Boy-focused note",
      text: "In some studies, boys may show mood changes with more irritability during adolescence.",
    },
  },
  casual: {
    female: {
      title: "Female context",
      text: "Some studies suggest females may report anxiety and mood symptoms differently, which can influence treatment patterns.",
    },
    male: {
      title: "Male context",
      text: "Some studies suggest males may show more externalized symptoms (for example irritability), which can affect treatment patterns.",
    },
  },
  clinical: {
    female: {
      title: "Female-specific context",
      text: "Sex-related factors (including hormonal modulation across the menstrual cycle) can influence symptom expression and antidepressant response trajectories.",
    },
    male: {
      title: "Male-specific context",
      text: "Sex-related biological and psychosocial factors can alter depressive phenotypes and influence observed response trajectories in treatment studies.",
    },
  },
};

const sideEffectsByVariant = {
  playful: {
    ssri: {
      early: { title: "Most likely right now", text: "Mild stomach upset, sleep shifts, or headache can show up first." },
      mid: { title: "Most likely right now", text: "Early side effects often settle. Some restlessness or low appetite can continue." },
      late: { title: "Most likely right now", text: "Most side effects are lighter by now, but everyone is different." },
    },
    snri: {
      early: { title: "Most likely right now", text: "Nausea, jittery feeling, or sweating can appear in the first weeks." },
      mid: { title: "Most likely right now", text: "Energy changes or dry mouth may still happen for some people." },
      late: { title: "Most likely right now", text: "Ongoing side effects are usually milder by this stage." },
    },
    atypical: {
      early: { title: "Most likely right now", text: "Sleepiness or appetite changes can happen early depending on the medicine." },
      mid: { title: "Most likely right now", text: "Daytime sedation or sleep changes may continue in some people." },
      late: { title: "Most likely right now", text: "Many people have fewer side effects once dose and routine stabilize." },
    },
    tricyclic: {
      early: { title: "Most likely right now", text: "Dry mouth, sleepiness, or dizziness are common at the start." },
      mid: { title: "Most likely right now", text: "Constipation or grogginess can still be present in the mid phase." },
      late: { title: "Most likely right now", text: "Some body side effects may persist longer than newer medicine types." },
    },
  },
  casual: {
    ssri: {
      early: { title: "Most likely right now", text: "Nausea, headache, sleep disruption, or brief activation can appear in the first 1–2 weeks." },
      mid: { title: "Most likely right now", text: "Early GI and sleep side effects often improve; residual restlessness or sexual side effects may persist." },
      late: { title: "Most likely right now", text: "Persistent effects are usually milder, though sexual side effects can remain for some people." },
    },
    snri: {
      early: { title: "Most likely right now", text: "Nausea, sweating, jitteriness, and sleep changes are common during early titration." },
      mid: { title: "Most likely right now", text: "Dry mouth, sweating, and blood-pressure sensitivity may need monitoring as dose increases." },
      late: { title: "Most likely right now", text: "Most acute effects settle; monitor ongoing autonomic effects if they persist." },
    },
    atypical: {
      early: { title: "Most likely right now", text: "Side effects vary by agent: sedation, appetite changes, or activating effects may occur." },
      mid: { title: "Most likely right now", text: "Agent-specific effects continue to guide dose adjustments (for example sedation vs activation)." },
      late: { title: "Most likely right now", text: "After stabilization, side effects are often more predictable and manageable." },
    },
    tricyclic: {
      early: { title: "Most likely right now", text: "Anticholinergic effects (dry mouth, constipation), sedation, and orthostatic dizziness are common early." },
      mid: { title: "Most likely right now", text: "Sedation and autonomic effects may continue and often require careful dose balancing." },
      late: { title: "Most likely right now", text: "Residual anticholinergic burden can persist; ongoing tolerability checks are important." },
    },
  },
  clinical: {
    ssri: {
      early: { title: "Most likely right now", text: "Early serotonergic adverse effects: GI upset, insomnia/somnolence, headache, transient activation/anxiety." },
      mid: { title: "Most likely right now", text: "Acute tolerability often improves by weeks 3–6; monitor persistent sexual dysfunction and akathisia-like activation." },
      late: { title: "Most likely right now", text: "Longer-term profile is usually favorable; sexual adverse effects remain the most common persistent complaint." },
    },
    snri: {
      early: { title: "Most likely right now", text: "Dual serotonergic/noradrenergic adverse effects: nausea, diaphoresis, insomnia, agitation, and sympathetic arousal." },
      mid: { title: "Most likely right now", text: "Monitor dose-related autonomic effects (including BP/HR elevation), xerostomia, and sweating persistence." },
      late: { title: "Most likely right now", text: "Acute adverse effects often attenuate; continued surveillance for sustained noradrenergic burden is recommended." },
    },
    atypical: {
      early: { title: "Most likely right now", text: "Adverse-effect spectrum is mechanism dependent (e.g., sedation/weight gain vs activation/insomnia)." },
      mid: { title: "Most likely right now", text: "Tolerability pattern clarifies with time; adjust strategy based on receptor-specific burden and symptom targets." },
      late: { title: "Most likely right now", text: "Chronic effects reflect agent pharmacology and should be managed with ongoing individualized monitoring." },
    },
    tricyclic: {
      early: { title: "Most likely right now", text: "High early anticholinergic and antihistaminic burden: xerostomia, constipation, sedation, orthostasis." },
      mid: { title: "Most likely right now", text: "Cardiovascular and autonomic adverse effects may persist; dose/tolerability trade-offs are common." },
      late: { title: "Most likely right now", text: "Residual anticholinergic/cardiac burden can remain clinically relevant; sustained monitoring is advised." },
    },
  },
};

const sideEffectsIntensityProfiles = {
  ssri: {
    nausea:   [0.58, 0.55, 0.5, 0.43, 0.38, 0.34, 0.3, 0.28, 0.26, 0.24, 0.23, 0.22, 0.21],
    sleep:    [0.52, 0.56, 0.54, 0.49, 0.45, 0.42, 0.39, 0.37, 0.35, 0.34, 0.33, 0.32, 0.31],
    anxiety:  [0.5, 0.53, 0.5, 0.45, 0.41, 0.37, 0.34, 0.32, 0.3, 0.29, 0.28, 0.27, 0.26],
    headache: [0.47, 0.49, 0.46, 0.41, 0.37, 0.33, 0.3, 0.28, 0.27, 0.26, 0.24, 0.23, 0.22],
    sexual:   [0.26, 0.28, 0.31, 0.35, 0.39, 0.43, 0.47, 0.5, 0.53, 0.55, 0.56, 0.57, 0.58],
  },
  snri: {
    nausea:   [0.62, 0.59, 0.55, 0.48, 0.43, 0.39, 0.35, 0.32, 0.3, 0.28, 0.27, 0.26, 0.25],
    sleep:    [0.54, 0.58, 0.56, 0.52, 0.48, 0.45, 0.42, 0.39, 0.37, 0.36, 0.35, 0.34, 0.33],
    anxiety:  [0.56, 0.6, 0.57, 0.52, 0.47, 0.43, 0.4, 0.37, 0.35, 0.34, 0.33, 0.31, 0.3],
    headache: [0.5, 0.53, 0.5, 0.45, 0.4, 0.36, 0.33, 0.31, 0.29, 0.28, 0.27, 0.26, 0.25],
    sexual:   [0.24, 0.27, 0.3, 0.34, 0.38, 0.42, 0.46, 0.5, 0.53, 0.55, 0.56, 0.57, 0.58],
  },
  atypical: {
    nausea:   [0.42, 0.4, 0.38, 0.35, 0.32, 0.3, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22],
    sleep:    [0.6, 0.62, 0.6, 0.56, 0.52, 0.49, 0.46, 0.44, 0.43, 0.42, 0.4, 0.39, 0.38],
    anxiety:  [0.4, 0.43, 0.42, 0.39, 0.36, 0.34, 0.32, 0.31, 0.3, 0.29, 0.28, 0.27, 0.26],
    headache: [0.38, 0.39, 0.38, 0.35, 0.32, 0.3, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22],
    sexual:   [0.2, 0.21, 0.23, 0.25, 0.27, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36],
  },
  tricyclic: {
    nausea:   [0.45, 0.44, 0.42, 0.4, 0.37, 0.35, 0.33, 0.31, 0.3, 0.29, 0.28, 0.27, 0.26],
    sleep:    [0.66, 0.68, 0.66, 0.62, 0.58, 0.54, 0.5, 0.47, 0.45, 0.44, 0.43, 0.42, 0.4],
    anxiety:  [0.34, 0.36, 0.35, 0.33, 0.31, 0.29, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22],
    headache: [0.37, 0.38, 0.37, 0.35, 0.33, 0.31, 0.29, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23],
    sexual:   [0.3, 0.33, 0.35, 0.38, 0.41, 0.44, 0.47, 0.49, 0.51, 0.53, 0.54, 0.55, 0.56],
  },
};

const advancedPathwayProfiles = {
  ssri: {
    glutamate: [0.32, 0.31, 0.3, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.34, 0.35, 0.35, 0.36],
    gaba: [0.38, 0.39, 0.4, 0.42, 0.43, 0.44, 0.45, 0.46, 0.46, 0.47, 0.47, 0.48, 0.48],
  },
  snri: {
    glutamate: [0.34, 0.33, 0.32, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.36, 0.37, 0.37, 0.38],
    gaba: [0.36, 0.37, 0.39, 0.4, 0.42, 0.43, 0.44, 0.45, 0.45, 0.46, 0.47, 0.47, 0.48],
  },
  atypical: {
    glutamate: [0.35, 0.34, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.39, 0.4, 0.4, 0.41],
    gaba: [0.34, 0.35, 0.36, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.43, 0.44, 0.44, 0.45],
  },
  tricyclic: {
    glutamate: [0.3, 0.3, 0.29, 0.29, 0.3, 0.31, 0.31, 0.32, 0.33, 0.33, 0.34, 0.34, 0.35],
    gaba: [0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.47, 0.48, 0.48, 0.49, 0.49],
  },
};

function sideEffectsLevelLabel(value) {
  if (value < 0.35) return "Low";
  if (value < 0.62) return "Moderate";
  return "High";
}

function advancedPathwayLevelLabel(value) {
  if (value < 0.35) return "Low";
  if (value < 0.62) return "Moderate";
  return "High";
}

function sideEffectsPhaseForWeek(week) {
  if (week <= 2) return "early";
  if (week <= 6) return "mid";
  return "late";
}

function updateGenderCard(uiStyle) {
  if (!genderCard || !genderCardTitle || !genderCardText) return;

  if (uiStyle !== "standard") {
    genderCard.classList.add("hidden");
    return;
  }

  const gender = userProfile.gender;
  const contentSet = genderCardContentByVariant[currentLanguageVariant];
  const content = contentSet[gender];

  if (!content) {
    genderCard.classList.add("hidden");
    return;
  }

  genderCardTitle.textContent = content.title;
  genderCardText.textContent = content.text;
  genderCard.classList.remove("hidden");
}

function updateSideEffectsCard(medication, week, uiStyle) {
  if (!sideEffectsCard || !sideEffectsTitle || !sideEffectsText || !sideEffectsNote) return;

  if (uiStyle !== "standard") {
    sideEffectsCard.classList.add("hidden");
    return;
  }

  const phase = sideEffectsPhaseForWeek(week);
  const variantData = sideEffectsByVariant[currentLanguageVariant];
  const content = variantData?.[medication]?.[phase];

  if (!content) {
    sideEffectsCard.classList.add("hidden");
    return;
  }

  sideEffectsTitle.textContent = content.title;
  sideEffectsText.textContent = content.text;
  sideEffectsNote.textContent =
    currentLanguageVariant === "playful"
      ? "If this feels hard to handle, talk to your doctor."
      : "If side effects are severe, persistent, or concerning, contact your clinician.";
  sideEffectsCard.classList.remove("hidden");
}

function updateSideEffectsBars({ medication, week, doseValue, stressValue, uiStyle }) {
  if (!sidefxChart || !sidefxBars.length) return;

  if (uiStyle !== "standard") {
    sidefxChart.classList.add("hidden");
    return;
  }

  const medProfile = sideEffectsIntensityProfiles[medication];
  if (!medProfile) {
    sidefxChart.classList.add("hidden");
    return;
  }

  sidefxChart.classList.remove("hidden");

  const doseModifier = doseValue === 1 ? -0.08 : doseValue === 3 ? 0.08 : 0;
  const stressAnxietyModifier = stressValue === 1 ? -0.07 : stressValue === 3 ? 0.09 : 0.03;
  const stressSleepModifier = stressValue === 1 ? -0.05 : stressValue === 3 ? 0.07 : 0.02;
  const stressGeneralModifier = stressValue === 1 ? -0.02 : stressValue === 3 ? 0.03 : 0;

  sidefxBars.forEach((bar) => {
    const key = bar.dataset.sidefx;
    const fill = bar.querySelector(".sidefx-fill");
    const valueLabel = bar.querySelector(".sidefx-value");
    const base = medProfile[key]?.[week] ?? 0.2;

    const stressModifier =
      key === "anxiety" ? stressAnxietyModifier :
      key === "sleep" ? stressSleepModifier :
      stressGeneralModifier;

    const adjusted = clamp(base + doseModifier + stressModifier, 0.08, 0.92);

    if (fill) fill.style.width = `${Math.round(adjusted * 100)}%`;
    if (valueLabel) valueLabel.textContent = sideEffectsLevelLabel(adjusted);
  });
}

function updateAdvancedPathways({ medication, week, doseValue, stressValue }) {
  if (
    !advancedPathways ||
    !advancedGlutamateFill ||
    !advancedGabaFill ||
    !advancedGlutamateValue ||
    !advancedGabaValue
  ) {
    return;
  }

  if (currentLanguageLevel !== "complex") {
    advancedPathways.classList.add("hidden");
    return;
  }

  const profile = advancedPathwayProfiles[medication];
  if (!profile) {
    advancedPathways.classList.add("hidden");
    return;
  }

  advancedPathways.classList.remove("hidden");

  const doseModifier = doseValue === 1 ? -0.04 : doseValue === 3 ? 0.04 : 0;
  const glutamateStressModifier = stressValue === 1 ? -0.03 : stressValue === 3 ? 0.05 : 0.01;
  const gabaStressModifier = stressValue === 1 ? 0.02 : stressValue === 3 ? -0.03 : 0;

  const glutamate = clamp(profile.glutamate[week] + doseModifier + glutamateStressModifier, 0.08, 0.92);
  const gaba = clamp(profile.gaba[week] + doseModifier + gabaStressModifier, 0.08, 0.92);

  advancedGlutamateFill.style.width = `${Math.round(glutamate * 100)}%`;
  advancedGabaFill.style.width = `${Math.round(gaba * 100)}%`;
  advancedGlutamateValue.textContent = advancedPathwayLevelLabel(glutamate);
  advancedGabaValue.textContent = advancedPathwayLevelLabel(gaba);
}

const medicationProfiles = {
  ssri: {
    label: "SSRI",
    examples: "Examples: sertraline, fluoxetine, escitalopram",
    chemicals: { serotonin: "main", norepinephrine: "low", dopamine: "low" },
    onset: "2 to 6 weeks",
    intensity: {
      prefrontal:   [0.32, 0.36, 0.42, 0.47, 0.53, 0.58, 0.61, 0.64, 0.67, 0.69, 0.71, 0.73, 0.75],
      amygdala:     [0.25, 0.31, 0.39, 0.46, 0.54, 0.61, 0.65, 0.68, 0.70, 0.73, 0.75, 0.76, 0.78],
      hippocampus:  [0.21, 0.25, 0.29, 0.34, 0.40, 0.45, 0.50, 0.55, 0.59, 0.63, 0.66, 0.68, 0.70],
      striatum:     [0.19, 0.20, 0.22, 0.26, 0.31, 0.35, 0.39, 0.42, 0.45, 0.48, 0.50, 0.51, 0.53],
      insula:       [0.28, 0.31, 0.36, 0.41, 0.46, 0.51, 0.56, 0.59, 0.62, 0.65, 0.67, 0.68, 0.69],
    },
  },
  snri: {
    label: "SNRI",
    examples: "Examples: venlafaxine, duloxetine, desvenlafaxine",
    chemicals: { serotonin: "main", norepinephrine: "main", dopamine: "low" },
    onset: "2 to 6 weeks",
    intensity: {
      prefrontal:   [0.34, 0.39, 0.44, 0.50, 0.56, 0.61, 0.66, 0.69, 0.72, 0.74, 0.76, 0.78, 0.79],
      amygdala:     [0.24, 0.29, 0.36, 0.42, 0.49, 0.56, 0.61, 0.65, 0.68, 0.70, 0.72, 0.73, 0.74],
      hippocampus:  [0.22, 0.27, 0.31, 0.37, 0.44, 0.50, 0.56, 0.61, 0.65, 0.68, 0.70, 0.72, 0.74],
      striatum:     [0.25, 0.28, 0.32, 0.37, 0.42, 0.47, 0.52, 0.56, 0.60, 0.63, 0.65, 0.67, 0.69],
      insula:       [0.26, 0.30, 0.34, 0.39, 0.44, 0.48, 0.53, 0.57, 0.61, 0.64, 0.66, 0.68, 0.70],
    },
  },
  atypical: {
    label: "Atypical",
    examples: "Examples: bupropion, mirtazapine, trazodone",
    chemicals: { serotonin: "some", norepinephrine: "some", dopamine: "main" },
    onset: "1 to 4 weeks",
    intensity: {
      prefrontal:   [0.29, 0.34, 0.40, 0.46, 0.52, 0.57, 0.61, 0.64, 0.66, 0.68, 0.70, 0.71, 0.72],
      amygdala:     [0.20, 0.24, 0.29, 0.35, 0.40, 0.46, 0.52, 0.56, 0.59, 0.61, 0.63, 0.64, 0.65],
      hippocampus:  [0.18, 0.21, 0.25, 0.30, 0.36, 0.41, 0.47, 0.52, 0.57, 0.60, 0.63, 0.65, 0.67],
      striatum:     [0.30, 0.35, 0.41, 0.48, 0.55, 0.61, 0.65, 0.69, 0.72, 0.74, 0.76, 0.77, 0.78],
      insula:       [0.24, 0.27, 0.31, 0.36, 0.41, 0.46, 0.50, 0.54, 0.57, 0.59, 0.61, 0.62, 0.63],
    },
  },
  tricyclic: {
    label: "Tricyclic",
    examples: "Examples: amitriptyline, nortriptyline, imipramine",
    chemicals: { serotonin: "main", norepinephrine: "main", dopamine: "low" },
    onset: "2 to 6 weeks",
    intensity: {
      prefrontal:   [0.33, 0.37, 0.42, 0.48, 0.54, 0.58, 0.62, 0.65, 0.68, 0.70, 0.72, 0.73, 0.74],
      amygdala:     [0.23, 0.28, 0.34, 0.40, 0.47, 0.54, 0.59, 0.63, 0.66, 0.68, 0.70, 0.71, 0.72],
      hippocampus:  [0.20, 0.24, 0.29, 0.34, 0.40, 0.47, 0.53, 0.58, 0.62, 0.65, 0.68, 0.69, 0.71],
      striatum:     [0.22, 0.25, 0.29, 0.34, 0.39, 0.44, 0.49, 0.53, 0.56, 0.59, 0.61, 0.63, 0.64],
      insula:       [0.27, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.58, 0.61, 0.64, 0.66, 0.67, 0.68],
    },
  },
};

// ── Apply profile: swap content based on language mode ───────────────────────
function applyProfile() {
  const languageLevel = getLanguageLevel();
  const uiStyle = getUiStyle();
  const variantKey = languageVariantByLevel[languageLevel];

  currentLanguageLevel = languageLevel;
  currentLanguageVariant = variantKey;
  regionMeta        = regionMetaVariants[variantKey];
  chemicalMeta      = chemicalMetaVariants[variantKey];
  timelineCards     = timelineCardVariants[variantKey];
  activeMedVariant  = medicationProfileVariants[variantKey];

  const hero = heroContent[variantKey];
  const eyebrowEl = document.querySelector(".eyebrow");
  const heroH1    = document.querySelector(".hero h1");
  const ledeEl    = document.querySelector(".lede");

  if (eyebrowEl) eyebrowEl.textContent = hero.eyebrow;
  if (heroH1)    heroH1.innerHTML = hero.headline;
  if (ledeEl)    ledeEl.textContent = hero.lede;

  document.body.classList.remove("ui-playful", "ui-standard");
  document.body.classList.add(`ui-${uiStyle}`);

  const medicationOptionLabels = medicationLabelsByMode[variantKey];
  Array.from(medicationSelect.options).forEach((option) => {
    option.textContent = medicationOptionLabels[option.value];
  });

  const chemicalBarLabels = chemicalBarLabelsByMode[variantKey];
  chemicalGroups.forEach((group) => {
    const labelEl = group.querySelector(".chemical-label");
    if (labelEl) labelEl.textContent = chemicalBarLabels[group.dataset.chemical];
  });

  const regionBarLabels = regionBarTextByMode[variantKey];
  regionGroups.forEach((group) => {
    const region = group.dataset.region;
    const labelEl = group.querySelector(".bar-label");
    const subEl = group.querySelector(".bar-sub");
    if (labelEl) labelEl.textContent = regionBarLabels[region].label;
    if (subEl) subEl.textContent = regionBarLabels[region].sub;
  });

  const labels = uiLabelsByMode[variantKey];
  document.getElementById("controls-title").textContent = labels.controlsTitle;
  document.getElementById("med-profile-label").textContent = labels.medProfileLabel;
  document.getElementById("biggest-change-label").textContent = labels.biggestChangeLabel;
  document.getElementById("treatment-usual-label").textContent = labels.treatmentUsualLabel;
  document.getElementById("visualization-title").textContent = labels.visualizationTitle;
  document.getElementById("chemicals-section-title").textContent = labels.chemicalsSectionTitle;
  document.getElementById("chemical-guide-label").textContent = labels.chemicalGuideLabel;
  document.getElementById("systems-section-title").textContent = labels.systemsSectionTitle;
  document.getElementById("systems-section-text").textContent = labels.systemsSectionText;
  document.getElementById("selected-region-label").textContent = labels.selectedRegionLabel;
  document.getElementById("current-phase-title").textContent = labels.currentPhaseTitle;
  document.getElementById("current-phase-label").textContent = labels.currentPhaseLabel;
  updateGenderCard(uiStyle);

  updateVisualization();
}

// ── Existing computation helpers ──────────────────────────────────────────────
function intensityToLabel(value) {
  if (currentLanguageLevel === "easy") {
    if (value < 0.4) return "Small";
    if (value < 0.65) return "Medium";
    return "Big";
  }
  if (value < 0.4)  return "Lower";
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
  if (value <= 1) return { label: "Lower example",   description: "A lighter example, not a real prescription recommendation.",        modifier: -0.08 };
  if (value === 2) return { label: "Typical example", description: "A simple middle example, not a real prescription recommendation.",  modifier: 0 };
  return               { label: "Higher example",   description: "A stronger example, not a real prescription recommendation.",        modifier: 0.08 };
}

function describeStress(value) {
  if (value <= 1) return { label: "Lower stress load",   description: "A calmer starting point.",   amygdala: -0.06, insula: -0.04, hippocampus:  0.02 };
  if (value === 2) return { label: "Elevated stress load", description: "More stress in the system.", amygdala:  0.03, insula:  0.03, hippocampus:  0    };
  return               { label: "High stress load",     description: "Heavy stress burden.",         amygdala:  0.07, insula:  0.07, hippocampus: -0.02 };
}

function clamp(value, min = 0.12, max = 0.88) {
  return Math.min(max, Math.max(min, value));
}

function computeRegionValue(profile, region, week, settings) {
  const base        = profile.intensity[region][week];
  const doseEffect  = settings.dose.modifier;
  const stressEffect =
    region === "amygdala"    ? settings.stress.amygdala    :
    region === "insula"      ? settings.stress.insula      :
    region === "hippocampus" ? settings.stress.hippocampus : 0;
  return clamp(base + doseEffect + stressEffect);
}

function buildHeadlineSummary(strongestRegion) {
  if (currentLanguageLevel === "easy") {
    if (strongestRegion === "prefrontal")  return "Focus system";
    if (strongestRegion === "amygdala")    return "Alarm system";
    if (strongestRegion === "hippocampus") return "Recovery system";
    if (strongestRegion === "striatum")    return "Reward system";
    if (strongestRegion === "insula")      return "Body-feel system";
    return "Brain systems";
  }
  if (strongestRegion === "prefrontal")  return "Focus / control system";
  if (strongestRegion === "amygdala")    return "Alarm / anxiety system";
  if (strongestRegion === "hippocampus") return "Recovery / memory system";
  if (strongestRegion === "striatum")    return "Reward / motivation system";
  if (strongestRegion === "insula")      return "Body tension system";
  return "Balanced mood systems";
}

function buildWhySummary(week, dose, stress, strongestRegion) {
  if (currentLanguageLevel === "easy") {
    const stageText = week <= 1 ? "early on" : week <= 6 ? "in the middle phase" : "later on";
    return `In this example, ${regionMeta[strongestRegion].name} stands out most ${stageText}.`;
  }
  const stageText  = week <= 1 ? "very early treatment" : week <= 6 ? "the early response window" : "later treatment";
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

const SLIDER_V_INPUT_WIDTH     = 148;
const SLIDER_V_CONTAINER_HEIGHT = 160;
const SLIDER_V_OFFSET          = (SLIDER_V_CONTAINER_HEIGHT - SLIDER_V_INPUT_WIDTH) / 2;
const SLIDER_V_THUMB_RADIUS    = 9;
const SLIDER_V_TRAVEL          = SLIDER_V_INPUT_WIDTH - 2 * SLIDER_V_THUMB_RADIUS;

function positionThumbLabel(input, labelEl) {
  const min      = Number(input.min);
  const max      = Number(input.max);
  const progress = (Number(input.value) - min) / (max - min);
  const thumbY   = SLIDER_V_OFFSET + SLIDER_V_INPUT_WIDTH - SLIDER_V_THUMB_RADIUS - progress * SLIDER_V_TRAVEL;
  labelEl.style.top = `${thumbY}px`;
}

function shortDoseLabel(value) {
  if (value <= 1)   return "Lower";
  if (value === 2)  return "Typical";
  return "Higher";
}

function shortStressLabel(value) {
  if (value <= 1)   return "Lower";
  if (value === 2)  return "Elevated";
  return "High";
}

function timelineCardForWeek(week) {
  return timelineCards.find((card) => week >= card.range[0] && week <= card.range[1]) ?? timelineCards[timelineCards.length - 1];
}

let selectedRegion   = "prefrontal";
let selectedChemical = "serotonin";

// ── Main render ───────────────────────────────────────────────────────────────
function updateChemicalSignals(profile) {
  const serotonin      = chemicalLevelDetails(profile.chemicals.serotonin);
  const norepinephrine = chemicalLevelDetails(profile.chemicals.norepinephrine);
  const dopamine       = chemicalLevelDetails(profile.chemicals.dopamine);

  if (!Object.keys(profile.chemicals).includes(selectedChemical)) {
    selectedChemical = strongestChemicalKey(profile);
  }

  const featured = chemicalMeta[selectedChemical];

  chemicalSerotoninFill.style.height      = serotonin.height;
  chemicalNorepinephrineFill.style.height = norepinephrine.height;
  chemicalDopamineFill.style.height       = dopamine.height;
  chemicalSerotoninValue.textContent      = serotonin.label;
  chemicalNorepinephrineValue.textContent = norepinephrine.label;
  chemicalDopamineValue.textContent       = dopamine.label;
  chemicalSummary.textContent             = activeMedVariant[medicationSelect.value].chemicalSummary;
  chemicalName.textContent                = featured.name;
  chemicalDescription.textContent         = featured.description;
  chemicalPlain.textContent               = featured.plain;
  chemicalConnect.textContent             = featured.connect;

  chemicalGroups.forEach((group) => {
    const isActive = group.dataset.chemical === selectedChemical;
    group.classList.toggle("active", isActive);
    group.setAttribute("aria-pressed", String(isActive));
    group.setAttribute(
      "aria-label",
      `${chemicalMeta[group.dataset.chemical].name}, ${chemicalLevelDetails(profile.chemicals[group.dataset.chemical]).label} effect`
    );
  });
}

function updateCurrentPhase(week) {
  const activeCard = timelineCardForWeek(week);
  timelineFocusTitle.textContent       = activeCard.phase;
  timelineFocusWeek.textContent        = `Week ${week} · ${activeCard.title}`;
  timelineFocusDescription.textContent = activeCard.description;
  timelineFocusSummary.textContent     = `${activeCard.shift} ${activeCard.feel}`;
}

function updateRegionCard(values) {
  const meta  = regionMeta[selectedRegion];
  const value = values[selectedRegion];
  regionName.textContent      = meta.name;
  regionEffect.textContent    = meta.description;
  regionLevel.textContent     = intensityToLabel(value);
  regionDirection.textContent = meta.direction;
  regionPlain.textContent     = meta.plain;
}

function updateVisualization() {
  const medication = medicationSelect.value;
  const week       = Number(timelineInput.value);
  const doseValue  = Number(doseStrengthInput.value);
  const stressValue = Number(stressLevelInput.value);
  const uiStyle    = getUiStyle();
  const profile    = medicationProfiles[medication];
  const medVariant = activeMedVariant[medication];
  const dose       = describeDose(doseValue);
  const stress     = describeStress(stressValue);
  const settings   = { dose, stress };
  const values     = {};

  weekLabel.textContent = `Week ${week}`;
  doseThumbLabel.textContent  = shortDoseLabel(doseValue);
  positionThumbLabel(doseStrengthInput, doseThumbLabel);
  stressThumbLabel.textContent = shortStressLabel(stressValue);
  positionThumbLabel(stressLevelInput, stressThumbLabel);
  if (timelineDescription) timelineDescription.textContent = weekNarrative(week);

  treatmentName.textContent        = medicationLabelsByMode[currentLanguageVariant][medication];
  treatmentDescription.textContent = medVariant.helper;
  treatmentExamples.textContent    = profile.examples;
  onsetWindow.textContent          = profile.onset;
  classSummary.textContent         = medVariant.summary;

  updateChemicalSignals(profile);

  let strongestRegion = "prefrontal";
  let highestValue    = -Infinity;

  regionGroups.forEach((group) => {
    const region  = group.dataset.region;
    const value   = computeRegionValue(profile, region, week, settings);
    const barFill = group.querySelector(".bar-fill");

    values[region] = value;
    barFill.style.height = `${Math.round(value * 100)}%`;
    group.classList.toggle("active", region === selectedRegion);
    group.setAttribute("aria-pressed", String(region === selectedRegion));
    group.setAttribute(
      "aria-label",
      `${regionMeta[region].name} region, ${intensityToLabel(value).toLowerCase()} effect level`
    );

    if (value > highestValue) {
      highestValue    = value;
      strongestRegion = region;
    }
  });

  headlineSummary.textContent = buildHeadlineSummary(strongestRegion);
  whySummary.textContent      = buildWhySummary(week, dose, stress, strongestRegion);
  updateRegionCard(values);
  updateCurrentPhase(week);
  updateSideEffectsCard(medication, week, uiStyle);
  updateSideEffectsBars({ medication, week, doseValue, stressValue, uiStyle });
  updateAdvancedPathways({ medication, week, doseValue, stressValue });
}

// ── Control event listeners ───────────────────────────────────────────────────
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

// ── Profile modal wiring ──────────────────────────────────────────────────────
const profileOverlay = document.getElementById("profile-overlay");
const profileBack    = document.getElementById("profile-back");
const profileNext    = document.getElementById("profile-next");
const changeProfile  = document.getElementById("change-profile");
const profileDots    = Array.from(document.querySelectorAll(".profile-dot"));

let currentStep = 0;
const TOTAL_STEPS = 3;
const FIELD_KEYS  = ["age", "gender", "knowledge"];

function showStep(index) {
  document.querySelectorAll(".profile-step").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
  profileDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  // Back button visibility
  profileBack.classList.toggle("invisible", index === 0);

  // Next button label
  profileNext.textContent = index === TOTAL_STEPS - 1 ? "Start exploring →" : "Next →";

  // Next button enabled only if this step has a selection
  const fieldKey = FIELD_KEYS[index];
  profileNext.disabled = !userProfile[fieldKey];
}

function openModal() {
  // Reset to step matching first unanswered question
  currentStep = FIELD_KEYS.findIndex((key) => !userProfile[key]);
  if (currentStep === -1) currentStep = 0;
  showStep(currentStep);
  profileOverlay.classList.remove("hidden");
  profileOverlay.removeAttribute("aria-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  profileOverlay.classList.add("hidden");
  profileOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  saveProfile();
  applyProfile();
}

// Option card selection
profileOverlay.addEventListener("click", (e) => {
  const btn = e.target.closest(".profile-option");
  if (!btn) return;

  const field = btn.dataset.field;
  const value = btn.dataset.value;

  // Deselect siblings
  btn.closest(".profile-options").querySelectorAll(".profile-option").forEach((el) => {
    el.classList.remove("selected");
    el.setAttribute("aria-pressed", "false");
  });

  btn.classList.add("selected");
  btn.setAttribute("aria-pressed", "true");
  userProfile[field] = value;

  // Enable next
  profileNext.disabled = false;
});

profileNext.addEventListener("click", () => {
  if (profileNext.disabled) return;
  if (currentStep < TOTAL_STEPS - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    closeModal();
  }
});

profileBack.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

changeProfile.addEventListener("click", () => {
  openModal();
});

// Re-mark previously selected options if returning to modal
function syncOptionSelections() {
  FIELD_KEYS.forEach((field, stepIndex) => {
    const stepEl = document.getElementById(`profile-step-${stepIndex}`);
    if (!stepEl) return;
    stepEl.querySelectorAll(".profile-option").forEach((btn) => {
      const isSelected = btn.dataset.value === userProfile[field];
      btn.classList.toggle("selected", isSelected);
      btn.setAttribute("aria-pressed", String(isSelected));
    });
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
loadProfile();

const profileComplete = FIELD_KEYS.every((key) => userProfile[key]);

if (profileComplete) {
  // Returning visitor — skip modal, apply saved profile
  profileOverlay.classList.add("hidden");
  profileOverlay.setAttribute("aria-hidden", "true");
  syncOptionSelections();
  applyProfile();
} else {
  // First visit — show modal
  syncOptionSelections();
  openModal();
  updateVisualization();
}
