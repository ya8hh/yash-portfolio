import React from 'react'
import { FiX } from 'react-icons/fi';       
import { FaGithub, FaLinkedin } from 'react-icons/fa';  


const NavBar = () => {
  return (
  <div className="w-full max-w-5xl flex justify-end gap-4 py-4">
        {[{
          href: 'https://x.com/ya8hh', 
          icon: <FiX size={24} />,
          label: 'X'
        }, {
          href: 'https://github.com/ya8hh',
          icon: <FaGithub size={24} />,
          label: 'GitHub'
        }, {
          href: 'https://linkedin.com/in/yashpal06',
          icon: <FaLinkedin size={24} />,
          label: 'LinkedIn'
        }].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center transition"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
  )
}

export default NavBar