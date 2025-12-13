import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ArrowRight, Cpu, BarChart3, Sparkles } from "lucide-react";

const heroData = {
  title: "Inteligência Artificial ao serviço da inovação",
  subtitle:
    "Desenvolvemos soluções inteligentes que transformam dados em decisões estratégicas para empresas do futuro.",
  cta: "Explorar Soluções",
};

const valueProps = [
  {
    icon: Cpu,
    title: "IA Personalizada",
    desc: "Modelos de inteligência artificial adaptados à realidade do seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Decisões Baseadas em Dados",
    desc: "Insights acionáveis para crescimento sustentável e escalável.",
  },
  {
    icon: Sparkles,
    title: "Inovação Contínua",
    desc: "Tecnologia de ponta aplicada com visão estratégica.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-950/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide text-white">
          TICNES<span className="text-indigo-500">.AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="hidden md:inline-flex rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold hover:bg-indigo-500 transition">
          Falar Connosco
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950 border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4 text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-4 rounded-xl bg-indigo-600 py-2 font-semibold hover:bg-indigo-500 transition">
              Falar Connosco
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Home() {
  const stats = [
    { value: "+10", label: "Projetos em IA" },
    { value: "5+", label: "Áreas de Atuação" },
    { value: "99%", label: "Satisfação" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análise",
      desc: "Compreendemos o problema e os dados do negócio.",
    },
    {
      step: "02",
      title: "Desenvolvimento",
      desc: "Criamos soluções de IA ajustadas ao contexto real.",
    },
    {
      step: "03",
      title: "Escala",
      desc: "Implementamos, monitorizamos e otimizamos continuamente.",
    },
  ];

  return (
    <>
      <Header />

      <main
        id="home"
        className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
      >
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
          <div className="max-w-5xl text-center">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 text-lg md:text-xl text-slate-300"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-10"
            >
              <button className="inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 text-base font-semibold transition-all hover:bg-indigo-500 hover:scale-105">
                {heroData.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <p className="text-4xl font-bold text-indigo-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-10 md:grid-cols-3"
            >
              {valueProps.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={index}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:bg-white/10"
                >
                  <item.icon className="h-10 w-10 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Como Trabalhamos
            </h2>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className="text-center"
                >
                  <p className="text-indigo-400 font-bold text-lg">
                    {step.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-slate-300">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 px-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold"
            >
              Pronto para levar a sua empresa ao próximo nível?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-lg text-slate-200"
            >
              Descubra como a TICNES AI pode transformar os seus processos com inteligência artificial.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10"
            >
              <button className="rounded-2xl bg-indigo-600 px-10 py-4 font-semibold transition-all hover:bg-indigo-500 hover:scale-105">
                Falar com um Especialista
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
