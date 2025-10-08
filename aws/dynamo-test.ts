import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand
} from "@aws-sdk/lib-dynamodb";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.qa' });

// 1. Setup Client
// debugger;
const REGION = process.env.AWS_REGION;
const db = new DynamoDBClient({region:REGION});
const doc = DynamoDBDocumentClient.from(db);

// 2. Define what to check ? 
const TableName = 'customers';
const Key:Record<string,any> = { customer_id: "1056638045"};

// 3. Read Item
const RESPONSE = await doc.send(new GetCommand({
    TableName,
    Key,
    ConsistentRead: true
}));
console.log(RESPONSE.Item);