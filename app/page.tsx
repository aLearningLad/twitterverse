"use client";

import { App, AuthModal, AuthPage } from "./components";
import { useStore } from "./(store)/store";
import { TheModal } from "./components/Subscribe";
import { PremiumTabModal } from "./tabs/PremiumTabModal";

export default function Home() {
  const isLoggedIn = useStore((store) => store.isLoggedIn);
  const authModal = useStore((store) => store.authModal);
  const subscribeModal = useStore((store) => store.subscribeModal);
  const premiumModal = useStore((store) => store.premiumModal);

  return (
    <main className=" relativeflex min-h-screen flex-col items-center relative">
      {authModal && <AuthModal />}
      {isLoggedIn ? (
        <div className=" w-full h-screen relative">
          {subscribeModal && <TheModal />}
          {premiumModal && <PremiumTabModal />}
          <App />
        </div>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
