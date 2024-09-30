FROM node:alpine AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NEXT_PUBLIC_API_BASE_URL=https://staging.api.zoropay.com/ecp/core/
ENV VITE_ENV=production
COPY ./application/package.json ./
RUN npm install

COPY ./application/ .

RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]