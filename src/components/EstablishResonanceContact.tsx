import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TransmissionLog } from '../types';
import {
  Send,
  Radio,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  MapPin,
  Mail,
  Copy,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

interface EstablishResonanceContactProps {
  onTransmissionComplete?: (log: TransmissionLog) => void;
}

export const EstablishResonanceContact: React.FC<EstablishResonanceContactProps> = ({
  onTransmissionComplete,
}) => {
  const [formData, setFormData] = useState({
    designation: '',
    email: '',
    frequency: 'PROJECT_INQUIRY',
    payload: '',
  });

  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [packetLogs, setPacketLogs] = useState<string[]>([
    'INIT: Gateway calibrated at Cebu Pacific Node (10.2447° N, 123.8494° E)',
    'STATUS: Remote standby channel active (UTC+8 / US Overlap)',
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.designation || !formData.email || !formData.payload) return;

    setTransmitting(true);
    setPacketLogs((prev) => [
      ...prev,
      `ENCRYPTING: Payload from [${formData.designation}]...`,
      `ROUTING: Carrier wave directed to Cebu dev gateway...`,
    ]);

    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
      const newLog: TransmissionLog = {
        id: `TX-${Date.now()}`,
        designation: formData.designation,
        email: formData.email,
        subject: formData.frequency,
        payload: formData.payload,
        timestamp: new Date().toLocaleTimeString(),
        frequency: '1420.405 MHz',
        status: 'SENT',
      };
      setPacketLogs((prev) => [
        ...prev,
        `TRANSMISSION CONFIRMED: 200 OK (Packet TX-${Date.now().toString().slice(-4)})`,
        `STATUS: John Vincent Caballero notified in Cebu, Philippines.`,
      ]);
      if (onTransmissionComplete) {
        onTransmissionComplete(newLog);
      }
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jv.caballero@outlook.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleResetForm = () => {
    setTransmitted(false);
    setFormData({
      designation: '',
      email: '',
      frequency: 'PROJECT_INQUIRY',
      payload: '',
    });
  };

  return (
    <section
      id="contact-section"
      className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-transparent relative z-10"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-primary/40 rounded-xs mb-4 shadow-xs">
            <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              COMMUNICATION MATRIX // SEC. 03
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-on-surface font-normal leading-[1.05]">
            Establish{' '}
            <span className="relative inline-block">
              Resonance
              {/* Highlight Underline */}
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary-container -z-10 rounded-xs" />
            </span>
            .
          </h2>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            Open a channel. Whether it's a project inquiry, a technical debate, or a transmission from the void.
          </p>
        </div>

        {/* Main Transmission Form & Status Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left Column: Tactile Brutalist Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-surface-container-lowest border-2 border-primary p-6 md:p-10 rounded-xs shadow-[10px_10px_0px_0px_var(--shadow-cyan-drop)] hover:shadow-[14px_14px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300 relative"
            >
              {/* Corner Crosshairs */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />

              {/* Status Banner */}
              <div className="flex items-center justify-between border-b border-primary/30 pb-3 mb-6 font-mono text-xs text-primary">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-bold">COMM LINK ACTIVE</span>
                </span>
                <span className="font-mono text-xs">TX_FREQ: 1420.405 MHZ</span>
              </div>

              <AnimatePresence mode="wait">
                {transmitted ? (
                  /* Success Message State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 bg-secondary-container/50 border border-primary rounded-full mx-auto flex items-center justify-center text-primary shadow-xs">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-on-surface font-medium">
                      Transmission Acknowledged
                    </h3>
                    <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      Your packet has been safely received in Cebu. John Vincent will respond to your transmission shortly.
                    </p>
                    <div className="pt-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ y: -1 }}
                        onClick={handleResetForm}
                        className="px-6 py-2.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest rounded-xs hover:bg-secondary-container hover:text-primary transition-colors cursor-pointer font-bold"
                      >
                        Send Another Transmission
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  /* Active Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Designation (Name) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="designation-input"
                        className="block font-mono text-xs uppercase tracking-widest text-primary font-semibold"
                      >
                        DESIGNATION // YOUR NAME *
                      </label>
                      <input
                        id="designation-input"
                        type="text"
                        required
                        placeholder="e.g. Ada Lovelace / Quantum Systems"
                        value={formData.designation}
                        onChange={(e) =>
                          setFormData({ ...formData, designation: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary font-mono text-sm text-on-surface brutal-input rounded-xs transition-colors"
                      />
                    </div>

                    {/* Comms Vector (Email) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email-input"
                        className="block font-mono text-xs uppercase tracking-widest text-primary font-semibold"
                      >
                        COMMS VECTOR // EMAIL ADDRESS *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="e.g. contact@domain.org"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary font-mono text-sm text-on-surface brutal-input rounded-xs transition-colors"
                      />
                    </div>

                    {/* Signal Frequency (Inquiry Type) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="frequency-select"
                        className="block font-mono text-xs uppercase tracking-widest text-primary font-semibold"
                      >
                        SIGNAL FREQUENCY // PURPOSE
                      </label>
                      <select
                        id="frequency-select"
                        value={formData.frequency}
                        onChange={(e) =>
                          setFormData({ ...formData, frequency: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary font-mono text-sm text-on-surface brutal-input rounded-xs transition-colors"
                      >
                        <option value="PROJECT_INQUIRY">
                          [Q1] Project Commission / Creative Development
                        </option>
                        <option value="WEBGL_CONSULT">
                          [Q2] Full-Stack Architecture / AI Automation Consulting
                        </option>
                        <option value="DESIGN_SYSTEM">
                          [Q3] High-Velocity Product Engineering & CI/CD
                        </option>
                        <option value="TECHNICAL_DEBATE">
                          [Q4] Technical Debate / General Salutation
                        </option>
                      </select>
                    </div>

                    {/* Payload (Message) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="payload-input"
                        className="block font-mono text-xs uppercase tracking-widest text-primary font-semibold"
                      >
                        PAYLOAD // MESSAGE SPECIFICATION *
                      </label>
                      <textarea
                        id="payload-input"
                        required
                        rows={5}
                        placeholder="Outline scope, timeline, requirements, or greetings..."
                        value={formData.payload}
                        onChange={(e) =>
                          setFormData({ ...formData, payload: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary font-mono text-sm text-on-surface brutal-input rounded-xs resize-y transition-colors"
                      />
                    </div>

                    {/* Transmit Button (Tactile Brutalist) */}
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      whileHover={{ y: -1 }}
                      type="submit"
                      disabled={transmitting}
                      className="w-full py-4 bg-primary text-on-primary font-mono text-xs uppercase tracking-widest font-bold brutal-btn border border-primary rounded-xs flex items-center justify-center gap-2 hover:bg-primary-container disabled:opacity-50 cursor-pointer shadow-xs"
                    >
                      {transmitting ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          <span>ENCRYPTING & TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>TRANSMIT PAYLOAD</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Direct Info, Coordinates & Terminal Packet Logs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channel Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xs shadow-xs space-y-4 hover:border-primary hover:shadow-[8px_8px_0px_0px_var(--shadow-cyan-drop)] transition-shadow duration-300"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold border-b border-outline-variant pb-2 flex items-center justify-between">
                <span>DIRECT DISPATCH</span>
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>

              <div className="space-y-3 font-body text-sm text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase text-outline block">
                      EMAIL VECTOR
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={handleCopyEmail}
                      className="font-mono text-sm text-on-surface font-semibold hover:text-primary transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                    >
                      <span>jv.caballero@outlook.com</span>
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-outline hover:text-primary" />
                      )}
                    </motion.button>
                    {copiedEmail && (
                      <motion.span
                        initial={{ opacity: 0, y: -2 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block"
                      >
                        COPIED TO CLIPBOARD ✓
                      </motion.span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase text-outline block">
                      BASE OF OPERATIONS
                    </span>
                    <span className="font-body text-sm text-on-surface">
                      Talisay City, Cebu, Philippines (Remote Ready, US Overlap)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase text-outline block">
                      AVAILABILITY CALENDAR
                    </span>
                    <span className="font-mono text-xs text-primary font-bold">
                      OPEN TO FULL-STACK & AI AUTOMATION ROLES
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Live Packet Log */}
            <div className="bg-surface-container-lowest text-on-surface p-5 rounded-xs border border-outline-variant font-mono text-xs shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant mb-3 text-on-surface-variant text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-secondary" />
                  <span>TRANSMISSION_TERMINAL // V2</span>
                </div>
                <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE</span>
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] leading-relaxed max-h-48 overflow-y-auto">
                {packetLogs.map((log, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2"
                  >
                    <span className="text-primary select-none font-bold">&gt;</span>
                    <span className="text-on-surface-variant">{log}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

