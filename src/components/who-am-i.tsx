"use client"

export default function WhoAmI() {
  const skills = [
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Framework" },
    { name: "NextJS", category: "Framework" },
    { name: "Python", category: "Language" },
    { name: "AWS", category: "Cloud" }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* About Me Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black mb-6">ABOUT ME</h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="font-mono text-sm">
            Hi, I'm Alan Garber – a frontend developer turned AI engineer. After years of building user-facing 
            apps, I joined the Fractal Tech accelerator to deepen my backend skills and retrain in AI 
            development. Along the way, I worked with multiple startups on fast-moving, high-impact projects 
            involving full-stack engineering, LLM integrations, and scalable infrastructure.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black mb-6">SKILLS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 p-4">
              {/* Icon Placeholder - We'll add actual icons later */}
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">
                  {skill.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              
              {/* Skill Name */}
              <div className="text-center">
                <div className="font-semibold text-black text-sm">
                  {skill.name.toUpperCase()}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {skill.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 