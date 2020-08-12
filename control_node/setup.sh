#!/bin/bash
NUM_HOSTS=1
HOST_BASE_URL=api2_host
HOST_NAME_BASE=wint_staging
HOST_FILE=/etc/ansible/hosts
SERVERS="[servers]"
UNIX_PASS="coolpassword"

#declare -A hosts=(["moo"]="cow" ["woof"]="dog") # declare associative array src: https://stackoverflow.com/questions/1494178/how-to-define-hash-tables-in-bash

for i in $(seq $NUM_HOSTS)
do
   SERVERS+="\n${HOST_NAME_BASE}_$i ansible_host=${HOST_BASE_URL}_$i"
done

VARIABLES="[all:vars]\nansible_connection=ssh\nansible_user=root\nansible_ssh_pass=$UNIX_PASS\n\n"

# https://stackoverflow.com/questions/6207573/how-to-append-output-to-the-end-of-a-text-file/56486055#56486055
# quote the variable here so the interpreter recognizes the whitespace
printf "$VARIABLES" | tee -a $HOST_FILE
printf "$SERVERS" | tee -a $HOST_FILE

export ANSIBLE_HOST_KEY_CHECKING=False

#ssh-keyscan -t rsa api2_host_1 >> ~/.ssh/known_hosts # add url to known hosts
#ssh-keygen -q -t rsa -N '' -R [api2_host_1] -f /root/.ssh/id_rsa
#ansible-playbook /root/control_node/playbook.yml