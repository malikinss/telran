# Tel-Ran College IT courses

## Backend - Course

### TypeScript + Node.js

#### [Homework 1: Sportlotto Application 🎱](https://github.com/malikinss/telran-backend-hw1)

A TypeScript `CLI` application that simulates a lottery draw (Sportloto), generating unique random numbers within a specified range.
Supports input validation, custom arguments, and unit testing with Jest.

#### [Homework 2: Code and Comment Extractor 📝](https://github.com/malikinss/telran-backend-hw2)

A TypeScript Node.js application that extracts code and comments from a source file into separate files. Uses asynchronous file reading, line-by-line parsing, and supports unit testing with Jest.

#### [Homework 3: Logger functionality](https://github.com/malikinss/telran-backend-hw3)

A TypeScript Logger with configurable log levels, timestamped messages, and colored console output. Supports level-specific and global handlers, leveraging Node.js EventEmitter for flexible logging and extensibility.

#### [Homework 4: `RandomNumbersStream` Application](https://github.com/malikinss/telran-backend-hw4)

A TypeScript Node.js application providing a readable stream of random numbers. Supports unique or non-unique numbers, configurable ranges and amounts, streaming output, and centralized configuration with proper error handling.

#### [Homework 5: Random Unique Numbers using Async Pipeline](https://github.com/malikinss/telran-backend-hw5)

A TypeScript Node.js project that generates random unique numbers using an asynchronous stream pipeline. Features modular streams for generation, uniqueness enforcement, formatting, and console output, with configuration-driven parameters and robust validation.

#### [Homework 6: Calculator on `HTTP` Server](https://github.com/malikinss/telran-backend-hw6)

A TypeScript Node.js `HTTP` server that performs basic arithmetic operations via `JSON` requests. Validates input, executes calculations, handles errors with appropriate `HTTP` status codes, and follows a modular design separating controller, service, and utility modules.

---

### Express

#### [Homework 7: Express Middleware and Routes](https://github.com/malikinss/telran-backend-hw7)

A TypeScript Express server demonstrating custom middleware, request rate limiting, and modular routes. Features include timestamping requests, limiting repeated requests, and structured JSON responses with proper HTTP status codes.

#### [Homework 8: `Employees` Back-End](https://github.com/malikinss/telran-backend-hw8)

A TypeScript Express backend for managing employees with full CRUD functionality. Features include in-memory data storage, modular routes and controllers, middleware for JSON parsing, logging, and error handling, and integration-ready endpoints for a React front-end.

#### [Homework 9: Validation & Persistence](https://github.com/malikinss/telran-backend-hw9)

A TypeScript + Express backend for managing employees with full data validation using Zod and persistent storage in a JSON file. Features include CRUD operations, graceful shutdown with auto-save, error-handling middleware, and fully typed endpoints.

#### [Homework 10: `Employees` Back-End with Role-Based Authentication](https://github.com/malikinss/telran-backend-hw10)

A TypeScript + Express backend for managing employees with JWT-based authentication and role-based access control. Features include CRUD operations, Zod validation, in-memory storage with JSON persistence, and secure endpoints for ADMIN and USER roles.

#### [Homework 11: Controller Unit Tests and Route Integration Testing](https://github.com/malikinss/telran-backend-hw11)

TypeScript + Express backend for employee management with comprehensive controller unit tests and route integration tests. Features `JWT` authentication, role-based access, Zod validation, in-memory + file persistence, and automated testing using Supertest and Node’s native test runner. Ensures all endpoints are fully validated and secure.

#### [Homework 12: Service Unit-Test](https://github.com/malikinss/telran-backend-hw12)

TypeScript unit tests for the `EmployeesService` module. Covers all service methods (`getAll`, `getEmployee`, `addEmployee`, `updateEmployee`, `deleteEmployee`) with success and error cases. Uses Node’s built-in test runner to ensure isolated, reliable business logic without involving Express routes.

---

### Data Base

#### [Homework 13: SQL Service Implementation with `AbstractEmployeesServiceSql`](https://github.com/malikinss/telran-backend-hw13)

