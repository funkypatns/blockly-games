# Aish Bakery ERP Demo

## Prerequisites
- Docker
- Node.js 18+

## Local setup
1. Navigate to the project folder:
   ```bash
   cd aish-bakery-erp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create the environment file:
   ```bash
   cp .env.example .env
   ```
4. Start PostgreSQL:
   ```bash
   docker-compose up -d db
   ```
5. Push the Drizzle schema to the database:
   ```bash
   npm run db:push
   ```
6. Seed the database:
   ```bash
   npm run db:seed
   ```
7. Run the app:
   ```bash
   npm run dev
   ```

## Health check
- Visit `http://localhost:3000/api/health` to verify database connectivity.
- Visit `http://localhost:3000/login` for the stub login screen.
