#!/bin/bash

export VERSION=1.0.1_$(date '+%Y.%m.%d')
#export REGISTRY_URL=registry.zabi.tech:5043
export REGISTRY_URL=registryminh.zabi.tech:5099
docker build -f ./scripts/Dockerfile -t minh-front:${VERSION} -t minh-front:latest .

docker tag minh-front:${VERSION} ${REGISTRY_URL}/minh-front:${VERSION}
docker tag minh-front:${VERSION} ${REGISTRY_URL}/minh-front:latest
docker push ${REGISTRY_URL}/minh-front:${VERSION}
docker push ${REGISTRY_URL}/minh-front:latest

echo ${REGISTRY_URL}/minh-front:${VERSION} >> docker_ver.txt
