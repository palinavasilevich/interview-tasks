type Course = {
  lessons: string[];
};

export function lessonsCount({ lessons }: Course): number {
  return lessons.length;
}

const course = { lessons: ["intro", "lala"] };
lessonsCount(course); // 2
