// The service worker registration script
// This must run successfully before Ultraviolet is available to use
const BARE_SERVER = "https://atlanticbare.global.ssl.fastly.net"

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./uv-sw.js', {
    scope: '/service/'
  }).then(() => {
    console.log("Service worker registered successfully!")
  })

  // BareMux.SetTransport("BareMod.BareClient", BARE_SERVER);
}
