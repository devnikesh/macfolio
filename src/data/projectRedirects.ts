
interface ProjectUrls {
  live?: string;
  code?: string;
}

export const projectRedirects: Record<string, ProjectUrls> = {
  "ielts-battleground": {
    live: "https://www.ielts.nikeshshrestha.me/",
    // Placeholder code URL, user can update this later or pass it in via query param if needed
    // Assuming they want to redirect to the code repository if it exists
    code: "https://github.com/nikesh/ielts-battleground", 
  },
  // Add more projects here
};
