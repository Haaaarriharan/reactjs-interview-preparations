import React from "react";

function jan25() {
  // type of replication in the mongodb ?
  // threading in the mongodb?
  // diff between rest api and graph ql ?
  // comparision of sequil and nosequil database?
  // architecture for the mongodb and the sql?

  // Replica Sets
  // Definition: A replica set is a group of MongoDB servers that maintain the same data set,

  // Sharded Clusters with Replication
  // Definition: A combination of sharding and replication to ensure horizontal scalability and redundancy.

  // Threading in the mongo db?
  // MongoDB itself does not provide direct support for threading in the same way programming languages like Python

  // Server Level: The MongoDB server uses multiple threads to handle client requests, read/write operations, and background tasks.
  // Driver Level: Most MongoDB drivers are designed to work efficiently in multi-threaded environments by supporting connection pooling.

  // diff between rest api and the graph ql
  // Data Fetching	Fixed endpoints return predefined data structures.	Flexible queries allow clients to specify the exact data they need.

  // SQL and No sql

  // SQL
  // - postgres sql
  // - relation
  // - vertical saclling
  // - schema - fixed

  // No sql
  // - mongo db
  // - doctype type
  // - horizontal scalling
  // - schema - dynamic

  // MongoDB Architecture (NoSQL)
  // MongoDB is a document-oriented NoSQL database that stores data in JSON-like format (BSON). Its architecture is built for scalability and flexibility.

  // Key Components:
  // Database:
  // Collections:
  // Documents:
  // Shard:
  // Replica Sets:
  // Query Router (mongos):

  // SQL Database Architecture
  // SQL databases (e.g., MySQL, PostgreSQL, SQL Server) follow a relational database management system (RDBMS) architecture.

  // Key Components:
  // Database:
  // Tables:
  // Rows:
  // Columns:
  // Indexes:
  // Transactions:
  // Query Processor:
  // Storage Engine:

  return <div>jan25</div>;
}

export default jan25;
