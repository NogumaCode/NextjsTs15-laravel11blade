import { useState } from "react";
import { ContactFormType } from "@/types/content";
import { API_BASE_URL } from "@/config/config";

const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitForm = async (formData: ContactFormType) => {
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // レスポンスがHTMLの場合の対処
      const contentType = response.headers.get("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format. Expected JSON.");
      }

      // JSONレスポンスをパース
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error ? JSON.stringify(data.errors) : "Something went wrong"
        );
      }

      setSuccessMessage("Message sent successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    successMessage,
    errorMessage,
    submitForm,
  };
};

export default useContactForm;
