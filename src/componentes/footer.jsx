import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ArrowRight, Cpu, BarChart3, Sparkles } from "lucide-react";


{/* INSTITUCIONAL */}
<section id="sobre" className="py-24 px-6 bg-white/5">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold"
    >
      Quem Somos
    </motion.h2>

    <motion.p
      variants={fadeUp}
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-6 max-w-3xl mx-auto text-slate-300"
    >
      A TICNES AI é uma empresa focada no desenvolvimento de soluções inteligentes
      que impulsionam eficiência, inovação e crescimento sustentável.
    </motion.p>

    <div className="mt-16 grid gap-10 md:grid-cols-4">
      {[
        {
          title: "Missão",
          desc: "Transformar dados em decisões estratégicas através de inteligência artificial aplicada ao negócio.",
        },
        {
          title: "Visão",
          desc: "Ser referência em soluções de IA em África, impulsionando empresas para o futuro digital.",
        },
        {
          title: "Valores",
          desc: "Inovação, ética, excelência técnica, foco em resultados e parceria com o cliente.",
        },
        {
          title: "Objetivo",
          desc: "Ajudar empresas a escalar com tecnologia inteligente, segura e orientada por dados.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          custom={index}
          className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur"
        >
          <h3 className="text-xl font-semibold text-indigo-400">
            {item.title}
          </h3>
          <p className="mt-4 text-slate-300">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
