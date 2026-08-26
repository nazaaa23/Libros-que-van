import { type FormEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ShoppingBag,
  Star,
  Truck,
  X,
} from 'lucide-react';

const queryClient = new QueryClient();

const PHONE = '0221 592-8693';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=C.+16+2353%2C+Gonnet%2C+Buenos+Aires';

function Brand() {
  return (
    <a className="brand" href="#inicio" data-testid="link-brand">
      <span className="brand-mark" aria-hidden="true">
        <BookOpen strokeWidth={1.8} />
      </span>
      <span>
        <span className="brand-name">Libros que van</span>
        <span className="brand-subtitle">librería infantil · Gonnet</span>
      </span>
    </a>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const links = [
    { href: '#la-libreria', label: 'La librería' },
    { href: '#recomendaciones', label: 'Recomendaciones' },
    { href: '#visitanos', label: 'Visitanos' },
  ];

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <Brand />
        <nav className="desktop-links" aria-label="Navegación principal">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href} data-testid={`link-nav-${link.label.toLowerCase().replaceAll(' ', '-')}`}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contacto" data-testid="link-nav-contacto">
            Hablemos <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {isOpen && (
          <nav className="mobile-menu" aria-label="Navegación móvil">
            {links.map((link) => (
              <a className="nav-link" href={link.href} key={link.href} onClick={closeMenu} data-testid={`link-mobile-${link.label.toLowerCase().replaceAll(' ', '-')}`}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta" href="#contacto" onClick={closeMenu} data-testid="link-mobile-contacto">
              Hablemos <ArrowUpRight size={15} />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function LogoBookIllustration() {
  return (
    <div className="hero-art" aria-label="Ilustración de una pila de libros y una hoja">
      <div className="art-sun" />
      <div className="art-caption">un mundo<br />por abrir</div>
      <div className="book book-one"><span className="book-title">La aventura<br />empieza acá</span></div>
      <div className="book book-two"><span className="book-title">Leer<br />juntos</span></div>
      <div className="book book-three" />
      <div className="art-leaf" />
      <span className="floating-dot dot-a" />
      <span className="floating-dot dot-b" />
      <span className="floating-dot dot-c" />
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="section-inner hero-inner">
          <div>
            <div className="eyebrow reveal">Un refugio en Gonnet</div>
            <h1 className="reveal reveal-delay-1">Hay un libro<br />esperando <em>por vos.</em></h1>
            <p className="hero-copy reveal reveal-delay-2">
              Libros para descubrir sin apuro. Historias ilustradas, miradas curiosas y alguien que te acompaña a encontrar ese libro que todavía no sabías que buscabas.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button-primary" href={`tel:${PHONE.replace(/\s|-/g, '')}`} data-testid="link-hero-telefono">
                <Phone size={16} /> Llamanos
              </a>
              <a className="button-secondary" href="#visitanos" data-testid="link-hero-visitanos">
                Vení a conocernos <ArrowDown size={15} />
              </a>
            </div>
            <div className="hero-note reveal reveal-delay-3">
              <Leaf size={19} strokeWidth={1.6} /> Para leer a cualquier edad.
            </div>
          </div>
          <LogoBookIllustration />
        </div>
      </section>
      <div className="strip">
        <div className="section-inner strip-inner">
          <span className="strip-item"><Star size={16} fill="currentColor" /> 5.0 en 14 reseñas</span>
          <span className="strip-item"><Clock3 size={16} /> Abierto hasta las 20 h</span>
          <span className="strip-item"><MapPin size={16} /> C. 16 2353 · Gonnet</span>
        </div>
      </div>
    </>
  );
}

function AboutSection() {
  const reasons = [
    { icon: BookOpen, title: 'Elegidos con cariño', text: 'Una selección ilustrada, sensible y llena de hallazgos para cada etapa.' },
    { icon: MessageCircle, title: 'Te escuchamos', text: 'Conversamos sobre gustos, edades y momentos. La recomendación empieza por ahí.' },
    { icon: Leaf, title: 'Un lugar para quedarse', text: 'Un pequeño mundo donde mirar, tocar y leer también es parte de la visita.' },
  ];

  return (
    <section className="section" id="la-libreria">
      <div className="section-inner">
        <div className="intro-grid">
          <p className="intro-aside">“No es solo una librería. Es ese lugar al que dan ganas de volver.”</p>
          <div>
            <div className="section-kicker">Nuestra manera de hacer</div>
            <h2 className="section-heading">Una librería chica con un mundo <em>adentro.</em></h2>
          </div>
        </div>
        <div className="reasons">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article className="reason" key={reason.title} data-testid={`card-razon-${index + 1}`}>
                <span className="reason-number">0{index + 1}</span>
                <Icon strokeWidth={1.5} />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    { name: 'Nelson Piñeiro', initials: 'NP', text: 'Excelente selección de libros ilustrados y un asesoramiento muy paciente. Se nota el amor por lo que hacen.' },
    { name: 'Sol', initials: 'S', text: 'Una selección amplia y muy cuidada. Si no tienen un libro, lo consiguen. ¡Un lujo!' },
    { name: 'Hebe', initials: 'H', text: 'Es un refugio de ensueño para mirar, tocar y leer con los chicos. Una hermosa librería.' },
  ];

  return (
    <section className="section reviews-section" id="recomendaciones">
      <div className="section-inner">
        <div className="section-kicker">Lo que se llevan quienes vienen</div>
        <h2 className="section-heading">Palabras que nos dejan el corazón <em>calentito.</em></h2>
        <div className="reviews-meta">
          <span className="stars" aria-label="5 estrellas">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" data-testid={`icon-star-${star}`} />)}
          </span>
          <span>5.0 · 14 reseñas en Google</span>
        </div>
        <div className="reviews">
          {reviews.map((review, index) => (
            <article className="review" key={review.name} data-testid={`card-resena-${index + 1}`}>
              <div>
                <div className="quote-mark">“</div>
                <p>{review.text}</p>
              </div>
              <div className="reviewer">
                <span className="avatar">{review.initials}</span>
                <span>{review.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section" id="historia">
      <div className="section-inner story-grid">
        <div>
          <div className="section-kicker">Detrás de los estantes</div>
          <h2 className="section-heading">Acá los libros no se apilan: <em>se encuentran.</em></h2>
          <p className="story-copy">
            Libros que van nació para que elegir un libro vuelva a sentirse como una aventura. Creemos en la pausa, en hojear antes de comprar y en esa conversación inesperada que termina en una historia nueva.
          </p>
          <p className="story-copy">
            Por eso cuidamos cada título que llega a Gonnet y atendemos con tiempo, sin apuro y con la certeza de que hay un libro para cada lector.
          </p>
          <a className="story-link" href="#contacto" data-testid="link-historia-contacto">¿Buscás algo especial? Escribinos <ChevronRight size={16} /></a>
        </div>
        <div className="story-art" aria-hidden="true">
          <div className="story-paper" />
          <div className="story-frame">
            <h3>Leé<br />despacio.</h3>
            <p>Las historias también necesitan un lugar para crecer.</p>
          </div>
          <span className="story-flourish">desde Gonnet, con amor</span>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: ShoppingBag, title: 'Compra en el local', text: 'Vení a recorrer, hojear y elegir con calma.' },
    { icon: PackageCheck, title: 'Retiro en tienda', text: 'Reservá tu libro y pasá a buscarlo cuando quieras.' },
    { icon: Truck, title: 'Envíos a domicilio', text: 'Llevamos historias hasta la puerta de tu casa.' },
  ];

  return (
    <section className="section services-section" id="servicios">
      <div className="section-inner services-layout">
        <div>
          <div className="section-kicker">Para que llegue a vos</div>
          <h2 className="section-heading">Elegí cómo querés que <em>vaya.</em></h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service" key={service.title} data-testid={`row-servicio-${index + 1}`}>
                <span className="service-icon"><Icon size={18} /></span>
                <div><h3>{service.title}</h3><p>{service.text}</p></div>
                <ChevronRight size={17} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="section-inner">
        <div className="contact-card">
          <div className="contact-info" id="visitanos">
            <div className="section-kicker">Estamos cerca</div>
            <h2>Pasá a decir hola.</h2>
            <p>Te esperamos en nuestro rincón de Gonnet, con recomendaciones, novedades y tiempo para elegir.</p>
            <div className="contact-details">
              <a className="contact-detail" href={MAP_URL} target="_blank" rel="noreferrer" data-testid="link-mapa">
                <MapPin size={16} /> C. 16 2353, B1897 Gonnet
              </a>
              <a className="contact-detail" href={`tel:${PHONE.replace(/\s|-/g, '')}`} data-testid="link-telefono">
                <Phone size={16} /> {PHONE}
              </a>
              <span className="contact-detail"><Clock3 size={16} /> Lunes a sábado · hasta las 20 h</span>
            </div>
          </div>
          <div className="contact-form-wrap">
            {sent ? (
              <div className="success-message" role="status" data-testid="status-form-success">
                <div>
                  <Check />
                  <h3>¡Gracias, {name || 'por escribir'}!</h3>
                  <p>Recibimos tu mensaje. Te vamos a responder muy pronto para seguir buscando esa historia.</p>
                  <button className="success-reset" type="button" onClick={() => setSent(false)} data-testid="button-nuevo-mensaje">Enviar otro mensaje</button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">¿En qué podemos ayudarte?</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="nombre">Tu nombre</label>
                      <input id="nombre" name="nombre" type="text" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Cómo te llamamos" data-testid="input-nombre" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Tu email</label>
                      <input id="email" name="email" type="email" required placeholder="para responderte" data-testid="input-email" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" required placeholder="Contanos qué estás buscando..." data-testid="input-mensaje" />
                  </div>
                  <div className="form-foot">
                    <span className="form-note">No hace falta saber el título exacto. Juntos le ponemos nombre.</span>
                    <button className="button-primary button-submit" type="submit" data-testid="button-enviar-mensaje">Enviar mensaje <ArrowUpRight size={16} /></button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <Brand />
        <span className="footer-copy">Una librería para leer el mundo, un libro a la vez.</span>
        <div className="footer-links">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" data-testid="link-instagram"><Leaf size={13} /> Instagram</a>
          <a href="mailto:hola@librosquevan.com" data-testid="link-email"><Mail size={13} /> Escribinos</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="site-shell">
      <div className="top-note">
        <div className="section-inner" style={{ minHeight: '31px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Una librería para infancias y juventudes · Gonnet, Buenos Aires
        </div>
      </div>
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ReviewsSection />
        <StorySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary resetKey={window.location.pathname}>
          <Home />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
