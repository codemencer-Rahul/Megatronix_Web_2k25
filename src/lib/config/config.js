export const appwriteConfig = {
  endpoint: String(import.meta.env.VITE_APPWRITE_PROJECT_ENDPOINT),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  functionId: String(import.meta.env.VITE_APPWRITE_FUNCTION_ID),
};
