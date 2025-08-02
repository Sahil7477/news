

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="text-xl font-bold">
                <span className="font-english text-white">Hindustan</span>
                <span className="font-english text-white">Times</span>
              </div>
              <div className="text-2xl font-bold text-news-red font-bengali">বাংলা</div>
            </div>
            <p className="text-sm font-bengali">
              পশ্চিমবঙ্গের শীর্ষ অনলাইন বাংলা সংবাদপত্র
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 font-bengali">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-news-red font-bengali">আজকের খবর</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">রাজনীতি</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">খেলা</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">বিনোদন</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">ব্যবসা</a></li>
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-semibold mb-4 font-bengali">বিভাগ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-news-red font-bengali">জাতীয়</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">আন্তর্জাতিক</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">পশ্চিমবঙ্গ</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">কলকাতা</a></li>
              <li><a href="#" className="hover:text-news-red font-bengali">লাইফস্টাইল</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 font-bengali">যোগাযোগ</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-english">Email: bangla@hindustantimes.com</li>
              <li className="font-english">Phone: +91 98765 43210</li>
              <li className="font-bengali">ঠিকানা: কলকাতা, পশ্চিমবঙ্গ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm font-english">
            © 2025 Hindustan Times Bangla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;