#!/usr/bin/env bash

set -euo pipefail

ARCHIVE_DIR="$(pwd)"

projects=(
  "odin-project-landing-page"
  "odin-project-rock-paper-scissors"
  "odin-project-etch-a-sketch"
  "odin-project-calculator"
  "odin-project-sign-up-form"
  "odin-project-admin-dashboard"
  "odin-project-library"
  "odin-project-tic-tac-toe"
  "odin-project-restaurant-page"
  "odin-project-todo-list"
  "odin-project-weather-app"
  "odin-project-battleship"
  "odin-project-cv-app"
  "odin-project-memory-card"
)

for project in "${projects[@]}"; do
  echo "=== Processing $project ==="

  # Clone into a temp dir next to archive
  TMP_DIR="$(dirname "$ARCHIVE_DIR")/$project"
  if [ ! -d "$TMP_DIR" ]; then
    git clone "git@github.com:Chance093/$project.git" "$TMP_DIR"
    echo "$project cloned"
  else
    echo "$TMP_DIR already exists, skipping clone"
  fi

  cd "$ARCHIVE_DIR"

  # Remove remote if it exists (avoid errors on rerun)
  if git remote | grep -q "^$project$"; then
    git remote remove "$project"
  fi

  git remote add "$project" "$TMP_DIR"
  git fetch "$project"

  # Detect default branch
  BRANCH=$(git remote show "$project" | sed -n '/HEAD branch/s/.*: //p')

  echo "Adding subtree: $project (branch $BRANCH)"
  git subtree add --prefix="$project" "$project" "$BRANCH"

  echo "Cleaning up temp clone"
  rm -rf "$TMP_DIR"

  echo "=== $project successfully archived ==="
done
