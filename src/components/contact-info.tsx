"use client"

import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "pablo7ramirez7@gmail.com",
      link: "mailto:hello@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@pabloramirez",
      link: "https://github.com/graslowsnail"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pablo Ramirez",
      link: "https://www.linkedin.com/in/pablo-ramirez-5589b7260/"
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      link: "https://drive.google.com/file/d/1bP62bUECPB0nJNUGiJMQ8tf0_mI26Db8/view?usp=sharing"
    }
  ]

  return (
    <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-6 xl:p-8 2xl:p-12 space-y-8 xl:space-y-12">
      {/* Section Title */}
      <div className="space-y-6 xl:space-y-8">
        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black mb-6">GET IN TOUCH</h2>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-4 xl:gap-6 2xl:gap-8">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon
            const content = (
              <div className="group p-4 xl:p-6 2xl:p-8 text-left transition-all duration-200 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50">
                <div className="flex flex-col items-center space-y-3">
                  <IconComponent className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-black" />
                  <div className="text-center">
                    <div className="font-mono text-sm xl:text-base 2xl:text-lg text-black">
                      {item.label}
                    </div>
                    <div className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-1">
                      {item.value}
                    </div>
                  </div>
                </div>
              </div>
            )

            return item.link && item.link !== "#" ? (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </a>
            ) : (
              <div key={index} className="cursor-not-allowed">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 