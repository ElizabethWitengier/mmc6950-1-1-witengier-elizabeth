// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const tags = req.query.tags;
  const responseFilter = await fetch(
    "https://search.insighttimer-api.net/api/v1/single-tracks/search?query=" +
      tags +
      "&limit=16&offset=0&device_lang=en"
  );
  const video = await responseFilter.json();
  res.status(200).json(video);
}
