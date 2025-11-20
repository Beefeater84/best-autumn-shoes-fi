## Agent instructions

- All comments in the code should be in English.
- All tasks located in `tasks` folder.

## Typography Guidelines

We use **@tailwindcss/typography** plugin for consistent content styling:

### Setup

- Typography plugin is configured in `app/application/styles/tailwind.css`
- Custom text sizes are defined in `@theme` section with line-height values

### Usage Pattern

For content-heavy components, use the `prose` classes:

```tsx
<div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
  {/* Content with automatic typography styling */}
</div>
```

### Available Classes

- `prose` - base typography styles
- `prose-lg` - larger text size
- `prose-slate` - gray color scheme
- `dark:prose-invert` - dark theme support
- `max-w-none` - removes default width constraints

### Custom Text Sizes Available

- `text-xs` (0.75rem) to `text-9xl` (8rem)
- Each size includes corresponding line-height
- Custom fonts: `font-sans` (Inter) and `font-display` (Lexend)

**Best Practice**: Use `prose` classes for rich content (articles, descriptions) and individual text size classes for UI components.

## Technology stack

- React 19
- TypeScript
- AWS Amplify (hosting for static files, SSR disabled)
- [Supabase](https://supabase.com/docs)
- [Feature-Sliced Design](https://feature-sliced.design/docs/getting-started/introduction)
- Supabase Local delelopment setup with [Supabase CLI](https://supabase.com/docs/guides/local-development)
- [Axios](https://axios-http.com/docs/intro)
- [OpenAI API](https://platform.openai.com/docs/api-reference)
- [React Router v6](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- [Vite](https://vitejs.dev/guide/)

## Process for Creating New Tasks

The following process is used for creating new development tasks:

### 1. Task Preparation

1. **Use the template**: Take the template from `doc/ai_task_template.md` as the foundation for task planning
2. **Fill in key sections**:
   - **Problem**: Clearly describe the problem that needs to be solved
   - **Current task**: Formulate the specific task and expected outcome
   - **Solution paths**: Propose technical solution options considering the current architecture

### 2. Planning and Coordination

1. **Analyze current state**: Analyze existing code and architecture
2. **Define technical solution**: Choose the optimal approach considering:
   - Existing technical stack
   - Feature-Sliced Design architecture
   - Performance and security requirements
3. **Create implementation plan**: Break down the task into phases with specification of files to be modified

### 3. Confirmation Before Implementation

⚠️ **IMPORTANT**: Before starting code changes, it is necessary to:

1. **Present the plan to the user** with detailed description of:
   - Which files will be modified
   - What functionality will be added/changed
   - Possible risks and side effects
2. **Wait for confirmation** from the user
3. **Make adjustments** to the plan if necessary

### 4. Implementation Rules

- **Prohibited** to modify code files before receiving user confirmation
- **Must** use existing technical stack
- **Must** test changes before committing

### 5. Language Requirements

⚠️ **IMPORTANT**: All development artifacts must be in English:

- **All tasks and documentation** must be written in English
- **All code comments** must be in English
- **All commit messages** must be in English
- **All variable names, function names, and identifiers** must be in English
- **All error messages and user-facing text** must be in English (unless localization is specifically required)

## Environment Variables

The project uses the following environment variables that must be configured in your `.env` file:

### Supabase Configuration

- **`VITE_SUPABASE_PROJECT_URL`** - URL path to the Supabase API with API version

  Example: `https://mxomgyawonkcchdwglkn.supabase.co/rest/v1`

  This URL is used to access Supabase's PostgREST API. The API follows REST conventions and provides automatic CRUD operations for database tables. For detailed API documentation, see [PostgREST documentation](https://docs.postgrest.org/en/latest/index.html).

- **`VITE_SUPABASE_ANON_KEY`** - Public anonymous key for Supabase authentication

  This is a public key that can be safely used on the client-side for authentication and authorization with Supabase services. It allows access to public data and enables user authentication flows.

### Other Configuration Variables

- **`VITE_SUPABASE_URL`** - Local Supabase instance URL (used for development)
- **`VITE_API_KEY`** - API authentication key for Supabase
- **`VITE_API_PASS`** - API password for additional authentication
- **`VITE_DB_PASSWORD`** - Database connection password
- **`OPENAI_API_KEY`** - OpenAI API key for AI-powered question processing

# Project Shoes Section

# Step 1: Collect Brand Information

For each shoe brand, gather the following:

1. Brand description
2. Specialization (e.g., trekking, sportswear, etc.)
3. List of flagship shoe models
4. List of key technologies used

# Key Shoe Brands in Finland

When choosing shoes for Finland, consider:

- Waterproofing/membrane for rain and moisture
- Warmth without excessive bulk (comfortable for city use)
- Good sole grip for wet surfaces and early winter
- Style suitable for everyday wear
- Comfort for frequent movement

Recommended brands:

- [Halti (Finland)](/halti/AGENT.md)
- [Sorel](/sorel/AGENT.md)
- [Viking Outdoor Footwear](/viking/AGENT.md)
- [Helly Hansen](/helly_hansen/AGENT.md)
- [Nokian Footwear](/nokian/AGENT.md)
- [Pomar](/pomar/AGENT.md)
- [Timberland](/timberland/AGENT.md)
- Hanwag
- Blundstone

These brands offer models adapted to Finnish climate and urban/outdoor versatility.

This is the main file for the shoes section. Here, we will cover the major shoe brands that can be found or ordered in Finland.

Each brand will be placed in a separate folder, where its assortment, features, and purchasing options will be described.
