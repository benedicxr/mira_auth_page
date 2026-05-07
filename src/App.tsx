import MiraAuthPage from './components/MiraAuthPage';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '';

export default function App() {
  return (
    <MiraAuthPage
      googleClientId={googleClientId}
      onGoogleSuccess={(token) => {
        // Replace this with your real session exchange or state update.
        console.info('Authenticated with Google token:', token);
      }}
      onGuestContinue={() => {
        console.info('Continuing as guest');
      }}
      onAppleClick={() => {
        console.info('Apple auth placeholder');
      }}
      onTelegramClick={() => {
        console.info('Telegram auth placeholder');
      }}
    />
  );
}
