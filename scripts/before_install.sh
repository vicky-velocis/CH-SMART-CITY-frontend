#scripts/before.sh

#!/bin/bash

yum update -y
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
sudo yum install -y nodejs
sudo /usr/bin/npm install pm2@latest -g
sudo npm install yarn -g
#mkdir /home/ec2-user/zfund-code-deploy-22
