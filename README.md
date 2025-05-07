# AI-Powered Content Generator

  

This project presents a full-stack AI-powered web application designed to assist users in generating high-quality content by leveraging the capabilities of OpenAI’s API. The application is robustly built with **Next.js (App Router)** and **TypeScript** for the frontend, an **Express** backend, **Prisma** as the ORM for database interactions with **PostgreSQL**,  **NextAuth** for session management and is styled using **MUI** and **styled-components**.
 

## 🛠️ Tech Stack

  

The application is built using a modern and powerful technology stack:

  

*  **Frontend**: Next.js (version 15 and above), React 19, TypeScript

*  **Backend**: Node.js, Express, Prisma (ORM)

*  **Database**: PostgreSQL

*  **Authentication**: NextAuth.js integrated with GitHub provider

*  **Styling**: MUI (Material-UI), styled-components

*  **AI Integration**: OpenAI SDK

  

---

  

## 📦 Installation and Setup Guide

  

Follow these steps to get the application running on your local machine.

  

### 1. Clone the Repository

  

First, clone the project repository from GitHub to your local machine and navigate into the project directory:

  

```bash

git  clone  https://github.com/your-username/ai-content-generator.git

cd  ai-content-generator

```

  

---

  

### 2. Install Dependencies

  

Next, install the necessary project dependencies. You can use either npm or yarn.

  

Using **npm**:

  

```bash

npm  install

```

  

Alternatively, with **yarn**:

  

```bash

yarn  install

```

  

---

  

### 3. Install and Configure PostgreSQL

  

Ensure that PostgreSQL is installed and running on your system. If not, you can install it using one of the following methods based on your operating system:

  

*  **macOS (via Homebrew)**: `brew install postgresql`

*  **Ubuntu Linux**: `sudo apt update && sudo apt install postgresql postgresql-contrib`

*  **Windows**: Download the installer from the [official PostgreSQL website](https://www.postgresql.org/download/windows).

  

After installation, create a new local database for the application:

  

```bash

createdb  aicontentdb

```

  

---

  

### 4. Set Up Environment Variables

  

Create a `.env` file in the root of the project by copying the example file:

  

```bash

cp  .env.example  .env

```

  

Then, open the `.env` file and fill in the required environment variables with your specific credentials and settings:

  

```env

# Database connection URL (replace USER and PASSWORD with your PostgreSQL credentials)

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/aicontentdb"

  

# NextAuth configuration

NEXTAUTH_SECRET=your-strong-nextauth-secret # Generate a strong secret

NEXTAUTH_URL=http://localhost:3000 # Default development URL

  

# GitHub OAuth application credentials

GITHUB_ID=your_github_oauth_client_id

GITHUB_SECRET=your_github_oauth_client_secret

  

# OpenAI API Key

OPENAI_API_KEY=your_openai_api_key

```

  

---

  

### 5. Prisma Database Setup

  

Configure and initialize your database using Prisma.

  

#### a. Generate Prisma Client

  

Generate the Prisma Client based on your schema:

  

```bash

npx  prisma  generate

```

  

#### b. Run Database Migrations

  

Apply the database schema migrations to set up your tables:

  

```bash

npx  prisma  migrate  dev  --name  init

```

  

This command will create the necessary tables in your `aicontentdb` database.

  

#### c. (Optional) Seed the Database

  

If your project includes a seed script (e.g., at `prisma/seed.ts`), you can populate your database with initial data:

  

```bash

npx  prisma  db  seed

```

  

---

  

### 6. Start the Development Server

  

Once all the setup steps are complete, you can start the development server.

  

Using **npm**:

  

```bash

npm  run  dev

```

  

Or, if you prefer **yarn**:

  

```bash

yarn  dev

```

  

The application should now be running and accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

  

---

  

## 🧹 Code Quality and Standards

  

Maintaining high code quality is crucial for this project. The following tools and practices are in place:

  

*  **Linting**: ESLint is configured to enforce code style and catch potential errors. Run the linter with `npm run lint`.

*  **Formatter**: Prettier is integrated with ESLint to automatically format code, ensuring consistency. The ESLint configuration extends `next/core-web-vitals` and uses `eslint-config-prettier` to avoid conflicts.

  


