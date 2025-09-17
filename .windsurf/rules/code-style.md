---
trigger: always_on
---

# Figma MCP + Next.js Development Rules

You are an expert in Figma MCP integration, TypeScript, React, Next.js App Router, Tailwind CSS, and Shadcn UI. All design system values must be fetched from Figma via MCP - never hardcode design tokens.
Core Principles
🎨 Figma MCP as Single Source of Truth

FETCH ALL DESIGN TOKENS FROM FIGMA - Colors, spacing, typography, shadows, radii must be retrieved via MCP
NO HARDCODED VALUES - Even in config files, reference Figma variables
REAL-TIME SYNC - Always fetch latest values from currently open Figma file
NODE ID TRACKING - Every component must reference its Figma Node ID

🏗️ Technology Stack

Framework: Next.js 15 with App Router
Language: TypeScript (strict mode)
Styling: Tailwind CSS + Figma Design Tokens
Components: Shadcn UI (customized with Figma values)
State: Server State → URL State → Component State → Zustand
Validation: Zod schemas

## Implementation Rules

// STEP 1: Always start by fetching Figma data
// "Get design tokens from current Figma file"
// "What are the color variables in Figma?"
// "Fetch spacing system from Figma MCP"

// STEP 2: Every component must have Figma reference
// Figma Node ID: [Auto-fetch from MCP]
// Figma File: [Auto-detect from MCP]
// Last Sync: [Current timestamp]

// STEP 3: Component structure
export default async function Component() {
  // Server Component by default
  // Fetch Figma tokens if needed
  // Apply tokens via Tailwind classes
}

## Design Token Usage Pattern

// ❌ NEVER: Hardcode any design value
<div className="p-4 text-[#6366F1] rounded-[8px]">

// ❌ NEVER: Even in config files
const colors = {
  primary: '#6366F1' // Don't hardcode
}

// ✅ ALWAYS: Fetch from Figma MCP first, then use
// First ask: "What is the primary color in Figma?"
// Then use: className="text-primary p-md rounded-md"

// ✅ CORRECT: Reference Figma variables
<div className="p-[var(--spacing-md)] text-[var(--color-primary)]">

// ✅ BETTER: Use Tailwind classes mapped to Figma
<div className="p-md text-primary rounded-md">

## Figma MCP Commands to Use

Before implementing ANY component:
1. "Show me the design tokens from current Figma file"
2. "What are the available components in Figma?"
3. "Get the Node ID for [component name]"
4. "Fetch all color variables from Figma"
5. "What spacing values are defined in Figma?"
6. "Show me the typography scale"
7. "Get border radius tokens"
8. "List all variants of [component]"

## Project Structure

```
app/
├── (routes)/                 # Route groups
│   ├── layout.tsx           # Server Component
│   └── page.tsx            # Server Component
├── components/
│   ├── ui/                 # Shadcn (styled with Figma tokens)
│   └── [feature]/          # Feature components
├── lib/
│   ├── actions/            # Server Actions
│   ├── figma/              # Figma MCP utilities
│   │   ├── tokens.ts       # Token fetching logic
│   │   └── sync.ts        # Sync with Figma
│   └── utils.ts
└── styles/
    └── globals.css         # CSS variables from Figma
```

## Next.js Patterns

### Server Components (Default)

```
// app/page.tsx
export default async function Page() {
  // Fetch data directly
  const data = await fetchData()
  
  // Can access Figma MCP here
  // "Get the hero section design from Figma"
  
  return <div className="container py-lg">{/* Figma tokens */}</div>
}
```

### Client Components (Only When Needed)

```
'use client'
// Only for: interactivity, browser APIs, event handlers

import { useState } from 'react'

export function InteractiveComponent() {
  // Design tokens already in CSS variables
  return <button className="bg-primary">Click</button>
}
```

### Dynamic Tailwind Configuration

```
// tailwind.config.ts
// "Generate Tailwind config from current Figma file"

export default {
  theme: {
    extend: {
      colors: {
        // Fetched from Figma MCP
        // "Map Figma color variables to Tailwind"
      },
      spacing: {
        // Fetched from Figma MCP
        // "Get spacing scale from Figma"
      },
      borderRadius: {
        // Fetched from Figma MCP
        // "Get radius values from Figma"
      }
    }
  }
}
```

### CSS Variables Setup

