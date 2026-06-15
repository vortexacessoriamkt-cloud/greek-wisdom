$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$BundledNode = "C:\Users\tnzin\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$Port = 4174

if (!(Test-Path $BundledNode)) {
  Write-Host "Node runtime nao encontrado em: $BundledNode"
  exit 1
}

$env:PORT = "$Port"
Set-Location $Root

$ip = Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.*" -or $_.IPAddress -like "172.*" } |
  Sort-Object InterfaceMetric |
  Select-Object -First 1 -ExpandProperty IPAddress

Write-Host "Greek Wisdom PWA"
Write-Host "Local:  http://127.0.0.1:$Port/?fresh=ios-pwa-v10"
if ($ip) {
  Write-Host "iPhone: http://$ip`:$Port/?fresh=ios-pwa-v10"
}
Write-Host "Deixe esta janela aberta enquanto testa no iPhone."

& $BundledNode "server.js"
