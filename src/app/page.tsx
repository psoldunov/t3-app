const mockUrls = [
  "https://utfs.io/f/c3039f8c-21ff-4680-ae7d-a891cbc28646-cblt8d.jpg",
  "https://utfs.io/f/ed52a500-f894-45e0-82c5-7cfe5bfa3360-dwcphn.jpg",
  "https://utfs.io/f/1e87de6a-321d-423c-accc-e237988f3b23-6hhdk0.jpg",
  "https://utfs.io/f/80b3067c-8232-440a-bdf8-b106603911aa-ng4qg5.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
