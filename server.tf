resource "aws_instance" "first_ec2_instance_server" {
  ami           = data.aws_ami.ubuntu-18_04.id
  instance_type = var.server_instance_type
  tags = {
    Name        = "First EC2 instance - ${var.environment}"
    Environment = var.environment
    Project     = var.project
  }
}
