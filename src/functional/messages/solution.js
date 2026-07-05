function solution(render) {
  const messages = new Map();
  let currentId = 1;

  return (message) => {
    if (message.id !== currentId) {
      messages.set(message.id, message);
    } else {
      render(message);
      currentId++;

      const ids = [...messages.keys()].sort((a, b) => a - b);

      for (const id of ids) {
        if (id === currentId) {
          render(messages.get(id));
          messages.delete(id);
          currentId++;
        } else {
          break;
        }
      }
    }
  };
}

const send = solution(console.log);

send({ id: 3, text: "three" });
send({ id: 5, text: "five" });
send({ id: 1, text: "one" });
send({ id: 2, text: "two" });
send({ id: 4, text: "four" });
send({ id: 6, text: "six" });

// Вывод в консоль:
// { id: 1, text: "one" };
// { id: 2, text: "two" };
// { id: 3, text: "three" };
// { id: 4, text: "four" };
// { id: 5, text: "five" };
// { id: 6, text: "six" };
