// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const single_video = req.query.single_video;
  const responseFilter = await fetch(
    "https://libraryitems.insighttimer.com/" +
      single_video +
      "/data/libraryitem.json"
  );
  const video = await responseFilter.json();
  res.status(200).json(video);
}
