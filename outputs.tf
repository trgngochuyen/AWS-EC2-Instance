output "server_public_ip" {
  description = "Public IP address of the server"
  value       = aws_instance.first_ec2_instance_server.public_ip
}
