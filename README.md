# UAI Website

## Development and Deployment Guide

### Prerequisites
- Node.js
- Vercel CLI
- GitHub account
- Vercel account

### Environment Setup
1. Copy `.env.example` to `.env`
2. Update the environment variables with your desired values:
   ```
   DEV_USERNAME=your_dev_username
   DEV_PASSWORD=your_dev_password
   ```

### Development
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Link your project to Vercel:
   ```bash
   vercel link
   ```

3. Pull environment variables:
   ```bash
   vercel env pull
   ```

### Deployment

#### Development Environment
1. Deploy to dev environment:
   ```bash
   vercel
   ```

#### Production Environment
1. Deploy to production:
   ```bash
   vercel --prod
   ```

### Domain Configuration
1. In Squarespace:
   - Go to Settings > Domains
   - Select your domain
   - Go to Advanced Settings
   - Add the following DNS records:
     - A record pointing to Vercel's IP
     - CNAME record for 'dev' subdomain

2. In Vercel:
   - Add your domains in the project settings
   - Configure SSL certificates

### Authentication
The dev environment is protected by basic authentication:
- Username: (as set in environment variables)
- Password: (as set in environment variables)

Production environment has no authentication barrier. 