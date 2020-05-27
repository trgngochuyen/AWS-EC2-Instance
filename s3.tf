resource "aws_s3_bucket" "website" {
  bucket = "${var.project}-website-${var.aws_region}-${var.environment}"
  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement":[
      {
        "Sid": "PublicReadForGetBucketObjects",
        "Effect":"Allow",
        "Principal": "*",
        "Action": [
          "s3:GetObject"
        ],
        "Resource": "arn:aws:s3:::${aws_s3_bucket.website.bucket}/*"
      }
    ]
}
EOF
}

resource "aws_s3_bucket_object" "website" {
  for_each = fileset(path.module, "website/build/**/*.*")
  bucket   = aws_s3_bucket.website.bucket              // name of the bucket to put the file in
  key      = replace(each.value, "website/build/", "") //the name of the object once in the bucket
  source   = "${path.module}/${each.value}"            //the path to a file that will be read and uploaded as raw bytes for the object content
  content_type = lookup(
    var.file_extensions,
    element(reverse(split(".", each.value)), 0
    ), "text/plain"
  ) // format of the object data in form of standard MIME type
}
