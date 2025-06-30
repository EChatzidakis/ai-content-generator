# AI Content Generator

A full‑stack web application that refines or expands user‑provided text with the help of OpenAI GPT models. Users submit a prompt, adjust generation parameters, and receive polished output in real‑time.

---

## Tech Stack

| Layer        | Technology                                                   | Purpose                                             |
| ------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| **Frontend** | **Next.js 15** (App Router) + **React 19** + **TypeScript**  | Server & Client Components, fast dev with Turbopack |
| **Styling**  | **Material‑UI v7**, **styled‑components**, custom dark theme | Consistent, accessible UI                           |
| **State**    | **Zustand**                                                  | Lightweight global state management                 |
| **Backend**  | **Node.js 20** with Express‑style router & **ws** WebSockets | Streams AI output to the browser                    |
| **Database** | **PostgreSQL** with **Prisma ORM**                           | Typed, safe data access                             |
| **Auth**     | **NextAuth.js**                                              | Credential / OAuth sign‑in                          |
| **AI**       | **OpenAI API**                                               | GPT‑4 / GPT‑4o completion & streaming               |

---

## Quick Start

### Prerequisites

* Node.js ≥ 24 & npm ≥ 11
* PostgreSQL ≥ 17
* An OpenAI API key

### 1. Clone & install

```bash
git clone https://github.com/your‑org/ai-content-generator.git
cd ai-content-generator
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/aicg"
OPENAI_API_KEY="sk‑..."
NEXTAUTH_SECRET="choose‑a‑long‑random‑string"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Prepare the database

```bash
npx prisma migrate deploy     # run migrations
npm run seed                  # optional: seed sample data
```

### 4. Run the app in development

```bash
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## Production

```bash
npm run build
npm start
```

Deploy to any platform that supports Node 24 and PostgreSQL (e.g., Vercel, Fly.io, Render).

---

## Project Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Create optimized production build       |
| `npm start`     | Run production server                   |
| `npm run lint`  | ESLint + Prettier checks                |
| `npm run seed`  | Seed database with sample data          |

---

## Folder Structure (excerpt)

```
├── prisma/            # Prisma schema & migrations
├── src/
│   ├── app/           # Next.js App Router (routes & layouts)
│   ├── components/    # Reusable UI pieces
│   ├── lib/           # Utility functions
│   └── styles/        # Theme & global styles
└── .github/
```

---

## License

MIT
