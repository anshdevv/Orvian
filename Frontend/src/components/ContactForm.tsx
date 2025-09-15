import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "../../../api/config.js"

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    timeSlot: '',
    day: '',
    referral: ''
  });

  const [loading, setLoading] = useState(false); // 👈 loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // 👈 start loading
    try {
      await fetch("https://orvian-2.onrender.com/api/newuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          timeSlot: formData.timeSlot,
          day: formData.day,
          referral: formData.referral,
        }),
      });
      // const{error}=await supabase.from ("Clients").insert(formData)


      toast({
        title: "Consultation Booked!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        timeSlot: '',
        day: '',
        referral: ''
      });
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's talk about how AI can transform your operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="card-gradient">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Time + Day */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9-12 PM)</option>
                      <option value="afternoon">Afternoon (12-5 PM)</option>
                      <option value="evening">Evening (5-8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Day
                    </label>
                    <select
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select day</option>
                      <option value="weekday">Weekday</option>
                      <option value="weekend">Weekend</option>
                    </select>
                  </div>
                </div>

                {/* Referral */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Google, LinkedIn, referral, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-hero w-full text-lg py-4"
                  disabled={loading} // 👈 disable while loading
                >
                  {loading ? "Booking..." : "Book My Consultation"}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card-gradient">
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Free 30-minute consultation call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Custom automation strategy for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>ROI projections and timeline estimates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>No obligations, just valuable insights</span>
                  </li>
                </ul>
              </div>

              <div className="card-gradient">
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  Quick Response
                </h3>
                <p className="text-muted-foreground">
                  We'll contact you within 24 hours to schedule your consultation at a time that works best for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
