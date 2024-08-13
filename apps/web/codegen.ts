import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
   schema: "https://api.career-craft.com:4000",
   documents: ["**/*.{tsx,ts,graphql}"],
   generates: {
      "./__generated__/": {
         preset: "client-preset",
         presetConfig: {
            gqlTagName: "gql",
         },
         plugins: [
            "typescript",
            "typescript-operations",
            "fragment-matcher",
         ],
      },
      "./graphql.schema.json": {
         plugins: [`introspection`],
      }
   },
   ignoreNoDocuments: true,
   config: {

   },
   skipDocumentValidation: {
      skipValidationAgainstSchema: true
   }
};

export default config;