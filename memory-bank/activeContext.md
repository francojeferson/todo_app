# Active Context: Todo App

## Current Focus
1. Removing simulation/test code (HIGHEST PRIORITY)
   - Remove simulation code at end of crud.ts
   - Review CLEAR_DB function necessity
   - Clean up test data generation

2. Web Interface Development
   - Implement todo list display
   - Add todo creation form
   - Create update/delete UI
   - Style components
   - Add loading states

3. API Development
   - Complete RESTful endpoints
   - Add error handling
   - Implement validation
   - Add response types

4. Core Improvements
   - Enhance error handling
   - Add input validation
   - Add testing infrastructure
   - Document API endpoints

## Recent Changes
1. Next.js Implementation
   - Project converted to Next.js
   - App Router setup
   - Initial API route created
   - Basic layout structure

2. Core Implementation
   - Todo interface definition
   - All CRUD operations implemented
   - File-based storage system
   - UUID-based ID generation
   - Basic error handling

## Active Decisions
1. **Storage Format**
   - Using JSON for data persistence
   - File location: `./core/db`
   - Synchronous file operations for simplicity
   - Pretty-printed JSON (2-space indentation)

2. **Type System**
   - Todo interface with required fields
   - Strict type checking
   - Runtime type safety
   - Partial<Todo> support for updates

3. **Development Patterns**
   - Next.js App Router architecture
   - Server Components by default
   - API Routes for data operations
   - Module-based architecture
   - Fail-fast validation

## Development Utilities
1. **Database Management**
   ```typescript
   // Utility function to clear database
   function CLEAR_DB() {
     fs.writeFileSync(DB_FILE_PATH, '')
   }
   ```
   - Currently used in simulation code
   - Consider removing or moving to test utilities
   - May need replacement for development purposes

## Current Patterns
1. **Code Organization**
   ```typescript
   interface Todo {
     id: UUID
     date: string
     content: string
     done: boolean
   }

   // Create with UUID
   function create(content: string): Todo {
     return {
       id: uuid(),
       date: new Date().toISOString(),
       content: content,
       done: false,
     }
   }

   // Partial updates supported
   function update(id: UUID, partialTodo: Partial<Todo>): Todo
   ```

2. **File Operations**
   - Direct fs module usage
   - JSON stringify/parse for data conversion
   - Error handling for file operations
   - Atomic write operations

3. **Data Management**
   - Array-based todo storage
   - Immutable state updates
   - Type-safe operations
   - UUID-based identification

4. **Web Interface**
   - Server Components for static content
   - Client Components for interactivity
   - API Routes for data operations
   - Server-side rendering
   - TypeScript throughout

## Project Insights
1. **What's Working Well**
   - Next.js integration
   - TypeScript integration
   - File-based persistence
   - Complete CRUD operations
   - UUID generation
   - Partial updates

2. **Areas for Improvement**
   - Remove simulation code
   - Complete web interface
   - Enhance API endpoints
   - Add comprehensive error handling
   - Add input validation
   - Add testing infrastructure

3. **Learning Points**
   - Next.js App Router usage
   - Server Components patterns
   - TypeScript/Node.js integration
   - File system operations
   - JSON data management
   - UUID implementation
   - Partial type updates

## Next Steps
1. **Immediate Tasks**
   - Remove simulation code from crud.ts
   - Complete API route implementation
   - Build todo list UI component
   - Add todo creation form
   - Implement update/delete UI

2. **Short-term Goals**
   - Remove simulation code and CLEAR_DB function
   - Complete web interface implementation
   - Add proper testing
   - Enhance error messages
   - Add data validation
   - Document API methods

3. **Technical Debt**
   - Convert file operations to async
   - Add comprehensive testing
   - Improve error handling
   - Add input validation
   - Document API methods
   - Add loading states
   - Implement proper error boundaries
