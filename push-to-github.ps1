$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$git = Get-Command git -ErrorAction SilentlyContinue
if (!$git) {
  Write-Host "Git nao esta instalado ou nao esta no PATH."
  Write-Host "Instale o Git for Windows e rode este script de novo:"
  Write-Host "https://git-scm.com/download/win"
  exit 1
}

git status
git branch -M main
git remote set-url origin "https://github.com/vortexacessoriamkt-cloud/greek-wisdom.git"
git push -u origin main
