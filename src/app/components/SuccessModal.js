// components/SuccessModal.js
const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center animate-popIn">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
