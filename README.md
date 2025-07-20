# Next.js + Sanity CMS Starter

[![My Skills](https://skillicons.dev/icons?i=nextjs)](https://skillicons.dev)
<img src="src/app/(sanity)/icon.svg" width="45" height="45">
[![My Skills](https://skillicons.dev/icons?i=typescript,tailwind)](https://skillicons.dev)

This starter uses Next.js 15 + Tailwind CSS for the frontend and [Sanity V3](https://www.sanity.io/) to handle its content. It comes with a embedded Sanity Studio that offers features like real-time collaboration and visual editing with live updates using [Presentation](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool).

## Features

- **Next.js Frontend:** Fully integrated frontend built with Next.js, featuring a collection of reusable components such as Media, CTA, etc.

- **Embedded Sanity Studio:** Sanity Studio is seamlessly embedded and accessible at the /studio route, enabling in-context content editing without the need for a separate deployment.

- **Studio Features:** Studio is pre-configured with essential plugins for a rich editing experience, including Presentation Tool, Structure Plugin, Vision Plugin and Visual Editing with Vercel.

- **TypeScript Support with Sanity TypeGen:** Automatically generate TypeScript types from your schema using Sanity TypeGen, ensuring type safety and improved DX.

## Setup Guide

1. Clone the repository:

```bash
git clone <repository-url>
cd cms-with-frontend/next-sanity
```

2. Install Required Node Version:

```bash
nvm install
nvm use
```

3. Install dependencies:

```bash
npm install
```

4. Add environment variables:

- Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

- Add the following variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
SANITY_API_READ_TOKEN=sanity_api_token
```

5. Run the development server:

```bash
npm run dev
```

- Next App can be accessed here [http://localhost:3000](http://localhost:3000)
- Sanity Studio can be accessed here [http://localhost:3000/studio](http://localhost:3000/studio)

6. Build the project:

```bash
npm run build
```

3. Start the production server:

```bash
npm start
```

## Folder Structure

```bash
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── package-lock.json            # Locked versions of installed dependencies
├── package.json                 # Project metadata, dependencies, scripts
├── postcss.config.mjs           # PostCSS configuration
├── public                       # Publicly accessible static assets
│   └── ...
├── README.md                    # Project documentation
├── sanity-typegen.json          # Sanity Type Gen config
├── sanity.cli.ts                # Sanity CLI configuration
├── sanity.config.ts             # Sanity configuration
├── src
│   ├── app                      # App Router
│   │   ├── (sanity)             # Embedded Sanity Studio routes
│   │   │   ├── layout.tsx       # Layout for Sanity Studio routes
│   │   │   ├── not-found.tsx    # 404 page specific to Sanity routes
│   │   │   ├── studio           # Sanity Studio embedded interface
│   │   │   │   └── [[...tool]]  # Dynamic route for Sanity tools (e.g., desk, vision)
│   │   │   │       └── page.tsx # Page to render Sanity tools (presentation, structure, vision)
│   │   │   └── studio.css       # Scoped CSS for Sanity Studio
│   │   └── api                  # Next.js API routes
│   │       └── draft-mode       # Enable/disable draft preview mode
│   │           ├── disable
│   │           │   └── route.ts # API route to disable draft mode
│   │           └── enable
│   │               └── route.ts # API route to enable draft mode
│   ├── app.types.ts             # Shared types for the app
│   ├── components                  # Reusable UI components
│   │   ├── DisableDraftMode.tsx    # Banner for disabling preview mode
│   │   ├── CustomPortableText.tsx  # Renders Portable text blocks
│   │   ├── CustomRichText.tsx      # Renders Rich text blocks
│   │   ├── SanityVisualEditing.tsx # Integration with Sanity visual editing tools
│   │   ├── PageContent.tsx      # Renders Page Content
│   │   ├── PageMetaData.tsx     # Renders Page Metadata
│   │   ├── CustomCta.tsx        # Link
│   │   ├── CustomImage.tsx      # Image
│   │   ├── CustomVideo.tsx      # Video
│   │   ├── Media.tsx            # Media
│   │   ├── Footer.tsx           # Footer
│   │   ├── Layout.tsx           # Layout
│   │   ├── Navbar.tsx           # Navbar
│   │   └── ...
│   ├── fonts                    # Custom font configuration
│   │   └── loadFonts.ts         # Utility for loading and applying web fonts
│   ├── pages                    # Pages Router
│   │   ├── _app.tsx             # Custom App (wraps all pages)
│   │   ├── _document.tsx        # Custom Document (HTML structure)
│   │   ├── [slug]
│   │   │   └── index.tsx        # Dynamic route for slug pages
│   │   └── index.tsx            # Main homepage
│   ├── sanity                   # Sanity CMS logic and integration
│   │   ├── env.ts               # Sanity-specific environment variable handling
│   │   ├── lib                  # Utility functions for Sanity
│   │   │   ├── client.ts        # Configured Sanity client
│   │   │   ├── fetch.ts         # Content fetching functions
│   │   │   ├── queries.ts       # GROQ queries for Sanity content
│   │   │   ├── token.ts         # Access token
│   │   │   └── utils.ts         # Shared Sanity utility functions
│   │   ├── plugins
│   │   │   └── settings.tsx     # Global settings plugin for Sanity Studio
│   │   ├── schema.json          # Schema configuration (used for typegen/validation)
│   │   ├── schemas              # All Sanity document/object schemas
│   │   │   ├── common           # Shared schema fragments
│   │   │   │   ├── content.ts
│   │   │   │   ├── customCta.ts
│   │   │   │   ├── customImage.ts
│   │   │   │   ├── customVideo.ts
│   │   │   │   ├── link.ts
│   │   │   │   ├── media.ts
│   │   │   │   ├── pageMetaData.ts
│   │   │   │   ├── richText.ts
│   │   │   │   └── ...
│   │   │   ├── documents         # Sanity document types editable in CMS
│   │   │   │   └── page.ts       # Page schema definition
│   │   │   ├── index.ts          # Exports all schemas
│   │   │   └── singletons        # Singleton content types (only one instance)
│   │   │       ├── footer.ts     # Global footer content schema
│   │   │       ├── navigation.ts # Global navigation schema
│   │   │       └── settings.tsx  # Global site settings schema
│   │   └── types.ts              # Types for Sanity data models
│   └── styles
│       └── globals.css           # Global CSS styles
└── tsconfig.json                 # TypeScript configuration (compiler options, paths)
```

## Dev Guidelines

### 1. Add a New Component

**Step 1:** Define Sanity Schema: Create a new schema file in the `sanity/schemas/common/newComponent.ts` directory.

```typescript
import { defineField, defineType } from "sanity";

export default defineType({
  name: "newComponent",
  title: "New Component",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "richText",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "New component",
      };
    },
  },
});
```

**Step 2:** Add `newComponent` schema to `sanity/schemas/index.ts`

```typescript
import newComponent from "./common/newComponent";

const schema = {
  // ... other schemas
  newComponent,
};

export default schema;
```

**Step 3:** Add GROQ Query: Add the fields for the new component in `/sanity/lib/queries.ts`.

```typescript
const newComponentFields = `
    title,
    description[]{
      ...,
      ${richTextFields}
    }
  `;

const pageFields = `
    ...,
    content[]{
      ...,
      _type == 'newComponent' => {
        ..., 
        ${newComponentFields}
      },
    }
`;
```

**Step 3:** Define Component UI: Create a new React component in the `src/components` directory.

```tsx
import type { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";

type Props = {
  title: string;
  description: PortableTextBlock[];
};

const NewComponent = ({ title, description }: Props) => {
  return (
    <section className="py-10 space-y-8">
      {title && <h2 className="text-4xl font-bold">{title}</h2>}
      {description && <CustomRichText value={description} />}
    </section>
  );
};

export default NewComponent;
```

**Step 4:** Register Component to `components/CustomPortableText`:

```tsx
import NewComponent from "./NewComponent";

const components: PortableTextComponents = {
  types: {
    // ... other components
    newComponent: ({ value }) => <NewComponent {...value} />,
  },
};
```

### 2. Add a New Font

**Step 1.** Export Font from `fonts/loadFonts.ts`

Import the desired font from a package like `@next/font/google` or any other source then export the font configuration from `src/fonts/loadFonts.ts`.

```typescript
import { Montserrat, Roboto } from "@next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
```

**Step 2.** Add Font in `Layout.tsx`

Import the font configuration into the `components/Layout.tsx` component. Add the font's CSS variable to the `className` of the root `<div>`.

```tsx
import { montserrat, roboto } from "@/fonts/loadFonts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${montserrat.variable} ${roboto.variable}`}>
      {children}
    </div>
  );
};

export default Layout;
```

---

### 3. Tailwind CSS Guidelines

You can add tailwind utilities and theme variables in `styles/global.css`

```css
/* Customize your tailwind theme variables  */
@theme inline {
  /* colors */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* fonts */
  --font-montserrat: var(--font-montserrat);

  /* breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-tab: 967px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Add tailwind utilities */
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
```

Read the Docs here - https://tailwindcss.com/docs/theme

---

### 4. Namming Convention Guidelines

#### File and Folder Naming

- **Folders**: Use `kebab-case` for folder names (e.g., `custom-components`, `sanity-schemas`).
- **Files**:
  - Use `PascalCase` for React components (e.g., `CustomButton.tsx`, `PageHeader.tsx`).
  - Use `camelCase` for utility files (e.g., `fetchData.ts`, `formatDate.ts`).

#### Sanity Schema Naming

- Use **camelCase** for schema names (e.g., `blogPost`, `siteSettings`).
- Use **normalCase** for schema title (e.g., `Blog Post`, `Site Settings`).

#### TypeScript Naming

- Use **PascalCase** for type and interface names (e.g., `UserProfile`, `PageProps`).
- Use `I` as a prefix for interfaces only if it improves clarity (e.g., `IUser`).

#### Variables and Functions

- Use **camelCase** for variables and functions (e.g., `fetchData`, `userProfile`).
- Use **UPPER_SNAKE_CASE** for constants (e.g., `API_BASE_URL`, `MAX_RETRIES`).

---

### 5. Typescript

#### Generated types

Generate types out of your sanity queries, schemas using Sanity Typegen utitlity. They are typically stored in `src/sanity/types.ts`.

```bash
npm run typegen
```

Read Docs here - https://www.sanity.io/docs/apis-and-sdks/sanity-typegen

#### Custom Types

If you need additional types not covered by Sanity Typegen, define them manually in `src/app.types.ts`.

Generated types are typically stored in `src/sanity/types.ts`
