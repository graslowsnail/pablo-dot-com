"use client"

import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@pablo.com",
      link: "mailto:hello@pablo.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Brooklyn, NY",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@pabloramirez",
      link: "https://github.com/pabloramirez"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Pablo Ramirez",
      link: "https://linkedin.com/in/pabloramirez"
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@pablo.builds",
      link: "https://instagram.com/pablo.builds"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Contact Methods */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black mb-6">CONTACT INFO</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((contact, index) => {
            const IconComponent = contact.icon
            const content = (
              <div className="flex flex-col items-center space-y-3 p-6 border border-gray-300 rounded-lg hover:border-green-600 transition-colors duration-200">
                <IconComponent className="w-8 h-8 text-green-600" />
                <div className="text-center">
                  <div className="font-semibold text-black text-sm">
                    {contact.label.toUpperCase()}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    {contact.value}
                  </div>
                </div>
              </div>
            )

            return contact.link ? (
              <a key={index} href={contact.link} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            )
          })}
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black mb-6">SOCIAL LINKS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a 
                key={index} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col items-center space-y-3 p-6 border border-gray-300 rounded-lg hover:border-green-600 hover:bg-gray-50 transition-all duration-200">
                  <IconComponent className="w-8 h-8 text-green-600" />
                  <div className="text-center">
                    <div className="font-semibold text-black text-sm">
                      {social.label.toUpperCase()}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      {social.username}
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Terminal-style note */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg border">
        <div className="font-mono text-sm text-gray-600">
          <span className="text-green-600">$ </span>
          Available for freelance work and collaboration
        </div>
      </div>
    </div>
  )
} 