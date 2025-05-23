
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Content",
      description: "Simply drag and drop or select your photos, videos, or audio files. We support all major formats and files up to 50MB.",
      details: ["Secure encrypted upload", "Multiple file support", "Real-time progress tracking"],
      icon: "📤"
    },
    {
      number: "02",
      title: "AI Analysis Begins",
      description: "Our advanced AI algorithms analyze your content using multiple detection methods simultaneously.",
      details: ["Pixel-level forensics", "Metadata examination", "Pattern recognition", "Temporal consistency checks"],
      icon: "🧠"
    },
    {
      number: "03",
      title: "Multi-Layer Detection",
      description: "Different specialized models examine various aspects of your content to provide comprehensive analysis.",
      details: ["Deepfake detection", "Compression analysis", "Spectral analysis", "Artifact identification"],
      icon: "🔍"
    },
    {
      number: "04",
      title: "Get Detailed Results",
      description: "Receive a comprehensive report with confidence scores, explanations, and actionable insights.",
      details: ["Confidence percentages", "Risk assessment", "Detailed explanations", "Downloadable reports"],
      icon: "📊"
    }
  ];

  const technologies = [
    {
      name: "Convolutional Neural Networks",
      description: "Deep learning models trained specifically for detecting visual inconsistencies and manipulation patterns",
      applications: ["Face manipulation detection", "Image artifact analysis", "Texture inconsistency detection"]
    },
    {
      name: "Temporal Analysis",
      description: "Advanced algorithms that examine frame-to-frame consistency in video content",
      applications: ["Video deepfake detection", "Motion pattern analysis", "Lip-sync verification"]
    },
    {
      name: "Spectral Analysis",
      description: "Frequency domain analysis to detect audio manipulation and voice synthesis",
      applications: ["Voice cloning detection", "Audio artifact identification", "Compression pattern analysis"]
    },
    {
      name: "Blockchain Verification",
      description: "Immutable content fingerprinting for establishing provenance and authenticity",
      applications: ["Content certification", "Timestamp verification", "Chain of custody tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">How TrustAuth Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI-powered platform uses cutting-edge technology to analyze and verify 
            the authenticity of digital content in just seconds.
          </p>
        </div>

        {/* Process Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The Verification Process</h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="text-4xl">{step.icon}</div>
                        <div className="text-3xl font-bold text-blue-600">{step.number}</div>
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-green-600 mr-2">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1 lg:max-w-md">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-6xl opacity-50">{step.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Behind */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Technology Behind TrustAuth</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage state-of-the-art artificial intelligence and digital forensics techniques 
              to provide unparalleled accuracy in content verification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{tech.name}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">Applications:</h4>
                    <ul className="space-y-1">
                      {tech.applications.map((app, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Accuracy & Performance */}
        <section className="mb-20">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Accuracy & Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
                <div className="text-gray-600">Image Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">97.8%</div>
                <div className="text-gray-600">Video Analysis Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">96.5%</div>
                <div className="text-gray-600">Audio Verification Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">&lt;30s</div>
                <div className="text-gray-600">Average Processing Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Security & Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                <p className="text-gray-300">All uploads are encrypted during transmission and processing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Automatic Deletion</h3>
                <p className="text-gray-300">Files are automatically deleted after analysis completion</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">GDPR Compliant</h3>
                <p className="text-gray-300">Full compliance with international privacy regulations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Verify Your Content?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust TrustAuth to verify their digital content. 
              Get started today with our free plan or explore our advanced features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Verification
                </Button>
              </Link>
              <Link to="/tools">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Our Tools
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
