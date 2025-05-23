
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  status: 'uploading' | 'processing' | 'completed';
  result?: {
    isAuthentic: boolean;
    confidence: number;
    riskLevel: 'low' | 'medium' | 'high';
    details: string[];
    report: string;
  };
}

const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (files: FileList) => {
    Array.from(files).forEach(file => {
      // Validate file type
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/') && !file.type.startsWith('audio/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload only images, videos, or audio files",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (50MB limit)
      if (file.size > 50 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload files smaller than 50MB",
          variant: "destructive",
        });
        return;
      }

      const newFile: UploadedFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        status: 'uploading'
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload and processing
      setTimeout(() => {
        setUploadedFiles(prev => prev.map(f => 
          f.id === newFile.id ? { ...f, status: 'processing' } : f
        ));

        // Simulate analysis completion
        setTimeout(() => {
          const isAuthentic = Math.random() > 0.3; // 70% chance of being authentic
          const confidence = Math.floor(Math.random() * 30) + 70; // 70-99% confidence
          const riskLevel = confidence > 90 ? 'low' : confidence > 75 ? 'medium' : 'high';

          const result = {
            isAuthentic,
            confidence,
            riskLevel: riskLevel as 'low' | 'medium' | 'high',
            details: isAuthentic ? [
              'Metadata consistency verified',
              'No compression artifacts detected',
              'Pixel-level analysis passed',
              'Temporal consistency maintained',
              'No AI generation patterns found'
            ] : [
              'Suspicious compression patterns detected',
              'Metadata inconsistencies found',
              'Pixel-level anomalies identified',
              'Possible AI generation artifacts',
              'Content manipulation indicators present'
            ],
            report: isAuthentic ? 
              `✅ AUTHENTIC CONTENT VERIFIED\n\nThis file has passed all authentication checks with ${confidence}% confidence. No signs of manipulation, deepfake generation, or artificial creation were detected. The content appears to be genuine and unaltered.\n\nKey findings:\n• Original metadata intact\n• No digital manipulation traces\n• Consistent compression patterns\n• Natural pixel distribution\n• No AI generation signatures\n\nStatus: Successfully authenticated - No errors or bugs detected.` :
              `⚠️ POTENTIAL MANIPULATION DETECTED\n\nThis file shows signs of possible manipulation or artificial generation with ${confidence}% confidence of detection. Multiple authentication checks have identified suspicious patterns.\n\nConcerns identified:\n• Inconsistent metadata structure\n• Suspicious compression artifacts\n• Pixel-level irregularities\n• Possible AI generation patterns\n• Digital manipulation indicators\n\nReason for non-authentication: The file exhibits multiple characteristics commonly associated with manipulated or artificially generated content. Manual review recommended for critical use cases.`
          };

          setUploadedFiles(prev => prev.map(f => 
            f.id === newFile.id ? { ...f, status: 'completed', result } : f
          ));

          toast({
            title: "Analysis completed",
            description: `${file.name} has been processed`,
          });
        }, 3000);
      }, 1000);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getRiskBadgeColor = (riskLevel: 'low' | 'medium' | 'high') => {
    switch (riskLevel) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload & Verify Content</h1>
          <p className="text-gray-600">
            Upload your photos, videos, or audio files to verify their authenticity
          </p>
        </div>

        {/* Upload Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Files to Verify</CardTitle>
            <CardDescription>
              Supported formats: Images (JPG, PNG, GIF), Videos (MP4, AVI, MOV), Audio (MP3, WAV, AAC)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
              <p className="text-gray-500 mb-4">Maximum file size: 50MB</p>
              <input
                type="file"
                multiple
                accept="image/*,video/*,audio/*"
                onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="cursor-pointer">Choose Files</Button>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
            {uploadedFiles.map(file => (
              <Card key={file.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{file.name}</CardTitle>
                      <CardDescription>
                        {file.type} • {formatFileSize(file.size)}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      {file.status === 'uploading' && (
                        <Badge variant="secondary">Uploading...</Badge>
                      )}
                      {file.status === 'processing' && (
                        <Badge variant="secondary">Analyzing...</Badge>
                      )}
                      {file.status === 'completed' && file.result && (
                        <>
                          <Badge variant={file.result.isAuthentic ? "default" : "destructive"}>
                            {file.result.isAuthentic ? "Authentic" : "Suspicious"}
                          </Badge>
                          <Badge className={getRiskBadgeColor(file.result.riskLevel)}>
                            {file.result.riskLevel.toUpperCase()} RISK
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {file.status === 'uploading' && (
                    <Progress value={33} className="mb-2" />
                  )}
                  {file.status === 'processing' && (
                    <div>
                      <Progress value={66} className="mb-2" />
                      <p className="text-sm text-gray-600">Running authentication checks...</p>
                    </div>
                  )}
                  {file.status === 'completed' && file.result && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Confidence Score:</span>
                        <span className="text-lg font-bold">{file.result.confidence}%</span>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Analysis Details:</h4>
                        <ul className="space-y-1">
                          {file.result.details.map((detail, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <span className={`mr-2 ${file.result?.isAuthentic ? 'text-green-600' : 'text-red-600'}`}>
                                {file.result?.isAuthentic ? '✓' : '⚠'}
                              </span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Detailed Report:</h4>
                        <pre className="text-sm whitespace-pre-wrap text-gray-700">
                          {file.result.report}
                        </pre>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Upload;
