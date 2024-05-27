#!/bin/bash

echo "Running Solhint..."
solhint 'src/**/*.sol'

echo "Running Slither..."
slither . --config-file slither.config.json
