
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { useState } from 'react';

const Dashboard = () => {
  const { user } = useAuth();
  const [viewingReports, setViewingReports] = useState(false);

  // Mock data for demonstration
  const recentAnalyses = [
    { id: 1, filename: 'profile_photo.jpg', result: 'Authentic', confidence: 94, date: '2024-01-15', details: 'No manipulation detected', riskLevel: 'low' },
    { id: 2, filename: 'news_video.mp4', result: 'Suspicious', confidence: 78, date: '2024-01-14', details: 'Potential manipulation detected', riskLevel: 'medium' },
    { id: 3, filename: 'interview_audio.wav', result: 'Authentic', confidence: 89, date: '2024-01-13', details: 'No manipulation detected', riskLevel: 'low' },
    { id: 4, filename: 'social_media_post.jpg', result: 'Suspicious', confidence: 62, date: '2024-01-12', details: 'AI generation patterns detected', riskLevel: 'high' },
    { id: 5, filename: 'documentary_clip.mp4', result: 'Authentic', confidence: 91, date: '2024-01-11', details: 'No manipulation detected', riskLevel: 'low' },
  ];

  const stats = {
    totalAnalyses: 47,
    authenticFiles: 32,
    suspiciousFiles: 15,
    averageConfidence: 87
  };

  const toggleReportView = () => {
    setViewingReports(!viewingReports);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's an overview of your content verification activity</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                Upload Content
              </CardTitle>
              <CardDescription>
                Verify photos, videos, or audio files for authenticity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/upload">
                <Button className="w-full">Start Verification</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                View Reports
              </CardTitle>
              <CardDescription>
                Access detailed analysis reports and history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={toggleReportView}>
                {viewingReports ? "Hide Reports" : "View All Reports"}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Learn More
              </CardTitle>
              <CardDescription>
                Explore resources and educational content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources">
                <Button variant="outline" className="w-full">Browse Resources</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Analyses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalAnalyses}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Authentic Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.authenticFiles}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Suspicious Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.suspiciousFiles}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg. Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.averageConfidence}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Reports View (togglable) */}
        {viewingReports && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>All Verification Reports</CardTitle>
              <CardDescription>Comprehensive list of all analyzed content</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Filename</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAnalyses.map(analysis => (
                    <TableRow key={analysis.id}>
                      <TableCell className="font-medium">{analysis.filename}</TableCell>
                      <TableCell>{analysis.date}</TableCell>
                      <TableCell className={analysis.result === 'Authentic' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                        {analysis.result}
                      </TableCell>
                      <TableCell>{analysis.confidence}%</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          analysis.riskLevel === 'low' ? 'bg-green-100 text-green-800' : 
                          analysis.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {analysis.riskLevel.toUpperCase()}
                        </span>
                      </TableCell>
                      <TableCell>{analysis.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Recent Analyses (still shown when not in detailed view) */}
        {!viewingReports && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Analyses</CardTitle>
              <CardDescription>Your latest content verification results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAnalyses.slice(0, 3).map(analysis => (
                  <div key={analysis.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${analysis.result === 'Authentic' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <div>
                        <div className="font-medium">{analysis.filename}</div>
                        <div className="text-sm text-gray-600">{analysis.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${analysis.result === 'Authentic' ? 'text-green-600' : 'text-red-600'}`}>
                        {analysis.result}
                      </div>
                      <div className="text-sm text-gray-600">{analysis.confidence}% confidence</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
