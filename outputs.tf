output "server_public_id" {
  description = "Public IP address of the server"
  value       = aws_instance.my_ec2_instance[*].public_ip
}
