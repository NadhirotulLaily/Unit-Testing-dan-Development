FROM mcr.microsoft.com/windows/servercore:ltsc2019
RUN powershell -Command \
    choco install -y nodejs --version 16.14.0
WORKDIR /app
COPY package.json index.js /app/
RUN npm i
CMD ["node", "index.js"]