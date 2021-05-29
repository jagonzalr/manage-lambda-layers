#!/bin/bash

echo -e "----- Starting deletion -----\n"

tfswitch 0.15.3

echo -e "Deleting with Terraform...\n"

cd infrastructure
terraform init -input=false -no-color
terraform destroy -input=false -auto-approve
cd ../

echo -e "Done...\n"