# ---------------- Base image ----------------
FROM node:18-alpine AS base
WORKDIR /app

# ---------------- Backend Dependencies ----------------
FROM base AS backend
WORKDIR /app/api
COPY api/package*.json ./
RUN npm install
COPY api ./

# ---------------- Frontend Build ----------------
FROM base AS frontend
WORKDIR /app/frontend
COPY Frontend/package*.json ./
RUN npm install
COPY Frontend ./
RUN npm run build

# ---------------- Final Image ----------------
FROM node:18-alpine
WORKDIR /app

# Copy backend code
COPY --from=backend /app/api ./api

# Copy frontend build into backend/public (so backend serves static files)
COPY --from=frontend /app/frontend/dist ./api/public

# Set working directory to backend
WORKDIR /app/api

# Expose the backend port
EXPOSE 5000

# Start only backend (it serves frontend too)
CMD ["node", "server.js"]
