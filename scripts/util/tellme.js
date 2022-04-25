module.exports = async (titles) => {
  const url = new URL("https://ja.wikipedia.org/w/api.php");
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "extracts",
    titles,
    redirects: "",
    exchars: 120,
    explaintext: "",
  });
  try {
    const response = await fetch([url, params].join("?"));
    if (!response.ok) {
      throw new Error([response.status, response.statusText].join(":"));
    }
    const json = await response.json();
    if (json == null || json.query == null || json.query.pages == null) {
      throw new Error(["response is invalid", JSON.stringify(json)].join(":"));
    }
    const pages = new Map(Object.entries(json.query.pages));
    return pages.size > 0
      ? [...pages.values()].map(({ extract }) => extract).join("\n")
      : "しらないにゃーん";
  } catch (e) {
    console.error(e);
  }
  return null;
};
