import type { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Model", href: "/about-us#our-model" },
  {
    label: "Tano Tire and Rubber Company",
    href: "/tano-tire-and-rubber-company",
  },
  { label: "Our Growth Pipeline", href: "/our-growth-pipeline" },
  { label: "Our Vision", href: "/our-vision" },
  { label: "Partner With Us / Contact", href: "/partner-with-us" },
];

const valueHighlights = [
  {
    number: "1.",
    title: "Reduce Africa's dependence on imports.",
    body: "In the very areas where the continent already holds raw materials in abundance, Africa should not need to import the finished product.",
  },
  {
    number: "2.",
    title: "Close the gap between resource and value.",
    body: "Too much of Africa's raw material goes unprocessed or unstructured. Tano exists to close that gap, one industry at a time.",
  },
];

const aboutHighlights = [
  {
    number: "1.",
    title: "Reduce Africa's dependence on imports.",
    body: "In the very areas where the continent already holds raw materials in abundance, Africa should not need to import the finished product. Tano builds the capacity to grow, mine, process, and manufacture locally, so that value stays close to the source.",
  },
  {
    number: "2.",
    title: "Close the gap between resource and value.",
    body: "Africa is home to an enormous share of the world's raw materials, yet too much of it goes unprocessed, left in the hands of artisans, or without the structure and marketing to compete globally. Tano Industries exists to close that gap, one industry at a time.",
  },
];

const modelSteps = [
  "Cultivation and extraction: growing and mining raw materials across agriculture, mining, and natural resources",
  "Local and international trade: selling raw materials into regional and global markets",
  "Processing and refining: adding the first layer of value close to the source",
  "Manufacturing: converting raw materials into finished products for regional consumption and export",
];

const productRange = [
  "Natural rubber",
  "Synthetic rubber",
  "Tires",
  "Hoses and cables",
  "Automotive parts",
  "Belts and sheets",
  "Footwear",
];

const roadmapResources = [
  "Copper",
  "Aluminum",
  "Lithium",
  "Cocoa",
  "Cassava",
  "Bitumen (For Road Construction and Industrial materials)",
  "Cobalt",
  "Manganese",
  "Gold",
  "Steel",
];

