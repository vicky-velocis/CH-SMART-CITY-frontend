#scripts/appstart.sh

#!/bin/bash

cd /home/ec2-user/ch-smart-city-22
cd web/rainmaker
#sudo /usr/bin/npm start
pm2 stop all
pm2 delete all
pm2 start "npm run dev:citizen" --name citizen
