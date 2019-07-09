FROM node:10-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=prod
COPY . ./
EXPOSE 8080
ENV database_name=${database_name}
ENV database_user=${database_user}
ENV database_password=${database_password}
ENV database_host=${database_host}
ENV database_port=${database_port}
ENV database_dialect=${database_dialect}
ENV jwt_secret=${jwt_secret}
RUN chmod +rwx server/www
CMD ["npm", "run","start"]