import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectRedirects } from "@/data/projectRedirects";

interface ProjectRedirectProps {
  to: "live" | "code";
}

const ProjectRedirect = ({ to }: ProjectRedirectProps) => {
  const { slug } = useParams();

  useEffect(() => {
    if (slug && projectRedirects[slug]) {
      const url = projectRedirects[slug][to];
      if (url) {
        window.location.href = url;
      }
    }
  }, [slug, to]);

  if (!slug || !projectRedirects[slug]) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-gray-500">The project "{slug}" could not be found.</p>
          <a href="/" className="text-blue-500 hover:underline mt-4 block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  const url = projectRedirects[slug][to];
  
  if (!url) {
     return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Link Not Available</h1>
          <p className="text-gray-500">The {to} link for "{slug}" is not available yet.</p>
          <a href="/" className="text-blue-500 hover:underline mt-4 block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center animate-pulse">
        <h1 className="text-xl font-medium mb-2">Redirecting to {to === 'code' ? 'Code' : 'Project'}...</h1>
        <p className="text-gray-400 text-sm">You are being redirected to {url}</p>
      </div>
    </div>
  );
};

export default ProjectRedirect;