TypeScript SQL-backed employee service implementing `AbstractEmployeesServiceSql` with full CRUD using Knex and SQLite. Ensures persistent storage, testable service methods, and integration with the service registry. All methods are covered by unit tests.

#### [Homework 14: Mongo Service Implementation with `AbstractEmployeesServiceMongo`](https://github.com/malikinss/telran-backend-hw14)

TypeScript MongoDB-backed employee service implementing `AbstractEmployeesServiceMongo`. Provides full CRUD with in-memory Mongo simulation, Zod validation, and role-based access. All service tests pass, ensuring reliable, modular persistence compatible with multiple storage backends.

---

### SQL

#### [Homework 15: SQL Queries on `Chinook` Database](https://github.com/malikinss/telran-backend-hw15)

SQL queries on the `Chinook` database exploring tracks, albums, artists, invoices, customers, playlists, and employees. Focuses on multi-table JOINs, sorting, date formatting, and extracting meaningful relationships. Strengthens practical SQL skills for backend and data-driven applications.

#### [Homework 16: Advanced SQL Queries on `Chinook` Database](https://github.com/malikinss/telran-backend-hw16)

Advanced SQL analysis on the `Chinook` database, including revenue aggregation, anomaly detection, and data integrity checks. Tasks cover unsold tracks, top-grossing tracks and genres, invoice total mismatches, and albums with inconsistent track pricing. Strengthens practical analytical SQL skills for backend, BI, and data engineering.

#### [Homework 17: Advanced Analytical SQL Queries on `Chinook` Database](https://github.com/malikinss/telran-backend-hw17)

Advanced analytical SQL queries on the `Chinook` database using window functions, ranking, cumulative sums, and Pareto logic. Includes top tracks, revenue-generating genres, top customers, invoice distributions, and employee contributions. Focused on transforming transactional data into actionable business insights.

---

### MongoDB

#### [Homework 18: MongoDB Atlas DB Queries](https://github.com/malikinss/telran-backend-hw18)

Practice MongoDB queries on the `sample_mflix` Atlas database, including filtering by year, languages, genres, directors, and comparing fields with `$expr`. Demonstrates projections, array matching, and basic query operators.

#### [Homework 19: MongoDB `Employees` and Atlas Aggregations](https://github.com/malikinss/telran-backend-hw19)

Advanced MongoDB Atlas aggregations on the `sample_mflix` database. Queries include top actors by movie count, filtering by languages and viewer ratings, comparing array sizes, and ranking movies by awards. Demonstrates `$unwind`, `$group`, `$setWindowFields`, `$expr`, and array operations.

#### [Homework 20: MongoDB LookUp Queries](https://github.com/malikinss/telran-backend-hw20)

MongoDB Atlas aggregation queries using `$lookup` to join `comments`, `movies`, and `users` collections. Tasks include retrieving fully joined comment data and re-implementing a global average viewer rating filter without `$setWindowFields`.

---

### Python

#### [Homework 21: Python Binary Search](https://github.com/malikinss/telran-backend-hw21)

Enhanced binary search implementation in Python that returns the first occurrence of a value and an encoded insertion index when not found, while preserving O(log N) complexity. Includes edge-case handling and automated tests.

#### [Homework 22: O(N) Python Solutions](https://github.com/malikinss/telran-backend-hw22)

Two efficient O(N) Python solutions using hash sets: one checks if any pair sums to a target value, the other finds the largest positive number that has a negative counterpart. Includes edge-case handling and unit tests.

#### [Homework 23: `Club` and `Dictionary` Classes](https://github.com/malikinss/telran-backend-hw23)

Python implementations of `Club` and `Dictionary` classes showcasing efficient collection management. The project uses sorted containers for fast range queries, multi-key sorting, and case-insensitive prefix search, with full unit test coverage.

#### [Homework 24: Custom Dictionary Implementations and Cache](https://github.com/malikinss/telran-backend-hw24)

Custom Python implementations of dictionary-like data structures: a basic set-backed dictionary, a sorted dictionary with logarithmic operations, and an LRU cache built on OrderedDict. The project focuses on data structures, complexity guarantees, and full unit test coverage.

