#!/bin/bash

# Start Jekyll server in the background
bundle exec jekyll serve --watch &

# Start gulp
gulp
