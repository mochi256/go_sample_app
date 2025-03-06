FROM node:alpine3.20

WORKDIR /app
ADD ./go-sample /app

RUN npm install

RUN echo -n 'echo $0 >/dev/null 2>&1' > /bin/xdg-open
RUN chmod 755 /bin/xdg-open
