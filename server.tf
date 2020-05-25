resource "aws_key_pair" "server" {
  key_name   = "${var.project}-server-${var.environment}"
  public_key = file("instance-public.key")
}

resource "aws_instance" "my_ec2_instance" {
  ami           = data.aws_ami.ubuntu-18_04.id
  instance_type = "t2.micro"
  count         = 2
  key_name      = aws_key_pair.server.key_name
  security_groups = [
    aws_security_group.server.name
  ]
  user_data = <<-EOF
  #!/bin/bash
    echo "Hello world! This is my first EC2 instance" > index.html
    nohup busybox httpd -f -p 80 &
  EOF

  tags = {
    Name        = "My first EC2 instance ${var.environment}-${count.index + 1}"
    Project     = var.project
    Environment = var.environment
  }
}
