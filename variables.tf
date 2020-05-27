variable "project" {
  description = "Name of the project"
  default     = "huyenin-ec2-instance"
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

variable "file_extensions" {
  type = map(string)
  default = {
    "txt"    = "text/plain; charset=utf-8"
    "html"   = "text/html; charset=utf-8"
    "htm"    = "text/html; charset=utf-8"
    "xhtml"  = "application/xhtml+xml"
    "css"    = "text/css; charset=utf-8"
    "js"     = "application/javascript"
    "xml"    = "application/xml"
    "json"   = "application/json"
    "jsonld" = "application/ld+json"
    "gif"    = "image/gif"
    "jpeg"   = "image/jpeg"
    "jpg"    = "image/jpeg"
    "png"    = "image/png"
    "svg"    = "image/svg+xml"
    "webp"   = "image/webp"
    "weba"   = "audio/webm"
    "webm"   = "video/webm"
    "3gp"    = "video/3gpp"
    "3g2"    = "video/3gpp2"
    "pdf"    = "application/pdf"
    "swf"    = "application/x-shockwave-flash"
    "atom"   = "application/atom+xml"
    "rss"    = "application/rss+xml"
    "ico"    = "image/vnd.microsoft.icon"
    "jar"    = "application/java-archive"
    "ttf"    = "font/ttf"
    "otf"    = "font/otf"
    "eot"    = "application/vnd.ms-fontobject"
    "woff"   = "font/woff"
    "woff2"  = "font/woff2"
  }
}
