
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  const articles = [
    {
      title: "Understanding Deepfakes: A Complete Guide",
      description: "Learn about the technology behind deepfakes, how they're created, and how to spot them.",
      category: "Education",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Digital Forensics Best Practices",
      description: "Professional techniques for analyzing digital media and preserving evidence integrity.",
      category: "Technical",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "The Rise of Synthetic Media",
      description: "Exploring the growth of AI-generated content and its implications for society.",
      category: "Research",
      readTime: "6 min read",
      featured: true
    },
    {
      title: "Audio Deepfakes: Detection Methods",
      description: "Technical overview of voice cloning detection and audio verification techniques.",
      category: "Technical",
      readTime: "10 min read",
      featured: false
    }
  ];

  const tools = [
    {
      name: "Image Metadata Analyzer",
      description: "Free tool to examine EXIF data and metadata in digital images",
      type: "Free Tool"
    },
    {
      name: "Video Compression Checker",
      description: "Analyze video compression patterns to detect potential manipulation",
      type: "Free Tool"
    },
    {
      name: "Research Dataset",
      description: "Access our curated dataset of authentic and manipulated media samples",
      type: "Dataset"
    }
  ];

  const whitepapers = [
    {
      title: "The State of Digital Content Authenticity 2024",
      description: "Comprehensive analysis of current trends in digital manipulation and detection",
      pages: "42 pages"
    },
    {
      title: "AI Detection Algorithms: Performance Comparison",
      description: "Technical evaluation of leading deepfake detection models and methodologies",
      pages: "28 pages"
    },
    {
      title: "Legal Implications of Synthetic Media",
      description: "Exploring the legal landscape surrounding deepfakes and digital evidence",
      pages: "35 pages"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Educational Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your knowledge about digital content authenticity, detection techniques, 
            and the latest research in the field of media verification.
          </p>
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${article.featured ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={article.category === 'Education' ? 'default' : article.category === 'Technical' ? 'secondary' : 'outline'}>
                      {article.category}
                    </Badge>
                    {article.featured && <Badge variant="destructive">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & Utilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Free Tools & Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{tool.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Access Tool
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research & Whitepapers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Whitepapers</h2>
          <div className="space-y-6">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600 mb-2">{paper.description}</p>
                      <span className="text-sm text-gray-500">{paper.pages}</span>
                    </div>
                    <div className="ml-6">
                      <button className="bg-gray-900 text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Recommended Learning Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fundamentals</h3>
                <p className="text-blue-100">Start with basics of digital media and manipulation techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Detection Methods</h3>
                <p className="text-blue-100">Learn about AI-powered detection algorithms and forensic techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Practical Application</h3>
                <p className="text-blue-100">Practice with real examples and case studies</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What types of manipulations can you detect?</h3>
                <p className="text-gray-600">
                  Our tools can detect a wide range of manipulations including deepfakes, face swaps, voice cloning, 
                  image editing, CGI insertion, and other AI-generated content. We use multiple detection algorithms 
                  to provide comprehensive analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How accurate are your detection algorithms?</h3>
                <p className="text-gray-600">
                  Our detection accuracy varies by content type, with image detection at 99.2%, video at 97.8%, 
                  and audio at 96.5%. We continuously update our models with the latest research and detection techniques 
                  to maintain high accuracy rates.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I use these tools for legal evidence?</h3>
                <p className="text-gray-600">
                  While our tools provide professional-grade analysis, the admissibility of digital evidence varies 
                  by jurisdiction. We recommend consulting with legal experts and following proper chain of custody 
                  procedures when collecting evidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
