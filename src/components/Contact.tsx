import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Phone, MapPin, Send, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Resume from "../assets/Praveen.B_Resume.pdf";

// Fill in your EmailJS credentials!
const SERVICE_ID = "service_1idn7sv";
const TEMPLATE_ID = "template_vfhzrjx";
const PUBLIC_KEY = "AMK7HRisiYgMA4O-9";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();

  // email validation function
  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === "email" && emailError) setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    // Validate email
    if (!emailIsValid(formData.email)) {
      setEmailError("Please enter a valid email address.");
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Prepare EmailJS form: input names must match your EmailJS template!
    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Sending Failed",
        description: "Unable to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Praveen.B_Resume.pdf";
    link.click();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "praveenb2201@gmail.com",
      href: "mailto:praveenb2201@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8870503998",
      href: "tel:+918870503998"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href:
        "https://www.google.com/maps/dir/13.0460905,80.2209766/Adambakkam,+City+Link+Road,+N.G.O.+Colony,+Ganesh+Nagar,+Adambakkam,+Chennai,+Tamil+Nadu+600088"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Download CV Button */}
              <div className="pt-6">
                <Button
                  onClick={handleDownloadCV}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Available for full-time positions. Let's create something amazing together!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Send className="w-6 h-6 mr-3 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                autoComplete="off"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      name="fullName" // This must match your template variable (e.g. user_name)
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-10 bg-background border-border focus:border-primary focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email" // This must match your template variable (e.g. user_email)
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`pl-10 bg-background border-border focus:border-primary focus:ring-primary ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {emailError && (
                    <p className="mt-1 text-red-600 text-xs">{emailError}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message" // This must match your template variable (e.g. message)
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
