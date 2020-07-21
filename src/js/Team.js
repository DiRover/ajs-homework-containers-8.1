/* eslint-disable consistent-return */
class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      return 'This member is already exist';
    }
    this.members.add(member);
  }

  addAll(...units) {
    units.forEach((unit) => {
      this.members.add(unit);
    });
    return this.members.size;
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
