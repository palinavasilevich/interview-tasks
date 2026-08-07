function getParams(query: string) {
  const initial: any = {};

  return query.split("&").reduce((acc, param) => {
    const [key, value] = param.split("=");
    acc[key] = value;
    return acc;
  }, initial);
}

const result1 = getParams("per=10&page=5");
console.log(result1);
// { per: '10', page: '5' }
const result2 = getParams("name=hexlet&count=3&order=asc");
// { name: 'hexlet', count: '3', order: 'asc' }
console.log(result2);
