package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mochi256/go_sample/controllers"
	"github.com/mochi256/go_sample/middlewares"
)

func main() {
	engine := gin.Default()
	engine.Use(middlewares.LoggingRequest)
	api := engine.Group("/api")
	{
		v1 := api.Group("/v1")
		{
			v1.GET("/health_check", controllers.GetHealthCheck)
		}
	}
	engine.Run(":3000")
}
