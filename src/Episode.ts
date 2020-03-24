// eslint-disable-next-line import/prefer-default-export
export class Episode {
  constructor(id: number, title: string, artist: string, duration: number) {
    this.Id = id;
    this.Title = title;
    this.Artist = artist;
    this.Duration = duration;
  }

    public Id: number;

    public Title: string;

    public Artist: string;

    public Duration: number;
}
