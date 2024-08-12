package middlewares

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"log"
	"time"
)

func LoggingRequest(c *gin.Context){
	logger, err := zap.NewProduction()
	if err != nil{
		log.Fatal(err.Error())
	}
	req_time := time.Now()
	ua := c.GetHeader("User-Agent")
	c.Next()
	logger.Info("request: ",
		zap.String("path", c.Request.URL.Path),
		zap.String("ua", ua),
		zap.Int("status", c.Writer.Status()),
		zap.Duration("elapsed", time.Now().Sub(req_time)),
	)
}
