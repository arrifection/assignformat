export const templates = [
  {
    id: 'classic',
    name: 'Classic University',
    description: 'Traditional margins, centered title, numbered sections.',
    accent: '#8B1E3F',
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Spacious whitespace, subtle dividers, modern sans-serif.',
    accent: '#2F2F2F',
  },
  {
    id: 'premium',
    name: 'Premium Border',
    description: 'Elegant frame, gold accents, formal title page.',
    accent: '#C9A227',
  },
  {
    id: 'research',
    name: 'Research Style',
    description: 'Abstract block, citations, academic heading hierarchy.',
    accent: '#5C4D7A',
  },
] as const

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Paste or upload material',
    description: 'Drop in your notes, essay draft, or upload a DOCX — we handle the rest.',
  },
  {
    step: 2,
    title: 'Choose assignment template',
    description: 'Pick from university-ready layouts designed for clarity and professionalism.',
  },
  {
    step: 3,
    title: 'Customize fonts & headings',
    description: 'Fine-tune typeface, size, heading style, spacing, and optional title page.',
  },
  {
    step: 4,
    title: 'Download PDF or DOCX',
    description: 'Export a submission-ready file in your preferred format — instantly.',
  },
] as const

export const recentAssignments = [
  {
    id: 1,
    title: 'Nutrition Education Assignment',
    course: 'HLTH 204',
    status: 'Ready' as const,
    updated: '2 hours ago',
  },
  {
    id: 2,
    title: 'Food Preservation Notes',
    course: 'FSHN 118',
    status: 'Draft' as const,
    updated: 'Yesterday',
  },
  {
    id: 3,
    title: 'Urdu Huroof Assignment',
    course: 'URDU 101',
    status: 'Downloaded' as const,
    updated: '3 days ago',
  },
] as const

export const rawPasteText = `nutrition education is important for public health. students need to understand balanced diets.

key points:
- vitamins and minerals
- food groups
- meal planning

conclusion: education helps communities make better food choices.`

export const formattedPreview = {
  title: 'The Role of Nutrition Education in Public Health',
  sections: [
    { type: 'heading', text: 'Introduction' },
    {
      type: 'paragraph',
      text: 'Nutrition education plays a vital role in promoting public health outcomes. Students must develop a comprehensive understanding of balanced dietary practices.',
    },
    { type: 'heading', text: 'Key Concepts' },
    { type: 'subheading', text: 'Essential Nutrients' },
    {
      type: 'list',
      items: ['Vitamins and minerals', 'Food groups and proportions', 'Practical meal planning'],
    },
    { type: 'heading', text: 'Conclusion' },
    {
      type: 'paragraph',
      text: 'Effective nutrition education empowers communities to make informed, sustainable food choices.',
    },
    { type: 'heading', text: 'References' },
    {
      type: 'paragraph',
      text: 'World Health Organization. (2024). Nutrition guidelines. Geneva: WHO Press.',
    },
  ],
}

export const aiAfterPreview = {
  title: 'Climate Change: Causes, Effects, and Solutions',
  sections: [
    { type: 'heading' as const, text: 'Introduction' },
    {
      type: 'paragraph' as const,
      text: 'Climate change represents one of the defining challenges of our time, with accelerating impacts across ecosystems and human communities.',
    },
    { type: 'heading' as const, text: 'Causes' },
    {
      type: 'paragraph' as const,
      text: 'Industrial emissions, transportation, and land-use change are primary drivers of global temperature rise.',
    },
    { type: 'heading' as const, text: 'Effects' },
    {
      type: 'list' as const,
      items: [
        'Rising sea levels and coastal flooding',
        'Extreme weather events',
        'Loss of biodiversity',
      ],
    },
    { type: 'heading' as const, text: 'Solutions' },
    {
      type: 'paragraph' as const,
      text: 'Renewable energy adoption, reforestation, and waste reduction offer viable pathways to mitigation.',
    },
    { type: 'heading' as const, text: 'Conclusion' },
    {
      type: 'paragraph' as const,
      text: 'Sustainable policy and individual choices remain critical to protecting future generations.',
    },
    { type: 'heading' as const, text: 'References' },
    {
      type: 'paragraph' as const,
      text: 'IPCC. (2024). Climate Change Synthesis Report. Geneva: IPCC.',
    },
  ],
}

export const messyBeforeText = `assignment about climate change

climate is changing fast. causes include pollution factories cars deforestation

effects: rising sea levels extreme weather loss of biodiversity

we should use renewable energy plant trees reduce waste

conclusion important for future generations`
