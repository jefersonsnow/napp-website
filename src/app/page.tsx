"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Shield, Smartphone, Zap, MonitorPlay, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              n
            </div>
            <span className="font-bold text-xl tracking-tight">nApp.pt</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link href="#sobre" className="hover:text-white transition-colors">A Agência</Link>
            <Link href="#produtos" className="hover:text-white transition-colors">Produtos</Link>
            <Link href="#servicos" className="hover:text-white transition-colors">Especialidades</Link>
          </div>
          <a href="https://wa.me/351910664744" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform">
            Fale Connosco
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-violet-300 mb-8">
              <Zap className="h-4 w-4" /> Boutique de Software Premium
            </div>
          </motion.div>
          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-balance leading-[1.1]"
          >
            A Engenharia por trás do <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
              Sucesso Digital.
            </span>
          </motion.h1>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto text-pretty"
          >
            Transformamos ideias complexas em plataformas digitais de elite. 
            Desenhamos, construímos e escalamos soluções SaaS que dominam mercados.
          </motion.p>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#produtos" className="h-14 px-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors w-full sm:w-auto">
              Ver Projetos <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Flagship Product Showcase */}
      <section id="produtos" className="py-24 px-6 relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">O Nosso Produto Estrela</h2>
             <p className="text-white/50">Plataformas desenvolvidas e mantidas pela nApp.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="glass rounded-[2rem] p-8 md:p-12 border border-violet-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-violet-600/10 to-transparent pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-12 w-12 rounded-xl bg-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/20">
                  <MonitorPlay className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">AgendarPro</h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  O sistema de gestão e agendamentos online definitivo para salões de beleza e clínicas. Uma plataforma Multi-Tenant robusta com automatizações, POS e análises financeiras avançadas.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {["Mais de 500 salões ativos", "Milhares de agendamentos mensais", "Infraestrutura Cloud de Alta Disponibilidade"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="h-5 w-5 text-violet-400" /> {f}
                    </li>
                  ))}
                </ul>

                <a href="https://agendar.napp.pt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-violet-400 font-bold hover:text-violet-300">
                  Visitar o AgendarPro <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              
              <div className="relative">
                 <div className="aspect-[4/3] rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl relative">
                    <img src="/dashboard-preview.png" alt="AgendarPro Dashboard" className="absolute inset-0 w-full h-full object-cover object-left-top" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/Specialties */}
      <section id="servicos" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">As Nossas Especialidades</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">O que nos torna únicos na criação de software.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: <Code2 />, title: "SaaS & Web Apps", desc: "Desenvolvimento full-stack de plataformas escaláveis usando Next.js, React e Node.js." },
              { icon: <Smartphone />, title: "Mobile & PWA", desc: "Aplicações desenhadas para a perfeição mobile, garantindo conversão máxima." },
              { icon: <Shield />, title: "Infraestrutura Cloud", desc: "Arquiteturas robustas em servidores Linux e cloud providers com alta segurança." },
              { icon: <Zap />, title: "UI/UX Premium", desc: "Interfaces elegantes que convertem e apaixonam os utilizadores logo no primeiro segundo." },
              { icon: <Rocket />, title: "Performance Extrema", desc: "Otimização profunda de base de dados e assets para tempos de carregamento instantâneos." },
              { icon: <MonitorPlay />, title: "Sistemas Multi-Tenant", desc: "Arquiteturas complexas B2B2C, permitindo que cada cliente seu tenha o próprio ambiente." }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-colors border-white/5 hover:border-violet-500/30">
                <div className="h-12 w-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 border-t border-white/5 relative z-10 bg-gradient-to-b from-transparent to-violet-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Pronto para criar o próximo grande produto?</h2>
          <p className="text-xl text-white/60 mb-12">Deixe a engenharia connosco. Focamos-nos no código para que você se foque no negócio.</p>
          <a href="https://wa.me/351910664744?text=Olá,%20gostaria%20de%20falar%20com%20a%20equipa%20nApp!" target="_blank" rel="noopener noreferrer" className="inline-flex h-16 px-10 rounded-full bg-white text-black font-black items-center justify-center gap-2 hover:scale-105 transition-transform text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Falar com a Equipa <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 text-center text-white/30 text-sm font-medium border-t border-white/5 relative z-10">
        &copy; {new Date().getFullYear()} nApp. Todos os direitos reservados.
      </footer>
    </main>
  );
}
