# EEE Bootcamp

Welcome to the official repository for the EEE Bootcamp website, the digital home for the Electrical and Electronics Engineering branch of IIIT Bhubaneswar. This project was built to be a living archive, a place to showcase our students, celebrate our achievements, and preserve our memories.

Most importantly, it was designed to be passed down. This guide will walk you through everything you need to know to run, maintain, and contribute to this project for future batches.

## ✨ Features

- **Dynamic Batch Pages**: The site is structured to support multiple batches, with dedicated pages for each academic year (e.g., 2024-28).
- **Student Profiles**: Each batch page showcases cards for every student, complete with bios and social media links.
- **Highlights & Gallery**: A tabbed interface on each batch page to elegantly display important memories, achievements, and a photo gallery.
- **Secure Authentication**: Built-in Google Sign-In powered by NextAuth.js, with custom logic to restrict access to detailed batch pages to verified EEE students only.
- **Live Database**: All data is managed through a Supabase (PostgreSQL) backend, making it easy to update content without touching the code.
- **Fully Responsive**: A modern and fun "comic book" aesthetic that looks great on all devices, from mobile phones to desktops.

## 🛠️ Tech Stack

This project is built with a modern, scalable, and largely free-to-host tech stack.

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## 🚀 Getting Started: Local Development Setup

Follow these steps to get a local copy of the project up and running on your machine.

### 1. Clone the Repository

First, clone the project from GitHub:

```bash
git clone https://github.com/your-username/eee-bootcamp.git
cd eee-bootcamp
```

### 2. Install Dependencies

Install all the necessary packages using npm:

```bash
npm install
```

### 3. Set Up Environment Variables

This is the most important setup step. Create a new file named `.env.local` in the root of your project. This file will hold all your secret keys and is ignored by Git for security.

Copy the block below into your new `.env.local` file:

```env
# .env.local

# Provider Secrets (Get these from Google Cloud Console)
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID_HERE"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET_HERE"

# NextAuth Secret (Generate a strong secret for session encryption)
# Run `openssl rand -base64 32` in your terminal to get one
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET_HERE"

# Supabase Credentials (Get these from your Supabase project settings)
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL_HERE"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY_HERE"

# The canonical URL of your site (Crucial for local development)
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Run the Development Server

Once your environment variables are set, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The site should be fully functional.

## 📁 Project Structure

Here is an overview of the key files and folders in the project:

```
/
├── public/               # Static assets (images, fonts, etc.)
│   └── bg.png
├── src/
│   ├── app/
│   │   ├── about/        # About page
│   │   ├── access-denied/ # Access Denied page
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.js # NextAuth.js catch-all API route
│   │   ├── batches/
│   │   │   ├── [year]/
│   │   │   │   └── page.js # Dynamic page for a single batch
│   │   │   └── page.js     # Main page listing all batches
│   │   ├── gallery/      # Main gallery page
│   │   ├── login/        # Login page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Main application layout (with Navbar/Footer)
│   │   └── page.js       # Homepage
│   ├── components/
│   │   ├── shared/       # Larger, shared components
│   │   │   ├── AuthProvider.js
│   │   │   ├── BatchContent.js # The tabbed interface component
│   │   │   ├── Footer.js
│   │   │   ├── Icons.js
│   │   │   └── Navbar.js
│   │   └── ui/           # Small, reusable UI elements
│   │       ├── Button.js
│   │       └── Card.js
│   └── lib/
│       ├── auth.js         # NextAuth.js configuration
│       └── supabaseClient.js # Reusable Supabase client
├── .env.local            # Your secret keys (DO NOT COMMIT)
└── README.md               # This file
```