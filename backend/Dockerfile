FROM golang:1.22.4-alpine3.20
RUN apk update && apk add git

WORKDIR /app/go/src/go_sample
ADD ./go_sample /app/go/src/go_sample
ENV GOPATH /app/go

RUN go get -u github.com/gin-gonic/gin@v1.10.0
RUN go get -u gorm.io/gorm@v1.25.10
RUN go get -u go.uber.org/zap@v1.27.0
RUN go get -u gorm.io/driver/mysql@v1.5.7

RUN go get github.com/cosmtrek/air@v1.49.0
RUN chmod 755 $GOPATH/pkg/mod/github.com/cosmtrek/air@v1.49.0/install.sh
RUN /app/go/pkg/mod/github.com/cosmtrek/air@v1.49.0/install.sh -b /app/go/bin

# CMD [ "/app/go/bin/air" ]
CMD ["sh"]
