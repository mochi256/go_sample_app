package databases


type HealthCheck struct {
	ID    uint   `gorm:"primaryKey"`
	Message  string
}

func (HealthCheck) TableName() string {
    return "health_check"
}
