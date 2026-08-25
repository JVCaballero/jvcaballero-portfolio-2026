import { Project, LabExperiment, ArsenalItem } from '../types';

// Bespoke generated assets matching John Vincent Caballero's real work
import hoganSmithImg from '../assets/images/hogan_smith_law_1787639534294.jpg';
import earlybirdImg from '../assets/images/earlybird_edtech_1787639552556.jpg';
import kanbanAiImg from '../assets/images/generative_ai_kanban_1787639568200.jpg';
import ciscoInfraImg from '../assets/images/cisco_infra_monitor_1787639585688.jpg';
import jvAvatarImg from '../assets/images/jv_developer_avatar_1787639607872.jpg';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hogan-smith-law',
    title: 'Hogan-Smith Law: Legal Operations & Medical-Records Dashboard',
    category: 'LegalTech & Automation',
    categoryTag: 'LEGALTECH',
    year: '2025—PRESENT',
    description: 'Modernized internal hearings and medical-records operations with granular role permissions, virtualized tables, and automated outbox sync.',
    longDescription: 'Engineered an end-to-end mission-critical operations portal for Hogan-Smith Law as sole product engineer at Simple.biz. Built with Next.js, React, TypeScript, Neon PostgreSQL, Tailwind CSS, shadcn/ui, and TanStack Virtual. Features field-level security, high-density virtualized legal hearing rosters, comprehensive audit-history views, and an event-driven Postgres-to-n8n sync pipeline utilizing the transactional outbox pattern with persistent watermarks for Google Sheets and Google Drive.',
    tags: ['Next.js', 'Neon PostgreSQL', 'n8n Sync', 'TanStack Virtual', 'shadcn/ui'],
    image: hoganSmithImg,
    client: 'Hogan-Smith Law (via Simple.biz)',
    role: 'Full-Stack Product Engineer & Systems Architect',
    deliverables: [
      'Role & Field-Level Access Control (RBAC) Engine',
      'High-Performance Virtualized Table Rosters (TanStack)',
      'Event-Driven Transactional Outbox Sync to n8n & Google Drive',
      'Zero-Downtime Vercel & Neon PostgreSQL CI/CD Pipelines',
    ],
    metrics: [
      { label: 'Audit Traceability', value: '100%' },
      { label: 'Sync Latency', value: '-68%' },
      { label: 'Deployment Failures', value: '0 Errors' },
    ],
    accentColor: '#3525cd',
    offset: false,
  },
  {
    id: 'earlybird-college',
    title: 'EarlyBird College: Gamified Coursework & Data Pipelines',
    category: 'EdTech & Testing',
    categoryTag: 'EDTECH',
    year: '2025—PRESENT',
    description: 'Gamified student coursework interface, 180+ risk-based Playwright automated test suite, and university prompt data pipelines.',
    longDescription: 'Delivered full-cycle product engineering for EarlyBird College (EdTech). Translated Figma design systems into a responsive, interactive gamified coursework dashboard. Architected a 180+ risk-based Playwright test matrix across Student, Parent, and Practitioner roles. Engineered US high-school autocomplete, a versioned essay-content pipeline seeding 13+ higher-ed institutions, and solved critical GPA-calculation edge cases with an evidence-first debugging workflow (logs, HAR captures, and isolation tests).',
    tags: ['React', 'Python/Django', 'Playwright QA', 'AWS EC2', 'Data Pipelines'],
    image: earlybirdImg,
    client: 'EarlyBird College (via Simple.biz)',
    role: 'Full-Stack Product Engineer & QA Architect',
    deliverables: [
      'Interactive Gamified Coursework UI from Figma Hand-off',
      '180+ Use-Case Automated Playwright Matrix (3 Roles)',
      'AWS EC2 / Django Staging & GitHub Actions CI/CD Pipeline',
      'Mobile Port Technical Specs (React Native / Expo / Flutter)',
    ],
    metrics: [
      { label: 'Automated Tests', value: '180+ Cases' },
      { label: 'Institutions Seeded', value: '13+ Univ' },
      { label: 'Deployment Time', value: '-45% Fast' },
    ],
    accentColor: '#0ea5e9',
    offset: true,
  },
  {
    id: 'hqzen-bposeats-ai',
    title: 'HQZen / BPOSeats: Generative AI Kanban Assistant',
    category: 'Generative AI & Backend',
    categoryTag: 'AI WORKFLOWS',
    year: '2021—2024',
    description: 'Generative AI assistant for automated Kanban task extraction, saving 10–20 minutes per task, paired with high-concurrency APIs.',
    longDescription: 'Spearheaded the development of a generative AI chatbot integrating OpenAI API, Python, and DynamoDB to parse unstructured user input and automatically generate structured Kanban cards with estimation and acceptance criteria. Refactored high-traffic backend modules and optimized APIs for performance and scalability using Python/Django, Vue.js, and TypeScript, while establishing automated unit/snapshot testing with Jest and Factory Boy.',
    tags: ['OpenAI API', 'Python/Django', 'DynamoDB', 'Vue.js', 'New Relic'],
    image: kanbanAiImg,
    client: 'BPOSeats (now HQZen) — Cebu, Philippines',
    role: 'Full Stack Developer & AI Lead',
    deliverables: [
      'Generative AI Task Extraction Engine (OpenAI API + DynamoDB)',
      'High-Throughput Django REST APIs & Query Optimization',
      'Automated Snapshot & Unit Test Suites (Jest & Factory Boy)',
      'New Relic Query & Performance Telemetry Monitoring',
    ],
    metrics: [
      { label: 'Time Saved / Task', value: '10–20 min' },
      { label: 'API Speedup', value: '+40%' },
      { label: 'Pipeline Uptime', value: '99.9%' },
    ],
    accentColor: '#8b5cf6',
    offset: false,
  },
  {
    id: 'cisco-qtc-monitoring',
    title: 'Cisco QTC & Infrastructure Monitoring Platform',
    category: 'Enterprise & Cloud',
    categoryTag: 'ENTERPRISE',
    year: '2024—2025',
    description: 'ScienceLogic Dynamic Apps tailored for U.S. Navy, Army, and FedRAMP compliance, plus Vue 2 to Vue 3 frontend modernizations.',
    longDescription: 'At TTEC Digital supporting Cisco, modernized frontend applications from Vue 2 to Vue 3 for enhanced maintainability. Contributed custom Dynamic Apps in ScienceLogic for Cisco Quote-to-Cash (QTC) tool monitoring, tailored specifically for high-security U.S. Navy, Army, and FedRAMP clients. Revitalized and ran health diagnostics across dormant servers and Cisco unified systems (CUCM, CUC, VMware vSphere/ESXi, UCS).',
    tags: ['Vue 3', 'ScienceLogic', 'Datadog', 'FedRAMP', 'VMware / UCS'],
    image: ciscoInfraImg,
    client: 'Cisco (via TTEC Digital)',
    role: 'Senior Developer',
    deliverables: [
      'Frontend Modernization & Migration from Vue 2 to Vue 3',
      'Custom ScienceLogic Dynamic Apps for U.S. Navy / FedRAMP',
      'Datadog Application Performance Monitoring & Alerting',
      'Ecosystem Health Diagnostics across CUCM, VMware & UCS',
    ],
    metrics: [
      { label: 'Compliance Grade', value: 'FedRAMP' },
      { label: 'Dormant Servers Fixed', value: '40+ Nodes' },
      { label: 'Migration Downtime', value: '0 Minutes' },
    ],
    accentColor: '#396477',
    offset: true,
  },
];

