const results = {};

export async function callService (clientId) {
  results[clientId] = {};
  return results[clientId].promise = new Promise((r) => {
    results[clientId].resolve = r;
  });
}

export function resolveResult (clientId, r) {
  results[clientId].resolve(r);
  delete results[clientId];
}

export function isPending (clientId) {
  return clientId in results;
}
