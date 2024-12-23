// components/Contact.js

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0">
          <form className="space-y-4 max-w-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border border-black rounded p-2" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border border-black rounded p-2" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-black rounded p-2" required></textarea>
            </div>
            <button type="submit" className="px-4 py-2 border border-black rounded hover:bg-gray-200 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

