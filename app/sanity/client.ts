import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "z1g1o05i",
  dataset: "production",
  apiVersion: "2025-12-11",
  useCdn: false,
});