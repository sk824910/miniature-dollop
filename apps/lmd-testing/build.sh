#!/bin/bash

{
  rm lmd-testing.zip
  cd apps/lmd-testing; zip -r ../lmd-testing.zip *; cd ..;
} &> /dev/null

Version=$(md5sum -b lmd-testing.zip | awk '{print $1}')

{
  aws s3 cp lmd-testing.zip s3://s3-testing/lmd-testing-$Version.zip
  aws s3 cp lmd-testing.zip s3://s3-testing/lmd-testing-latest.zip
  rm lmd-testing.zip
} &> /dev/null

echo $Version