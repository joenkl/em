#!/bin/sh
# Read from user parameters
USER_PARAM=$1
USER_SECOND_PARAM=$2
NUM_OF_ARG=$#
DOWN="down"
UP="up"
CLEAR="clean"
RUN_TEST="test"
PRUNE="prune"
HELP_MESSAGE="\e[31m Please provide correct parameters up, down, clean, test, or prune\e[39m"

if [ "$USER_PARAM" = "$DOWN" ]
then
  echo "\e[32m Running docker-compose down...\e[39m"
  exec docker-compose down -v
elif [ "$USER_PARAM" = "$UP" ]
then
  echo "\e[32m Running docker-compose up...\e[39m"
  exec docker-compose up
elif [ "$USER_PARAM" = "$CLEAR" ]
then
  echo "\e[32m Running docker-compose down -v --rmi all --remove-orphans\e[39m"
  exec docker-compose down -v --rmi all --remove-orphans
elif [ "$USER_PARAM" = "$RUN_TEST" ]
then
  if [ "$NUM_OF_ARG" -eq 2 ]
  then
    echo "\e[32m Attaching container \e[33m${USER_SECOND_PARAM}\e[39m...\e[39m"
    echo "\e[32m Please run \e[34mnpm run test\e[32m to start the unit test\e[39m"
    exec docker exec -it ${USER_SECOND_PARAM} /bin/sh
  else
    echo "\e[31m Please provide container as second argument (eg.: test jatda-em)\e[39m"
  fi
elif [ "$USER_PARAM" = "$PRUNE" ]
then
  echo "\e[32m Running docker system prune -f...\e[39m"
  exec docker system prune
else
  echo "${HELP_MESSAGE}"
fi
