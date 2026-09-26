# AI-Assisted E-commerce App

A Next.js e-commerce prototype that combines a MongoDB product catalog, a browser-persisted shopping cart, and AI-assisted product search.

> **Project status:** Prototype / learning project. Product browsing, cart behavior, database-backed products, and AI-assisted search are implemented. Checkout is currently a front-end demonstration and does not process payments or persist orders.

## Highlights

- MongoDB-backed product catalog
- Product listing and product-detail pages
- Shopping cart with quantity controls
- Cart persistence using browser `localStorage`
- Natural-language product search
- AI-generated search keywords using the Groq API through the OpenAI-compatible client
- Responsive UI built with Next.js and Tailwind CSS
- Development seed route for sample product data
- Basic checkout form prototype

## How the AI search works

The search flow is intentionally simple:

```text
User query
   ↓
Groq-hosted Llama model
   ↓
10 short related keywords
   ↓
MongoDB regex search
   ↓
Matching products
```

The implementation currently uses `llama-3.1-8b-instant` to turn a user's query into related search terms, then searches product titles, descriptions, and categories in MongoDB.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19, Tailwind CSS 4 |
| Database | MongoDB, Mongoose |
| AI search | Groq API, OpenAI-compatible SDK |
| State | React Context + localStorage |
| Tooling | ESLint, npm |

## Main project structure

```text
Ecommerce-App/
├── app/
│   ├── api/
│   │   ├── ai-search/
│   │   ├── products/
│   │   └── seed/
│   ├── cart/
│   ├── checkout/
│   ├── components/
│   ├── products/[id]/
│   └── page.js
├── lib/
│   └── db.js
├── models/
│   └── Product.js
├── public/
├── package.json
└── README.md
```

## Run locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file:

```env
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 4. Optional sample data

The repository includes a development seed endpoint at `/api/seed`. Its current implementation clears the Product collection and inserts sample products, so it should only be used with a development database.

## Current scope

Implemented:
- Product catalog retrieval from MongoDB
- Product detail navigation
- Add/remove/update cart items
- Cart persistence in the browser
- AI-assisted product search
- Basic checkout form UI

Not yet implemented:
- Payment processing
- Persistent orders
- Production authentication/authorization
- Inventory management
- Production-grade search ranking

These boundaries are intentional in this repository: it is presented as an evolving e-commerce prototype, not as a production store.

## Security note

Keep `MONGO_URI` and `GROQ_API_KEY` in environment files and never commit real credentials.

## Author

**Anfal Qureshi**  
Computer Science student building practical web, database, and AI-integrated applications.
