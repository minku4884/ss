import axios from "axios";

class API_timestamp {
  constructor() {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = (this.today.getMonth() + 1).toString().padStart(2, "0");
    this.day = this.today.getDate().toString().padStart(2, "0");
    this.hours = this.today.getHours().toString().padStart(2, "0");
    this.minutes = this.today.getMinutes().toString().padStart(2, "0");
    this.date = `${this.year}${this.month}${this.day}${this.hours}00`;

    // this.oneDayAgo =
  }

    // getOneDayAgo Method    
  getOneDayAgo() {
    let oneDayAgo = new Date(this.today);
    oneDayAgo.setDate(this.today.getDate() - 1);

    const year = oneDayAgo.getFullYear();
    const month = (oneDayAgo.getMonth() + 1).toString().padStart(2, "0");
    const day = oneDayAgo.getDate().toString().padStart(2, "0");
    const hours = oneDayAgo.getHours().toString().padStart(2, "0");
    const date = `${year}${month}${day}${hours}00`;

    return date;
  }
}

export default API_timestamp;
