import React, { useState } from "react";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.28-1.53a.75.75 0 10-1.06-1.06l-4.72 4.72-2.22-2.22a.75.75 0 10-1.06 1.06l2.75 2.75c.3.3.79.3 1.06 0l5.25-5.25z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l1.562 3.755a1.25 1.25 0 00.99.77l4.06.52c1.164.149 1.634 1.607.79 2.42l-2.997 2.86a1.25 1.25 0 00-.37 1.17l.79 4.02c.225 1.147-1.001 2.023-2.03 1.47l-3.62-1.94a1.25 1.25 0 00-1.16 0l-3.62 1.94c-1.03.553-2.255-.323-2.03-1.47l.79-4.02a1.25 1.25 0 00-.37-1.17L2.386 10.7c-.844-.813-.374-2.271.79-2.42l4.059-.52a1.25 1.25 0 00.99-.77l1.563-3.755z"/>
  </svg>
);

const QMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM9.75 9a2.25 2.25 0 114.5 0c0 .953-.587 1.52-1.278 1.98-.67.446-1.222.813-1.222 1.77a.75.75 0 001.5 0c0-.123.026-.186.278-.352.738-.49 1.722-1.144 1.722-2.398a3.75 3.75 0 10-7.5 0 .75.75 0 001.5 0zm2.25 7.5a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd"/>
  </svg>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur border-neutral-200">
    {children}
  </span>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <div className="mb-3">
        <Badge>{eyebrow}</Badge>
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-neutral-600 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const Nav = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-100">
    <Container className="flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <img src="https://images.unsplash.com/photo-1558944351-cb66194f2d72?q=80&w=200" alt="Duby Natural logo" className="h-8 w-8 rounded-xl object-cover"/>
        <span className="font-extrabold tracking-tight text-lg">Duby <span className="text-emerald-600">Natural</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
        <a href="#benefits" className="hover:text-neutral-900">Beneficios</a>
        <a href="#how" className="hover:text-neutral-900">Cómo funciona</a>
        <a href="#products" className="hover:text-neutral-900">Productos</a>
        <a href="#faq" className="hover:text-neutral-900">FAQ</a>
      </nav>
      <div className="flex items-center gap-3">
        <a href="https://wa.me/15555555555" target="_blank" className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition">WhatsApp</a>
        <a href="#pedido" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm">Pedir ahora</a>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-white"/>
    <Container className="py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>BARF fresco para mascotas</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            Alimentación real, resultados reales 🐶🐱
          </h1>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            En Duby Natural preparamos comida BARF balanceada con ingredientes frescos y locales. Más energía, mejor digestión y pelaje brillante. Entregas a domicilio en el Área de la Bahía.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#pedido" className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700 transition shadow">
              Crear plan de alimentación
            </a>
            <a href="#products" className="rounded-xl border px-5 py-3 font-semibold text-neutral-800 hover:bg-white transition">
              Ver menús
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2"><CheckIcon/>Sin granos ni ultraprocesados</div>
            <div className="flex items-center gap-2"><CheckIcon/>Entrega fría</div>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-[420px] object-cover rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1596495578065-8f6e3837f72f?q=80&w=1600" alt="Perro feliz comiendo BARF"/>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4 w-64">
            <div className="text-sm font-semibold">Resultados en 30 días</div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li className="flex gap-2 items-center"><CheckIcon/>Heces firmes</li>
              <li className="flex gap-2 items-center"><CheckIcon/>Más energía</li>
              <li className="flex gap-2 items-center"><CheckIcon/>Pelaje brillante</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="py-16 sm:py-24">
    <Container>
      <SectionTitle eyebrow="¿Por qué Duby Natural?" title="Nutrición completa con ingredientes de verdad" subtitle="Formulaciones guiadas por veterinarios y porciones hechas a la medida de tu mascota."/>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {title: "Energía constante", desc: "Proteína de calidad y grasas saludables para un día activo."},
          {title: "Digestión sana", desc: "Heces más firmes y menos gases en 2–4 semanas."},
          {title: "Piel y pelaje", desc: "Omega‑3 naturales para brillo y menos picazón."},
          {title: "Sin secretos", desc: "Lista clara de ingredientes, cero rellenos."},
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border p-6 bg-white/60">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3"><StarIcon/></div>
            <h3 className="font-semibold text-lg">{b.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const HowItWorks = () => (
  <section id="how" className="py-16 sm:py-24 bg-neutral-50/60">
    <Container>
      <SectionTitle eyebrow="Fácil y rápido" title="Así funciona" subtitle="Tres pasos para empezar hoy mismo."/>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          {n: "01", t: "Cuéntanos de tu mascota", d: "Edad, peso, actividad y objetivos (control de peso, piel, energía)."},
          {n: "02", t: "Elige un plan", d: "Semanales o mensuales. Envío frío a tu puerta o pickup."},
          {n: "03", t: "Sirve y listo", d: "Empaques por porción para máxima frescura y cero desperdicio."},
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-mono text-neutral-500">{s.n}</div>
            <h3 className="mt-2 font-semibold text-lg">{s.t}</h3>
            <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const productsData = [
  { id: "pollo", name: "Menú Pollo", desc: "Proteína magra, fácil digestión.", price: 8.5, unit: "/porción 250g", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600" },
  { id: "res", name: "Menú Res", desc: "Alto en hierro y sabor.", price: 9.5, unit: "/porción 250g", img: "https://images.unsplash.com/photo-1615937691194-97dbd3f7f27a?q=80&w=1600" },
  { id: "cerdo", name: "Menú Cerdo", desc: "Energía sostenida, rica en B1.", price: 9.0, unit: "/porción 250g", img: "https://images.unsplash.com/photo-1615937691193-1d3c1c2f3a58?q=80&w=1600" },
  { id: "mixto", name: "Menú Mixto", desc: "Rotación equilibrada para paladares exigentes.", price: 9.2, unit: "/porción 250g", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600" },
];

const Products = () => (
  <section id="products" className="py-16 sm:py-24">
    <Container>
      <SectionTitle eyebrow="Menús frescos" title="Elige el favorito de tu peludo" subtitle="Porciones de 250g listas para servir. Descuentos por plan semanal y mensual."/>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map((p) => (
          <div key={p.id} className="group rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition">
            <img src={p.img} alt={p.name} className="h-44 w-full object-cover"/>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-2xl font-bold text-neutral-900">${p.price.toFixed(2)}</span>
                <span className="text-sm text-neutral-500">{p.unit}</span>
              </div>
              <a href="#pedido" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 text-white py-2.5 font-semibold group-hover:bg-neutral-800 transition">Añadir al plan</a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Testimonials = () => (
  <section className="py-16 sm:py-24 bg-emerald-50/50">
    <Container>
      <SectionTitle eyebrow="Confianza real" title="Lo que dicen nuestros clientes" subtitle="Resultados visibles y mascotas más felices."/>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <figure key={i} className="rounded-2xl border bg-white/80 p-6">
            <div className="flex gap-1 text-amber-500">
              {Array.from({length:5}).map((_,idx)=>(<StarIcon key={idx}/>))}
            </div>
            <blockquote className="mt-3 text-neutral-700 italic">“En 3 semanas mi perro dejó de rascarse y tiene más energía. El empaque por porciones es súper práctico.”</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-500">Laura G. — San José, CA</figcaption>
          </figure>
        ))}
      </div>
    </Container>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-16 sm:py-24">
    <Container>
      <SectionTitle eyebrow="¿Dudas?" title="Preguntas frecuentes" subtitle="Escríbenos por WhatsApp si necesitas ayuda personalizada."/>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          {q: "¿Qué es la dieta BARF?", a: "Es alimentación natural basada en carnes crudas, vísceras, huesos carnosos y vegetales/semillas en proporciones adecuadas para imitar una dieta evolutiva."},
          {q: "¿Cómo se conserva?", a: "Mantenemos la cadena de frío desde la preparación hasta la entrega. En casa, refrigera para 48–72h o congela hasta 3 meses."},
          {q: "¿Cómo calculan la porción?", a: "Usamos peso, edad y actividad para definir gramos por día; ajustamos en los primeros 30 días según progreso."},
          {q: "¿Incluye transición?", a: "Sí, te guiamos con una transición de 7 días para evitar malestares digestivos."},
        ].map((f) => (
          <div key={f.q} className="rounded-2xl border p-6 bg-white">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-emerald-600"><QMarkIcon/></div>
              <div>
                <h4 className="font-semibold">{f.q}</h4>
                <p className="mt-1 text-sm text-neutral-600">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const OrderForm = () => {
  const [form, setForm] = useState({ name: "", city: "San José, CA", pet: "Perro", weight: "", plan: "Semanal", phone: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const openWhatsApp = () => {
    const msg = encodeURIComponent(`Hola Duby Natural! Soy ${form.name}. Ciudad: ${form.city}. Mascota: ${form.pet}. Peso: ${form.weight} kg. Plan: ${form.plan}. Tel: ${form.phone}. Quiero empezar mi plan BARF.`);
    window.open(`https://wa.me/15555555555?text=${msg}`, "_blank");
  };

  return (
    <section id="pedido" className="py-16 sm:py-24 bg-neutral-50">
      <Container>
        <SectionTitle eyebrow="Empieza hoy" title="Crea tu plan de alimentación" subtitle="Completa el formulario y te asesoramos gratis por WhatsApp."/>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Tu nombre</label>
                <input name="name" value={form.name} onChange={onChange} placeholder="Ej: Edier" className="mt-1 w-full rounded-xl border px-3 py-2"/>
              </div>
              <div>
                <label className="text-sm font-medium">Ciudad</label>
                <input name="city" value={form.city} onChange={onChange} className="mt-1 w-full rounded-xl border px-3 py-2"/>
              </div>
              <div>
                <label className="text-sm font-medium">Mascota</label>
                <select name="pet" value={form.pet} onChange={onChange} className="mt-1 w-full rounded-xl border px-3 py-2">
                  <option>Perro</option>
                  <option>Gato</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Peso (kg)</label>
                <input name="weight" value={form.weight} onChange={onChange} type="number" min="0" step="0.1" placeholder="Ej: 12.5" className="mt-1 w-full rounded-xl border px-3 py-2"/>
              </div>
              <div>
                <label className="text-sm font-medium">Plan</label>
                <select name="plan" value={form.plan} onChange={onChange} className="mt-1 w-full rounded-xl border px-3 py-2">
                  <option>Semanal</option>
                  <option>Mensual</option>
                  <option>Prueba 3 días</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">WhatsApp</label>
                <input name="phone" value={form.phone} onChange={onChange} placeholder="Ej: +1 408 …" className="mt-1 w-full rounded-xl border px-3 py-2"/>
              </div>
            </div>
            <button onClick={openWhatsApp} className="mt-6 w-full rounded-xl bg-emerald-600 text-white py-3 font-semibold hover:bg-emerald-700 transition">Enviar por WhatsApp</button>
            <p className="mt-3 text-xs text-neutral-500">Al continuar aceptas nuestras políticas de uso de datos. Solo usamos tu información para asesorarte.</p>
          </div>
          <div className="rounded-3xl border bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold">¿Qué incluye el plan?</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2 items-start"><CheckIcon/>Evaluación nutricional personalizada.</li>
              <li className="flex gap-2 items-start"><CheckIcon/>Menús rotativos (pollo, res, cerdo, mixto).</li>
              <li className="flex gap-2 items-start"><CheckIcon/>Guía de transición de 7 días.</li>
              <li className="flex gap-2 items-start"><CheckIcon/>Entrega fría a domicilio en Bay Area.</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-neutral-50 p-4 border">
              <div className="text-sm font-medium">Ejemplo de ración diaria (perro 12 kg)</div>
              <div className="mt-1 text-sm text-neutral-600">Entre 2%–3% del peso corporal: 240–360 g/día divididos en 2 comidas.</div>
            </div>
            <div className="mt-6 text-sm text-neutral-600">
              ¿Mayorista o distribuidores? <a href="mailto:hola@dubynatural.com" className="text-emerald-700 font-semibold">Escríbenos</a> para listas de precios por volumen.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t bg-white">
    <Container className="py-10">
      <div className="grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-extrabold text-lg">Duby <span className="text-emerald-600">Natural</span></div>
          <p className="mt-2 text-neutral-600">Comida BARF fresca y balanceada para perros y gatos. San José, California.</p>
          <div className="mt-3 flex items-center gap-3">
            <a className="underline" href="https://www.instagram.com/duby.natural" target="_blank">Instagram</a>
            <a className="underline" href="https://wa.me/15555555555" target="_blank">WhatsApp</a>
            <a className="underline" href="mailto:hola@dubynatural.com">Email</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Compañía</div>
          <ul className="mt-2 space-y-2 text-neutral-600">
            <li><a href="#products" className="hover:underline">Productos</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#pedido" className="hover:underline">Pedir ahora</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Cobertura</div>
          <ul className="mt-2 space-y-2 text-neutral-600">
            <li>San José</li>
            <li>Santa Clara</li>
            <li>Sunnyvale</li>
            <li>Mountain View</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-2 text-neutral-600">
            <li>Términos & Privacidad</li>
            <li>Alergias e intolerancias: consúltalo con tu veterinario.</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t text-xs text-neutral-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Duby Natural. Todos los derechos reservados.</span>
        <span>Hecho con ❤️ en Bay Area</span>
      </div>
    </Container>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans antialiased text-neutral-900">
      <Nav/>
      <Hero/>
      <Benefits/>
      <HowItWorks/>
      <Products/>
      <Testimonials/>
      <FAQ/>
      <OrderForm/>
      <Footer/>
    </div>
  );
};

export default App;
