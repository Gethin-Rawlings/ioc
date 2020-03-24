// eslint-disable-next-line import/prefer-default-export
export class Episode {
  constructor(id: number, title: string, series: string, duration: number) {
    this.Id = id;
    this.Title = title;
    this.Series = series;
    this.Duration = duration;
  }

    public Id: number;

    public Title: string;

    public Series: string;

    public Duration: number;
}
