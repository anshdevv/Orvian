# ---------------- Base image ----------------
FROM node:18-alpine AS base
WORKDIR /orvian

# ---------------- Backend Dependencies ----------------
FROM base AS backend
WORKDIR /orvian/api
COPY api/package*.json ./
RUN npm install
COPY api ./

# ---------------- Frontend Build ----------------
FROM base AS frontend
WORKDIR /orvian/Frontend
COPY Frontend/package*.json ./
RUN npm install
COPY Frontend ./
RUN npm run build

# ---------------- Final Image ----------------
FROM node:18-alpine
WORKDIR /orvian

# Copy backend code
COPY --from=backend /orvian/api ./api

# Copy frontend build into backend/public (so backend can serve static files)
COPY --from=frontend /orvian/Frontend/dist ./api/public

# Set working directory to backend
WORKDIR /orvian/api

# Expose the backend port
EXPOSE 5000

# Run your backend
CMD ["node", "server.js"]
