#!/bin/bash

function test() {
  curl -X POST http://localhost:3000/client/"$1"
  curl -X POST -H 'Content-Type: application/json' -d '{ "result": "ok" }' http://localhost:3000/webhook/"$1"
}

test 1
