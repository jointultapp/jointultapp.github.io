// Tult's store pages and social accounts, in one place: the home page and /telecharger (the address
// in the share cards' QR code) read them. Fill one in, then republish the site with
// scripts/web/publish-site.sh: the app itself doesn't change.
window.TULT_LINKS = {
  // The Play Store page, once the app is public: 'https://play.google.com/store/apps/details?id=com.tult.app'
  android: null,
  // The App Store page, once the app is there.
  ios: null,
  // The social accounts, in the order shown: { name: 'Instagram', url: 'https://www.instagram.com/…' }
  socials: [],
};
