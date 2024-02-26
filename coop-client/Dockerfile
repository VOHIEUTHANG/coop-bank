FROM nginx:1.24.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d
COPY ./nginx/certs /etc/nginx/certs
COPY ./build .
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

