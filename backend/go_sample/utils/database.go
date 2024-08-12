package utils

import (
	"os"
	"strings"
)

func GetDatabaseDsn () string {
	db_user := os.Getenv("DB_USER")
	db_pass := os.Getenv("DB_PASS")
	db_name := os.Getenv("DB_NAME")
	db_port := os.Getenv("DB_PORT")
	db_host := os.Getenv("DB_HOST")
	var builder strings.Builder

	words := []string{
		db_user,
		":",
		db_pass,
		"@tcp(", db_host, ":", db_port, ")",
		"/",
		db_name,
		"?charset=utf8mb4&parseTime=True&loc=Local",
	}
	for _, word := range words {
		builder.WriteString(word)
	}
	return builder.String()
}