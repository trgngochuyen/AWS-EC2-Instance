resource "aws_key_pair" "server" {
  key_name   = "${var.project}-server-${var.environment}"
  public_key = file("instance-public.key")
}

resource "aws_instance" "my_ec2_instance" {
  ami           = data.aws_ami.ubuntu-18_04.id
  instance_type = "t2.micro"

  key_name = aws_key_pair.server.key_name
  security_groups = [
    aws_security_group.server.name
  ]

  tags = {
    Name        = "My first EC2 instance ${var.environment}"
    Project     = var.project
    Environment = var.environment
  }
}

resource "null_resource" "provisioner" {
  connection {
    host        = aws_instance.my_ec2_instance.public_ip
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("${path.module}/instance-private.key")
  }
  triggers = {
    init_sha1 = sha1(file("provision/server-init.sh"))
    app       = sha1(file("provision/webserver/app.js"))
    package   = sha1(file("provision/webserver/package.json"))
  }
  provisioner "file" {
    source      = "provision/webserver"
    destination = "/home/ubuntu"
  }
  provisioner "remote-exec" {
    script = "provision/server-init.sh"
  }
}
