import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LabExperiment } from '../types';
import {
  X,
  Play,
  Square,
  Sparkles,
  Sliders,
  RefreshCw,
  Code,
  Terminal,
  Database,
  ShieldCheck,
  Bot,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Send,
  Cpu,
} from 'lucide-react';

interface InteractiveLabModalProps {
  experiment: LabExperiment | null;
  onClose: () => void;
}

export const InteractiveLabModal: React.FC<InteractiveLabModalProps> = ({
  experiment,
  onClose,
}) => {
  if (!experiment) return null;

  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'params'>('preview');

  // --- EXP_001: Outbox & Watermark State ---
  const [outboxEvents, setOutboxEvents] = useState<
    Array<{ id: string; type: string; payload: string; status: 'PENDING' | 'SYNCED'; timestamp: string }>
  >([
    { id: 'EVT-901', type: 'HEARING_SCHEDULED', payload: 'Hearing #4829 for Claimant Smith assigned to Judge Martinez', status: 'PENDING', timestamp: '10:42:15' },
    { id: 'EVT-902', type: 'MED_RECORD_ATTACHED', payload: 'MRI_Lumbar_Spine_DrMiller.pdf encrypted & indexed in Neon Postgres', status: 'PENDING', timestamp: '10:42:38' },
    { id: 'EVT-903', type: 'RBAC_ROLE_UPDATED', payload: 'Practitioner Taylor elevated to Senior Paralegal Reviewer', status: 'PENDING', timestamp: '10:43:02' },
  ]);
  const [watermark, setWatermark] = useState('2026-08-24 10:41:00');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncLogs, setSyncLogs] = useState<string[]>([
    'INIT: PostgreSQL Transactional Outbox Worker connected to Neon DB pool.',
    'STATUS: Webhook target n8n (Drive / Sheets Dispatcher) listening on 443.',
  ]);

  const handleTriggerSync = () => {
    setIsSyncing(true);
    setSyncLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] QUERY: SELECT * FROM outbox_events WHERE created_at > '${watermark}'`,
      `[${new Date().toLocaleTimeString()}] DISPATCH: Sending payload batch to n8n webhook worker...`,
    ]);

    setTimeout(() => {
      setOutboxEvents((prev) =>
        prev.map((e) => ({ ...e, status: 'SYNCED' }))
      );
      const newWatermark = new Date().toISOString().replace('T', ' ').slice(0, 19);
      setWatermark(newWatermark);
      setIsSyncing(false);
      setSyncLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] SUCCESS: 200 OK received from n8n. Google Drive file structured & Sheets row inserted.`,
        `[${new Date().toLocaleTimeString()}] CHECKPOINT: Updated sync_checkpoints watermark to [${newWatermark}].`,
      ]);
    }, 1200);
  };

  const handleAddOutboxEvent = () => {
    const id = `EVT-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEvent = {
      id,
      type: 'DOC_AUDIT_LOG',
      payload: `Audit entry #${id}: HIPAA medical clearance validated by legal team`,
      status: 'PENDING' as const,
      timestamp: new Date().toLocaleTimeString(),
    };
    setOutboxEvents((prev) => [newEvent, ...prev]);
    setSyncLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] POSTGRES INSERT: ${id} inserted in transactional outbox table.`,
    ]);
  };

  // --- EXP_002: Playwright Runner State ---
  const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'PARENT' | 'PRACTITIONER'>('STUDENT');
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testResults, setTestResults] = useState<
    Array<{ name: string; duration: string; status: 'PASS' | 'RUNNING' | 'WAITING' }>
  >([
    { name: 'auth/login.spec.ts: Session token & RBAC claim validation', duration: '142ms', status: 'PASS' },
    { name: 'coursework/gamification.spec.ts: Milestone badge unlock animation', duration: '280ms', status: 'PASS' },
    { name: 'gpa/calculation.spec.ts: Honors weighted transcript rounding math', duration: '95ms', status: 'PASS' },
    { name: 'pipeline/essay-prompts.spec.ts: 13+ University prompt version seeding', duration: '310ms', status: 'PASS' },
    { name: 'autocomplete/us-schools.spec.ts: Debounced async fuzzy query', duration: '112ms', status: 'PASS' },
  ]);

  const handleRunPlaywright = () => {
    setIsRunningTests(true);
    setTestResults((prev) => prev.map((t) => ({ ...t, status: 'RUNNING' })));

    setTimeout(() => {
      setTestResults([
        { name: `auth/login.spec.ts: [${selectedRole}] permission assertion`, duration: '128ms', status: 'PASS' },
        { name: `coursework/gamification.spec.ts: [${selectedRole}] flow verification`, duration: '240ms', status: 'PASS' },
        { name: 'gpa/calculation.spec.ts: Weighted GPA rounding with zero edge-case fails', duration: '84ms', status: 'PASS' },
        { name: 'pipeline/essay-prompts.spec.ts: Multi-institution prompt parity check', duration: '290ms', status: 'PASS' },
        { name: 'autocomplete/us-schools.spec.ts: 20k+ high-school list indexing', duration: '98ms', status: 'PASS' },
      ]);
      setIsRunningTests(false);
    }, 1400);
  };

  // --- EXP_003: AI Prompt-to-Kanban State ---
  const [promptInput, setPromptInput] = useState(
    'We need to build a virtualized legal hearings table with field-level permissions and audit logs for Hogan-Smith Law.'
  );
  const [isParsingAi, setIsParsingAi] = useState(false);
  const [generatedCard, setGeneratedCard] = useState<{
    title: string;
    storyPoints: number;
    priority: string;
    acceptanceCriteria: string[];
    tags: string[];
  }>({
    title: 'Virtualized Legal Hearings Table with Field-Level Access Control',
    storyPoints: 5,
    priority: 'HIGH',
    acceptanceCriteria: [
      'Implement TanStack Virtual table rendering up to 10k rows smoothly',
      'Enforce RBAC field-level masking for confidential medical notes',
      'Create 100% audit log trail on all cell edit mutations',
      'Deploy zero-downtime Neon PostgreSQL schema migration',
    ],
    tags: ['Next.js', 'TanStack', 'Neon Postgres', 'RBAC'],
  });

  const handleParsePrompt = () => {
    setIsParsingAi(true);
    setTimeout(() => {
      setIsParsingAi(false);
      setGeneratedCard({
        title: promptInput.length > 50 ? promptInput.slice(0, 48) + '...' : promptInput,
        storyPoints: Math.floor(3 + Math.random() * 5),
        priority: 'CRITICAL',
        acceptanceCriteria: [
          'Wire end-to-end component flow with TypeScript type safety',
          'Write risk-based automated Playwright assertions across user roles',
          'Integrate transactional outbox sync with persistent watermarks',
          'Validate latency in Datadog/New Relic performance dashboards',
        ],
        tags: ['AI-Parsed', 'Product-Engineered', 'Playwright-Verified', 'Production-Ready'],
      });
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-surface-container-lowest border-2 border-primary w-full max-w-4xl max-h-[92vh] rounded-xs shadow-[16px_16px_0px_0px_var(--shadow-cyan-drop)] flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-primary text-on-primary font-mono text-xs font-bold rounded-xs shadow-xs">
              {experiment.expNumber}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-medium text-on-surface">
              {experiment.title}
            </h3>
          </div>

          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.88 }}
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-xs transition-colors cursor-pointer"
            title="Close Experiment"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-outline-variant px-6 bg-surface-container-lowest font-mono text-xs">
          <button
            onClick={() => setActiveTab('preview')}
            className={`py-3 px-4 border-b-2 font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer relative ${
              activeTab === 'preview'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 border-b-2 font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer relative ${
              activeTab === 'code'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Architecture Source</span>
          </button>

          <button
            onClick={() => setActiveTab('params')}
            className={`py-3 px-4 border-b-2 font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer relative ${
              activeTab === 'params'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Specs & Reliability</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* --- EXP_001: OUTBOX & WATERMARK SYNC --- */}
              {experiment.id === 'exp-001' && (
                <div className="space-y-5">
                  {/* Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-surface-container-low border border-outline-variant rounded-xs font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-on-surface-variant">
                        Persistent Watermark: <strong className="text-primary">{watermark}</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={handleAddOutboxEvent}
                        className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant hover:border-primary text-primary rounded-xs flex items-center gap-1 cursor-pointer font-semibold shadow-xs"
                      >
                        <span>+ Record Outbox Event</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={handleTriggerSync}
                        disabled={isSyncing}
                        className="px-4 py-1.5 bg-primary text-on-primary rounded-xs font-bold hover:bg-secondary-container hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                        <span>{isSyncing ? 'SYNCING QUEUE...' : 'DISPATCH TO N8N'}</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Outbox Table */}
                  <div className="border border-outline-variant rounded-xs overflow-hidden bg-surface-container-lowest">
                    <div className="px-4 py-2.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between font-mono text-xs font-bold text-primary">
                      <span className="flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        <span>POSTGRES OUTBOX_EVENTS (HOGAN-SMITH LAW PORTAL)</span>
                      </span>
                      <span>{outboxEvents.filter((e) => e.status === 'PENDING').length} PENDING</span>
                    </div>

                    <div className="divide-y divide-outline-variant font-mono text-xs max-h-56 overflow-y-auto">
                      {outboxEvents.map((evt) => (
                        <div key={evt.id} className="p-3 flex items-center justify-between hover:bg-surface-container/40 transition-colors">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-primary font-bold">{evt.id}</span>
                              <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded-xs text-[10px]">
                                {evt.type}
                              </span>
                              <span className="text-outline text-[11px]">{evt.timestamp}</span>
                            </div>
                            <div className="text-on-surface-variant text-[11px] max-w-xl">{evt.payload}</div>
                          </div>

                          <div>
                            {evt.status === 'SYNCED' ? (
                              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-700 border border-emerald-300 rounded-xs font-bold text-[10px] flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>SYNCED // 200</span>
                              </span>
                            ) : (
                              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700 border border-amber-300 rounded-xs font-bold text-[10px] flex items-center gap-1 animate-pulse">
                                <AlertCircle className="w-3 h-3" />
                                <span>QUEUED</span>
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Webhook Log Console */}
                  <div className="bg-surface-container-lowest text-on-surface p-4 rounded-xs font-mono text-xs space-y-1 border border-outline-variant max-h-40 overflow-y-auto shadow-xs">
                    <div className="flex items-center justify-between pb-1 border-b border-outline-variant text-on-surface-variant text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-primary" />
                        <span>N8N WEBHOOK DISPATCHER & AUDIT STREAM</span>
                      </span>
                      <span className="text-emerald-500 font-bold">LIVE</span>
                    </div>
                    {syncLogs.map((log, idx) => (
                      <div key={idx} className="leading-relaxed opacity-90">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- EXP_002: PLAYWRIGHT MULTI-ROLE TEST MATRIX --- */}
              {experiment.id === 'exp-002' && (
                <div className="space-y-5">
                  {/* Role Selector & Trigger */}
                  <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-surface-container-low border border-outline-variant rounded-xs font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface-variant font-bold">TARGET ROLE:</span>
                      {(['STUDENT', 'PARENT', 'PRACTITIONER'] as const).map((r) => (
                        <motion.button
                          key={r}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedRole(r)}
                          className={`px-3 py-1 rounded-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                            selectedRole === r
                              ? 'bg-primary text-on-primary font-bold shadow-xs'
                              : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary'
                          }`}
                        >
                          {r}
                        </motion.button>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={handleRunPlaywright}
                      disabled={isRunningTests}
                      className="px-5 py-2 bg-primary text-on-primary font-bold rounded-xs flex items-center gap-2 hover:bg-secondary-container hover:text-primary transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                    >
                      <Play className={`w-4 h-4 ${isRunningTests ? 'animate-spin' : ''}`} />
                      <span>{isRunningTests ? 'RUNNING TEST MATRIX...' : 'RUN 180+ TEST SUITE'}</span>
                    </motion.button>
                  </div>

                  {/* Assertion Output List */}
                  <div className="border border-outline-variant rounded-xs overflow-hidden bg-surface-container-lowest">
                    <div className="px-4 py-2.5 bg-surface-container-low border-b border-outline-variant flex items-center justify-between font-mono text-xs font-bold text-primary">
                      <span className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>EARLYBIRD PLAYWRIGHT E2E QA MATRIX // 180+ SUITES</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% GREEN</span>
                    </div>

                    <div className="divide-y divide-outline-variant font-mono text-xs">
                      {testResults.map((res, i) => (
                        <div key={i} className="p-3.5 flex items-center justify-between hover:bg-surface-container/30 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-on-surface font-medium">{res.name}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-on-surface-variant text-[11px]">{res.duration}</span>
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 rounded-xs font-bold text-[10px]">
                              {res.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Debugging Evidence Logs */}
                  <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xs font-mono text-xs space-y-2">
                    <div className="text-primary font-bold flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>EVIDENCE-FIRST WORKFLOW (HAR CAPTURES, ISOLATION TESTS, AWS LOGS)</span>
                    </div>
                    <p className="text-on-surface-variant text-[11px] leading-relaxed">
                      Captured 180+ critical user journeys. All GPA floating-point precision bounds verified. US High-School fuzzy autocomplete seeded with 20,000+ records.
                    </p>
                  </div>
                </div>
              )}

              {/* --- EXP_003: GENERATIVE AI KANBAN PARSER --- */}
              {experiment.id === 'exp-003' && (
                <div className="space-y-5">
                  {/* Prompt Box */}
                  <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xs space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <label className="text-primary font-bold flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        <span>RAW PROJECT BRIEF / REQUIREMENT INPUT:</span>
                      </label>
                      <span className="text-outline text-[11px]">Model: gpt-4o-mini (JSON Schema)</span>
                    </div>

                    <textarea
                      rows={3}
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      className="w-full p-3 bg-surface-container-lowest border border-outline-variant rounded-xs text-xs text-on-surface font-mono focus:border-primary focus:outline-none transition-colors"
                    />

                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={handleParsePrompt}
                        disabled={isParsingAi}
                        className="px-5 py-2 bg-primary text-on-primary font-bold rounded-xs flex items-center gap-2 hover:bg-secondary-container hover:text-primary transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{isParsingAi ? 'EXTRACTING WITH AI...' : 'PARSE INTO KANBAN CARD'}</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Rendered Structured Kanban Card */}
                  <div className="p-6 bg-surface-container-lowest border-2 border-primary rounded-xs shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] space-y-4">
                    <div className="flex items-center justify-between border-b border-outline-variant pb-3 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-primary text-on-primary font-bold rounded-xs">
                          PRIORITY: {generatedCard.priority}
                        </span>
                        <span className="text-on-surface-variant font-bold">
                          ESTIMATE: {generatedCard.storyPoints} PTS
                        </span>
                      </div>
                      <span className="text-primary font-bold">DYNAMODB // STRUCTURED</span>
                    </div>

                    <h4 className="font-display text-2xl font-medium text-on-surface">
                      {generatedCard.title}
                    </h4>

                    <div className="space-y-2">
                      <span className="font-mono text-xs text-primary font-bold block">
                        // ACCEPTANCE CRITERIA (AUTO-EXTRACTED):
                      </span>
                      <ul className="space-y-1.5 font-body text-xs text-on-surface-variant list-disc list-inside">
                        {generatedCard.acceptanceCriteria.map((ac, idx) => (
                          <li key={idx}>{ac}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant">
                      {generatedCard.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-surface-container text-primary font-mono text-[11px] uppercase tracking-wider border border-outline-variant rounded-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="bg-surface-container-lowest text-on-surface p-5 rounded-xs font-mono text-xs overflow-x-auto border border-outline-variant">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant mb-3 text-on-surface-variant">
                <span>{experiment.expNumber} // IMPLEMENTATION LOGIC</span>
                <span className="text-primary font-bold">TypeScript / Architecture</span>
              </div>
              <pre>
                <code>{experiment.codeSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === 'params' && (
            <div className="space-y-4 font-body text-sm text-on-surface-variant">
              <h4 className="font-display text-lg text-on-surface font-medium">
                System Reliability & Production Guarantees
              </h4>
              <p className="leading-relaxed">
                {experiment.description} Designed for high availability, zero downtime during deploys, and automated recovery via idempotent webhook handlers and transactional outbox tables.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
                <div className="p-3 bg-surface-container border border-outline-variant rounded-xs">
                  <span className="text-outline block font-semibold">RELIABILITY</span>
                  <span className="text-primary font-bold text-base">99.9%</span>
                </div>
                <div className="p-3 bg-surface-container border border-outline-variant rounded-xs">
                  <span className="text-outline block font-semibold">SYNC LATENCY</span>
                  <span className="text-primary font-bold text-base">-68%</span>
                </div>
                <div className="p-3 bg-surface-container border border-outline-variant rounded-xs">
                  <span className="text-outline block font-semibold">COVERAGE</span>
                  <span className="text-primary font-bold text-base">180+ Tests</span>
                </div>
                <div className="p-3 bg-surface-container border border-outline-variant rounded-xs">
                  <span className="text-outline block font-semibold">COMPLIANCE</span>
                  <span className="text-primary font-bold text-base">FedRAMP/Audit</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

