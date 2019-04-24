# Voorbereiding TaCo avond MEAN-stack
Vereist:
- Een favoriete text editor of IDE
- Een recente versie van Node.js
- Een lokaal draaiende MongoDB installatie en visualisatietool (remote instances komen niet door de Avanade firewall heen)
  Zie onderstaande instructies voor MongoDB installatie
## Angular CLI installatie

Open terminal
> npm install -g @angular/cli

## MongoDB installatie

### Optie 1: MongoDB lokaal installeren (Easy Mode)

1. Download MongoDB Community Server (https://www.mongodb.com/download-center/community)
2. Vink tijdens de installatie het 'installeer MongoDB Compass' aan.
3. Done.

### Optie 2: MongoDB in Docker container (Advanced)

Download en installeer Docker desktop (Windows)

Open terminal

> docker pull mongo

> docker run -d --name docker-mongo -p 29017:27017 mongo

Download & installeer MongoDB Compass (visualisatietool)
https://www.mongodb.com/download-center/compass

### Optie 3: Docker Compose (Advanced)

Credits aan André Geuze. Docker compose file [hier](docker-compose.yml)
