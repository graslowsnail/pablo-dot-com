"use client"

type SectionType = "whoami" | "projects" | "blogs" | "contact";

interface NavigationGridProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

export default function NavigationGrid({ activeSection, onSectionChange }: NavigationGridProps) {
  return (
    <div className="max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
      {/* Terminal Header */}
      <div className="text-gray-500 text-sm xl:text-base mb-4 text-center font-mono">
        ~/navigation $ cd {activeSection}
        <span className="animate-pulse">█</span>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 gap-4 xl:gap-6 2xl:gap-8 px-4">
        {/* About */}
        <button 
          onClick={() => onSectionChange("whoami")}
          className={`group p-4 xl:p-6 2xl:p-8 text-left transition-all duration-200 ${
            activeSection === "whoami" 
              ? "border-2 border-black bg-white" 
              : "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-black text-xs xl:text-sm font-mono">$ </span>
            <span className="font-mono text-sm xl:text-base 2xl:text-lg text-black">About Me</span>
          </div>
          <div className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-1">Who is This Guy?</div>
        </button>

        {/* Contact */}
        <button 
          onClick={() => onSectionChange("contact")}
          className={`group p-4 xl:p-6 2xl:p-8 text-left transition-all duration-200 ${
            activeSection === "contact" 
              ? "border-2 border-black bg-white" 
              : "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-black text-xs xl:text-sm font-mono">$ </span>
            <span className="font-mono text-sm xl:text-base 2xl:text-lg text-black">Contact Info</span>
          </div>
          <div className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-1">Don't Be Shy</div>
        </button>

        {/* Projects */}
        <button 
          onClick={() => onSectionChange("projects")}
          className={`group p-4 xl:p-6 2xl:p-8 text-left transition-all duration-200 ${
            activeSection === "projects" 
              ? "border-2 border-black bg-white" 
              : "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-black text-xs xl:text-sm font-mono">$ </span>
            <span className="font-mono text-sm xl:text-base 2xl:text-lg text-black">Projects</span>
          </div>
          <div className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-1">View My Work</div>
        </button>

        {/* Blogs */}
        <button 
          onClick={() => onSectionChange("blogs")}
          className={`group p-4 xl:p-6 2xl:p-8 text-left transition-all duration-200 ${
            activeSection === "blogs" 
              ? "border-2 border-black bg-white" 
              : "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50"
          }`}
        >
          <div className="mb-1">
            <span className="text-black text-xs xl:text-sm font-mono">$ </span>
            <span className="font-mono text-sm xl:text-base 2xl:text-lg text-black">Blogs</span>
          </div>
          <div className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-1">Read My Thoughts</div>
        </button>

      </div>
    </div>
  )
} 