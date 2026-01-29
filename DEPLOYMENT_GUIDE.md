# Deployment Guide: devinpatterson.dev

## Table of Contents
1. [GitHub Repository Setup](#1-github-repository-setup)
2. [Cloudflare Pages Deployment](#2-cloudflare-pages-deployment)
3. [CI/CD Pipeline Overview](#3-cicd-pipeline-overview)
4. [Email Hosting Options](#4-email-hosting-options)
5. [Secrets Configuration](#5-secrets-configuration)

---

## 1. GitHub Repository Setup

### Manual Repository Creation

Since the GitHub CLI is blocked by enterprise policy, create the repository manually:

#### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. **Owner:** Select `devin-patterson` organization
3. **Repository name:** `devinpatterson.dev`
4. **Description:** `Personal portfolio website for Devin Patterson - Platform Engineering Leader & AI Infrastructure Expert`
5. **Visibility:** Public
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

#### Step 2: Push Local Code to GitHub

```bash
cd /Users/depatter/CascadeProjects/windsurf-project-28/devinpatterson-dev

# Add the remote (replace with your actual repo URL)
git remote add origin https://github.com/devin-patterson/devinpatterson.dev.git

# Rename branch to main if needed
git branch -M main

# Push code
git push -u origin main
```

#### Step 3: Verify Repository

- Visit https://github.com/devin-patterson/devinpatterson.dev
- Confirm all files are present including `.github/workflows/`

---

## 2. Cloudflare Pages Deployment

### Option A: Connect via Cloudflare Dashboard (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Select your account

2. **Create Pages Project**
   - Navigate to **Workers & Pages** → **Pages**
   - Click **Create a project** → **Connect to Git**

3. **Connect GitHub Repository**
   - Authorize Cloudflare to access GitHub
   - Select `devin-patterson/devinpatterson.dev` repository

4. **Configure Build Settings**
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: (leave empty)
   ```

5. **Environment Variables** (if needed)
   - Add any required environment variables

6. **Deploy**
   - Click **Save and Deploy**
   - Wait for initial deployment to complete

### Option B: Deploy via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create Pages project
wrangler pages project create devinpatterson-dev

# Build and deploy
npm run build
wrangler pages deploy out --project-name=devinpatterson-dev
```

### Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains** → **Set up a custom domain**
3. Enter `devinpatterson.dev`
4. If domain is already on Cloudflare:
   - DNS records are added automatically
5. If domain is elsewhere:
   - Add CNAME record: `devinpatterson.dev` → `devinpatterson-dev.pages.dev`

---

## 3. CI/CD Pipeline Overview

### Workflows Created

#### Main CI/CD Pipeline (`.github/workflows/ci.yml`)

**Triggers:** Push to `main`, Pull requests to `main`

**Jobs:**
1. **Lint & Type Check**
   - Runs ESLint
   - Runs TypeScript type checking
   
2. **Build**
   - Builds production bundle
   - Uploads artifacts

3. **Test**
   - Runs test suite (placeholder for future tests)

4. **Deploy** (main branch only)
   - Deploys to Cloudflare Pages

#### Preview Deployment (`.github/workflows/preview.yml`)

**Triggers:** Pull requests to `main`

**Features:**
- Deploys preview to unique URL
- Comments preview URL on PR
- Auto-updates on each push

### Required GitHub Secrets

Add these secrets in GitHub repository settings → Secrets and variables → Actions:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token | Cloudflare Dashboard → My Profile → API Tokens → Create Token |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID | Cloudflare Dashboard → Overview → Account ID (right sidebar) |

#### Creating Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Use template: **Edit Cloudflare Workers**
4. Or create custom token with permissions:
   - Account: Cloudflare Pages: Edit
   - Zone: Zone: Read (for your domain)
5. Copy the token and add to GitHub secrets

---

## 4. Email Hosting Options for devinpatterson.dev

### Deep Research Summary

Based on comprehensive research of 2025/2026 email hosting options, here are the best choices for a custom domain:

### Comparison Matrix

| Provider | Cost | Type | Send Email | Receive Email | Best For |
|----------|------|------|------------|---------------|----------|
| **Cloudflare Email Routing** | **$0** | Forwarding | ❌ (via Gmail) | ✅ Unlimited | Budget-conscious, already on Cloudflare |
| **ImprovMX** | $0-$9/mo | Forwarding + SMTP | ✅ (paid) | ✅ | Simple setup, SMTP sending |
| **Zoho Mail** | **$0** | Full Mailbox | ✅ | ✅ | Full email hosting, up to 5 users |
| **Forward Email** | $0-$3/mo | Forwarding + SMTP | ✅ (paid) | ✅ | Open-source, privacy-focused |
| **Google Workspace** | $6/user/mo | Full Suite | ✅ | ✅ | Full productivity suite |
| **Fastmail** | $5/user/mo | Full Mailbox | ✅ | ✅ | Privacy, custom domains |

---

### 🏆 RECOMMENDED: Cloudflare Email Routing (FREE)

**Why Cloudflare Email Routing is the best choice for devinpatterson.dev:**

1. **Cost:** Completely FREE with unlimited forwarding
2. **Integration:** Your domain is likely already on Cloudflare (for Pages hosting)
3. **Reliability:** Cloudflare's global infrastructure
4. **Simplicity:** 5-minute setup
5. **Flexibility:** Forward to any existing email (Gmail, Outlook, etc.)

#### How It Works

```
devin@devinpatterson.dev → [Cloudflare] → your.personal@gmail.com
```

- Receive emails at professional address
- Reply from Gmail using "Send mail as" feature
- No additional accounts to manage

#### Setup Instructions

**Step 1: Enable Email Routing**
1. Cloudflare Dashboard → Select `devinpatterson.dev`
2. Go to **Email** → **Email Routing**
3. Click **Enable Email Routing**

**Step 2: Configure DNS (Automatic)**
- Cloudflare automatically adds required MX records
- Verify records are added:
  ```
  MX  devinpatterson.dev  route1.mx.cloudflare.net  Priority: 69
  MX  devinpatterson.dev  route2.mx.cloudflare.net  Priority: 34
  MX  devinpatterson.dev  route3.mx.cloudflare.net  Priority: 98
  TXT devinpatterson.dev  v=spf1 include:_spf.mx.cloudflare.net ~all
  ```

**Step 3: Create Email Address**
1. Click **Create address**
2. Custom address: `devin` (creates devin@devinpatterson.dev)
3. Destination: `dpatterson1122@gmail.com`
4. Click **Save**

**Step 4: Enable Sending from Gmail (Optional but Recommended)**

To reply FROM devin@devinpatterson.dev:

1. **Gmail Settings** → **See all settings** → **Accounts and Import**
2. **Send mail as** → **Add another email address**
3. Enter:
   - Name: `Devin Patterson`
   - Email: `devin@devinpatterson.dev`
   - Uncheck "Treat as an alias"
4. **SMTP Server:** `smtp.gmail.com`
5. **Port:** 587
6. **Username:** `dpatterson1122@gmail.com`
7. **Password:** Use Gmail App Password (not regular password)
   - Generate at: https://myaccount.google.com/apppasswords
8. Click **Add Account**
9. Verify via email sent to your Gmail

**Step 5: Create Additional Aliases (Optional)**
- `contact@devinpatterson.dev` → Gmail
- `hello@devinpatterson.dev` → Gmail
- `*@devinpatterson.dev` (catch-all) → Gmail

---

### Alternative: Zoho Mail Free (Full Mailbox)

If you need a **dedicated mailbox** (not forwarding):

**Pros:**
- Full webmail interface
- 5 GB storage per user
- Up to 5 users free
- Calendar, contacts included

**Cons:**
- Webmail only (no IMAP/POP on free tier)
- Must manage separate inbox
- Regional availability varies

**Setup:**
1. Go to https://www.zoho.com/mail/zohomail-pricing.html
2. Sign up for Forever Free Plan
3. Add and verify domain
4. Configure MX records

---

### Alternative: Google Workspace ($6/user/month)

If you need **full productivity suite**:

**Pros:**
- Full Gmail interface
- Google Drive, Docs, Meet included
- Professional, familiar interface
- Excellent deliverability

**Cons:**
- $72/year minimum
- Overkill for personal portfolio

**When to choose:**
- If you're building a business
- Need collaboration tools
- Want Google ecosystem integration

---

### Cost Comparison Over 3 Years

| Solution | Year 1 | Year 2 | Year 3 | Total |
|----------|--------|--------|--------|-------|
| **Cloudflare Email Routing** | $0 | $0 | $0 | **$0** |
| Zoho Mail Free | $0 | $0 | $0 | **$0** |
| ImprovMX Premium | $108 | $108 | $108 | $324 |
| Google Workspace | $72 | $72 | $72 | $216 |
| Fastmail | $60 | $60 | $60 | $180 |

---

### Final Recommendation

**For devinpatterson.dev:**

| Priority | Solution | Cost | Rationale |
|----------|----------|------|-----------|
| **Primary** | Cloudflare Email Routing | $0 | Already using Cloudflare for hosting, seamless integration, unlimited forwarding |
| **Backup** | Zoho Mail Free | $0 | If you need a dedicated inbox separate from personal email |

**Recommended Email Addresses:**
- `devin@devinpatterson.dev` - Primary professional contact
- `contact@devinpatterson.dev` - General inquiries
- `hello@devinpatterson.dev` - Friendly alternative

All forwarding to `dpatterson1122@gmail.com` via Cloudflare Email Routing.

---

## 5. Secrets Configuration

### GitHub Repository Secrets

Navigate to: Repository → Settings → Secrets and variables → Actions → New repository secret

| Secret | Value Source |
|--------|--------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Tokens page |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard sidebar |

### Environment Variables (if needed)

For the Next.js app, create `.env.local` for local development:

```bash
# No secrets needed for static site
# Add here if you add dynamic features later
```

---

## Quick Start Checklist

- [ ] Create GitHub repository at github.com/devin-patterson/devinpatterson.dev
- [ ] Push code: `git push -u origin main`
- [ ] Create Cloudflare Pages project
- [ ] Connect GitHub repository to Cloudflare Pages
- [ ] Add custom domain `devinpatterson.dev`
- [ ] Add GitHub secrets for CI/CD
- [ ] Enable Cloudflare Email Routing
- [ ] Create email address `devin@devinpatterson.dev`
- [ ] Configure Gmail "Send mail as" for replies
- [ ] Test email sending and receiving
- [ ] Verify CI/CD pipeline runs on push

---

**Document Version:** 1.0  
**Last Updated:** January 29, 2026
