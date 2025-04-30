import { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    role: "Student",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cetPercentile: "",
    gradeLevel: "",
    caste: "",
    agreement: false,
  });

  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setErrorMessage("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage("Last name is required");
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Phone number is required");
      return false;
    }
    if (!formData.cetPercentile) {
      setErrorMessage("CET percentile is required");
      return false;
    }
    if (!formData.caste) {
      setErrorMessage("Please select your category");
      return false;
    }
    if (!formData.agreement) {
      setErrorMessage("You must agree to the privacy policy");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://stargateback.onrender.com/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            role: "Student",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            cetPercentile: "",
            gradeLevel: "",
            caste: "",
            agreement: false,
          });
          setSubmitStatus("idle");
        }, 2000);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error.message || "An error occurred. Please try again.");
      console.error("Submission error:", error);
    }
  };

  const getStatusText = () => {
    switch (submitStatus) {
      case "submitting":
        return "Submitting...";
      case "success":
        return "Submitted Successfully!";
      case "error":
        return "Error";
      default:
        return "Submit";
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#333456] p-4 relative">
      <form
        onSubmit={handleSubmit}
        className="bg-[#333456] p-8 rounded-xl text-white max-w-3xl w-full relative"
      >
        {/* Overlay for submission status */}
        {submitStatus !== "idle" && (
          <div className="absolute inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="text-center">
              <div className={`text-4xl font-serif mb-2 ${
                submitStatus === "success" ? "text-green-500" : 
                submitStatus === "error" ? "text-red-500" : "text-blue-400"
              }`}>
                {getStatusText()}
              </div>
              {submitStatus === "submitting" && (
                <div className="flex justify-center">
                  <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 mt-2">{errorMessage}</p>
              )}
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center mb-6">
          Your Path to Your Dream College Starts Here!
        </h2>
        <p className="text-center text-m mb-6">
          Fill in your details and express interest in a free education assessment.
        </p>

        {/* Error message for validation */}
        {errorMessage && submitStatus === "idle" && (
          <div className="bg-red-500/20 text-red-300 p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <div className="flex gap-4 mb-4">
          <button
            type="button"
            className={`w-1/2 py-2 rounded ${
              formData.role === "Student" ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setFormData({ ...formData, role: "Student" })}
          >
            Student
          </button>
          <button
            type="button"
            className={`w-1/2 py-2 rounded ${
              formData.role === "Guardian" ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setFormData({ ...formData, role: "Guardian" })}
          >
            Guardian
          </button>
        </div>

        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gradeLevel"
          placeholder="Current School Year / Grade Level (Optional)"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.gradeLevel}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cetPercentile"
          placeholder="CET Percentile *"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.cetPercentile}
          onChange={handleChange}
        />
        <select
          name="caste"
          className="w-full p-2 rounded text-black bg-white mb-3"
          value={formData.caste}
          onChange={handleChange}
        >
          <option value="">Select Category *</option>
          <option value="General">General</option>
          <option value="OBC">OBC</option>
          <option value="SC/ST">SC/ST</option>
          <option value="Others">Others</option>
        </select>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="w-5 h-5 accent-green-500"
          />
          <label htmlFor="agreement" className="text-sm">
            I agree to the privacy policy *
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 py-2 rounded hover:bg-red-600 transition-all duration-300 relative overflow-hidden"
          disabled={submitStatus !== "idle"}
        >
          <span className={`transition-opacity duration-300 ${
            submitStatus !== "idle" ? "opacity-0" : "opacity-100"
          }`}>
            Submit
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            submitStatus === "idle" ? "opacity-0" : "opacity-100"
          }`}>
            {getStatusText()}
          </span>
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
