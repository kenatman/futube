class Youtube {
  constructor(httpRequest) {
    this.youtube = httpRequest;
  }
  mostPopular = async () => {
    const response = await this.youtube.get(`videos`, {
      params: { part: `snippet`, chart: `mostPopular`, maxResults: 25 },
    });
    return response.data.items;
  };

  search = async (term) => {
    const response = await this.youtube.get(`search`, {
      params: { type: `video`, maxResults: 25, q: term, part: `snippet` },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  };
}

export default Youtube;
