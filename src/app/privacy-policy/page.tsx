const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900  mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600 ">Last Updated: June 20, 2025</p>
      </div>

      <div className="prose  max-w-none">
        <div className="bg-white  backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 ">
          <h2 className="text-2xl font-semibold text-gray-900  mb-6">1. Information We Collect</h2>
          <p className="text-gray-700  mb-6">
            We collect information that you provide directly to us when you use our services, including when you fill out contact forms, subscribe to our newsletter, or communicate with us. The types of information we may collect include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900  mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700  mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-700  mb-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900  mb-6">3. Information Sharing</h2>
          <p className="text-gray-700  mb-6">
            We do not share your personal information with third parties except as described in this Privacy Policy or with your consent. We may share information with service providers who perform services on our behalf, such as hosting, analytics, and customer service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900  mb-6">4. Data Security</h2>
          <p className="text-gray-700  mb-6">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900  mb-6">5. Your Choices</h2>
          <p className="text-gray-700  mb-6">
            You may update, correct, or delete your account information at any time by contacting us at the information below. You can opt out of receiving promotional communications from us by following the instructions in those communications.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900  mb-6">6. Changes to This Policy</h2>
          <p className="text-gray-700  mb-6">
            We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900  mb-6">7. Contact Us</h2>
          <p className="text-gray-700 ">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700 ">Email: <a href="mailto:thinkbuild8@gmail.com" className="text-emerald-600  hover:underline">thinkbuild8@gmail.com</a></p>
            <p className="text-gray-700 ">Phone: <a href="tel:9204527554" className="text-emerald-600  hover:underline">+91 92045 27554</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
