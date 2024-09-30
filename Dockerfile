FROM node:18

WORKDIR /usr/src/app
COPY ./application/package.json .
RUN npm install
RUN touch .env
ENV NEXT_PUBLIC_API_BASE_URL=https://staging.api.zoropay.com/ecp/core/

EXPOSE 3333

CMD [ "npm", "run", "dev" ]

COPY ./application/ .
