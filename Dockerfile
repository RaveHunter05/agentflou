# ==================== Etapa 1: Build ====================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build

# ==================== Etapa 2: Producción ====================
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./

RUN npm ci --frozen-lockfile --omit=dev && \
    npm cache clean --force

COPY --from=builder /app/build ./build

# Permisos para los assets
RUN chmod -R 755 /app/build/client

USER node

EXPOSE 3000
CMD ["npm", "start"]
