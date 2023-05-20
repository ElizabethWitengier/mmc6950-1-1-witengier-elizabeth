// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const responseFilter = await fetch(
    "https://filtering.insighttimer-api.net/api/v1/single-tracks/filter?content_langs=en&device_lang=en&limit=30&offset=0&sort_option=most_played"
  );
  const allVideos = await responseFilter.json();
  res.status(200).json(allVideos);
}
