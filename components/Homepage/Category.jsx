import Link from "next/link";
import Image from "next/image";

export default function Category() {
  const categories = [
    {
      id: 1,
      name: "Steel",
      image: "https://media.istockphoto.com/id/1344231216/photo/rolled-metal-warehouse-many-packs-of-metal-bars-on-the-shelves.jpg?s=612x612&w=0&k=20&c=NdBJpn98jT43UXxRMv-R1gVwynBq-2nQGmJVLx4bCxc=", 
    },
    {
      id: 4,
      name: "Chemicals",
      image: "https://www.thoughtco.com/thmb/S43kFVYXoxi3gjY6guOrtb6Oe8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chemistry-glassware-56a12a083df78cf772680235.jpg"
    },
    {
      id: 3,
      name: "Polymers",
      image: "https://thumbs.dreamstime.com/b/dyed-polymer-resin-variation-resins-black-background-35041744.jpg",
    },
    {
      id: 5,
      name: "Energy",
      image: "https://t4.ftcdn.net/jpg/00/96/62/21/360_F_96622127_fzDNXoQFb3SRRoM01nlq3GrOi9W0aHA6.jpg"
    },
    {
      id: 6,
      name: "Construction",
      image: "https://thumbs.dreamstime.com/b/architect-plan-working-table-crane-building-construction-background-file-35192700.jpg"
    },
    {
      id: 7,
      name: "Agri",
      image: "https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg"
    },
    {
      id: 8,
      name: "Packaging & Paper",
      image: "https://earth.org/wp-content/uploads/2022/07/Untitled-1024-%C3%97-683px-56-1200x800.jpg"
    },
    {
      id: 2,
      name: "Non Ferrous",
      image: "https://nordholding.bg/wp-content/uploads/2018/01/non-ferrous-copper-pipe-1024x682.jpg",
    },
  ];

  return (
    <section className="py-16 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Categories</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
            Tap to access expertise across supply chains. Get Quotations, Prices, and Latest News Instantly
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                {/* Category Image */}
                {category.image && (
                  <div className="flex justify-center items-center h-32 mb-6">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={150}
                      height={100}
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>

              {/* View All Link at the bottom */}
              <div className="mt-auto flex items-center text-blue-500 font-semibold group-hover:text-blue-600 transition-colors">
                View All
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}