export const ARSENAL_ITEMS: ArsenalItem[] = [
  {
    id: 'fullstack-frontend',
    category: 'CORE STACK',
    title: 'React, Next.js & Vue.js',
    description: 'High-velocity modern UI engineering with TypeScript, Tailwind CSS, shadcn/ui, and TanStack Virtual for dense data platforms.',
    iconName: 'code',
  },
  {
    id: 'backend-databases',
    category: 'BACKEND & DATA',
    title: 'Python/Django, Node & Postgres',
    description: 'Architecting RESTful APIs, Neon PostgreSQL databases, DynamoDB schema design, and transactional outbox patterns.',
    iconName: 'database',
  },
  {
    id: 'ai-workflow-automation',
    category: 'AI & AUTOMATION',
    title: 'OpenAI API, n8n & Gemini',
    description: 'Building intelligent workflows, persistent watermarks, and webhook automations connecting legal, CRM, and cloud services.',
    iconName: 'bot',
    fluidityScore: 99,
    highlight: true,
  },
  {
    id: 'qa-test-automation',
    category: 'TESTING & RELIABILITY',
    title: 'Playwright, Jest & CI/CD',
    description: '180+ risk-based automated test matrices across multiple user roles, GitHub Actions pipelines, and evidence-first debugging.',
    iconName: 'shield',
  },
  {
    id: 'cloud-devops',
    category: 'CLOUD & INFRASTRUCTURE',
    title: 'AWS, Vercel, Docker & Monitoring',
    description: 'EC2, Lightsail, Docker containerization, and enterprise monitoring with Datadog, ScienceLogic, and New Relic.',
    iconName: 'cloud',
  },
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-001',
    expNumber: 'EXP_001',
    title: 'Event-Driven Outbox & Watermark Sync',
    subtitle: 'PostgreSQL Outbox + n8n Webhook Worker',
    description: 'Interactive simulator of transactional outbox pattern dispatching records to n8n and Google Drive with persistent watermark checkpoints.',
    type: 'glsl-shader',
    image: hoganSmithImg,
    codeSnippet: `// Transactional Outbox Pattern with Persistent Watermarks
async function processOutboxQueue(db: PostgresClient, n8nEndpoint: string) {
  const lastWatermark = await db.query('SELECT watermark FROM sync_checkpoints WHERE service = $1', ['n8n_drive']);
  const pendingEvents = await db.query(
    'SELECT * FROM outbox_events WHERE created_at > $1 ORDER BY created_at ASC LIMIT 50',
    [lastWatermark.rows[0]?.watermark || '1970-01-01']
  );

  for (const event of pendingEvents.rows) {
    await dispatchToN8N(n8nEndpoint, event.payload);
    await db.query(
      'UPDATE sync_checkpoints SET watermark = $1, updated_at = NOW() WHERE service = $2',
      [event.created_at, 'n8n_drive']
    );
  }
}`,
  },
  {
    id: 'exp-002',
    expNumber: 'EXP_002',
    title: 'Playwright Multi-Role Test Matrix',
    subtitle: 'Risk-Based E2E QA across 180+ Use Cases',
    description: 'Automated test harness simulating Student, Parent, and Practitioner roles with live assertion telemetry and evidence logs.',
    type: 'audio-reactive',
    image: earlybirdImg,
    codeSnippet: `// Risk-Based Multi-Role Playwright Test Matrix
import { test, expect } from '@playwright/test';

const ROLES = ['student', 'parent', 'practitioner'] as const;

ROLES.forEach((role) => {
  test.describe(\`Role Verification: [\${role.toUpperCase()}]\`, () => {
    test('verifies transcript GPA calculation pipeline', async ({ page }) => {
      await page.goto(\`/auth/login?role=\${role}\`);
      await page.fill('[data-testid="email"]', \`\${role}@earlybird.internal\`);
      await page.click('button[type="submit"]');

      const gpaPill = page.locator('[data-testid="calculated-gpa"]');
      await expect(gpaPill).toBeVisible();
      await expect(gpaPill).toHaveText(/^[0-4]\\.\\d{2}$/);
    });
  });
});`,
  },
  {
    id: 'exp-003',
    expNumber: 'EXP_003',
    title: 'Generative AI Prompt-to-Kanban Parser',
    subtitle: 'OpenAI API Structured JSON Extraction',
    description: 'Real-time simulation of OpenAI API extracting unstructured project briefs into structured Kanban cards with tags and estimates.',
    type: 'kinetic-type',
    image: kanbanAiImg,
    codeSnippet: `// Generative AI Card Creation Engine
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function parseBriefToKanbanCard(rawBrief: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: 'Extract title, acceptanceCriteria (array), storyPoints (int), and tags.' },
      { role: 'user', content: rawBrief }
    ],
  });

  return JSON.parse(completion.choices[0].message.content);
}`,
  },
];

export const REFERENCE_ARTWORK_URL = jvAvatarImg;
export const BLUEPRINT_WIRE_URL = hoganSmithImg;

