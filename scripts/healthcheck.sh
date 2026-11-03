#!/usr/bin/env bash
# Health check: requests the site and appends the result to logs/health.log
# Usage: bash scripts/healthcheck.sh https://your-site.vercel.app
URL="${1:-$SITE_URL}"
LOG="logs/health.log"
mkdir -p logs

if [ -z "$URL" ]; then
  echo "Usage: $0 <url>" >&2
  exit 2
fi

STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 "$URL")
NOW=$(date -u +"%Y-%m-%d %H:%M:%S UTC")

if [ "$STATUS" = "200" ]; then
  echo "[$NOW] OK   $URL (HTTP $STATUS)" | tee -a "$LOG"
  exit 0
else
  echo "[$NOW] FAIL $URL (HTTP $STATUS)" | tee -a "$LOG"
  exit 1
fi
