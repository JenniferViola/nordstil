export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img
          src="https://picsum.photos/1440/720?random=1"
          alt="Nordic living room with soft textiles"
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-tagline">New this week · 899 SEK</p>
          <h1 className="hero-title">Soft wool throw in sage green</h1>
          <p className="hero-text">
            A cozy layer for quiet evenings. Woven in a gentle sage tone that
            pairs well with oak, linen and stoneware.
          </p>
        </div>
      </div>
    </section>
  );
}
