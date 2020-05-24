variable "project" {
  description = "My first attempt on creating ec2 instance"
  default     = "my_ec2_instance"
}

variable "environment" {
  description = "Working environment (dev, prod, stage)"
  default     = "dev"
}

variable "aws_region" {
  description = "AWS region"
}

variable "aws_access_id" {
  description = "AWS access ID"
}

variable "aws_secret_key" {
  description = "AWS secret key"
}

variable "server_instance_type" {
  description = "Instance type"
  default     = "t2.micro"
}
