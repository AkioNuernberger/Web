'use client'

export default function Thoughts() {
  const articles = [
    {
      title: "Lilium's downfall - An alternative take",
      summary: "While many blame the government for 'allowing' Lilium to fail, I believe the seeds of failure were sown much earlier. In this post, I am exploring the issues that led to Lilium's downfall based what I have learned following the rabbit hole.",
      link: "https://kasoku.substack.com/p/liliums-downfall-an-alternative-take",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F61755285-085b-4198-acc4-b9f6ad1aa047_3000x1213.jpeg"
    },
    {
      title: "Validating for real commitment",
      summary: "It is easy to get distracted by user feedback and it happened to us, too. I will break down what happened and work out a few ways to prevent that in the future.",
      link: "https://kasoku.substack.com/p/validating-for-real-commitment",
      imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77120b77-7839-4bcb-8600-06e6ade13655_1882x550.png"
    }
  ];

  return (
    <div className="content-container">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Thoughts on different topics</h1>
        <p className="text-lg text-gray-600">I write about a range of different topics, from innovation in other industries to my own experiences.</p>
      </div>

      <div className="grid gap-8">
        {articles.map((article, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <div className="w-full h-32 md:h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover object-left"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
                    }}
                  />
                </div>
              </div>
              <div className="p-4 md:w-2/3">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-3 text-sm">{article.summary}</p>
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read on Substack →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

