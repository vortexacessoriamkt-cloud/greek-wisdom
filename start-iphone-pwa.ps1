$ErrorActionPreference = "Stop"

# Pasta onde este script esta
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$Port = if ($env:PORT) { $env:PORT } else { 4173 }
$env:PORT = "$Port"

# Procura o Node: primeiro no PATH, depois em locais comuns de instalacao
$NodeCmd = $null
$nodeInPath = Get-Command node -ErrorAction SilentlyContinue
if ($nodeInPath) {
  $NodeCmd = $nodeInPath.Source
} else {
  $candidates = @(
    "C:\Program Files\nodejs\node.exe",
    "C:\Program Files (x86)\nodejs\node.exe",
    "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
  )
  foreach ($c in $candidates) { if (Test-Path $c) { $NodeCmd = $c; break } }
}

if (-not $NodeCmd) {
  Write-Host ""
  Write-Host "Node.js nao encontrado."
  Write-Host "Instale a versao LTS em https://nodejs.org e rode este atalho de novo."
  Write-Host ""
  Read-Host "Pressione Enter para fechar"
  exit 1
}

# Descobre o IP da rede local (Wi-Fi), ignorando loopback e enderecos invalidos
$ip = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
  Where-Object {
    $_.IPAddress -ne "127.0.0.1" -and
    $_.IPAddress -notlike "169.254.*" -and
    ($_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.*" -or $_.IPAddress -like "172.*")
  } |
  Sort-Object InterfaceMetric |
  Select-Object -First 1 -ExpandProperty IPAddress

Write-Host ""
Write-Host "==================== Greek Wisdom ===================="
Write-Host ""
if ($ip) {
  Write-Host "  No iPhone (na MESMA rede Wi-Fi), abra no Safari:"
  Write-Host ""
  Write-Host "        http://$ip`:$Port"
  Write-Host ""
  Write-Host "  Depois toque em Compartilhar -> Adicionar a Tela de Inicio."
} else {
  Write-Host "  Nao consegui achar o IP da rede automaticamente."
  Write-Host "  Abra o Prompt, rode 'ipconfig' e use o 'Endereco IPv4'"
  Write-Host "  (algo como 192.168.0.10):  http://SEU_IP`:$Port"
}
Write-Host ""
Write-Host "  Neste computador: http://127.0.0.1`:$Port"
Write-Host ""
Write-Host "  Deixe esta janela ABERTA enquanto usa no iPhone."
Write-Host "  (Feche com Ctrl+C ou fechando a janela.)"
Write-Host "====================================================="
Write-Host ""

& $NodeCmd "server.js"
