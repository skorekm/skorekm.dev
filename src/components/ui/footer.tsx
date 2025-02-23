import { SiMedium, SiX } from '@icons-pack/react-simple-icons';

export const Footer = () => {
  return (
    <footer className="border-t border-[#e5e2dd] mt-auto dark:border-[#2a2a2a]">
      <div className="max-w-2xl mx-auto px-6 h-24 text-sm text-[#8c8c8c] dark:text-[#8c8c8c] flex justify-between items-center">
        <div>© 2025 skorekm.dev. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://medium.com/@SkorekM" target="_blank" rel="noopener noreferrer" className='text-[#000] dark:text-[#fff]'>
            <SiMedium />
          </a>
          <a href="https://x.com/SkorekM" target="_blank" rel="noopener noreferrer" className='text-[#000] dark:text-[#fff]'>
            <SiX />
          </a>
        </div>
      </div>
    </footer>
  )
}