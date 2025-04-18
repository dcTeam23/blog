FROM node:20-alpine

# Instalação de pacotes essenciais
RUN apk add --no-cache \
    git \
    bash \
    curl \
    openssh \
    # Ferramentas de desenvolvimento
    vim \
    tree

# Configurar ambiente de trabalho
WORKDIR /workspace

# Configurar npm para instalação global sem sudo
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="/home/node/.npm-global/bin:${PATH}"
RUN mkdir -p /home/node/.npm-global && chown -R node:node /home/node

# Instalar algumas ferramentas globais úteis
RUN npm install -g npm@latest prettier eslint

USER node
