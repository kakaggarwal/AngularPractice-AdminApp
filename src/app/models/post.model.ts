export class Post {

  userId: number;
  id: number;
  title: string;
  body: string;
  category: string;
  postedDate: Date;

  constructor (userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;

    this.postedDate = new Date();

    if (this.id % 5 === 1) {
      this.category = 'Web App Development';
    } else if (this.id % 5 === 2) {
      this.category = 'Mobile App Development';
    } else if (this.id % 5 === 3) {
      this.category = 'UI/UX Design';
    } else if (this.id % 5 === 4) {
      this.category = 'Project Management';
    } else {
      this.category = 'Desktop Software Development';
    }
  }

  
}