#### [Homework 25: Stack with `Max` and `NumberBox` Implementation](https://github.com/malikinss/telran-backend-hw25)

Python implementations of optimized data structures: an integer stack with O(1) max retrieval and a sorted number container supporting efficient removal, filtering, and deduplication, fully covered by unit tests.

#### [Homework 26: Generic Array with O(1) Operations](https://github.com/malikinss/telran-backend-hw26)

Memory-efficient generic array implementation supporting O(1) `set`, `get`, and `set_all` operations without allocating space proportional to the array size, fully validated by unit tests.

#### [Homework 27: LFU Dictionary Cache](https://github.com/malikinss/telran-backend-hw27)

Custom dictionary-like cache implementing an LFU eviction policy with LRU tie-breaking, providing a full dict interface, efficient frequency tracking, and comprehensive unit test coverage.

#### [Homework 28: Random Numbers Stream](https://github.com/malikinss/telran-backend-hw28)

Flexible random number stream with support for filtering, limiting, and distinct value generation, implemented as a custom iterable and fully covered by unit tests.

---

### Machine Learning

#### [Homework 29: `DataFrame` Categorical Converter](https://github.com/malikinss/telran-backend-hw29)

A small Python utility for converting categorical string columns in a pandas `DataFrame` into sequential numeric values. Designed for clean data preprocessing, with a functional API and full unit test coverage.

#### [Homework 30: Car `Model` Prediction](https://github.com/malikinss/telran-backend-hw30)

A Python project that predicts car models based on customer attributes like `Gender` and `Color` using a `Decision Tree Classifier`. Includes categorical encoding, model persistence, accuracy evaluation, and basic data analysis with `pandas`.

#### [Homework 31: Conway’s Game of Life](https://github.com/malikinss/telran-backend-hw31)
Python implementation of Conway’s Game of Life with a pure algorithmic core, NumPy-based matrix operations, stable-state detection, and Jupyter-based visualization. Fully unit-tested and interview-ready.

#### [Homework 32: Text Processing & Similarity Search](https://github.com/malikinss/telran-backend-hw32)
Python implementation of a lightweight text-based similarity search model using TF-IDF vectorization and cosine similarity. Supports question-answering by returning the most relevant sentences from a given text. Fully unit-tested and designed for educational NLP experiments.

#### [Homework 33: YOLOv8 Image Processing & Analysis](https://github.com/malikinss/telran-backend-hw33)
Python class `ImageInfo` for analyzing `YOLOv8` segmentation results. Provides structured access to detected objects, filtering by class, detailed box info, and mapping suitcases/handbags to the nearest person using normalized distances. Ideal for computer vision analytics, object tracking, and spatial reasoning experiments.

#### [Homework 34: Synthetic Shape Dataset & YOLOv8 Custom Model](https://github.com/malikinss/telran-backend-hw34)
This project creates a synthetic dataset of circles and squares, generates YOLOv8-compatible labels, and trains a custom object detection model. It demonstrates an end-to-end workflow for dataset generation, model training, and inference with modular, reusable Python code.
---
### Regular Expressions

#### [Homework 35: Regular Expressions in Python](https://github.com/malikinss/telran-backend-hw35)
This project focuses on implementing **advanced regular expressions in Python** for validating IPv4 addresses and Israeli mobile phone numbers. The solution relies entirely on regex patterns and is fully verified through unit tests using `re.fullmatch`.

#### [Homework 36: LTR Arithmetic Expression Evaluator](https://github.com/malikinss/telran-backend-hw36)
This project implements a Left-to-Right arithmetic expression evaluator in Python with regex-based syntax validation and parentheses pairing checks. It safely evaluates expressions without operator precedence and is fully verified with unit tests.

#### [Homework 36:Weather API Integration](https://github.com/malikinss/telran-backend-hw37)
This project implements a Python client for WeatherAPI to fetch and display current weather information for any city. It includes structured data modeling with dataclasses, robust error handling, and integration tests to ensure reliable real-world API usage.
