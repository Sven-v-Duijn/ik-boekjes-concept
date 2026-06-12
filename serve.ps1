# Lichte lokale webserver voor het bekijken van concept.html
# Start: rechtsklik > Run with PowerShell, of: powershell -ExecutionPolicy Bypass -File serve.ps1
$root = $PSScriptRoot
$port = if ($env:PORT) { [int]$env:PORT } else { 8000 }
$prefix = "http://localhost:$port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Server draait op $prefix" -ForegroundColor Green
Write-Host "Open:  ${prefix}concept.html" -ForegroundColor Cyan
Write-Host "Stop met Ctrl+C" -ForegroundColor DarkGray

$mime = @{
  ".html"="text/html; charset=utf-8"; ".css"="text/css"; ".js"="application/javascript";
  ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".svg"="image/svg+xml";
  ".webp"="image/webp"; ".ico"="image/x-icon"; ".woff2"="font/woff2"; ".json"="application/json"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
  $path = Join-Path $root $rel
  if (Test-Path $path -PathType Leaf) {
    $bytes = [System.IO.File]::ReadAllBytes($path)
    $ext = [System.IO.Path]::GetExtension($path).ToLower()
    if ($mime.ContainsKey($ext)) { $ctx.Response.ContentType = $mime[$ext] }
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
    $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - niet gevonden: $rel")
    $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
  }
  $ctx.Response.Close()
}
