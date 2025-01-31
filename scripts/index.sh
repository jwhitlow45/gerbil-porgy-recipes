#!/bin/bash

# Define the source and destination paths
SOURCE_DIR="./public/posts"
DEST_FILE="./src/assets/post_index.json"

# Get all files from the source directory
FILES=$(ls "$SOURCE_DIR")

# Create a JSON array from the file names
JSON_ARRAY=$(printf '%s\n' "$FILES" | jq -R . | jq -s .)

# Write the JSON array to the destination file
echo "$JSON_ARRAY" > "$DEST_FILE"