
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Tools = () => {
  const tools = [
    {
      name: "Image Authenticator",
      description: "Advanced AI-powered image verification to detect deepfakes, face swaps, and digital manipulations",
      features: ["Deepfake detection", "Face manipulation analysis", "Metadata verification", "Pixel-level forensics"],
      icon: "📸",
      accuracy: "99.2%"
    },
    {
      name: "Video Analyzer",
      description: "Comprehensive video content analysis for detecting synthetic media and temporal inconsistencies",
      features: ["Frame-by-frame analysis", "Temporal consistency check", "Audio-visual synchronization", "Compression artifact detection"],
      icon: "🎥",
      accuracy: "97.8%"
    },
    {
      name: "Audio Verifier",
      description: "Voice cloning and audio manipulation detection using spectral analysis and AI models",
      features: ["Voice cloning detection", "Audio deepfake analysis", "Spectral inconsistency check", "Background noise analysis"],
      icon: "🎵",
      accuracy: "96.5%"
    }
  ];

  const detectionCapabilities = [
    "Deepfakes and face swaps",
    "AI-generated content",
    "Digital image manipulation",
    "Voice cloning and audio synthesis",
    "Video frame interpolation",
    "CGI and computer-generated imagery",
    "Photo editing and retouching",
    "Synthetic media creation tools"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Advanced Detection Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our suite of AI-powered tools provides comprehensive analysis for all types of digital content, 
            helping you identify authentic media and detect sophisticated manipulations.
          </p>
        </div>

        {/* Main Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{tool.icon}</div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Accuracy Rate</span>
                    <span className="text-lg font-bold text-green-600">{tool.accuracy}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-blue-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/upload">
                    <Button className="w-full">Try This Tool</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detection Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Can Detect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detectionCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg border">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">How Our Technology Works</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Upload & Analysis</h4>
                  <p className="text-blue-100 text-sm">Your content is securely uploaded and processed through our AI pipeline</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Multi-Layer Detection</h4>
                  <p className="text-blue-100 text-sm">Multiple AI models analyze different aspects of your content simultaneously</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comprehensive Report</h4>
                  <p className="text-blue-100 text-sm">Receive detailed results with confidence scores and explanations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Integration */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">API Integration</CardTitle>
            <CardDescription>
              Integrate our verification tools directly into your applications and workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">RESTful API</h3>
                <p className="text-gray-600 text-sm">Easy-to-use REST endpoints for all verification tools</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-600 text-sm">Get verification results in seconds, not minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Detailed Documentation</h3>
                <p className="text-gray-600 text-sm">Comprehensive guides and code examples</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Verifying?</h2>
          <p className="text-gray-600 mb-6">
            Try our tools today and see how easy it is to detect manipulated content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Button variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tools;
