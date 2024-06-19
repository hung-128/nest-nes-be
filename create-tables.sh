#!/bin/bash

# Đảm bảo jq đã được cài đặt
if ! command -v jq &> /dev/null
then
    echo "jq could not be found, please install jq"
    exit
fi

# Đọc file JSON
TABLES_JSON=$(cat create-table.json)

# Lặp qua từng bảng trong file JSON và tạo bảng
for TABLE_JSON in $(echo "${TABLES_JSON}" | jq -c '.[]'); do
  echo "Creating table with definition: $TABLE_JSON"
  aws dynamodb create-table --cli-input-json "$TABLE_JSON"
done
