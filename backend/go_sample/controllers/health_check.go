package controllers

import (
	"net/http"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"github.com/gin-gonic/gin"
	"github.com/mochi256/go_sample/models/databases"
	"github.com/mochi256/go_sample/utils"
)

func GetHealthCheck(c *gin.Context) {
	dsn := utils.GetDatabaseDsn()
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
        c.JSON(http.StatusOK, gin.H{
			"status": "Failed",
			"err": "Internal Server Error",
		})
		return
    }

	var hc databases.HealthCheck
	db.Where("id = ?", 1).Find(&hc)

	c.JSON(http.StatusOK, gin.H{
		"status": "OK",
	})
}
