variable "project" {
  description = "Name of the project"
  default     = "My first EC2 instance"
}

variable "aws_region" {
  description = "AWS region where the instance runs"
}

variable "aws_access_id" {
  description = "AWS access ID"
}

variable "aws_secret_key" {
  description = "AWS secret key"
}

variable "environment" {
  description = "Working environment (dev, prod, stage)"
  default     = "dev"
}
