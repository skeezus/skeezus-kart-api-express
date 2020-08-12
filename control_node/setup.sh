#!/bin/bash
NUM_HOSTS=1
HOST_BASE_URL=api2_host
HOST_NAME_BASE=wint_staging
HOST_FILE=/etc/ansible/hosts
CONTENT="[servers]"

#declare -A hosts=(["moo"]="cow" ["woof"]="dog") # declare associative array src: https://stackoverflow.com/questions/1494178/how-to-define-hash-tables-in-bash

for i in $(seq $NUM_HOSTS)
do
   CONTENT+="\n${HOST_NAME_BASE}_$i ansible_host=${HOST_BASE_URL}_$i"
done

# https://stackoverflow.com/questions/6207573/how-to-append-output-to-the-end-of-a-text-file/56486055#56486055
# quote the variable here so the interpreter recognizes the whitespace
printf "$CONTENT" | tee $HOST_FILE