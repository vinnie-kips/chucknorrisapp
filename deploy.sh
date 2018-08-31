#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  yarn predeploy
  yarn deploy
fi
