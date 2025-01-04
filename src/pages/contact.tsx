import { JSX } from "react";

const Contact = (): JSX.Element => {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-500">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Have questions? Reach out to us at contact@clothingstore.com.
        </p>
      </div>
    );
}

export default Contact;