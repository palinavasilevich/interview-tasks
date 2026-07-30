type Status = {
  status: string;
};

function polling(
  fetcher: () => Promise<Status>,
  isCompleted: (response: Status) => boolean,
  delay: number,
): Promise<unknown> {
  return new Promise((resolve) => {
    const execute = () => {
      fetcher()
        .then((result) => {
          if (isCompleted(result)) {
            resolve(result);
          } else {
            setTimeout(execute, delay);
          }
        })
        .catch(() => {
          setTimeout(execute, delay);
        });
    };

    execute();
  });
}

const testingResponse = { status: "testing" };
const timeLimitResponse = { status: "timeLimit" };
let i = 0;

const fakeFetcher = async () => {
  return i++ < 3 ? testingResponse : timeLimitResponse;
};

const result = polling(
  fakeFetcher,
  (response) => response.status !== "testing",
  500,
);

result.then((data) => console.log(data));
// через 1.5 секунды получим объект со статусом "timeLimit"
