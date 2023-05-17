import { writeFile, readFile } from "fs/promises";

import { loadConfiguration, loadSources } from '@cucumber/cucumber/api';

export async function calculatePlan() {
    const { runConfiguration } = await loadConfiguration();
    const { plan } = await loadSources(runConfiguration.sources);
    return plan;
}

const res = await calculatePlan();

const specs = [ ...new Set(res.map(r => r.uri)) ];
console.log(specs);
await writeFile("./specs.txt", JSON.stringify(specs, null, 2));

const specsToRun = (await readFile("./specs.txt")).toLocaleString();
console.log(specsToRun);