const resourceImages = [
  {
    label: "Rubber",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Latex_dripping.JPG",
    alt: "Latex collected from a tapped rubber tree",
  },
  {
    label: "Copper",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chiquicamata_Mine%2C_Chile_%28ASTER%29.jpg",
    alt: "Open pit copper mine from above",
  },
  {
    label: "Cocoa",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cocoa_Pods.JPG",
    alt: "Cocoa pods growing on a tree",
  },
  {
    label: "Manufacturing",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Conveyor_system_in_a_factory.jpg",
    alt: "Conveyor system inside a factory",
  },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="TANO INDUSTRIES">
        <span className="brand-mark">TI</span>
        <span>TANO INDUSTRIES</span>
      </a>
      <nav className="site-nav" aria-label="Site Navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <span aria-hidden="true" />
        </summary>
        <nav className="mobile-nav" aria-label="Mobile Site Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">TANO INDUSTRIES</div>
      <nav className="footer-nav" aria-label="Site Navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

function PageHero({
  eyebrow,
  headline,
  subheadline,
  compact = false,
  image,
}: {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  compact?: boolean;
  image?: (typeof resourceImages)[number];
}) {
  return (
    <section className={compact ? "page-hero page-hero-compact" : "page-hero"}>
      <div className={image ? "section-inner page-hero-grid" : "section-inner"}>
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{headline}</h1>
          {subheadline ? <p className="hero-copy">{subheadline}</p> : null}
        </div>
        {image ? (
          <figure className="hero-photo">
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}

function CTA({
  copy,
  button,
  href,
}: {
  copy: string;
  button: string;
  href: string;
}) {
  return (
    <section className="cta-section">
      <div className="section-inner cta-inner">
        <p>{copy}</p>
        <a className="button button-light" href={href}>
          {button}
        </a>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <Shell>
      <section className="home-hero">
        <div className="section-inner hero-grid">
          <div className="hero-text">
            <h1>Unlocking the Value of Africa's Natural Resources</h1>
            <p>
              From raw material to global market, industry by industry,
              partnership by partnership.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/about-us#our-model">
                Discover Our Model
              </a>
              <a
                className="button button-secondary"
                href="/tano-tire-and-rubber-company"
              >
                Meet Tano Tire and Rubber Company
              </a>
            </div>
          </div>
          <div className="resource-mosaic">
            {resourceImages.map((image) => (
              <figure className="mosaic-panel" key={image.label}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner narrow">
          <h2>Introduction Section</h2>
          <p className="lead-copy">
            Tano Industries is an enterprise built to unlock the value of
            Africa's natural resources. We operate across manufacturing, mining,
            refining, agriculture, and natural resources, with a single purpose:
            to turn Africa's raw materials into products the world needs, while
            capturing more of that value on African soil.
          </p>
        </div>
      </section>

      <section className="content-section muted">
        <div className="section-inner">
          <h2>What We Do</h2>
          <div className="highlight-grid">
            {valueHighlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <p className="item-number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-inner feature-grid">
          <div>
            <p className="eyebrow">OUR FIRST INDUSTRY</p>
            <h2>Tano Tire and Rubber Company</h2>
          </div>
          <div>
            <p>
              Our first venture takes African-grown rubber and develops it into
              competitive finished products, from tires and hoses to footwear
              and industrial parts.
            </p>
            <a className="button button-primary" href="/tano-tire-and-rubber-company">
              Explore Tano Tire and Rubber
            </a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner split-section">
          <h2>Rubber Is Just the Beginning</h2>
          <div>
            <p>
              Copper, aluminum, lithium, cocoa, cassava, and bitumen are next on
              our roadmap, each one an opportunity to build value where the raw
              material is found.
            </p>
            <a className="button button-secondary" href="/our-growth-pipeline">
              See Our Growth Pipeline
            </a>
          </div>
        </div>
      </section>

      <CTA
        copy="Building Africa's industries starts with the right partners. Let's build the next one together."
        button="Partner With Us"
        href="/partner-with-us"
      />
    </Shell>
  );
}

export function AboutPage() {
  return (
    <Shell>
      <PageHero headline="Who We Are" image={resourceImages[3]} />

      <section className="content-section">
        <div className="section-inner narrow">
          <p className="lead-copy">
            Tano Industries is an enterprise built to unlock the value of
            Africa's natural resources. We operate across manufacturing, mining,
            refining, agriculture, and natural resources, with a single purpose:
            to turn Africa's raw materials into products the world needs, while
            capturing more of that value on African soil.
          </p>
          <p>We exist to do two things:</p>
        </div>
      </section>

      <section className="content-section muted">
        <div className="section-inner highlight-grid">
          {aboutHighlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <p className="item-number">{item.number}</p>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="our-model">
        <div className="section-inner split-section">
          <h2>Our Model</h2>
          <div>
            <p>
              We build through partnership. Tano works alongside experienced
              global operators, technical experts, and local stakeholders to
              develop raw materials responsibly and at scale. Our model spans
              the full value chain:
            </p>
            <ul className="text-list">
              {modelSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <p>
              This full-chain approach means Tano is not just an exporter of raw
              materials. We are a builder of industries, creating jobs, skills,
              and lasting infrastructure in the communities where we operate.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section muted">
        <div className="section-inner narrow">
          <h2>Our Vision</h2>
          <p className="lead-copy">
            Tano Industries is building more than a portfolio of ventures. We
            are building a platform for African resources to be processed and
            manufactured, for its own use and for export, into a larger share of
            global value chains, industry by industry, partnership by
            partnership.
          </p>
        </div>
      </section>
    </Shell>
  );
}

export function RubberPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="OUR FIRST INDUSTRY"
        headline="From African Rubber to Global Products"
        subheadline="Our first industry of focus is rubber. Through our dedicated platform, Tano Tire and Rubber Company, we are building a complete rubber business: planting, developing, manufacturing, and selling rubber-based products for markets in Africa and abroad."
        image={resourceImages[0]}
      />

      <section className="content-section">
        <div className="section-inner split-section">
          <h2>Our Product Range</h2>
          <ul className="resource-grid">
            {productRange.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section muted">
        <div className="section-inner narrow">
          <h2>Why It Matters</h2>
          <p className="lead-copy">
            Tano Tire and Rubber Company is the proof point for our model:
            African-grown raw material, developed and manufactured into globally
            competitive finished products.
          </p>
        </div>
      </section>

      <CTA
        copy="Interested in sourcing, distributing, or partnering with Tano Tire and Rubber Company?"
        button="Get In Touch"
        href="/partner-with-us"
      />
    </Shell>
  );
}

export function GrowthPipelinePage() {
  return (
    <Shell>
      <PageHero
        headline="Rubber Is Our Starting Point, Not Our Ceiling"
        subheadline="Tano Industries is building a pipeline of natural resources found across Africa, each with the potential to be mined, cultivated, processed, or refined into higher-value products."
        image={resourceImages[1]}
      />

      <section className="content-section">
        <div className="section-inner split-section">
          <h2>Resources on Our Roadmap</h2>
          <ul className="resource-grid">
            {roadmapResources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section muted">
        <div className="section-inner narrow">
          <h2>How We Get There</h2>
          <p className="lead-copy">
            As with rubber, we intend to pursue each of these opportunities
            through partnerships with experienced entities from around the world,
            combining global expertise with African resources and ambition.
          </p>
        </div>
      </section>

      <CTA
        copy="Have expertise in one of these industries? Let's explore a partnership."
        button="Partner With Us"
        href="/partner-with-us"
      />
    </Shell>
  );
}

export function VisionPage() {
  return (
    <Shell>
      <PageHero
        headline="A Platform for Africa's Next Industries"
        compact
        image={resourceImages[2]}
      />
      <section className="content-section">
        <div className="section-inner narrow">
          <p className="lead-copy">
            Tano Industries is building more than a portfolio of ventures. We
            are building a platform for African resources to be processed and
            manufactured, for its own use and for export, into a larger share of
            global value chains, industry by industry, partnership by
            partnership.
          </p>
        </div>
      </section>
    </Shell>
  );
}

export function PartnerPage() {
  return (
    <Shell>
      <PageHero
        headline="Let's Build the Next Industry Together"
        subheadline="Tano Industries grows through partnership with experienced operators, technical experts, and investors from around the world. If that is you, we want to hear from you."
        image={resourceImages[3]}
      />

      <section className="content-section">
        <div className="section-inner form-wrap">
          <form className="contact-form">
            <label>
              <span>Full Name</span>
              <input name="full-name" type="text" />
            </label>
            <label>
              <span>Company / Organization</span>
              <input name="company-organization" type="text" />
            </label>
            <label>
              <span>Email Address</span>
              <input name="email-address" type="email" />
            </label>
            <label>
              <span>Phone Number</span>
              <input name="phone-number" type="tel" />
            </label>
            <label>
              <span>Area of Interest (Rubber, Mining, Agriculture, Other)</span>
              <select name="area-of-interest" defaultValue="">
                <option value="" disabled />
                <option>Rubber</option>
                <option>Mining</option>
                <option>Agriculture</option>
                <option>Other</option>
              </select>
            </label>
            <label className="full-span">
              <span>Message</span>
              <textarea name="message" rows={6} />
            </label>
            <button className="button button-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Shell>
  );
}
