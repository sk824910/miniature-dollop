#!/bin/bash

./apps/lmd-testing/build.sh

# TODO: add other functions here

aws cloudformation create-stack --stack-name=$STACK_NAME \
  --template-body=cloudformation.json \
  --capabilities CAPABILITY_IAM \
  --parameters \
    ParameterKey=S3BucketName,ParameterValue=$S3_BUCKET_NAME

echo "Creating..."

aws cloudformation wait stack-create-complete --stack-name $STACK_NAME