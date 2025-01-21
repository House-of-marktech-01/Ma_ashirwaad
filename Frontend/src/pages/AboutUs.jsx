import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full pt-32">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] mb-16 ">
        <img
          src="https://s3-alpha-sig.figma.com/img/32d2/2fc2/4c77e9dc49f44ede65222b0d24f032a6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I-yGvgk4bMWoOhUzTRj7~zr8cjtDUDgH97kHabdAalKjdLmRc-4wPEjo2wjIN1ABHLH-mXytaNxR74OyNHyWkZVv-~Vmg1CIr~OquT0cVKg10OsliaC3UqLhssCVueWQo~1NLUGxf7Y84c4vUOOz1dOLysM4xNieYTjV1I~LwagsaIpwRHfqaX03mW60XDDPsuU5Ff1stwsxhKj6iJVZd71bhMHksRc4Jca2bCsiLjoFVCzv2W-SM6hoeafPSb-~McGg~eL~GP~9CTTcIvJ2wpZJrc3Sxe6SWD6IeeykxqgJv3k5-~5m8jqjvHzE0tMgVdyeyr646r~rFWwp0P2X4w__"
          alt="Hero background"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-light text-white">
          About Us
        </h1>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* First Text Block */}
        <div className="mb-16">
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Who Are We Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light mb-8">Who Are We?</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://s3-alpha-sig.figma.com/img/af41/6f49/8c919ff880125146bff6140f00ba6dc2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C6VY7an959HsXmIyBzCNbOl9GUqJqSbuVHSwiGsDyQ6PaHlM2qqpdIiY2z~e~gEma~h22IyhDzHmepROI6VGVem91pSiEUQLWx3QSj3N93LGoPWJpvjfy33vfirrM0VnS24LDkAuN352K48xdsmIXEs7m57WtryThHDHoSVuNk9cD6T0~qRZMHT6BA7F1WtSZBQVV-kMDghe3HqTx8YVbgtJX~Vq4AatqdwNCQJ7VzpUPy51rRierXVqdrCVgFLQUjWJ1V8oY6XMnRjMmkpMYhbnkg9lu~-msDAzCXWranIqZXsYNqdRfSi3v1bnkcmpbJgxG5wV8NvCDQx6SxdGxw__"
                alt="Pink dress fashion"
                className="w-full h-[300px] object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Why Ma Ashewad Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light mb-8">Why Ma Ashirwad?</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="https://s3-alpha-sig.figma.com/img/c54d/b53b/eb4cbf56217b758b72a2bcde3c897919?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Py45hZHSmHGn0OLFXIc8CLHvJ~Z-pNZmhpmkWYgPJhjubTHgz13E4BCe7MfzMiT6rH~Dlt2ym0VePtcca8RKE63uJm9CBOLU0rnsE7yMjkzrXeKrf8M8DWOXJoCVvJQNZ1~YJjd0qhaI5eghcfgQPtTVEO4z8DvYNDc7P2ZP1CKhyKhplAnX2wyWmaiaNU9NNdFCTAJzDgH5dePUThXPIh~ofm-y-Di~bTT-AE-wk-Mc2L-RoHEjuQG77xFR8txJankJw34H74OLzxlWcu7hZdZEi1D-wy1H7xquXKo7hQReTICXwFopb6C4rp5rOk6ODQyACWBCwzKOrliC5UsTGg__"
                alt="Purple dress fashion"
                className="w-full h-[300px] object-cover rounded"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="mb-16">
          {/* <h2 className="text-3xl font-light mb-8">Our Promise</h2> */}
          <div className="bg-red-900 p-8 rounded">
            <p className="text-white leading-relaxed text-center">
            Our Promise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
