import {
  CalendarDays,
  Clock,
  MapPin,
  UsersRound,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Trophy,
  Lightbulb,
  MessageCircle,
  Network,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';

const formUrl = 'https://forms.office.com/r/61zBA1AWbn';

const partners = [
  'Cricket ACT',
  'Capital Football',
  'Basketball ACT',
  'Netball ACT',
  'Hockey ACT',
  'Rugby ACT',
  'Canberra Region Rugby League',
  'Golf ACT',
  'Badminton ACT',
  'UC Sport',
  'ANU Sport',
];

const audience = [
  'Presidents',
  'Committee members',
  'Coaches',
  'Team managers',
  'Volunteers',
  'Club wellbeing and inclusion leads',
  'Sports administrators',
  'Community sport leaders',
];

const themes = [
  {
    icon: HeartHandshake,
    title: 'Wellbeing',
    text: 'Supporting healthy and connected communities.',
  },
  {
    icon: UsersRound,
    title: 'Inclusion & Belonging',
    text: 'Creating clubs where everyone feels welcome.',
  },
  {
    icon: ShieldCheck,
    title: 'Club Culture',
    text: 'Building positive cultures and stronger environments.',
  },
  {
    icon: Sparkles,
    title: 'Leadership',
    text: 'Leaders who set the tone and inspire positive change.',
  },
  {
    icon: Trophy,
    title: 'Real Club Experiences',
    text: 'Practical lessons from clubs just like yours.',
  },
];

const agenda = [
  ['6:00pm', 'Arrival and Networking'],
  ['6:15pm', 'Welcome and Introductions'],
  ['6:25pm', 'Panel Discussion'],
  ['6:55pm', 'Table Conversations'],
  ['7:15pm', 'Key Takeaways and Next Steps'],
  ['7:30pm', 'Close'],
];

const takeaways = [
  {
    icon: Network,
    title: 'Meaningful Connections',
    text: 'Meet people facing similar opportunities and pressures across community sport.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Ideas',
    text: 'Take away realistic actions that volunteers can use in busy club environments.',
  },
  {
    icon: MessageCircle,
    title: 'Shared Learning',
    text: 'Hear what is working for other clubs and discuss what could work in your own setting.',
  },
  {
    icon: Sparkles,
    title: 'New Perspectives',
    text: 'Explore how wellbeing, belonging and leadership shape stronger club communities.',
  },
];

function Header() {
  return (
    <header className="site-header" aria-label="Site header">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Strong Clubs Build Strong Communities home">
          <span className="brand-mark" aria-hidden="true">GS</span>
          <span>
            <strong>Strong Clubs</strong>
            <small>Build Strong Communities</small>
          </span>
        </a>
        <div className="nav-links" aria-label="Page sections">
          <a href="#agenda">Agenda</a>
          <a href="#about">Why it matters</a>
          <a href="#partners">Partners</a>
          <a className="nav-cta" href={formUrl} target="_blank" rel="noopener noreferrer">
            Register <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">ACT Community Sport Leadership Forum</p>
          <h1>Strong Clubs Build Strong Communities</h1>
          <p className="hero-subtitle">
            A community sport leadership forum for ACT club leaders, volunteers and sporting organisations.
          </p>
          <p className="hero-text">
            Community sport clubs do more than provide a place to play. They create connection, belonging, leadership and wellbeing across our communities. Join fellow club leaders for a practical conversation about what helps clubs thrive.
          </p>
          <div className="button-row">
            <a className="button primary" href={formUrl} target="_blank" rel="noopener noreferrer">
              Register via Microsoft Forms <ExternalLink size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#about">
              Learn More <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-note">Registration is free. Light refreshments provided.</p>
        </div>
        <div className="hero-card reveal delay-1" aria-label="Forum highlights">
          <div className="image-panel" aria-hidden="true">
            <div className="sport-shape ball-one" />
            <div className="sport-shape ball-two" />
            <div className="sport-shape field-line" />
            <div className="people-row">
              <span /><span /><span /><span />
            </div>
          </div>
          <div className="details-card">
            <h2>Event Details</h2>
            <ul>
              <li><CalendarDays aria-hidden="true" /> Wednesday 29 July 2026</li>
              <li><Clock aria-hidden="true" /> 6.00pm to 7.30pm</li>
              <li><MapPin aria-hidden="true" /> Strike Room, ACT Hockey Centre, Lyneham ACT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventDetails() {
  return (
    <section className="section section-light" aria-labelledby="event-details-heading">
      <div className="container info-strip reveal">
        <div>
          <p className="eyebrow dark">Forum focus</p>
          <h2 id="event-details-heading">Practical support for people who make clubs work</h2>
        </div>
        <p>
          This forum keeps clubs as the hero. Good Sports provides the support framework, with tools, resources and guidance that help volunteers strengthen wellbeing, inclusion, belonging, leadership and community impact.
        </p>
      </div>
    </section>
  );
}

function WhoShouldAttend() {
  return (
    <section className="section" aria-labelledby="who-heading">
      <div className="container split">
        <div className="section-heading reveal">
          <p className="eyebrow dark">Who should attend?</p>
          <h2 id="who-heading">Built for the people leading and supporting ACT clubs</h2>
          <p>
            If you play a role in shaping club culture, supporting volunteers or creating a welcoming environment, this forum is for you.
          </p>
        </div>
        <ul className="pill-list reveal delay-1">
          {audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Agenda() {
  return (
    <section className="section section-navy" id="agenda" aria-labelledby="agenda-heading">
      <div className="container">
        <div className="section-heading centred reveal">
          <p className="eyebrow lime">Forum Agenda</p>
          <h2 id="agenda-heading">An evening designed for useful conversations</h2>
          <p>
            The format is simple, welcoming and practical, with time for connection, shared learning and clear next steps.
          </p>
        </div>
        <ol className="agenda-list reveal delay-1">
          {agenda.map(([time, title]) => (
            <li key={time}>
              <time>{time}</time>
              <span>{title}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DiscussionThemes() {
  return (
    <section className="section section-light" aria-labelledby="themes-heading">
      <div className="container">
        <div className="section-heading centred reveal">
          <p className="eyebrow dark">Join the conversation</p>
          <h2 id="themes-heading">Discussion themes</h2>
          <p>
            Shared challenges are easier to tackle when clubs learn from each other and focus on what works in real community settings.
          </p>
        </div>
        <div className="theme-grid">
          {themes.map(({ icon: Icon, title, text }, index) => (
            <article className="theme-card reveal" style={{ animationDelay: `${index * 70}ms` }} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Takeaways() {
  return (
    <section className="section" aria-labelledby="takeaways-heading">
      <div className="container">
        <div className="section-heading centred reveal">
          <p className="eyebrow dark">What you'll take away</p>
          <h2 id="takeaways-heading">Ideas and connections you can use straight away</h2>
        </div>
        <div className="takeaway-grid">
          {takeaways.map(({ icon: Icon, title, text }) => (
            <article className="takeaway-card reveal" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-panel reveal" aria-hidden="true">
          <div className="stat-card"><strong>Connection</strong><span>Friendships and belonging</span></div>
          <div className="stat-card"><strong>Wellbeing</strong><span>Safer, healthier environments</span></div>
          <div className="stat-card"><strong>Leadership</strong><span>Volunteers setting the tone</span></div>
        </div>
        <div className="section-heading reveal delay-1">
          <p className="eyebrow lime">Why this matters</p>
          <h2 id="about-heading">Community sport strengthens more than the scoreboard</h2>
          <p>
            Community sport plays an important role in building healthier, safer and more connected communities. Clubs create friendships, support wellbeing, develop leaders and provide positive experiences for people of all ages.
          </p>
          <p>
            Many clubs are also facing increasing pressures, including volunteer burnout, behaviour challenges, inclusion issues and member retention. This forum is an opportunity to share ideas, learn from others and explore practical ways to strengthen club environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function RegisterCTA() {
  return (
    <section className="section register-section" id="register" aria-labelledby="register-heading">
      <div className="container register-card reveal">
        <div>
          <p className="eyebrow lime">Reserve your place</p>
          <h2 id="register-heading">Reserve Your Place</h2>
          <p>
            Join club leaders, volunteers and sporting organisations from across the ACT for an evening of practical discussion, shared learning and community connection.
          </p>
          <p className="register-note">Registration is free. Light refreshments provided.</p>
        </div>
        <div className="register-actions">
          <a className="button primary" href={formUrl} target="_blank" rel="noopener noreferrer">
            Register via Microsoft Forms <ExternalLink size={18} aria-hidden="true" />
          </a>
          <a className="button secondary light" href="#about">
            Learn More <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section section-light" id="partners" aria-labelledby="partners-heading">
      <div className="container">
        <div className="section-heading centred reveal">
          <p className="eyebrow dark">Proudly supported by</p>
          <h2 id="partners-heading">ACT sport and community partners</h2>
          <p>
            Placeholder logos are included so final partner artwork can be added easily later.
          </p>
        </div>
        <div className="partner-grid reveal delay-1">
          {partners.map((partner) => (
            <div className="partner-logo" key={partner} aria-label={`${partner} logo placeholder`}>
              <span>{partner.split(' ').map((word) => word[0]).join('').slice(0, 4)}</span>
              <small>{partner}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer-grid">
        <div>
          <h2>Better clubs. Stronger communities.</h2>
          <p>
            Good Sports supports clubs with practical tools, resources and guidance to help create healthier, safer and more welcoming sporting environments.
          </p>
        </div>
        <address>
          <a href="mailto:hello@example.com"><Mail size={17} aria-hidden="true" /> hello@example.com</a>
          <a href="tel:0000000000"><Phone size={17} aria-hidden="true" /> 0000 000 000</a>
        </address>
        <div className="socials" aria-label="Social media links">
          <a href="#top" aria-label="Facebook placeholder"><Facebook aria-hidden="true" /></a>
          <a href="#top" aria-label="Instagram placeholder"><Instagram aria-hidden="true" /></a>
          <a href="#top" aria-label="LinkedIn placeholder"><Linkedin aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <EventDetails />
        <WhoShouldAttend />
        <Agenda />
        <DiscussionThemes />
        <Takeaways />
        <About />
        <RegisterCTA />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
