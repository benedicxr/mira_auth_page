import {
  GoogleOAuthProvider,
  TokenResponse,
  useGoogleLogin,
} from '@react-oauth/google';
import './MiraAuthPage.css';

export type MiraAuthPageProps = {
  googleClientId?: string;
  onGoogleSuccess?: (token: TokenResponse) => void;
  onGuestContinue?: () => void;
  onAppleClick?: () => void;
  onTelegramClick?: () => void;
};

type InnerMiraAuthPageProps = Omit<MiraAuthPageProps, 'googleClientId'> & {
  googleEnabled: boolean;
};

function GridLogo() {
  return (
    <div className="mira-logo" aria-hidden="true">
      <div className="mira-logo__grid">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} className="mira-logo__cell" aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mira-social__icon" aria-hidden="true">
      <path
        d="M15.4 12.1c0-2 1.7-3 1.8-3.1-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.1 2.8 2 .9 0 1.3-.6 2.4-.6s1.5.6 2.4.6c1.2 0 2-.9 2.7-1.9.8-1.2 1.2-2.4 1.2-2.5-.1 0-1.8-.7-1.8-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 5.9c.6-.8 1-1.8.9-2.9-.9.1-1.9.6-2.5 1.3-.6.7-1 1.7-.9 2.7 1 .1 1.9-.4 2.5-1.1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mira-social__icon" aria-hidden="true">
      <path
        d="M20 12.2c0-.6-.1-1.2-.2-1.7H12v3.3h4.5c-.2 1.1-.8 2.1-1.8 2.8v2.7h2.9c1.7-1.6 2.4-3.9 2.4-7.1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20c2.2 0 4-.7 5.4-2l-2.9-2.7c-.8.5-1.6.8-2.5.8-2 0-3.8-1.4-4.4-3.3H4.5v2.8A8.1 8.1 0 0 0 12 20z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 12.8A4.8 4.8 0 0 1 7.3 11c0-.6.1-1.2.3-1.8V6.4H4.5A8 8 0 0 0 3.7 11c0 1.6.4 3.2 1.2 4.6l2.7-2.8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.7c1.2 0 2.2.4 3 1.1l2.3-2.3A8 8 0 0 0 4.5 6.4l3.1 2.8C8.2 7 10 5.7 12 5.7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mira-social__icon" aria-hidden="true">
      <path
        d="M21 5.6 3.9 12.2c-.8.3-.8 1.4 0 1.7l4.4 1.4 1.7 5.2c.2.7 1.1.9 1.6.4l2.5-2.6 4.8 3.6c.6.4 1.4.1 1.5-.7L22 6.6c.1-.7-.5-1.2-1.1-1z"
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

function GoogleLoginButton({
  onGoogleSuccess,
}: Pick<MiraAuthPageProps, 'onGoogleSuccess'>) {
  const handleGoogleToken = (token: TokenResponse) => {
    if (onGoogleSuccess) {
      onGoogleSuccess(token);
      return;
    }

    // Replace this with your API call or auth state update.
    console.info('MIRA Google auth success:', token);
  };

  const startGoogleLogin = useGoogleLogin({
    scope: 'openid profile email',
    onSuccess: handleGoogleToken,
    onError: () => {
      console.error('MIRA Google auth failed');
    },
  });

  return (
    <button
      type="button"
      className="mira-social__button"
      aria-label="Continue with Google"
      onClick={() => {
        startGoogleLogin();
      }}
    >
      <GoogleIcon />
    </button>
  );
}

function GoogleLoginFallback() {
  return (
    <button
      type="button"
      className="mira-social__button"
      aria-label="Google login unavailable until client ID is configured"
      disabled
    >
      <GoogleIcon />
    </button>
  );
}

function MiraAuthPageInner({
  googleEnabled,
  onGoogleSuccess,
  onGuestContinue,
  onAppleClick,
  onTelegramClick,
}: InnerMiraAuthPageProps) {
  return (
    <main className="mira-shell">
      <section className="mira-panel">
        <header className="mira-hero">
          <GridLogo />
          <h1 className="mira-title">MIRA</h1>
          <p className="mira-tagline">DISCOVER, BOOK, AND DINE. EFFORTLESSLY.</p>
        </header>

        <section className="mira-card" aria-labelledby="mira-create-profile">
          <div className="mira-card__content">
            <h2 id="mira-create-profile" className="mira-card__title">
              CREATE PROFILE
            </h2>
            <p className="mira-card__subtitle">
              Unlock one-tap booking, favorites, and history
            </p>

            <div className="mira-social" aria-label="Authentication providers">
              <button
                type="button"
                className="mira-social__button"
                aria-label="Continue with Apple"
                onClick={onAppleClick}
              >
                <AppleIcon />
              </button>

              {googleEnabled ? (
                <GoogleLoginButton onGoogleSuccess={onGoogleSuccess} />
              ) : (
                <GoogleLoginFallback />
              )}

              <button
                type="button"
                className="mira-social__button"
                aria-label="Continue with Telegram"
                onClick={onTelegramClick}
              >
                <TelegramIcon />
              </button>
            </div>

            {!googleEnabled ? (
              <p className="mira-card__hint">
                Add <code>VITE_GOOGLE_CLIENT_ID</code> to enable Google sign-in.
              </p>
            ) : null}
          </div>
        </section>

        <section className="mira-actions">
          <button
            type="button"
            className="mira-guest-button"
            onClick={onGuestContinue}
          >
            CONTINUE AS GUEST
          </button>

          <p className="mira-footnote">
            Anonymous access to maps and menus. Registration required for booking.
          </p>
        </section>
      </section>
    </main>
  );
}

function MiraAuthPageContent(props: MiraAuthPageProps) {
  const googleEnabled = Boolean(props.googleClientId);

  if (!googleEnabled) {
    return <MiraAuthPageInner {...props} googleEnabled={false} />;
  }

  return (
    <GoogleOAuthProvider clientId={props.googleClientId!}>
      <MiraAuthPageInner {...props} googleEnabled />
    </GoogleOAuthProvider>
  );
}

export default function MiraAuthPage(props: MiraAuthPageProps) {
  return <MiraAuthPageContent {...props} />;
}
