const GITHUB_INTEGRATION_INSTALLATION_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod'
    ? `https://github.com/apps/supabase/installations/new`
    : process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging'
      ? `https://github.com/apps/supabase-staging/installations/new`
      : `https://github.com/apps/joshen-supabase/installations/new`

export function openInstallGitHubIntegrationWindow() {
  const w = 600
  const h = 800

  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height

  const systemZoom = width / window.screen.availWidth
  const left = (width - w) / 2 / systemZoom + dualScreenLeft
  const top = (height - h) / 2 / systemZoom + dualScreenTop
  const newWindow = window.open(
    GITHUB_INTEGRATION_INSTALLATION_URL,
    'GitHub',
    `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,
     width=${w / systemZoom}, 
     height=${h / systemZoom}, 
     top=${top}, 
     left=${left}
     `
  )
  if (newWindow) {
    newWindow.focus()
  }
}
