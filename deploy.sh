#!/bin/bash

echo -e "\n+++++ Starting deployment +++++\n"

tfswitch 0.15.3

echo -e "\n--- Packaging lambda ---\n"
npm run package

echo -e "\n--- Applying terraform ---\n"
cd infrastructure
terraform init -input=false
terraform apply -input=false -auto-approve
cd ../

echo -e "\n+++++ Deployment done +++++\n"