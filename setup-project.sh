#!/bin/bash

echo 'Checking project structure...'

echo 'Removing .git structure'
rm -rf .git

echo 'Updating project name'
grep -rl %PROJECT_NAME% . | xargs sed -i '' 's/%PROJECT_NAME%/My\ Project/g'

echo 'cleaning up...'
rm -f setup-project.sh
