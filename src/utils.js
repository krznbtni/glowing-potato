const results = {};

export async function callService (clientId) {
  return new Promise((resolve) => {
    results[clientId] = resolve;
  });
}

export function resolveResult (clientId, body) {
  results[clientId](body);
  delete results[clientId];
}

export function isPending (clientId) {
  return clientId in results;
}
