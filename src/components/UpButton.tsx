
const UpButton = () => {
  return (
    <a href="#hero" className="fixed hidden bottom-20 right-8 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors z-40">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.75L12 9m0 0l6 6" />
      </svg>
    </a>
  )
}

export default UpButton