#!/bin/bash

FILEBASE="$(dirname "${0}")/../"

function createLogs {
  cd $FILEBASE
  rm -Rf logs
  mkdir logs
  cd logs
  touch access.log error.log
}

createLogs
