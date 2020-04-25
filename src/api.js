const api = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${api}/assets?limit=20`)
    .then(result => result.json())
    .then(result => result.data);
}

function getAsset(coin) {
  return fetch(`${api}/assets/${coin}`)
    .then(result => result.json())
    .then(result => result.data);
}

function getMarkets(coin) {
  return fetch(`${api}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id) {
  return fetch(`${api}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getHistory(coin) {
    const now = new Date();
    const end = now.getTime();  
    now.setDate(now.getDate() - 1);
    const start = now.getTime();
    return fetch(`${api}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
      .then(result => result.json())
      .then(result => result.data);
  }

export default {
  getAssets,
  getAsset,
  getHistory,
  getMarkets,
  getExchange
};
