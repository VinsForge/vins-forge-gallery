
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    swordType: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      swordType: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact the Forge</h1>
          <p className="text-xl text-gray-300">
            Ready to commission your own masterpiece? Get in touch to discuss your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Send an Inquiry</CardTitle>
              <CardDescription className="text-gray-400">
                Tell me about your project and I'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="swordType" className="block text-sm font-medium text-gray-300 mb-2">
                    Sword Type Interest
                  </label>
                  <select
                    id="swordType"
                    name="swordType"
                    value={formData.swordType}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select a type...</option>
                    <option value="medieval">Medieval Longsword</option>
                    <option value="katana">Japanese Katana</option>
                    <option value="viking">Viking Sword</option>
                    <option value="celtic">Celtic Blade</option>
                    <option value="rapier">Renaissance Rapier</option>
                    <option value="claymore">Scottish Claymore</option>
                    <option value="custom">Custom Design</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Commission inquiry, question about existing sword, etc."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project in detail: desired sword type, specifications, budget range, timeline, etc."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Commission Process</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">1. Initial Consultation</h4>
                  <p>We discuss your vision, specifications, and requirements.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">2. Design & Quote</h4>
                  <p>I provide detailed designs and a comprehensive quote.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">3. Forging Process</h4>
                  <p>Your sword is crafted with traditional techniques and modern precision.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">4. Delivery</h4>
                  <p>Your completed masterpiece is carefully packaged and delivered.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Pricing & Timeline</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Typical Timeframes</h4>
                  <ul className="space-y-1">
                    <li>• Simple designs: 4-6 weeks</li>
                    <li>• Complex pieces: 8-12 weeks</li>
                    <li>• Custom work: 10-16 weeks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Investment Range</h4>
                  <p>Custom commissions typically range from $800 to $3,500 depending on complexity, materials, and specifications. Contact me for a detailed quote.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Workshop Location</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">
                  <strong className="text-amber-400">Vins Forge Workshop</strong>
                </p>
                <p>By appointment only</p>
                <p>Demonstrations and consultations available</p>
                <p className="mt-4 text-sm">
                  Response time: Within 24 hours for all inquiries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
