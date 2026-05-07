import type { ReactElement } from 'react';
import './MiraAuthPage.css';

type Provider = {
  name: string;
  label: string;
  icon: ReactElement;
};

function GridLogo() {
  return (
    <div className="mira-logo" aria-hidden="true">
      <div className="mira-logo__inner">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} className="mira-logo__cell" />
        ))}
      </div>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mira-provider__icon" aria-hidden="true">
      <path
        d="M15.4 12.1c0-2 1.7-3 1.8-3.1-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.1 2.8 2 .9 0 1.3-.6 2.4-.6s1.5.6 2.4.6c1.2 0 2-.9 2.7-1.9.8-1.2 1.2-2.4 1.2-2.5-.1 0-1.8-.7-1.8-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 5.9c.6-.8 1-1.8.9-2.9-.9.1-1.9.6-2.5 1.3-.6.7-1 1.7-.9 2.7 1 .1 1.9-.4 2.5-1.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mira-provider__icon" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 12h16M12 4c2.4 2.2 3.6 4.9 3.6 8s-1.2 5.8-3.6 8c-2.4-2.2-3.6-4.9-3.6-8S9.6 6.2 12 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mira-provider__icon" aria-hidden="true">
      <path
        d="M21 5.6 3.9 12.2c-.8.3-.8 1.4 0 1.7l4.4 1.4 1.7 5.2c.2.7 1.1.9 1.6.4l2.5-2.6 4.8 3.6c.6.4 1.4.1 1.5-.7L22 6.6c.1-.7-.5-1.2-1.1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m8.7 15.2 8.9-7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const providers: Provider[] = [
  { name: 'apple', label: 'Continue with Apple', icon: <AppleIcon /> },
  { name: 'web', label: 'Continue with Web account', icon: <GlobeIcon /> },
  { name: 'telegram', label: 'Continue with Telegram', icon: <TelegramIcon /> },
];

export default function MiraAuthPage() {
  return (
    <main className="mira-shell">
      <section className="mira-layout">
        <header className="mira-hero">
          <GridLogo />
          <div className="mira-wordmark">
            <h1 className="mira-title">MIRA</h1>
            <p className="mira-tagline">DISCOVER, BOOK, AND DINE. EFFORTLESSLY.</p>
          </div>
        </header>

        <section className="mira-card" aria-labelledby="create-profile-title">
          <div className="mira-card__inner">
            <h2 id="create-profile-title" className="mira-card__title">
              CREATE PROFILE
            </h2>
            <p className="mira-card__subtitle">
              Unlock one-tap booking,
              <br />
              favorites, and history
            </p>

            <div className="mira-provider-list" aria-label="Auth providers">
              {providers.map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  className="mira-provider"
                  aria-label={provider.label}
                >
                  {provider.icon}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mira-actions">
          <button type="button" className="mira-guest-button">
            CONTINUE AS GUEST
          </button>

          <p className="mira-footnote">
            Anonymous access to maps and menus.
            <br />
            Registration required for booking.
          </p>
        </section>
      </section>
    </main>
  );
}