```
/* globals.css */
/* "Generate CSS variables from Figma design tokens" */

@layer base {
  :root {
    /* Colors - Fetched from Figma */
    --color-primary: /* From Figma */;
    --color-secondary: /* From Figma */;
    
    /* Spacing - Fetched from Figma */
    --spacing-xs: /* From Figma */;
    --spacing-sm: /* From Figma */;
    --spacing-md: /* From Figma */;
    
    /* Typography - Fetched from Figma */
    --font-size-base: /* From Figma */;
    --font-weight-normal: /* From Figma */;
    
    /* Radius - Fetched from Figma */
    --radius-sm: /* From Figma */;
    --radius-md: /* From Figma */;
  }
}
```

### Component Implementation Checklist

```
For EVERY component:
□ Fetch design tokens from Figma MCP
□ Get component Node ID from Figma
□ Map Figma variants to props
□ Use Server Component by default
□ Apply Figma spacing system
□ Use Figma color variables
□ Implement Figma typography scale
□ Match Figma border radius
□ Preserve Figma auto-layout behavior
□ Include loading and error states
```

### Performance Requirements

```
// Core Web Vitals targets
const performance = {
  LCP: '< 2.5s',    // Use next/image, priority loading
  FID: '< 100ms',   // Minimize JavaScript
  CLS: '< 0.1',     // Define image dimensions
  TTFB: '< 600ms',  // Use Server Components
}

// Implementation patterns
const patterns = {
  images: 'next/image with blur placeholder',
  fonts: 'next/font with preload',
  data: 'Parallel fetching with Promise.all',
  components: 'Dynamic imports for heavy components',
  rendering: 'Streaming with Suspense boundaries'
}
```

### State Management Priority

```
1. Server State (Server Components)
   - Data fetching
   - Initial renders

2. URL State (searchParams)
   - Filters, pagination
   - Shareable state

3. Form State (Server Actions)
   - Form submissions
   - Mutations

4. Component State (useState)
   - UI-only state
   - Animations

5. Global State (Zustand)
   - Complex client state
   - Last resort
```

### Error Handling Pattern

```
// Server Actions with error modeling
export async function action(data: FormData) {
  try {
    // Validation
    const validated = schema.parse(data)
    
    // Operation
    const result = await operation(validated)
    
    // Success
    revalidatePath('/')
    return { success: true, data: result }
    
  } catch (error) {
    // Error as value
    return { success: false, error: error.message }
  }
}
```

### Testing Requirements

```
Test files for every component:
- component.test.tsx - Unit tests
- component.stories.tsx - Visual tests

Coverage requirements:
- Design token usage verification
- Figma parity checks
- Accessibility standards
- User interactions
- Error states
```

## Workflow Commands

### Session Start

```
"I need to implement [component/page] from Figma. 
First, fetch all relevant design tokens from the current Figma file.
Then create the component with proper Node ID reference."
```

### Component Generation

```
"Generate [component] with:
1. Fetch design tokens from Figma MCP
2. Get Node ID from Figma
3. Create TypeScript component
4. Use Server Component if possible
5. Apply Figma design tokens via Tailwind
6. Include loading and error states"
```

### Design Token Sync

```
"Sync design system from Figma:
1. Fetch all color variables
2. Get spacing system
3. Retrieve typography scale
4. Get radius values
5. Update tailwind.config.ts
6. Update globals.css with CSS variables"
```

## Code Review

```
"Review this code for:
1. Figma token usage (no hardcoded values)
2. Node ID references
3. Server Component usage
4. TypeScript types
5. Performance optimizations
6. Accessibility"
```

## Anti-Patterns to Avoid

```
// ❌ Starting without fetching Figma data
// ❌ Hardcoding any design value
// ❌ Using 'use client' by default
// ❌ Fetching data in useEffect
// ❌ Using arbitrary Tailwind values
// ❌ Ignoring Figma component structure
// ❌ Missing Node ID references
// ❌ Sequential data fetching
// ❌ Large client bundles
// ❌ Missing error boundaries
```

## Start Every Session With

```
"I will implement components by:
1. First fetching all design tokens from Figma MCP
2. Getting Node IDs for reference
3. Using Server Components by default
4. Applying Figma tokens via Tailwind
5. Following Next.js App Router patterns
6. Optimizing for performance

Show me the current Figma design tokens to begin."
```

## Quick Reference

```
Commands to remember:
- "Fetch design tokens from Figma"
- "Get Node ID for [component]"
- "Show Figma color variables"
- "List Figma spacing values"
- "Get typography scale"
- "Show component variants"
- "Sync Tailwind with Figma"
- "Generate component from Node ID: [id]"
```






