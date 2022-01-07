#!/bin/sh
set -e

yarn install
yarn build

yarn start
