#scripts/after_install.sh

#!/bin/bash

#mkdir /home/ec2-user/zfund-code-deploy-22
cd /home/ec2-user/ch-smart-city-22
cd web/rainmaker
#sudo /usr/bin/npm i postcss-preset-env
npm i lerna
npm run go
