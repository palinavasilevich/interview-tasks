function formatNameList(names) {
  const namesLength = names.length;

  return names.reduce((str, currentValue, index) => {
    const currentName = currentValue.name;

    if (index === namesLength - 2) {
      str += `${currentName} & `;
    } else if (index === namesLength - 1) {
      str += currentName;
    } else {
      str += `${currentName}, `;
    }

    return str;
  }, "");
}

function formatNameListV2(names) {
  if (names.length === 0) return "";

  const nameStrings = names.map((n) => n.name);

  if (nameStrings.length === 1) {
    return nameStrings[0];
  }

  //   return nameStrings.slice(0, -1).join(", ") + " & " + nameStrings.at(-1);
  return (
    nameStrings.slice(0, -1).join(", ") +
    " & " +
    nameStrings[nameStrings.length - 1]
  );
}
