#!/bin/bash

# need to hardcode password for it to get set properly
echo 'root:coolpassword' | chpasswd

service ssh start

#nodemon ../api/app.js
