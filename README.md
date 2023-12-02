# Carbon Emissions Estimation Web App

## Overview

This Next.js application is designed to estimate the carbon emissions of a website based on its hosting provider and page size. It utilizes the Green Foundation API to identify the hosting provider and the Google PageSpeed API to determine the page size. The estimation is then calculated using predefined constants.

## Features

- Identify Hosting Provider: Utilizes Green Foundation API to determine the hosting provider of a website.
- Page Size Calculation: Uses Google PageSpeed API to estimate the page size of a given website.
- Carbon Emissions Estimation: Calculates the carbon emissions based on hosting and page size constants.
- Next.js 14 and TypeScript: Built with the latest Next.js version and TypeScript for a modern and type-safe development experience.
- Tailwind CSS: Styling is done using Tailwind CSS for a clean and responsive design.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MohamedH1998/carbon-checker.git

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Set Environment Variables:**
Create a .env.local file in the root of the project and add the following:

```bash
GOOGLE_PAGESPEED_API_KEY=your_google_pagespeed_api_key
```

4. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


 **Resources:**
- ['Green Foundation'](https://greenfoundation.io/api)
- ['Google Page Speed API'](https://developers.google.com/speed/docs/insights/v5/get-started)
- ['Calculating Emissions'](https://sustainablewebdesign.org/calculating-digital-emissions/)
- ['Web Carbon Calculator NPM package'](https://www.npmjs.com/package/website-carbon-calculator)