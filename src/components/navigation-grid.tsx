"use client"

type SectionType = "whoami" | "projects" | "blogs" | "contact";

interface NavigationGridProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

export default function NavigationGrid({ activeSection, onSectionChange }: NavigationGridProps) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Terminal Header */}
      <div className="text-gray-500 text-sm mb-4 text-center font-mono">
        ~/navigation $ cd {activeSection}
        <span className="animate-pulse">█</span>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 gap-4 px-4">
        {/* About */}
        <button 
          onClick={() => onSectionChange("whoami")}
          className={`group p-4 text-left transition-all duration-200 rounded-lg ${
            activeSection === "whoami" 
              ? "border-2 border-green-600 bg-green-50 shadow-lg shadow-green-200" 
              : "border border-gray-300 hover:border-green-600 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-green-600 text-xs font-mono">$ </span>
            <span className={`font-mono ${
              activeSection === "whoami" 
                ? "text-green-600" 
                : "text-black group-hover:text-green-600"
            }`}>Who Am I</span>
          </div>
          <div className="text-gray-500 text-xs mt-1">learn more about me</div>
        </button>

        {/* Contact */}
        <button 
          onClick={() => onSectionChange("contact")}
          className={`group p-4 text-left transition-all duration-200 rounded-lg ${
            activeSection === "contact" 
              ? "border-2 border-green-600 bg-green-50 shadow-lg shadow-green-200" 
              : "border border-gray-300 hover:border-green-600 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-green-600 text-xs font-mono">$ </span>
            <span className={`font-mono ${
              activeSection === "contact" 
                ? "text-green-600" 
                : "text-black group-hover:text-green-600"
            }`}>Contact Info</span>
          </div>
          <div className="text-gray-500 text-xs mt-1">get in touch</div>
        </button>

        {/* Projects */}
        <button 
          onClick={() => onSectionChange("projects")}
          className={`group p-4 text-left transition-all duration-200 rounded-lg ${
            activeSection === "projects" 
              ? "border-2 border-green-600 bg-green-50 shadow-lg shadow-green-200" 
              : "border border-gray-300 hover:border-green-600 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-green-600 text-xs font-mono">$ </span>
            <span className={`font-mono ${
              activeSection === "projects" 
                ? "text-green-600" 
                : "text-black group-hover:text-green-600"
            }`}>Projects</span>
          </div>
          <div className="text-gray-500 text-xs mt-1">view my work</div>
        </button>

        {/* Blogs */}
        <button 
          onClick={() => onSectionChange("blogs")}
          className={`group p-4 text-left transition-all duration-200 rounded-lg ${
            activeSection === "blogs" 
              ? "border-2 border-green-600 bg-green-50 shadow-lg shadow-green-200" 
              : "border border-gray-300 hover:border-green-600 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-green-600 text-xs font-mono">$ </span>
            <span className={`font-mono ${
              activeSection === "blogs" 
                ? "text-green-600" 
                : "text-black group-hover:text-green-600"
            }`}>Blogs</span>
          </div>
          <div className="text-gray-500 text-xs mt-1">read my thoughts</div>
        </button>

      </div>
    </div>
  )
} 