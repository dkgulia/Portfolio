'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  profile, about, projects, skills, experiences,
  education, certifications, stats, sections, SectionId,
} from '../lib/data';

/* ---------------- Icons ---------------- */
type IconProps = { className?: string; style?: React.CSSProperties };
const Icon = {
  External: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  ),
  Mail: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
    </svg>
  ),
  Github: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  Sun: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  Moon: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  ),
  Chevron: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  Search: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Corner: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 10 4 15l5 5" /><path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </svg>
  ),
  Menu: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  Music: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  ),
  Pause: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  ),
};

/* Background music — swap this URL for any track you like (royalty-free default) */
const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';

const num = (i: number) => String(i + 1).padStart(2, '0');

type DetailKind = 'project' | 'experience';
type DetailRef = { kind: DetailKind; index: number };
type SectionProps = {
  go: (id: SectionId) => void;
  open?: (kind: DetailKind, index: number) => void;
};

/* ---------------- Live clock (New Delhi) ---------------- */
function useClock() {
  const [time, setTime] = useState('--:--:--');
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Asia/Kolkata' }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Clock() {
  const time = useClock();
  return (
    <div className="clock-pill hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm mono tabular-nums">
      <span className="online-dot w-2 h-2 rounded-full" />
      {time}
    </div>
  );
}

/* ---------------- Typewriter ---------------- */
function Typewriter() {
  const roles = useMemo(
    () => ['Full-Stack Developer', 'SaaS Builder', 'Next.js + TypeScript', 'AI-native tooling'],
    [],
  );
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = roles[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text.length < full.length) t = setTimeout(() => setText(full.slice(0, text.length + 1)), 70);
    else if (!del && text.length === full.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && text.length > 0) t = setTimeout(() => setText(full.slice(0, text.length - 1)), 35);
    else { setDel(false); setI((p) => (p + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [text, del, i, roles]);

  return (
    <span className="mono">
      <span className="accent">$ </span>{text}<span className="cursor">▋</span>
    </span>
  );
}

/* ---------------- Section bodies ---------------- */
function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-9">
      <h1 className="title-xl text-4xl sm:text-5xl md:text-6xl">{kicker}</h1>
      <h2 className="title-lg text-2xl sm:text-3xl md:text-4xl mt-2.5">{title}</h2>
    </div>
  );
}

