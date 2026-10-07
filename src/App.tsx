import {useMemo,useState} from 'react';
import {Bug,Github,LockKeyhole,ShieldAlert,ShieldCheck} from 'lucide-react';
import {cases} from './cases';
export default function App(){
  const [active,setActive]=useState(cases[0]);
  const [revealed,setRevealed]=useState(false);
  const summary=useMemo(()=>({critical:cases.filter(c=>c.severity==='Critical').length,high:cases.filter(c=>c.severity==='High').length,cwes:new Set(cases.map(c=>c.cwe)).size}),[]);
  return <main className="page">
    <nav><b><ShieldCheck/>SecureCodeBench</b><a href="https://github.com/yeabsira-mesfin/MovieStore" target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a></nav>
    <section className="hero"><div><span>AI CODE SECURITY EVALUATION</span><h1>Passing tests is not enough.</h1><p>SecureCodeBench measures whether generated code is functionally plausible and security-aware by evaluating common authorization, injection, token validation, SSRF, and secret-handling failures.</p></div><div className="matrix"><div><b>{cases.length}</b><span>security cases</span></div><div><b>{summary.cwes}</b><span>CWE classes</span></div><div><b>{summary.critical}</b><span>critical cases</span></div><div><b>{summary.high}</b><span>high cases</span></div></div></section>
    <section className="bench"><aside>{cases.map(c=><button onClick={()=>{setActive(c);setRevealed(false)}} className={active.id===c.id?'selected':''} key={c.id}><span>{c.id}<em>{c.severity}</em></span><b>{c.title}</b><small>{c.language} · {c.cwe}</small></button>)}</aside><article><div className="badge"><ShieldAlert size={17}/>{active.severity} · {active.cwe}</div><h2>{active.title}</h2><p className="prompt">Review the generated code. Decide whether it is safe for production and identify the most important weakness.</p><pre><code>{active.snippet}</code></pre><div className="checks"><div><LockKeyhole/><span>Authorization boundary</span></div><div><Bug/><span>Input and data flow</span></div><div><ShieldCheck/><span>Secure default behavior</span></div></div><button className="reveal" onClick={()=>setRevealed(!revealed)}>{revealed?'Hide gold review':'Reveal gold security review'}</button>{revealed&&<div className="review"><h3>Finding</h3><p>{active.finding}</p><h3>Secure pattern</h3><p>{active.securePattern}</p></div>}</article></section>
    <section className="scoring"><h2>Evaluation rubric</h2><div><span><b>35</b> vulnerability identification</span><span><b>25</b> exploitability and impact</span><span><b>25</b> secure remediation</span><span><b>15</b> regression-safe tests</span></div></section>
    <footer>Designed for secure-code review, AI evaluation, AppSec reasoning, and benchmark construction.</footer>
  </main>;
}
