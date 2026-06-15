$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Www = Join-Path $Root "android\app\src\main\assets\www"

if (Test-Path $Www) {
  Remove-Item -Recurse -Force $Www
}

New-Item -ItemType Directory -Force $Www | Out-Null
Copy-Item -Force `
  (Join-Path $Root "index.html"), `
  (Join-Path $Root "styles.css"), `
  (Join-Path $Root "app.js"), `
  (Join-Path $Root "manifest.webmanifest"), `
  (Join-Path $Root "sw.js") `
  $Www

Copy-Item -Recurse -Force (Join-Path $Root "assets") (Join-Path $Www "assets")

Write-Host "Android WebView assets synchronized:"
Write-Host $Www
