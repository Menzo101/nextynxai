import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const interestAreas = ["Software", "Marketing", "Academy", "Talent"];

const budgetOptions = [
  "Under $5K",
  "$5K - $10K",
  "$10K - $25K",
  "$25K - $50K",
  "$50K+",
];

const industryOptions = [
  "Technology",
  "Finance",
  "Healthcare",
  "E-commerce",
  "Education",
  "Other",
];

const ContactUsPage = () => {
  const [activeTab, setActiveTab] = useState("Software");
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID (e.g. "xyzabcde")
  const [state, handleSubmit] = useForm("mvzblyrn");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    specificInquiry: "",
    budget: "",
    industry: "",
    challenge: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Inquiry Submitted!
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Thank you for reaching out. Our team will review your submission and
            get back to you within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <span className="text-secondary text-xs font-medium tracking-wider uppercase mb-4 block">
                Intelligent Ecosystem
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Redefining the Future
                <br />
                of <span className="text-secondary">Digital Scale.</span>
              </h1>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-12 max-w-md">
                Select your path within the NextLynx ecosystem and let our
                software-first approach accelerate your vision.
              </p>

              {/* The Software-First Edge */}
              <div className="mb-12">
                <h3 className="text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 mb-6">
                  <svg
                    className="w-4 h-4 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  The Software-First Edge
                </h3>

                <div className="space-y-5">
                  <div className="border-l-2 border-secondary/40 pl-4">
                    <p className="text-white text-sm font-medium mb-1">
                      Architecture Agency
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Enterprise-grade backend, frontend, and cloud systems
                      built to scale. We eliminate bottlenecks and ensure
                      data-driven precision across all systems.
                    </p>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-4">
                    <p className="text-white text-sm font-medium mb-1">
                      Connected Ecosystem
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Our Academy feeds directly into our Talent Network,
                      creating a clear ecosystem of expert-verified innovation
                      across every subsidiary.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <svg
                  className="w-6 h-6 text-secondary/40 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed italic mb-4">
                  &ldquo;NextLynx.Ai didn&rsquo;t just provide a service; they
                  redefined our entire workflow. Their models integrated
                  seamlessly, giving us a competitive edge.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold text-xs">M</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      Akano Oluwatobi
                    </p>
                    <p className="text-white/50 text-xs">Founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-4">
                Select Your Interest Area
              </p>

              {/* Interest Tabs */}
              <div className="flex gap-2 mb-8">
                {interestAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setActiveTab(area)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === area
                        ? "bg-secondary text-white"
                        : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Hidden field for interest area */}
                <input type="hidden" name="interestArea" value={activeTab} />

                {/* Full Name & Work Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-xs mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs mb-1.5 block">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="text-white/70 text-xs mb-1.5 block">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
                    placeholder="Company name"
                  />
                </div>

                {/* Specific Inquiry */}
                <div>
                  <label className="text-white/70 text-xs mb-1.5 block">
                    Specific Inquiry
                  </label>
                  <select
                    name="specificInquiry"
                    value={formData.specificInquiry}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary/50 transition-colors appearance-none"
                  >
                    <option value="" className="text-black bg-white">
                      Select an inquiry type
                    </option>
                    <option
                      value="custom-software"
                      className="text-black bg-white"
                    >
                      Custom Software Dev
                    </option>
                    <option
                      value="digital-marketing"
                      className="text-black bg-white"
                    >
                      Digital Marketing
                    </option>
                    <option value="training" className="text-black bg-white">
                      Training & Academy
                    </option>
                    <option
                      value="talent-hiring"
                      className="text-black bg-white"
                    >
                      Talent & Hiring
                    </option>
                    <option
                      value="consultation"
                      className="text-black bg-white"
                    >
                      General Consultation
                    </option>
                  </select>
                </div>

                {/* Budget & Industry */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-xs mb-1.5 block">
                      Project Intensity / Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary/50 transition-colors appearance-none"
                    >
                      <option value="" className="text-black bg-white">
                        Select budget
                      </option>
                      {budgetOptions.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="text-black bg-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/70 text-xs mb-1.5 block">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-secondary/50 transition-colors appearance-none"
                    >
                      <option value="" className="text-black bg-white">
                        Select industry
                      </option>
                      {industryOptions.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="text-black bg-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Challenge Textarea */}
                <div>
                  <label className="text-white/70 text-xs mb-1.5 block">
                    Tell us about your challenge
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors resize-none"
                    placeholder="How can our tech-first approach help you solve your current bottlenecks?"
                  />
                </div>

                {/* Validation Errors */}
                <ValidationError
                  prefix="Email"
                  field="workEmail"
                  errors={state.errors}
                  className="text-red-400 text-xs"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-secondary hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  {state.submitting ? "Submitting..." : "Submit Inquiry"}
                  {!state.submitting && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </button>

                <p className="text-white text-xs uppercase tracking-wider text-center">
                  Your submitted information will be reviewed within a business
                  day
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
