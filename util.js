import faker from "faker";

export const randomImages = count => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      key: faker.random.uuid(),
      // image
      image: faker.image.imageUrl(),
      title: faker.name.title(),
      timestamp: faker.date.past(),
      like_count: faker.random.number(),
      hate_count: faker.random.number(),
      // user
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),

      // comment
      comment_count: faker.random.number()
      // comments는 세부 데이터까지 한꺼번에 가져와야 하나?
    });
  }

  return arr;
};
