# 1. Usa un'immagine base con Node.js e NPM
FROM node:18-alpine AS build

# 2. Imposta la cartella di lavoro
WORKDIR /app

# 3. Copia i file package.json e package-lock.json (per l'installazione delle dipendenze)
COPY package*.json ./

# 4. Installa le dipendenze
RUN npm install

# 5. Copia tutti i file del progetto nella cartella di lavoro
COPY . .

# 6. Costruisci l'app Angular
RUN npm run build --prod


# 7. Espone la porta per l'applicazione (Angular di default usa la porta 4200)
EXPOSE 4200

# 8. Comando per avviare l'app Angular in modalità di sviluppo
CMD ["npm", "start"]
