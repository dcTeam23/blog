FROM node:22-slim

# Instalação de pacotes essenciais
RUN apt-get update && apt-get install -y \
    git \
    bash \
    curl \
    openssh-client \
    # Ferramentas de desenvolvimento
    vim \
    tree \
    && rm -rf /var/lib/apt/lists/*

# Configurar ambiente de trabalho
WORKDIR /workspace

# Configurar npm para instalação global sem sudo
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="/home/node/.npm-global/bin:${PATH}"
RUN mkdir -p /home/node/.npm-global && chown -R node:node /home/node

# Instalar algumas ferramentas globais úteis
RUN npm install -g npm@latest prettier eslint

# Expor a porta 3000 para o servidor de desenvolvimento
EXPOSE 3000

USER node
