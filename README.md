# Todo App

A Next.js and TypeScript TODO application with file-based persistence. Single-user, local-only, no external services.

## Overview

Task management with a web interface and local data control. Built as a CRUD learning project based on Mario Souto's course.

- Local JSON file storage - no database setup required
- Type-safe with TypeScript strict mode
- RESTful API endpoints consumed by the UI
- Portuguese UI labels

## Features

### Core Functionality
- Create, read, update, delete todo items
- Persistent storage in local JSON file (`core/db`)
- Web interface built with Next.js App Router
- API-first design - core CRUD module is independent of the web framework

### Todo Data Model
Each todo has a UUID, ISO 8601 timestamp, description content, and done flag.

## Technology Stack

```
Client (Browser) --> Next.js Server --> core/crud.ts --> JSON File (core/db)
```

### Core Technologies
- **Next.js** ^15.5.18 - Framework with App Router and API routes
- **React** ^19.1.0 - UI library
- **TypeScript** ^5.8.3 - Strict mode enabled
- **Node.js** - Runtime
- **uuid** ^14.0.0 - ID generation

### Development Tools
- ESLint 8.x with TypeScript, React, and Prettier plugins
- Prettier 2.x (single quotes, no semicolons, trailing commas)
- EditorConfig
- nodemon for CRUD script watch mode
- Path alias: `@ui/*` -> `src/ui/*`

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
```bash
git clone git@github.com:francojeferson/todo_app.git
cd todo_app
npm install
npm run dev
```

### Available Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run start:crud` | Run CRUD module directly via ts-node |
| `npm run dev:crud` | Run CRUD module with nodemon watch |

## Project Structure

```
todo_app/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page (client component)
│   └── api/
│       ├── route.ts              # Root API route (Hello World placeholder)
│       └── todos/
│           └── route.ts          # GET /api/todos
├── core/
│   ├── crud.ts                   # CRUD operations (sync file I/O)
│   └── db                        # JSON database file
├── src/
│   └── ui/
│       └── themes/
│           └── GlobalStyles.tsx   # CSS custom properties theming
├── public/
│   └── bg.jpg                    # Header background image
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── LICENSE
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── .memory-bank/                 # Project documentation
```

## API

### Current Endpoints

#### GET /api/todos
Returns all todos from the JSON file.

```typescript
// Response
{ "todos": Todo[] }
```

### Planned Endpoints
POST /api/todos, PUT|PATCH /api/todos/:id, DELETE /api/todos/:id are not yet implemented. The core CRUD module (`core/crud.ts`) has `create`, `read`, `update`, and `deleteById` functions, but only `read` is currently exported and wired to the API.

## UI Features

- Typewriter animation on header title
- Add todo form with styled button
- Filter input to search list by content
- Table view with ID, content, and action columns
- Checkbox for completion status
- Delete button per row
- Loading, empty, and error states (static placeholders)
- Load more button (placeholder for pagination)
- CSS custom properties theming with multiple color palettes (indigo, coolGrey, red, devsoutinho)
- Responsive design

## Current Status

**Phase 1 Complete** - Core CRUD operations, file persistence, TypeScript implementation.

**Phase 2 In Progress** - Web interface and API integration.

### Known Issues
- UI page uses hardcoded static data - not wired to the API yet
- Only GET /api/todos endpoint exists - POST, PUT, DELETE not implemented
- `update()` and `deleteById()` in core/crud.ts are not exported
- No input validation (empty content strings allowed)
- No file system error handling
- Root API route (`app/api/route.ts`) is a Hello World placeholder

### Current Focus
1. Wire UI to API
2. Complete API endpoints (POST, PUT, DELETE)
3. Export remaining CRUD functions
4. Add input validation and error handling

Credits: [Mario Souto](https://github.com/omariosouto)
