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

    const { responseBody, responseStatusCode } = response;

    let parsedBody = null;
    if (typeof responseBody === "string" && responseBody.length > 0) {
      try {
        parsedBody = JSON.parse(responseBody);
      } catch {
        // Non-JSON response body; leave parsedBody as null and return raw body.
      }
    }

    // Treat non-2xx status codes from the function execution as errors.
    if (
      typeof responseStatusCode === "number" &&
      (responseStatusCode < 200 || responseStatusCode >= 300)
    ) {
      const messageFromBody =
        (parsedBody &&
          (parsedBody.message ||
            parsedBody.error ||
            parsedBody.errorMessage)) ||
        `Contact request failed with status ${responseStatusCode}.`;
      const error = new Error(messageFromBody);
      error.statusCode = responseStatusCode;
      if (parsedBody) {
        error.details = parsedBody;
      } else if (responseBody) {
        error.rawResponse = responseBody;
      }
      throw error;
    }

    return {
      response: parsedBody !== null ? parsedBody : responseBody,
      statusCode: responseStatusCode,
    };
  } catch (error) {
    console.error("Error calling contactUs function:", error);

    // If the error already has a statusCode or details, propagate as-is
    // so callers can distinguish different failure types.
    if (error && (error.statusCode || error.details || error.rawResponse)) {
      throw error;
    }

    // Wrap unexpected errors with a more descriptive message.
    const wrappedError = new Error(
      "Unexpected error while sending contact request."
    );
    wrappedError.cause = error;
    throw wrappedError;
  }
};