function Introduction({ go }: SectionProps) {
  const facts = [
    { k: 'Role', v: 'Senior Full-Stack Developer' },
    { k: 'Now at', v: 'Stunning Dentistry' },
    { k: 'Based in', v: 'New Delhi, India' },
    { k: 'Focus', v: 'Healthcare & E-commerce' },
  ];
  const mini = [
    { value: '8', label: 'Portals shipped' },
    { value: '1,000+', label: 'Products served' },
    { value: '200+', label: 'SQL migrations' },
    { value: '<90s', label: 'Zero-downtime deploys' },
  ];
  const coreStack = ['Next.js 16', 'TypeScript', 'Fastify', 'PostgreSQL', 'AWS'];

  return (
    <div>
      <div className="grid lg:grid-cols-[1.45fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Left */}
        <div>
          <div className="avail inline-flex items-center gap-2 px-3 py-1.5 text-xs mono mb-6">
            <span className="online-dot w-2 h-2 rounded-full" /> Available for work
          </div>
          <h1 className="title-xl title-grad text-5xl sm:text-6xl">{profile.name}</h1>
          <div className="text-lg md:text-xl mt-4 h-7" style={{ color: 'var(--text)' }}>
            <Typewriter />
          </div>
          <p className="body-text text-base md:text-lg leading-relaxed mt-6">{profile.intro}</p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm">
              Get Resume <Icon.External className="w-4 h-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost inline-flex items-center gap-2 px-5 py-3 text-sm">
              <Icon.Mail className="w-4 h-4" /> Send Mail
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="nav-link inline-flex items-center gap-2"><Icon.Github className="w-4 h-4" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link inline-flex items-center gap-2">LinkedIn <Icon.External className="w-3.5 h-3.5" /></a>
            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="nav-link inline-flex items-center gap-2">Website <Icon.External className="w-3.5 h-3.5" /></a>
          </div>
        </div>

        {/* Right — snapshot card */}
        <div className="card p-6">
          <div className="mono text-xs muted mb-4">{'// snapshot'}</div>
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {facts.map((f) => (
              <div key={f.k} className="flex items-center justify-between gap-3 py-2.5">
                <span className="text-sm muted mono">{f.k}</span>
                <span className="text-sm font-medium text-right" style={{ color: 'var(--text)' }}>{f.v}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5">
            {mini.map((m) => (
              <div key={m.label} className="rounded-xl p-3" style={{ background: 'var(--active)' }}>
                <div className="stat-value text-2xl">{m.value}</div>
                <div className="muted text-[11px] mt-0.5 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div className="mono text-xs muted mb-2.5">{'// core stack'}</div>
            <div className="flex flex-wrap gap-1.5">
              {coreStack.map((t) => (
                <span key={t} className="chip text-[11px] px-2 py-1">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pager next="about" go={go} />
    </div>
  );
}

function About({ go }: SectionProps) {
  return (
    <div>
      <SectionHeader kicker="About Me" title="More than just a title." />
      <div className="space-y-5 max-w-3xl">
        {about.map((p, i) => (
          <p key={i} className="body-text text-base md:text-lg leading-relaxed">{p}</p>
        ))}
      </div>
      <Pager prev="introduction" next="projects" go={go} />
    </div>
  );
}

function Projects({ go, open }: SectionProps) {
  return (
    <div>
      <SectionHeader kicker="Projects" title="Things I've built and shipped." />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <button key={p.title} onClick={() => open?.('project', i)}
            className="card card-edge p-6 flex flex-col text-left cursor-pointer">
            <span className="card-num">{num(i)}</span>
            <span className="text-xs font-medium muted uppercase tracking-wider">{p.subtitle}</span>
            <h3 className="text-lg font-bold mt-2" style={{ color: 'var(--text)' }}>{p.title}</h3>
            <p className="body-text text-sm leading-relaxed mt-3 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.technologies.slice(0, 5).map((t) => (
                <span key={t} className="chip text-[11px] px-2 py-0.5">{t}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 accent">
              View details <Icon.Chevron className="w-3.5 h-3.5" />
            </span>
          </button>
        ))}
      </div>
      <Pager prev="about" next="skills" go={go} />
    </div>
  );
}

function Skills({ go }: SectionProps) {
  return (
    <div>
      <SectionHeader kicker="Skills & Tools" title="My everyday toolkit." />
      <div className="grid sm:grid-cols-2 gap-5">
        {skills.map((group, i) => (
          <div key={group.category} className="card p-6">
            <span className="card-num">{num(i)}</span>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <span className="accent mono text-sm">{num(i)}</span> {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((t) => (
                <span key={t} className="chip text-sm px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Pager prev="projects" next="experience" go={go} />
    </div>
  );
}

function ExperienceSection({ go, open }: SectionProps) {
  return (
    <div>
      <SectionHeader kicker="Experience" title="Where I've made an impact." />
      <div className="space-y-5">
        {experiences.map((e, i) => (
          <button key={e.company} onClick={() => open?.('experience', i)}
            className="card card-edge p-6 w-full text-left cursor-pointer block">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                {e.title} · <span className="accent">{e.company}</span>
              </h3>
              <span className="text-sm muted mono">{e.period}</span>
            </div>
            <span className="text-sm muted">{e.location}</span>
            <p className="body-text text-sm leading-relaxed mt-3">{e.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {e.technologies.slice(0, 6).map((t) => (
                <span key={t} className="chip text-[11px] px-2 py-0.5">{t}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 accent">
              View details <Icon.Chevron className="w-3.5 h-3.5" />
            </span>
          </button>
        ))}
      </div>
      <Pager prev="skills" next="education" go={go} />
    </div>
  );
}

function Education({ go }: SectionProps) {
  return (
    <div>
      <SectionHeader kicker="Education" title="Foundations & credentials." />
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="card p-6">
          <h3 className="text-base font-bold mb-4" style={{ color: 'var(--text)' }}>Education</h3>
          {education.map((ed) => (
            <div key={ed.degree}>
              <div className="font-medium" style={{ color: 'var(--text)' }}>{ed.degree}</div>
              <div className="text-sm muted mt-1">{ed.school} · {ed.location}</div>
            </div>
          ))}
        </div>
        <div className="card p-6">
          <h3 className="text-base font-bold mb-4" style={{ color: 'var(--text)' }}>Certifications</h3>
          <ul className="space-y-2.5">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2.5 body-text text-sm">
                <span className="accent mono">+</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Pager prev="experience" next="contact" go={go} />
    </div>
  );
}

function Contact({ go }: SectionProps) {
  const rows = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    { label: 'Location', value: profile.location, href: null },
    { label: 'Website', value: 'deepakgulia.online', href: profile.website },
    { label: 'GitHub', value: 'github.com/dkgulia', href: profile.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/deepak0809', href: profile.linkedin },
  ];
  return (
    <div>
      <SectionHeader kicker="Contact" title="Let's build something." />
      <p className="body-text text-base md:text-lg max-w-2xl mb-8">
        Have a project in mind or want to talk shop? The fastest way to reach me is email — I usually reply within a day.
      </p>
      <div className="card divide-y" style={{ borderColor: 'var(--border)' }}>
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="text-sm muted mono">{r.label}</span>
            {r.href ? (
              <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="text-sm font-medium hover:underline" style={{ color: 'var(--text)' }}>{r.value}</a>
            ) : (
              <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{r.value}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-8">
        <a href={`mailto:${profile.email}`} className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm">
          <Icon.Mail className="w-4 h-4" /> Send Mail
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 px-5 py-3 text-sm">
          <Icon.Github className="w-4 h-4" /> GitHub
        </a>
      </div>
      <Pager prev="education" next="stats" go={go} />
    </div>
  );
}

function Stats({ go }: SectionProps) {
  return (
    <div>
      <SectionHeader kicker="Stats" title="The work, in numbers." />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="card p-6">
            <div className="stat-value text-4xl md:text-5xl">{s.value}</div>
            <div className="body-text text-sm mt-2">{s.label}</div>
          </div>
        ))}
      </div>
      <Pager prev="contact" go={go} />
    </div>
  );
}

/* ---------------- Bottom pager ---------------- */
function Pager({ prev, next, go }: { prev?: SectionId; next?: SectionId; go: (id: SectionId) => void }) {
  const meta = (id: SectionId) => {
    const i = sections.findIndex((s) => s.id === id);
    return { label: sections[i].label, n: num(i) };
  };
  return (
    <div className="flex items-center justify-between mt-14 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
      {prev ? (
        <button onClick={() => go(prev)} className="pager flex items-center gap-2.5 px-3 py-2 text-left">
          <Icon.Chevron className="w-4 h-4 rotate-180 shrink-0" />
          <span><span className="pager-num mono text-xs block">{meta(prev).n} · prev</span><span className="text-sm font-medium">{meta(prev).label}</span></span>
        </button>
      ) : <span />}
      {next ? (
        <button onClick={() => go(next)} className="pager flex items-center gap-2.5 px-3 py-2 text-right">
          <span><span className="pager-num mono text-xs block">{meta(next).n} · next</span><span className="text-sm font-medium">{meta(next).label}</span></span>
          <Icon.Chevron className="w-4 h-4 shrink-0" />
        </button>
      ) : <span />}
    </div>
  );
}

/* ---------------- Detail page ---------------- */
function BulletList({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>{title}</h3>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5 body-text text-sm leading-relaxed">
            <span className="accent mt-0.5 mono shrink-0">+</span><span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailPage({ detail, back }: { detail: DetailRef; back: () => void }) {
  const isProject = detail.kind === 'project';
  const backLabel = isProject ? 'Back to projects' : 'Back to experience';

  const head = isProject
    ? (() => { const p = projects[detail.index]; return { title: p.title, sub: p.subtitle, overview: p.overview, tech: p.technologies }; })()
    : (() => { const e = experiences[detail.index]; return { title: `${e.title} · ${e.company}`, sub: `${e.period} · ${e.location}`, overview: e.description, tech: e.technologies }; })();

  const p = isProject ? projects[detail.index] : null;
  const e = !isProject ? experiences[detail.index] : null;
  const liveUrl = isProject ? p!.liveUrl : e!.url;
  const githubUrl = isProject ? p!.githubUrl : null;

  return (
    <div>
      <button onClick={back} className="pager inline-flex items-center gap-2 px-3 py-2 text-sm font-medium mb-7">
        <Icon.Chevron className="w-4 h-4 rotate-180" /> {backLabel}
      </button>

      <h1 className="title-xl text-4xl sm:text-5xl md:text-6xl">{head.title}</h1>
      <p className="accent text-sm mono mt-3">{head.sub}</p>
      <p className="body-text text-base md:text-lg leading-relaxed max-w-3xl mt-6">{head.overview}</p>

      <div className="mt-9">
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {head.tech.map((t) => (
            <span key={t} className="chip text-sm px-3 py-1.5">{t}</span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-9 mt-10">
        {isProject ? (
          <>
            <BulletList title="Features" items={p!.features} />
            <BulletList title="Challenges" items={p!.challenges} />
            <BulletList title="Learnings" items={p!.learnings} />
          </>
        ) : (
          <div className="md:col-span-2">
            <BulletList title="Highlights" items={e!.achievements} />
          </div>
        )}

        <div>
          <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>Links</h3>
          <div className="flex flex-wrap gap-3">
            {liveUrl ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm">
                Live <Icon.External className="w-3.5 h-3.5" />
              </a>
            ) : <span className="text-sm muted">Private / not public</span>}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm">
                <Icon.Github className="w-4 h-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
        <button onClick={back} className="pager inline-flex items-center gap-2 px-3 py-2 text-sm font-medium">
          <Icon.Chevron className="w-4 h-4 rotate-180" /> {backLabel}
        </button>
      </div>
    </div>
  );
}

/* ---------------- Command palette ---------------- */
function CommandPalette({ open, onClose, go }: { open: boolean; onClose: () => void; go: (id: SectionId) => void }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  type Item = { id: string; label: string; hint: string; run: () => void };
  const items: Item[] = useMemo(() => {
    const secItems: Item[] = sections.map((s) => ({
      id: s.id, label: s.label, hint: 'Section', run: () => { go(s.id); onClose(); },
    }));
    const links: Item[] = [
      { id: 'l-resume', label: 'Open Resume', hint: 'Link', run: () => window.open(profile.resume, '_blank') },
      { id: 'l-github', label: 'GitHub', hint: 'Link', run: () => window.open(profile.github, '_blank') },
      { id: 'l-linkedin', label: 'LinkedIn', hint: 'Link', run: () => window.open(profile.linkedin, '_blank') },
      { id: 'l-mail', label: 'Send Mail', hint: 'Link', run: () => { window.location.href = `mailto:${profile.email}`; } },
    ];
    return [...secItems, ...links];
  }, [go, onClose]);

  const filtered = useMemo(
    () => (q ? items.filter((it) => it.label.toLowerCase().includes(q.toLowerCase())) : items),
    [q, items],
  );

  useEffect(() => { if (open) { setQ(''); setSel(0); setTimeout(() => inputRef.current?.focus(), 30); } }, [open]);
  useEffect(() => { setSel(0); }, [q]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); filtered[sel]?.run(); }
    else if (e.key === 'Escape') { e.preventDefault(); onClose(); }
  };

  if (!open) return null;
  return (
    <div className="cmdk-backdrop flex items-start justify-center pt-[12vh] px-4" onClick={onClose}>
      <div className="cmdk-panel w-full max-w-xl overflow-hidden" onClick={(e) => e.stopPropagation()} onKeyDown={onKey}>
        <div className="flex items-center gap-3 px-4 h-14 border-b" style={{ borderColor: 'var(--border)' }}>
          <Icon.Search className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Jump to a section or link…"
            className="bg-transparent outline-none text-sm w-full" style={{ color: 'var(--text)' }} />
          <span className="kbd text-[11px] px-1.5 py-0.5">esc</span>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && <div className="px-3 py-6 text-center text-sm muted">No matches</div>}
          {filtered.map((it, i) => (
            <button key={it.id} onMouseEnter={() => setSel(i)} onClick={it.run}
              className={`cmdk-item w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left ${i === sel ? 'is-active' : ''}`}>
              <span className="flex items-center gap-3 text-sm">
                <span className="cmdk-num text-xs w-5">{it.hint === 'Section' ? num(sections.findIndex((s) => s.id === it.id)) : '→'}</span>
                {it.label}
              </span>
              <span className="text-[11px] muted mono">{it.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main shell ---------------- */
export default function Portfolio() {
  const [active, setActive] = useState<SectionId>('introduction');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [detail, setDetail] = useState<DetailRef | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeIndex = sections.findIndex((s) => s.id === active);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 0.35;
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, []);

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmdOpen((o) => !o); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = useCallback((id: SectionId) => {
    setActive(id);
    setDetail(null);
    setMenuOpen(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const open = useCallback((kind: DetailKind, index: number) => {
    setDetail({ kind, index });
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const back = useCallback(() => {
    setDetail(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const Body = {
    introduction: Introduction, about: About, projects: Projects, skills: Skills,
    experience: ExperienceSection, education: Education, contact: Contact, stats: Stats,
  }[active];

  return (
    <div className="min-h-screen flex flex-col">
      <audio ref={audioRef} src={MUSIC_URL} loop preload="none"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} go={go} />

      {/* Top bar */}
      <header className="topbar sticky top-0 z-50">
        <div className="flex items-center gap-4 px-4 md:px-6 h-16">
          <button onClick={() => go('introduction')} className="flex items-center gap-2 shrink-0 mono font-bold text-base">
            <Icon.Corner className="w-5 h-5 accent" />
            <span>~/{profile.handle.split('.')[0]}</span><span className="cursor">_</span>
          </button>

          <nav className="hidden md:flex items-center gap-5 ml-2 text-sm font-medium">
            <button onClick={() => go('introduction')} className={`nav-link ${active === 'introduction' ? 'is-active' : ''}`}>Home</button>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link inline-flex items-center gap-1">LinkedIn <Icon.External className="w-3.5 h-3.5" /></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="nav-link inline-flex items-center gap-1">Resume <Icon.External className="w-3.5 h-3.5" /></a>
          </nav>

          <div className="flex-1" />

          <button onClick={() => setCmdOpen(true)} className="search-trigger hidden sm:flex items-center gap-2 px-3 h-9 w-40 lg:w-64 text-sm">
            <Icon.Search className="w-4 h-4 shrink-0" />
            <span className="flex-1 text-left">Search…</span>
            <span className="kbd text-[11px] px-1.5 py-0.5">⌘K</span>
          </button>

          <Clock />

          <div className="flex items-center gap-1">
            <button onClick={toggleMusic} className={`icon-btn p-2 ${playing ? 'is-playing' : ''}`} title={playing ? 'Pause music' : 'Play music'} aria-label="Toggle background music">
              {playing ? <Icon.Pause className="w-[18px] h-[18px]" /> : <Icon.Music className="w-[18px] h-[18px]" />}
            </button>
            <button onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} className="icon-btn p-2" title="Toggle theme">
              {theme === 'dark' ? <Icon.Sun className="w-[18px] h-[18px]" /> : <Icon.Moon className="w-[18px] h-[18px]" />}
            </button>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn p-2" title="GitHub"><Icon.Github className="w-[18px] h-[18px]" /></a>
            <button onClick={() => setMenuOpen(true)} className="icon-btn p-2 md:hidden" title="Menu" aria-label="Open menu">
              <Icon.Menu className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="cmdk-backdrop md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 h-full w-72 max-w-[82%] p-5 flex flex-col"
            style={{ background: 'var(--bg-2)', borderLeft: '1px solid var(--border-strong)', animation: 'fadeIn 0.18s ease' }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <span className="index-label text-xs mono uppercase">Index</span>
              <button onClick={() => setMenuOpen(false)} className="icon-btn p-2" aria-label="Close menu">
                <Icon.Close className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-1">
              {sections.map((s, i) => (
                <button key={s.id} onClick={() => go(s.id)}
                  className={`side-link flex items-center gap-3 w-full text-left px-3 py-3 text-sm font-medium ${active === s.id ? 'is-active' : ''}`}>
                  <span className="side-num mono text-xs">{num(i)}</span>{s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 max-w-[1400px] w-full mx-auto">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 px-5 py-8">
          <div className="sticky top-24">
            <div className="index-label text-xs mono uppercase mb-4 px-2">Index</div>
            <nav className="space-y-1">
              {sections.map((s, i) => (
                <button key={s.id} onClick={() => go(s.id)}
                  className={`side-link flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm font-medium ${active === s.id ? 'is-active' : ''}`}>
                  <span className="side-num mono text-xs">{num(i)}</span>{s.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="divider-v hidden md:block w-px self-stretch" />

        {/* Content */}
        <main className="flex-1 min-w-0 px-5 md:px-10 lg:px-14 py-8 md:py-12">
          {/* Breadcrumb */}
          <div className="crumb text-xs mono mb-7 flex items-center gap-1.5">
            <span className="crumb-accent">{num(activeIndex)}</span>
            <span>/ {String(sections.length).padStart(2, '0')}</span>
            <span className="mx-1">—</span>
            <span>{sections[activeIndex].label}</span>
            {detail && (
              <>
                <span className="mx-1">/</span>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {detail.kind === 'project' ? projects[detail.index].title : experiences[detail.index].company}
                </span>
              </>
            )}
          </div>

          <div key={detail ? `${detail.kind}-${detail.index}` : active} className="section-enter">
            {detail ? <DetailPage detail={detail} back={back} /> : <Body go={go} open={open} />}
          </div>
        </main>
      </div>
    </div>
  );
}
