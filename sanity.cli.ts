import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from '@/sanity/env'

export default defineCliConfig({
    api: { projectId, dataset },
    vite: {
        define: {
            "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID": JSON.stringify(projectId),
            "process.env.NEXT_PUBLIC_SANITY_DATASET": JSON.stringify(dataset),
        }
    },
});