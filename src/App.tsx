import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AIPreview } from './components/sections/AIPreview'
import { DashboardMock } from './components/sections/DashboardMock'
import { DownloadOutput } from './components/sections/DownloadOutput'
import { FormattingControls } from './components/sections/FormattingControls'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { TemplateGallery } from './components/sections/TemplateGallery'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <TemplateGallery />
        <FormattingControls />
        <AIPreview />
        <DownloadOutput />
        <DashboardMock />
      </main>
      <Footer />
    </div>
  )
}

export default App
