import { Client, ExecutionMethod, Functions } from "appwrite";
import { appwriteConfig } from "../config/config.js";

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);
const functions = new Functions(client);

export const contactUsService = async (data) => {
  try {
    const response = await functions.createExecution({
      functionId: appwriteConfig.functionId,
      body: JSON.stringify(data),
      xpath: "/contact-us",
      method: ExecutionMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      response: response.responseBody,
      statusCode: response.responseStatusCode,
    };
  } catch (error) {
    console.error("Error calling contactUs function:", error);
    throw error;
  }
};
