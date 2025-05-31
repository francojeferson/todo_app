# Technical Context: Todo App

## Development Environment

### Core Technologies
- **Next.js**: Web application framework
- **React**: UI library
- **TypeScript**: Primary programming language
- **Node.js**: Runtime environment
- **npm**: Package manager

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.8.3",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.15.24",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/uuid": "^9.0.7",
    "nodemon": "^3.1.10"
  }
}
```

## Development Setup
1. **Next.js Configuration**
   - Uses App Router for modern routing
   - Server Components by default
   - API Routes for data operations
   - TypeScript integration

2. **TypeScript Configuration**
   - Uses `tsconfig.json` for TypeScript settings
   - Next.js types included
   - Strict type checking enabled
   - Path aliases configured

3. **Development Tools**
   - Next.js development server
   - Hot module replacement
   - TypeScript compilation
   - VSCode recommended for TypeScript/React support
   - UUID for unique ID generation

4. **NPM Scripts**
   ```json
   {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "lint": "next lint"
   }
   ```

## File Structure
```
todo_app/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── api/            # API routes
│       └── route.ts    # API handlers
├── core/
│   ├── crud.ts         # Core CRUD operations
│   └── db              # JSON database file
├── package.json
├── tsconfig.json
├── next-env.d.ts
└── memory-bank/        # Documentation
```

## Technical Constraints
1. **File System**
   - Relies on local file system for data persistence
   - Requires write permissions in `core/` directory
   - JSON file format for data storage

2. **Runtime**
   - Requires Node.js environment
   - Next.js server for web interface
   - TypeScript compilation needed
   - UUID dependency for ID generation

3. **Performance**
   - File I/O operations are synchronous
   - Server-side rendering with Next.js
   - Client-side interactivity
   - API route handling

## Development Workflow
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm run start`
5. Data persistence: Automatic JSON file creation/updates

## Tool Usage
1. **Development Server**
   - Next.js dev server with hot reload
   - Automatic TypeScript compilation
   - API route handling
   - Server Components rendering

2. **TypeScript**
   - Strict type checking enabled
   - Interfaces for type safety
   - Next.js types available
   - UUID type definitions included

3. **Version Control**
   - Git repository configured
   - `.gitignore` excludes node_modules
   - Database file may be gitignored

## Data Management
1. **Storage**
   - JSON file-based storage
   - Pretty-printed format (2-space indent)
   - Atomic write operations
   - Fail-fast validation

2. **ID Generation**
   - UUID v4 for unique IDs
   - Type-safe UUID handling
   - Guaranteed uniqueness

## Testing
- No testing framework currently implemented
- Future implementation planned
- Manual testing through web interface
- API endpoint testing needed

## Deployment
- Next.js production build required
- Node.js server needed for hosting
- File system access required
- Environment variables for configuration
- Static file serving capability

## Development Guidelines
1. **Code Style**
   - TypeScript strict mode
   - React/Next.js best practices
   - Server Components by default
   - Client Components when needed
   - Clear function signatures
   - Type-safe operations

2. **Error Handling**
   - TypeScript type checking
   - Runtime error validation
   - File system error handling
   - JSON parse protection
   - API error responses

3. **Documentation**
   - Code comments for complex logic
   - Type definitions
   - Memory bank documentation
   - README updates
   - API endpoint documentation
